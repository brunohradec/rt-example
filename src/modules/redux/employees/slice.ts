import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../types/Employee";
import { PageResponse } from "../../types/paging/PageResponse";
import { getAllEmployees } from "./thunks";

export interface EmployeesState {
    result?: PageResponse<Employee>;
    loading: boolean;
    error: boolean;
    errorMessage?: string;
}

const initialState: EmployeesState = {
    result: undefined,
    loading: false,
    error: false,
    errorMessage: undefined,
};

export const employeeSlice = createSlice({
    name: "employeeSlice",
    initialState,
    reducers: {
        // Put ordinary reducers that update the state when dispatched here
        // For example:
        resetEmployees: (state) => {
            state.result = undefined;
            state.loading = false;
            state.error = false;
            state.errorMessage = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllEmployees.pending, (state) => {
            state.result = undefined;
            state.loading = true;
            state.error = false;
            state.errorMessage = undefined;
        });
        builder.addCase(getAllEmployees.fulfilled, (state, action) => {
            state.result = action.payload;
            state.loading = false;
            state.error = false;
            state.errorMessage = undefined;
        });
        builder.addCase(getAllEmployees.rejected, (state, action) => {
            state.result = undefined;
            state.loading = false;
            state.error = true;
            state.errorMessage = action.payload ? (action.payload as Error)?.message : action.error?.message;
        });
    },
});

export default employeeSlice.reducer;
