import { useEffect, useState } from "react"
import { Calendar } from "../components/Calendar"
import { Day } from "../components/Day";
import { TasksInput } from "../components/TasksInput"

export default function TasksPage() {

    const saveTasks = (task) => {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task)
        localStorage.setItem("tasks",JSON.stringify(tasks))
    }
    const [selectedDay, setSelectedDay] = useState({day:"", month:"", year:""});

    const handleDayClick = ({day, month, year}) => {
        setSelectedDay({day, month, year})
    }
    
    const handleTaskSubmit = (taskDetails) => {
        const tasks = {...taskDetails, day:selectedDay.day, month: selectedDay.month, year:selectedDay.year}
        saveTasks(tasks);
    }

    const filterTasks = () => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        const selectedTasks = tasks.filter(task => task.day === selectedDay.day && task.month === selectedDay.month && task.year === selectedDay.year)
        if(selectedTasks.length === 0) {
            return [selectedDay];
        }
        else{
            return selectedTasks
        }
    }


    return(
        <div>
            <TasksInput onSubmitTask={handleTaskSubmit}/>
            <div style={{display:"flex", gap:"400px"}}>
            <Calendar onDayClick={handleDayClick}/>
            <Day day={filterTasks()}/>
            </div>
        </div>
    )
}