import { number } from "prop-types";
import css from "./Clock.module.css";
import { useState } from "react";
export const Clock = () => {

    const [hour, setHour] = useState(0);

    const hourRotation = (hour / 12) * 360;

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const distanceFromCenter = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2))

        if( distanceFromCenter < 25){
            return ;
        }

        const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);
        let correctedAngle = angle < 0 ?  angle + 360 : angle;


        const newHour = (correctedAngle + 90 ) % 360 / 30 % 12;

        setHour(newHour);
    }

        const numbers = Array.from({length : 12}, (_, i) => {
            const angle = ((i + 1) / 12) * 2 * Math.PI;
            const radius = 50;
            const x  = radius + 40 * Math.cos(angle - Math.PI / 2);
            const y = radius + 40 * Math.sin(angle - Math.PI / 2);
            return(
                <g key={i} className={css.clockNumberGroup}>
                    <circle cx={x} cy={y} r="10"fill="transparent" className={css.hoverCircle}/>
                    <text
                        className={css.clockNumber}
                        key={i}
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="6"
                        fill="black">
                            {i + 1}
                    </text>
                </g>
            )

        })

    return(
        <div className={css.clock} onMouseMove={handleMouseMove}>
            <svg className="hour-line" viewBox="0 0 100 100">
                {numbers}
                <line x1="50" y1="50" 
                x2="50" y2="10" 
                stroke="black" 
                strokeWidth="2"
                transform={`rotate(${hourRotation} 50 50)`}/>
            </svg>
        </div>
    )
}