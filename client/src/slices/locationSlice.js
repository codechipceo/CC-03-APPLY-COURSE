import { createSlice } from "@reduxjs/toolkit";
import { getLocations } from "@/thunk/indexThunk";
import { transformProgramData } from "@/helpers/helper";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    currentLocation: null,
    loading: false,
    count: 0,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.locations = [];
      })
      .addCase(getLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload.data;
        state.currentProgramOffering = state.locations[0];
      })
      .addCase(getLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectLocation = (state) => state.locations;
export default locationsSlice.reducer;
