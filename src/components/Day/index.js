import css from "./Day.module.css";

export const Day = ({day}) => {

    return(
        <div>
            <div className={css.day}>
                <h1>{day.day}{day.month}{day.year}</h1>
            </div>

        </div>
    )
}