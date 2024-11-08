import { createSlice } from "@reduxjs/toolkit";
import { getAllPrograms, getSearchedProgram } from "@/thunk/indexThunk";
import { transformProgramData } from "../helpers/helper";


const programsSlice = createSlice({
  name: "programs",
  initialState: {
    programs: [],
    allprograms: [],
    currentProgramOffering: null,
    loading: false,
    count: 0,
    error: null,
    showThankYou: false,
  },
  reducers: {
    toggleThankYou: (state) => {
      state.showThankYou = !state.showThankYou;
    },
    setCurrentProgramReducer: (state, { payload }) => {
      state.currentProgramOffering = payload;
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
      .addCase(getAllPrograms.fulfilled, (state, { payload }) => {
        state.allprograms = payload.data;
        state.programs = payload.data.map((item) => ({
          ...item,
          school: item.schoolId,
          details: transformProgramData(item),
        }));
        state.currentProgramOffering = state.programs[0];
      });
  },
});

export const { toggleThankYou, setCurrentProgramReducer } =
  programsSlice.actions;
export const selectProgram = (state) => state.programs;
export const allPrograms = state =>state.programs.allprograms
export default programsSlice.reducer;
