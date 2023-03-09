import { createSlice } from "@reduxjs/toolkit";
import { URL_AUTH_SIGNIN, URL_AUTH_SIGNUP } from "../../constants/Database";

const initialState = {
  token: null,
  userId: null,
  email: null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
      // console.log(action.payload);
    },
    signOut: (state, action) => {
      state.token = null;
      state.userId = null;
      state.email = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, signOut } = authSlice.actions;

export const SIGNUP = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      });
      const data = await response.json();
      // console.log("DATA:", data);
      dispatch(
        setToken({
          token: data.idToken,
          userId: data.localId,
          email: data.email,
        })
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const SIGNIN = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await fetch(URL_AUTH_SIGNIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
      });
      const data = await response.json();
      // console.log("DATA:", data);
      dispatch(
        setToken({
          token: data.idToken,
          userId: data.localId,
          email: data.email,
        })
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export default authSlice.reducer;
