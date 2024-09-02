import { createSlice } from "@reduxjs/toolkit";
import { getFilters, getSearchedProgram } from "@/thunk/indexThunk";
import { transformProgramData } from "@/helpers/helper";

const programsSlice = createSlice({
  name: "programs",
  initialState: {
    programs: [],
    currentProgramOffering: null,
    loading: false,
    count: 0,
    error: null,
    showThankYou: false,
    filters: {},
  },
  reducers: {
    toggleThankYou: (state) => {
      state.showThankYou = !state.showThankYou;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchedProgram.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.programs = [];
      })
      .addCase(getSearchedProgram.fulfilled, (state, action) => {
        state.loading = false;
        state.programs = action.payload.data.map((item) => ({
          ...item,
          details: transformProgramData(item),
        }));
        state.currentProgramOffering = state.programs[0];
      })
      .addCase(getSearchedProgram.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getFilters.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.filters = {};
      })
      .addCase(getFilters.fulfilled, (state, action) => {
        state.loading = false;
        state.filters = action.payload.data;
      })
      .addCase(getFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { toggleThankYou } = programsSlice.actions;
export const selectProgram = (state) => state.programs;
export default programsSlice.reducer;
