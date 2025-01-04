import axios from "axios";
import { PageRequest } from "../types/paging/PageRequest";
import { PageResponse } from "../types/paging/PageResponse";
import { Employee } from "../types/Employee";
import { API_URL } from "../config/environment";

export const getAll = async (pageRequest: PageRequest) => {
    const response = await axios.get<PageResponse<Employee>>(`${API_URL}/employees`, {
        params: {
            page: pageRequest.pageIndex,
            size: pageRequest.pageSize,
        },
    });
    return response.data;
};
