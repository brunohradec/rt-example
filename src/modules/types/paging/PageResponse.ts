export type PageResponse<T> = {
    content: T[];
    pageIndex: number;
    pageSize: number;
    totalPages: number;
};
