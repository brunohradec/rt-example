import { RootState } from "../store";

export const selectResult = (state: RootState) => state.jobs.result;
export const selectLoading = (state: RootState) => state.jobs.loading;
export const selectError = (state: RootState) => state.jobs.error;
export const selectErrorMessage = (state: RootState) => state.jobs.errorMessage;
