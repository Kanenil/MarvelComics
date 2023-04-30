import { NavLink } from "react-router-dom";

export default function NavigationLink({ name, to }) {
  return (
    <>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-base font-medium text-white hover:text-indigo-50"
            : "text-base font-medium text-gray-300 hover:text-indigo-50"
        }
      >
        {name}
      </NavLink>
    </>
  );
}
