import PropTypes from "prop-types";
import css from "./Day.module.css";

export const Day = ({day}) => {

    return(
        <div className={css.day}>
            {day.length > 0 ? (
                <div className={css.date}>
                    <p>{day[0].day}</p>
                    <p>{day[0].month}</p>
                    <p>{day[0].year}</p>
                </div>  
            ) : (
                <p>no selected data</p>
            )}  
            <div className={css.array_tasks}>           
            {day[0].taskText ? (
                day.map((task,id) => (
                    <div key={id} className={css.task}><p>{task.taskText}</p><p>{task.hour}:{task.minutes}</p></div>
                ))
            ):(
                <p>no tasks</p>
            )}
            </div> 
        </div>
    )
}

Day.propTypes = {
    day : PropTypes.func.isRequired
};