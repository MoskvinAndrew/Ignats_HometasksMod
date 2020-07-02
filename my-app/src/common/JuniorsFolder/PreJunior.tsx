import React, {ChangeEvent, KeyboardEvent} from 'react';
import ThirdHometask from "../3Hometask/Third-Hometask";
import InputNew from "../input/inputNew";
import ButtonNew from "../button/Button";
import CheckBoxNew from "../checkBox/CheckBox";
import {AppTypes} from "../../App";

type PreJunior = {
    nNew: string,
    newArr: Array<AppTypes>,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    onClickHandler: () => void,
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void,
    typeofButton:boolean,
    setnNew:(value:string)=>void,
    error?:string|null,
    onEnter:()=>void,
}

function PreJunior(props:PreJunior){
    return(
        <div>
            <ThirdHometask
                nNew={props.nNew}
                newArr={props.newArr}
                onKeyPressHandler={props.onKeyPressHandler}
                onChangeHandler={props.onChangeHandler}
                onClickHandler={props.onClickHandler}
                typeofButton={false}
                setnNew={props.setnNew}
                error={props.error}
            />

            <div className="wrapperForNew">
                <InputNew
                    onKeyPressHandler={props.onKeyPressHandler}
                    onEnter={props.onEnter}
                    setnNew={props.setnNew}
                />
                <ButtonNew
                    name={"Моя кнопка"}
                    typeofButton={true}/>
                <CheckBoxNew/>

            </div>
        </div>
    )
}

export default PreJunior;