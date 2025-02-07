import React,{ useState, useEffect } from "react"
import css from "./Calendar.module.css";
import PropTypes from "prop-types";

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

    const handleFutureMonth = () => {
        if(currentMonth > 10){
            setChangeYear(changeYear + 1)
            setChangeMounth(-1);
        }
        else{
            setChangeMounth(changeMounth + 1)
        }}
    

    return(
        <div className={css.container}>
            <div className={css.date}>
                <svg onClick={() => handlePastMonth()} id="icon-cheveron-left" width="32" height="32" viewBox="0 0 32 32" x="0" y="0" >
                    <path d="M11.28 14.869l-1.131 1.131 9.051 9.051 2.262-2.262-6.787-6.789 6.787-6.789-2.262-2.262z"></path>
                </svg>
                <h1>{month} {year}</h1>
                <svg onClick={() => handleFutureMonth()} id="icon-cheveron-right" width="32" height="32" viewBox="0 0 32 32" x="48" y="0">
                    <path d="M20.72 17.131l1.131-1.131-9.051-9.051-2.262 2.262 6.787 6.789-6.787 6.789 2.262 2.262 7.92-7.92z"></path>
                </svg>
            </div>
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

Calendar.protoTypes = {
    onDayClick : PropTypes.func.isRequired
};