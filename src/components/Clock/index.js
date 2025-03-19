import css from "./Clock.module.css";
import { useEffect, useState } from "react";
export const Clock = () => {

    const [flag, setFlag] = useState(false);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [selectedHour, setSelectedHour] = useState(0);
    const [selectedMinutes, setSelectedMinutes] = useState(0);

    const handleClickSetTime = (e) => {
        const time = e.target.getAttribute('data-time');
        if(flag === false){
            setHour(parseInt(time));
            setSelectedHour(null);

            setTimeout(()=> {
                setSelectedHour(parseInt(time));
            },1000)
        }
        else{
            setMinutes(parseInt(time))
            setSelectedMinutes(null);

            setTimeout(() => {
                setSelectedMinutes(parseInt(time))
            },1000)
        }
        
        setTimeout(() => {
            setFlag(true);
        },1500)
    }


    const renderClockNumbersHours = () => {
        let numbers = [];
        for (let i = 0; i <= 11 ; i++){
            const angle = (i - 3) * 30;

            const x = Math.cos((angle * Math.PI) / 180) * 110 + 150;
            const y = Math.sin((angle * Math.PI) / 180) * 110 + 150;

            const isActive = selectedHour === i;
            
            numbers.push(
                <div
                key={i}
                onClick={handleClickSetTime}
                data-time={i}
                className={`${css.clockNumber} ${isActive ? css.activeNumber : ""}`}
                style={{top:`${y}px`, left:`${x}px`}}
                >
                    {i}
                </div>
            )
        }
        return numbers
    }

    const renderClockNumbersMinutes = () => {
        let numbers = [];
        for(let i = 0 ; i <= 59 ; i = i+5){
            const angle = (i - 15) * 6;

            const x = Math.cos((angle * Math.PI) / 180) * 110 + 150;
            const y = Math.sin((angle * Math.PI) / 180) * 110 + 150;

            const isActive = selectedMinutes === i;
        
        numbers.push(
            <div
            key={i}
            data-time={i}
            onClick={handleClickSetTime}
            className={`${css.clockNumber} ${isActive ? css.activeNumber : ""}`}
            style={{top:`${y}px`, left:`${x}px`}}>
                {i}
            </div>
        )
    }
    return numbers

    }

    const calculateHandRotationHours = () => {
        return (hour % 12) * 30;
    }

    const calculateHandRotationMinutes = () => {
        return (minutes % 60) * 6;
    }


    return(
        <>
        <div className={css.clock}>
            <div
            className={css.handRotation}
            style={{transform:`rotate(${ flag ? calculateHandRotationMinutes() : calculateHandRotationHours()}deg)`}}>
            </div>
            {flag ? renderClockNumbersMinutes() : renderClockNumbersHours()}
            
        </div>
        </>
    )
}