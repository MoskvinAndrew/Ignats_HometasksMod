import React from 'react';
import EditableSpan from "../EditableSpan/EditableSpan";
import J from "./Junior.module.css";

import ButtonNew from "../button/Button";

type StateType = {
    x: string
    y: number
}
type JuniorTypes={
    nNew:string,
}

function Junior(props:JuniorTypes){

    saveState<StateType>("test", {x: "A", y: 1});

    const state: StateType = restoreState<StateType>("test", {x: "", y:0});

    function saveState<T> (key: string, state: T) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restoreState<T>(key: string, defaultState: T) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
        return defaultState;
    }

    return(
        <div >
            <EditableSpan />
            <div className={J.buttonsBlock}>
            <ButtonNew name={"Сохранить"}
                       typeofButton={true}
                       nNew={props.nNew}

                       />
            <ButtonNew name={"Восстановить"}
                       typeofButton={false}
                       nNew={props.nNew}/>
            </div>
        </div>
    )
}

export default Junior;