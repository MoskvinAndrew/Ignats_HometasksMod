import React, {ChangeEvent, KeyboardEvent} from 'react';
import ThirdHometask from "../3Hometask/Third-Hometask";
import InputNew from "../input/inputNew";
import ButtonNew from "../button/Button";
import CheckBoxNew from "../checkBox/CheckBox";
import {AppTypes} from "../../App";
import PJ from "./PJ.module.css";
import EditableSpan from "../EditableSpan/EditableSpan";

type PreJunior = {
    nNew: string,
    newArr: Array<AppTypes>,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    typeofButton:boolean,
    setnNew:(value:string)=>void,
    error?:string|null,
    onEnter:()=>void,
    NewElemInNewArr:(name:string)=>void,

}

function PreJunior(props:PreJunior){
    return(
        <div>
            <ThirdHometask
                nNew={props.nNew}
                newArr={props.newArr}
                onKeyPressHandler={props.onKeyPressHandler}
                onChangeHandler={props.onChangeHandler}
                typeofButton={false}
                setnNew={props.setnNew}
                error={props.error}
                NewElemInNewArr={props.NewElemInNewArr}

            />

            <div className="wrapperForNew">
                <InputNew
                    autoFocus={true}
                    onKeyPressHandler={props.onKeyPressHandler}
                    onEnter={props.onEnter}
                    setnNew={props.setnNew}
                />
                <ButtonNew
                    name={"Моя кнопка"}
                    typeofButton={true}
                    nNew={props.nNew}/>

                <CheckBoxNew/>



            </div>
        </div>
    )
}

export default PreJunior;