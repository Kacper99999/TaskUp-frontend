import { NavLink } from "react-router-dom";
import css from "./AuthNavLogin.module.css";

export const AuthNavLogin = () => {
    return(
        <>
        <NavLink to="/login" className={css.login}>
        Log In
        </NavLink>
        </>
    )
}