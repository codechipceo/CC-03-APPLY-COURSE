import { addQR, deleteQr, getAllQr, updateQr } from "@/thunk/indexThunk";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const qrSlice = createSlice({
  name: "qr",
  initialState: {
    qr: [],
    count: 0,
    loading: false,
    error: null,
  },
  reducers: {
    // Add any additional reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQR.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addQR.fulfilled, (state, action) => {
        state.loading = false;
        state.qr.push(action.payload.data);
        toast.success("New School Added Successfully");
      })
      .addCase(addQR.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllQr.fulfilled, (state, { payload }) => {
        state.qr = payload.data;
        state.loading = false;

      })
      .addCase(getAllQr.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQr.fulfilled, (state, { payload }) => {
        state.qr = [...state.qr].map((item) => {
          if (item._id === payload.data._id) return payload.data;
          return item;
        });
      })
      .addCase(deleteQr.fulfilled, (state, { payload }) => {
        state.qr = [...state.qr].filter(
          (item) => item._id !== payload.data._id
        );
      });
  },
});

export const serlectQr = (state) => state.qr.qr;
export const qrLoading = (state) => state.qr.loading;
export const { reducer: qrReducer } = qrSlice;
