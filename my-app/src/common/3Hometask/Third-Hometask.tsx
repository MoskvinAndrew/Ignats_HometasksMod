import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent, useState} from 'react';
import TH from "./ThirdHometask.module.css";
import {AppTypes} from "../../App";
import InputNew from "../input/inputNew";
import ButtonNew from "../button/Button";




type ThirdHometaskTypes = {
    nNew: string,
    newArr: Array<AppTypes>,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    typeofButton:boolean,
    setnNew:(value:string)=>void,
    error?:string|null,
    NewElemInNewArr:(name:string)=>void,
    onClick:()=>void,


}


function ThirdHometask(props: ThirdHometaskTypes) {

    return (
        <div className={TH.inputContainer}>
            <InputNew
                autoFocus={true}
                error={props.error}
                setnNew={props.setnNew}
                nNew={props.nNew}
                onChangeHandler={props.onChangeHandler}
                onKeyPressHandler={props.onKeyPressHandler}
            />

            <ButtonNew
                        name={"ADD"}
                        typeofButton={props.typeofButton}
                        onClick={props.onClick}/>

            <div className={TH.counter}><p>Обьектов в массиве:</p>
                <span className={TH.span}>{props.newArr.length}</span>

            </div>

        </div>
    )
}

export default ThirdHometask;