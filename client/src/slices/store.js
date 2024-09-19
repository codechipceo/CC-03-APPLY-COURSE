import { configureStore, combineReducers } from "@reduxjs/toolkit";
import programReducer from "./programSlice";

const rootReducer = combineReducers({
  programs: programReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
