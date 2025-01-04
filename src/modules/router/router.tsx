import { createBrowserRouter } from "react-router";
import HomePage from "../pages/home-page/HomePage";
import EmployeePage from "../pages/employee-page/EmployeePage";
import JobPage from "../pages/job-page/JobPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/employees",
        element: <EmployeePage />,
    },
    {
        path: "/jobs",
        element: <JobPage />,
    },
]);
