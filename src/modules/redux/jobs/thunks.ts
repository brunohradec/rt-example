import { createAsyncThunk } from "@reduxjs/toolkit";
import { PageRequest } from "../../types/paging/PageRequest";
import { JobType } from "../../types/Job";
import { ApiJob } from "../../api";

export const getJobsByType = createAsyncThunk(
    "jobs/getJobsByType",
    async (
        params: {
            type: JobType;
            pageRequest: PageRequest;
        },
        { rejectWithValue }
    ) => {
        try {
            return await ApiJob.getByType(params.type, params.pageRequest);
        } catch (err) {
            rejectWithValue(err);
        }
    }
);
