import css from "./Logo.module.css";

export const Logo = () => {
    return(
        <>
        <div className={css.logo}>
                <h1>Task<span className={css.div_logo}>Up</span></h1>
                <p>Every task, one step closer to <span className={css.div_logo}>success</span></p>
            </div>
        </>
    )
}