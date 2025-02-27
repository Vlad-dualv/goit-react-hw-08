import { useDispatch } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logoutThunk())}
      >
        Logout
      </button>
    </div>
  );
}
