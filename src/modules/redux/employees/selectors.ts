import { RootState } from "../store";

export const selectResult = (state: RootState) => state.employees.result;
export const selectLoading = (state: RootState) => state.employees.loading;
export const selectError = (state: RootState) => state.employees.error;
export const selectErrorMessage = (state: RootState) => state.employees.errorMessage;
