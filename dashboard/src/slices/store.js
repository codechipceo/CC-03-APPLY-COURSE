import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { schoolReducer } from "./schoolSlice";

import { programOfferingReducer } from "./programSlice";
import { adminReducer } from "./adminSlice";
import { qrReducer } from "./qrSlice";
const rootReducer = combineReducers({
  school: schoolReducer,
  admin: adminReducer,
  qr: qrReducer,
  programs: programOfferingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
