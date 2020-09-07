import React, {useState} from 'react';
import ButtonNew from "../button/Button";
import t from "./T.module.css"
import H from "../Hometask8/H.module.css";
import MouseOverPopover from "./popUp";

const Time = () => {


    let [watch, setWatch] = useState(new Date().toLocaleTimeString());    //лок.стейт для часов
    let [timerId, setTimerId] = useState();                           //лок.стейт для id таймера(какой тут initialState???)


    let dateValue = new Date().toLocaleDateString();


    let setDate = (time: any) => {                    //колбэк который обновляет время(непонятка с параметром)
        return setWatch(new Date().toLocaleTimeString());
    }

    let stopTime = () => {
        return clearInterval(timerId)                  //останавливает время, используя актуальный id таймера
    }


    let setIntervalClick = () => {
        clearInterval(timerId);                        // останавливает предыдущий таймер
        const timer_id = setInterval(() => setDate(new Date().toLocaleString()), 1000);
        setTimerId(timer_id);                          //перезаписывает id таймера в лок.стейт

    }

    return (
        <div className={t.timeContainer}>
            <h2 className={H.title}>Девятая домашка:</h2>

            <MouseOverPopover watch={watch}
                              dateValue={dateValue}/>

            <div className={t.buttonsContainer}>
                <div className={t.buttonPuskColor}><ButtonNew name={"ПУСК"} onClick={setIntervalClick}/></div>
                <ButtonNew name={"СТОП"} onClick={stopTime}/>
            </div>
        </div>
    )

}
export default Time;

