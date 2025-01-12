import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { EmployeeSelectors, EmployeeThunks } from "../../redux/employees";
import Pagination from "../../ui/pagination/Pagination";
import { NavLink } from "react-router";

export default function EmployeePage() {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize] = useState(5);

    const dispatch = useAppDispatch();

    const employeesResult = useAppSelector(EmployeeSelectors.selectResult);
    const employeesLoading = useAppSelector(EmployeeSelectors.selectLoading);

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
            <NavLink to="/">Back</NavLink>

            <h1>Employees</h1>

            {employeesLoading && <span>Loading...</span>}

            <table>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Lase name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employeesResult?.content.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination pageIndex={pageIndex} totalPages={employeesResult?.totalPages} updatePageIndex={setPageIndex} />
        </>
    );
}
