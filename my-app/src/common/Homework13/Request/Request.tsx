import React, {useState} from 'react';
import ButtonNew from "../../button/Button";
import CheckBoxNew from "../../checkBox/CheckBox";
import RQ from "./RQ.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/redux-store";
import {setDBLRangeValue} from "../../Redux/DoubleRangeReduser";
import {checkBoxSwitcher, checkBoxToggleTC} from "../../Redux/requestReducer";

const RequestFC = () => {
    let resultTextfromReduser = useSelector<RootState, string>(state => state.requestReducer.resultText)
    let reducerCheckBoxValue = useSelector<RootState, boolean>(state => state.requestReducer.success);
    const dispatch = useDispatch();


    const buttonHandlerSwitch = () => {
        buttonHandler(reducerCheckBoxValue)

    }
    let buttonHandler = (reducerCheckBoxValue: boolean) => {
        const action = checkBoxToggleTC(reducerCheckBoxValue);
        dispatch(action);
    }
    let checkBoxHandler = (checkBoxValue: boolean) => {
        const action = checkBoxSwitcher(checkBoxValue);
        dispatch(action);
    }


    return (
        <div className={RQ.container}>

            <ButtonNew name={'SEND'} onClick={buttonHandlerSwitch}/>
            <CheckBoxNew checkBoxHandler={checkBoxHandler} reducerCheckBoxValue={reducerCheckBoxValue}/>
            <div className={RQ.display}><span>{resultTextfromReduser}</span></div>
        </div>
    )
}
export default RequestFC;