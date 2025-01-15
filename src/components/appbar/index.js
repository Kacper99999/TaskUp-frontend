import { UserMenu } from "../UserMenu";
import css from "./AppBar.module.css";

export const AppBar = () => {
    return(
        <>
        <header className={css.header}>
            <h1 className={css.logo}>
                <span>Task</span>
                <div className={css.div_logo}>
                <span className={css.up}>Up</span>
                </div>
            </h1>
        </header>
        </>
    )
} 