import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

export default function AppBar() {
  return (
    <header>
      <p className={css.title}>Contacts App</p>
      <Navigation />
      {/* {<AuthNav />} */}
    </header>
  );
}
