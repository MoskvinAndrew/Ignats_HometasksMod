import React, {
    ButtonHTMLAttributes,
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    KeyboardEvent, useCallback,
    useState
} from 'react';
import s from './inputNew.module.css';
import {AppTypes} from "../../App";


export type InputNyaTypes = {

    nNew?: string,
    newArr?: Array<AppTypes>,
    onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPressHandler?: (e: KeyboardEvent<HTMLInputElement>) => void,
    setnNew?: (value: string) => void,
    onEnter?: () => void,
    error?: string | null,
    autoFocus:boolean,
    onBlur?:()=>void,
    offEditMode?:()=>void,
};


let InputNew = React.memo((props: InputNyaTypes) => {

    let onKeyPressHandler = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.onKeyPressHandler && props.onKeyPressHandler(e)
            props.onEnter && props.onEnter()
        }
    },[props.onKeyPressHandler,props.onEnter])

    return (
        <>
            <input className={props.error !== " " ? s.inputNya : s.inputNya + " " + s.errorStyle}
                   value={props.nNew}
                   onKeyPress={onKeyPressHandler}
                   onChange={props.onChangeHandler}
                   onBlur={props.offEditMode}
                   autoFocus={true}/>


        </>

    )
})

export default InputNew;