import PropTypes from "prop-types";
import css from "./Day.module.css";

export const Day = ({day}) => {

    return(
        <div className={css.day}>
            {day ? (
                <div className={css.date}>
                    <p>{day.day}</p>
                    <p>{day.month}</p>
                    <p>{day.year}</p>
                </div>  
            ) : (
                <p>no selected data</p>
            )}  
            {/* <div className={css.array_tasks}>           
            {day ? (
                day.map((task,id) => (
                    <div key={id} className={css.task}><p>{task.taskText}</p><p>{task.hour}:{task.minutes}</p></div>
                ))
            ):(
                <p>no tasks</p>
            )}
            </div>  */}
        </div>
    )
}

Day.propTypes = {
    day : PropTypes.func.isRequired
};