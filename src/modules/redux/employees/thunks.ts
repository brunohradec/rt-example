import { createAsyncThunk } from "@reduxjs/toolkit";
import { PageRequest } from "../../types/paging/PageRequest";
import { ApiEmployee } from "../../api";

export const getAllEmployees = createAsyncThunk(
    "employees/getAll",
    async (
        params: {
            // Add other params here, for example:
            // locationId: number,
            // employeeType: string,
            pageRequest: PageRequest;
        },
        { rejectWithValue }
    ) => {
        try {
            return await ApiEmployee.getAll(params.pageRequest);
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
