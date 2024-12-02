import React, { useCallback, useEffect, useState } from "react";

const IncreasingTimer = ({
    value,
    timerMinVal,
    initTimer,
    handleDeleteTimer,
}) => {
    const [timer1val, setTimer1val] = useState(timerMinVal);
    const [timerRun, setTimerRun] = useState(true);

    const handleButtonClick = (val) => {
        if ("stop") {
            setTimerRun(false);
            setTimer1val(timerMinVal);
        } else {
            setTimerRun(true);
        }
    };
    // const timer = useCallback(() => {
    //     let tempTimer;
    //     // if (timerRun) {
    //     tempTimer = setInterval(() => {
    //         setTimer1val((s) => (s > value / 1000 ? s + 1 : s));
    //     }, 1000);
    //     // }

    //     if (!timerRun) {
    //         return () => clearInterval(tempTimer);
    //         setTimer1val(timerMinVal);
    //     }
    // }, [timerRun]);

    // useEffect(() => {
    //     timer();
    // }, []);
    useEffect(() => {
        let tempTimer;

        // if (timerRun) {
        tempTimer = setInterval(() => {
            setTimer1val((s) => s + 1);
        }, 1000);
        // }

        return () => {
            if (tempTimer) {
                clearInterval(tempTimer);
            }
        };
    }, [timerRun, value]);

    return (
        <>
            <div>
                <div>Inc. Timer : {timer1val}</div>
                <button onClick={() => handleButtonClick("stop")}>Stop</button>
                <button onClick={() => handleButtonClick("pause")}>
                    Pause/Start
                </button>
            </div>
            <button onClick={handleDeleteTimer}> Delete timer</button>
        </>
    );
};

export default IncreasingTimer;
