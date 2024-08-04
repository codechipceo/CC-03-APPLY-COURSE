import { createSlice } from "@reduxjs/toolkit";
import {
  addSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
} from "../thunk/indexThunk.js"; // Adjust the import path as needed

const schoolSlice = createSlice({
  name: "schools",
  initialState: {
    schools: [],
    currentSchool: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools.push(action.payload);
      })
      .addCase(addSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllSchools.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSchools.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = action.payload;
      })
      .addCase(getAllSchools.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getSchoolById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSchoolById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentSchool = action.payload;
      })
      .addCase(getSchoolById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateSchool.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSchool.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = state.schools.map((school) =>
          school._id === action.payload._id ? action.payload : school
        );
      })
      .addCase(updateSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: schoolReducer } = schoolSlice;
