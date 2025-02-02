import css from "./Day.module.css";

export const Day = ({day}) => {

    console.log(day[0]);
    return(
        <div className={css.day}>
            {day.length > 0 ? (
                <div className={css.date}>
                {day[0].day}{day[0].month}{day[0].year}
                </div>  
            ) : (
                <p>no selected data</p>
            )}  
            <div className={css.array_tasks}>           
            {day[0].taskText ? (
                day.map((task,id) => (
                    <div key={id} className={css.task}>{task.taskText}{task.hour}:{task.minutes}</div>
                ))
            ):(
                <p>no tasks</p>
            )}
            </div> 
            
            

        </div>
    )
}