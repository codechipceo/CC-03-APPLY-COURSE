import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";

import { programOfferingReducer } from "./programSlice";
import { adminReducer } from "./adminSlice";
const rootReducer = combineReducers({

  school: schoolReducer,
  admin: adminReducer,

  programs: programOfferingReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
