import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { JobSelectors, JobThunks } from "../../redux/jobs";
import Pagination from "../../ui/pagination/Pagination";

export default function JobPage() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize] = useState(5);

    const dispatch = useAppDispatch();

    const jobResult = useAppSelector(JobSelectors.selectResult);

    useEffect(() => {
        dispatch(
            JobThunks.getJobsByType({
                type: "AVAILABLE",
                pageRequest: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                },
            })
        );
    }, [dispatch, pageIndex, pageSize]);

    return (
        <>
            <h1>Available jobs</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {jobResult?.content.map((job) => (
                        <tr key={job.id}>
                            <td>{job.name}</td>
                            <td>{job.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination pageIndex={pageIndex} totalPages={jobResult?.totalPages} updatePageIndex={setPageIndex} />
        </>
    );
}
