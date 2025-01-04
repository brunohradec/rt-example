import { NavLink } from "react-router";

export default function HomePage() {
    return (
        <>
            <ul>
                <li>
                    <NavLink to="/jobs">Available jobs</NavLink>
                </li>
                <li>
                    <NavLink to="/employees">Employees</NavLink>
                </li>
            </ul>
        </>
    );
}
