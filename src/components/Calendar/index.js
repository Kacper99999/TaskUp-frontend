import React,{ useState, useEffect } from "react"
import css from "./Calendar.module.css";

export const Calendar = ({onDayClick}) => {

    const [daysInMonth, setDaysInMonth] = useState([]);
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [changeMounth, setChangeMounth] = useState(0);
    const [changeYear, setChangeYear] = useState(0);

    const daysArray = ["Mon", "Tue", "Web", "Thu", "Fri", "Sat", "Sun"];

    let today = new Date();
    const currentMonth = today.getMonth() + changeMounth;
    const currentYear = today.getFullYear() + changeYear;
    let firstDayOfMounth = new Date(currentYear, currentMonth,1).getDay();
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    console.log(currentMonth);


    useEffect(() => {

        const daysArray = [];

        if(firstDayOfMounth === 0){
            firstDayOfMounth = 7
        }
        for(let i = 1; i < firstDayOfMounth; i++){
            daysArray.push("");
        }
        
        for(let day = 1; day <= daysInCurrentMonth; day++){
            daysArray.push(day);
        }

        today.setMonth(today.getMonth() + changeMounth)
        today.setYear(today.getYear() + changeYear)
        setDaysInMonth(daysArray);
        setMonth(today.toLocaleString("en-US",{month:"long"}));
        setYear(currentYear);
    },[changeMounth])

    const handleClickedDay = (day) => {
        onDayClick({day: day, month: month, year: year})
    }

    const handlePastMonth = () => {
        if(currentMonth === 0){
            setChangeYear(changeYear - 1);
            setChangeMounth(10);
        }
        else{
            setChangeMounth(changeMounth - 1)
        }
    }

    const handleFutureDay = () => {
        if(currentMonth > 10){
            setChangeYear(changeYear + 1)
            setChangeMounth(-1);
        }
        else{
            setChangeMounth(changeMounth + 1)
        }}
    

    return(
        <div>
            <svg className={css.arrow} onClick={() => handlePastMonth()}> 
                <use xlinkHref='#icon-cheveron-left'></use>
                 </svg>
            <h1>{month} {year}</h1>
            <button onClick={() => handleFutureDay()}> future </button>
            <div className={css.calendar}>
            <div className={css.days}>
                {daysArray.map((day, index) => (
                    <div className={css.days_week} key={index}>{day}</div>
                ))}
            </div>
            {daysInMonth.map((day, index) => (
                <div className={day === "" ? css.empty_day : css.day} key={index} onClick={() => handleClickedDay(day)}>
                    {day}
                </div>
            ))}
            </div>
        </div>
    )
}