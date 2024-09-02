import { configureStore, combineReducers } from "@reduxjs/toolkit";
import programReducer from "./programSlice";
import locationsReducer from "./locationSlice";

const rootReducer = combineReducers({
  programs: programReducer,
  locations: locationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
