import css from "./Clock.module.css";
import { useState } from "react";
export const Clock = () => {

    const [hour, setHour] = useState(0);

    const handleClickSetTime = (e) => {
        const rect = e.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2; 

        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;

        let angle = Math.atan2(clickY - centerY, clickX - centerX) * (180 / Math.PI)
        console.log(angle + 90)

        const newHour = Math.floor(angle/30) || 12;

        setHour(newHour);
    }

    const renderClockNumbers = () => {
        let numbers = [];
        for (let i = 1; i <= 12 ; i++){
            const angle = (i - 3) * 30;

            const x = Math.cos((angle * Math.PI) / 180) * 110 + 150;
            const y = Math.sin((angle * Math.PI) / 180) * 110 + 150;
            if(i === 3) {
                console.log(y)
            }
            


            numbers.push(
                <div
                key={i}
                className={css.clockNumber}
                style={{top:`${y}px`, left:`${x}px`}}
                >
                    {i}
                </div>
            )
        }
        return numbers
    }


    return(
        <>
        <div className={css.clock} onClick={handleClickSetTime}>
            <line
            x1="50"y1="50"
            x2="50"y2="10"></line>
            {renderClockNumbers()}
        </div>
        </>
    )
}