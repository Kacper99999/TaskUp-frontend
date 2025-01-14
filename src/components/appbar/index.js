import { useAuth } from "../../hooks";
import { Navigation } from "../Navigation";
import { UserMenu } from "../UserMenu";
import { AuthNav } from "../AuthNav";
import css from "./AppBar.module.css";

export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return(
        <>
        <header className={css.header}>
            <h1 className={css.logo}>
                <span>Task</span>
                <div className={css.div_logo}>
                <span className={css.up}>Up</span>
                </div>
            </h1>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
        </>
    )
} 