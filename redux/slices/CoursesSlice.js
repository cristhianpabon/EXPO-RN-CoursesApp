import { createSlice } from "@reduxjs/toolkit";
import { insertCourse, fetchCourses, fetchCourseByTitle } from "../../db";

const initialState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCourses } = coursesSlice.actions;

export const addCourses = (title, image, description, isAdded, isWished) => {
  return async (dispatch) => {
    const isValidCourse = await validateCourse(title);
    // console.log("Validation:", isValidCourse);
    // console.log("if:", !isValidCourse.length);
    if (!isValidCourse.length) {
      try {
        const result = await insertCourse(
          title,
          image,
          description,
          isAdded,
          isWished
        );

        console.log("ITEM:", result);
        loadCourses();
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  };
};

export const loadCourses = () => {
  return async (dispatch) => {
    try {
      const result = await fetchCourses();
      // console.log(result.rows._array);
      dispatch(setCourses(result.rows._array));
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

const validateCourse = async (title) => {
  try {
    const result = await fetchCourseByTitle(title);
    // console.log(result.rows._array);
    // console.log(result);
    return result.rows._array;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default coursesSlice.reducer;
