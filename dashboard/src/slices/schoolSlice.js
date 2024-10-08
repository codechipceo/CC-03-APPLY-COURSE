import { createSlice } from "@reduxjs/toolkit";
import {
  addSchool,
  deleteSchool,
  getAllSchools,
  getSchoolById,
  updateSchool,
} from "../thunk/indexThunk.js"; // Adjust the import path as needed
import { toast } from "react-toastify";

const schoolSlice = createSlice({
  name: "schools",
  initialState: {
    schools: [],
    count:0,
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
        state.schools.push(action.payload.data);
        toast.success("New School Added Successfully");
      })
      .addCase(addSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        toast.error(action.error.message);
      })
      .addCase(getAllSchools.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllSchools.fulfilled, (state, action) => {
        state.loading = false;
        state.schools = action.payload.data;
        state.count = action.payload.count;
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
          school._id === action.payload.data._id ? action.payload.data : school
        );
        toast.success("School Updated");
      })
      .addCase(updateSchool.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteSchool.fulfilled, (state, { payload }) => {
        state.schools = state.schools.filter((school) => school._id !== payload.data._id )
        state.loading = false
        toast.success("Document Deleted")
      }).addCase(deleteSchool.pending, (state) => {
        state.loading = true
      }) ;
  },
});

export const selectSchool = state=> state.school

export const { reducer: schoolReducer } = schoolSlice;
