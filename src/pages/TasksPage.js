import { useState } from "react"
import { Calendar } from "../components/Calendar"
import { Day } from "../components/Day";
import { TasksInput } from "../components/TasksInput"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/operations/tasks.operations";
import { Clock } from "../components/Clock";

export default function TasksPage() {

    const dispatch = useDispatch();
    const [selectedDay, setSelectedDay] = useState({day:"", month:"", year:""});

    const handleDayClick = ({day, month, year}) => {
        setSelectedDay({day, month, year});
    }
    
    const handleTaskSubmit = (taskDetails) => {
        const task = {...taskDetails, day:selectedDay.day, month: selectedDay.month, year:selectedDay.year};
        dispatch(addTask(task))
        console.log(task);
    }

    const filterTasks = () => {
        // const tasks = JSON.parse(localStorage.getItem("tasks"));
        // const selectedTasks = tasks.filter(task => task.day === selectedDay.day && task.month === selectedDay.month && task.year === selectedDay.year)
        // if(selectedTasks.length === 0) {
        //     return [selectedDay];
        // }
        // else{
        //     return selectedTasks;
        // }
    }


    return(
        <div>
            <div style={{display:"flex", columnGap:"220px",rowGap:"60px", flexWrap:"wrap",justifyContent:"center",width:"1500px"}}>
            <TasksInput onSubmitTask={handleTaskSubmit}/>
            <Clock/>
            <Calendar onDayClick={handleDayClick}/>
            <Day day={selectedDay}/>
            </div>
        </div>
    )
}