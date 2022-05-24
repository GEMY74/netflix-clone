import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../MovieReducer";
// import useReducer from "../../user/userSlice";
import userSlice from "../../user/userSlice";

export const Store = configureStore({
  reducer: {
    movie: MovieReducer,
    user: userSlice,
  },
});
