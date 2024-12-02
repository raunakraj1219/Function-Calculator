import React, { useState } from "react";

const TimerComponent = ({ value, timerStartVal }) => {
    const [timer1val, setTimer1val] = useState(timerStartVal);
    const [timer2val, setTimer2val] = useState(value);

    return (
        <div>
            <div>Timer 1 : {timer1val}</div>
            <div>Timer 2 : {timer2val}</div>
        </div>
    );
};

export default TimerComponent;
