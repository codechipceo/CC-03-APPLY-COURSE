import { createSlice } from "@reduxjs/toolkit";
import {
  addLead,
  getAllLeads,
  getLeadById,
  updateLead,
} from "../thunk/indexThunk"; // Adjust the import path as needed

const leadsSlice = createSlice({
  name: "leads",
  initialState: {
    leads: [],
    currentLead: null,
    loading: false,
    error: null,
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addLead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addLead.fulfilled, (state, action) => {
        state.loading = false;
        state.leads.push(action.payload);
      })
      .addCase(addLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllLeads.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllLeads.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = action.payload;
      })
      .addCase(getAllLeads.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getLeadById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLeadById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentLead = action.payload;
      })
      .addCase(getLeadById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateLead.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateLead.fulfilled, (state, action) => {
        state.loading = false;
        state.leads = state.leads.map((lead) =>
          lead._id === action.payload._id ? action.payload : lead
        );
      })
      .addCase(updateLead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reducer: leadsReducer } = leadsSlice;
