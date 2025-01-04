import { useMemo } from "react";
import { PaginationContainer } from "./styled";

export interface PaginationProps {
    pageIndex?: number;
    totalPages?: number;
    updatePageIndex: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
    const pageIndex = useMemo(() => props.pageIndex || 0, [props.pageIndex]);
    const totalPages = useMemo(() => props.totalPages || 0, [props.totalPages]);

    const handlePrevious = () => {
        if (pageIndex >= 1) {
            props.updatePageIndex(pageIndex - 1);
        }
    };

    const handleNext = () => {
        if (pageIndex < totalPages) {
            props.updatePageIndex(pageIndex + 1);
        }
    };

    return (
        <PaginationContainer>
            <button onClick={handlePrevious} disabled={pageIndex === 0}>
                {"<"}
            </button>
            <button onClick={handleNext} disabled={pageIndex === totalPages - 1}>
                {">"}
            </button>
            <span>
                {pageIndex + 1}/{totalPages}
            </span>
        </PaginationContainer>
    );
}
