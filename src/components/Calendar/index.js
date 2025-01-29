import React,{ useState, useEffect } from "react"
import css from "./Calendar.module.css";

export const Calendar = () => {

    const [daysInMonth, setDaysInMonth] = useState([]);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const daysArray = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

    useEffect(() => {

        const today = new Date();
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDayOfMounth = new Date(currentYear, currentMonth,1).getDay();
        const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        const daysArray = [];

        for(let i = 1; i < firstDayOfMounth; i++){
            daysArray.push("");
        }
        
        for(let day = 1; day <= daysInCurrentMonth; day++){
            daysArray.push(day);
        }

        setDaysInMonth(daysArray);
        setMonth(today.toLocaleString("default",{month:"long"}));
        setYear(currentYear);
    },[])

    return(
        <div>
            <h1>{month} {year}</h1>
            <div className={css.calendar}>
            <div className={css.days}>
                {daysArray.map((day, index) => (
                    <div className={css.day} key={index}>{day}</div>
                ))}
            </div>
            {daysInMonth.map((day, index) => (
                <div className={css.day} key={index}>{day}</div>
            ))}
            </div>
        </div>
    )
}