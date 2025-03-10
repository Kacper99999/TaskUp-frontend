import css from "./Clock.module.css";
import { useState } from "react";
export const Clock = () => {

    const [hour, setHour] = useState(0);

    const hourRotation = (hour / 12) * 360;

    const handleClockClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const clickX = event.clientX - rect.left;
        const clickY = event.clientY - rect.top;



        const angle = Math.atan2(clickY - centerY, clickX - centerX) * (180 / Math.PI);
        let correctedAngle = angle < 0 ?  angle + 360 : angle;


        const newHour = Math.round((correctedAngle + 90 ) % 360 / 30) % 12;

        setHour(newHour);
    }

    return(
        <div className={css.clock} onClick={handleClockClick}>
            <svg className="hour-line" viewBox="0 0 100 100">
                <line x1="50" y1="50" 
                x2="50" y2="10" 
                stroke="black" 
                strokeWidth="2"
                transform={`rotate(${hourRotation} 50 50)`}/>
            </svg>
            
        </div>
    )
}