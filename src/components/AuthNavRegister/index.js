import { NavLink } from "react-router-dom";
import css from "./AuthNavRegister.module.css";

export const AuthNavRegister = () => {
    return(
        <>
        <NavLink to="/register" className={css.register}>
        Registration
        </NavLink>
        </>
    )
}