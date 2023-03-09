import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import coursesReducer from "./slices/CoursesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesReducer,
  },
});
