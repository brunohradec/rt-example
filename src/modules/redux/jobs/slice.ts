import { createSlice } from "@reduxjs/toolkit";
import { PageResponse } from "../../types/paging/PageResponse";
import { Job } from "../../types/Job";
import { getJobsByType } from "./thunks";

export interface JobsState {
  result?: PageResponse<Job>;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

const initialState: JobsState = {
  result: undefined,
  loading: false,
  error: false,
  errorMessage: undefined,
};

export const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    // Put ordinary reducers that update the state when dispatched here
  },
  extraReducers: (builder) => {
    builder.addCase(getJobsByType.pending, (state) => {
      state.result = undefined;
      state.loading = true;
      state.error = false;
      state.errorMessage = undefined;
    });
    builder.addCase(getJobsByType.fulfilled, (state, action) => {
      state.result = action.payload;
      state.loading = false;
      state.error = false;
      state.errorMessage = undefined;
    });
    builder.addCase(getJobsByType.rejected, (state, action) => {
      state.result = undefined;
      state.loading = false;
      state.error = true;
      state.errorMessage = action.payload
        ? (action.payload as Error)?.message
        : action.error?.message;
    });
  },
});

export default jobSlice.reducer;
