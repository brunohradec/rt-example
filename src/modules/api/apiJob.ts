import axios from "axios";
import { PageRequest } from "../types/paging/PageRequest";
import { PageResponse } from "../types/paging/PageResponse";
import { Job, JobType } from "../types/Job";
import { API_URL } from "../config/environment";

export const getByType = async (type: JobType, pageRequest: PageRequest) => {
    const response = await axios.get<PageResponse<Job>>(`${API_URL}/jobs`, {
        params: {
            type: type,
            page: pageRequest.pageIndex,
            size: pageRequest.pageSize,
        },
    });
    return response.data;
};
