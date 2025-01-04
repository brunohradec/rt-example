import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { EmployeeSelectors, EmployeeThunks } from "../../redux/employees";
import Pagination from "../../ui/pagination/Pagination";

export default function EmployeePage() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize] = useState(5);

    const dispatch = useAppDispatch();

    const employeeResult = useAppSelector(EmployeeSelectors.selectResult);

    useEffect(() => {
        dispatch(
            EmployeeThunks.getAllEmployees({
                pageRequest: {
                    pageIndex: pageIndex,
                    pageSize: pageSize,
                },
            })
        );
    }, [dispatch, pageIndex, pageSize]);

    return (
        <>
            <h1>Employees</h1>

            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Lase name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeResult?.content.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination pageIndex={pageIndex} totalPages={employeeResult?.totalPages} updatePageIndex={setPageIndex} />
        </>
    );
}
