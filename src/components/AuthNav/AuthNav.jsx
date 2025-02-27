import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const linkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <NavLink to="/register" className={linkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={linkStyle}>
        Login
      </NavLink>
    </div>
  );
}
