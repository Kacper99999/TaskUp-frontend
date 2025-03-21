import { useEffect, useState } from "react"
import { Calendar } from "../components/Calendar"
import { Day } from "../components/Day";
import { TasksInput } from "../components/TasksInput"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/operations/tasks.operations";
import { Clock } from "../components/Clock";

export default function TasksPage() {

    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedDay, setSelectedDay] = useState({day:"", month:"", year:""});
    const [selectedTime, setSelectedTime] = useState({hour:0, minutes:0});

    const handleTimeClick = (hour, minutes) => {
        setSelectedTime({hour, minutes});
        setCurrentStep(4);
    }

    const handleDayClick = ({day, month, year}) => {
        setSelectedDay({day, month, year});
        setCurrentStep(2);
    }
    
    const handleTaskInput = (taskDetails) => {
        setCurrentStep(3)
    }

    const submitTask = () => {
        // const task = {...taskDetails, day:selectedDay.day, month: selectedDay.month, year:selectedDay.year, hour:selectedTime.hour, minutes:selectedTime.minutes };
        // dispatch(addTask(task))
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
            {currentStep === 1  && <Calendar onDayClick={handleDayClick}/>}
            {currentStep === 2 && <TasksInput handleTaskInput={handleTaskInput}/>}
            {currentStep === 3 && <Clock onSubmitTime = {handleTimeClick}/>}
            <Day day={selectedDay}/>
            </div>
        </div>
    )
}