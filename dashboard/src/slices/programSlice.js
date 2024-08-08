
import { createSlice } from "@reduxjs/toolkit";
import {
  addProgramOffering,
  getAllProgramOfferings,
  getProgramOfferingById,
  updateProgramOffering,
} from "../thunk/indexThunk"; // Adjust the import path as needed

const programOfferingSlice = createSlice({
  name: "programOfferings",
  initialState: {
    programOfferings: [],
    currentProgramOffering: null,
    loading: false,
    count :0,
    error: null,
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProgramOffering.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProgramOffering.fulfilled, (state, action) => {
        state.loading = false;
        state.programOfferings.push(action.payload.data);

      })
      .addCase(addProgramOffering.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllProgramOfferings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProgramOfferings.fulfilled, (state, action) => {
        state.loading = false;
        state.programOfferings = action.payload.data;
         state.count = action.payload.count;
      })
      .addCase(getAllProgramOfferings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getProgramOfferingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProgramOfferingById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProgramOffering = action.payload;
      })
      .addCase(getProgramOfferingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateProgramOffering.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProgramOffering.fulfilled, (state, action) => {
        state.loading = false;
        state.programOfferings = state.programOfferings.map((programOffering) =>
          programOffering._id === action.payload._id
            ? action.payload
            : programOffering
        );
      })
      .addCase(updateProgramOffering.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const  selectProgram  = state  => state.programs
export const { reducer: programOfferingReducer } = programOfferingSlice;
