import { useState } from "react"
import { Calendar } from "../components/Calendar"
import { Day } from "../components/Day";
import { TasksInput } from "../components/TasksInput"

export default function TasksPage() {

    const [selectedDay, setSelectedDay] = useState({day:"", month:"", year:""});

    const handleDayClick = ({day, month, year}) => {
        setSelectedDay({day, month, year})
    }

    return(
        <div>
            <TasksInput/>
            <div style={{display:"flex", gap:"400px"}}>
            <Calendar onDayClick = {handleDayClick}/>
            <Day day = {selectedDay}/>
            </div>
        </div>
    )
}