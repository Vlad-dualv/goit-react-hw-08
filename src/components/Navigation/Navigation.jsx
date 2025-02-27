import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const linkStyle = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <nav className={css.links}>
      <NavLink to="/" className={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/register" className={linkStyle}>
        Register
      </NavLink>
      <NavLink to="/login" className={linkStyle}>
        Login
      </NavLink>
    </nav>
  );
}
