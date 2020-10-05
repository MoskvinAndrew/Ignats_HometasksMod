import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react";
import C from "./C.module.css"

type CheckBoxNewTypes = {
    checkBoxHandler:(checkBoxValue:boolean)=>void;
    reducerCheckBoxValue:boolean

}

let CheckBoxNew = React.memo((props: CheckBoxNewTypes) => {
    const [checkValue,setCheckValue] = useState<boolean>(true);
    let onChangeHandler = () =>{
        setCheckValue(!checkValue);
        props.checkBoxHandler(checkValue);
    }
    return <div className={C.chekboxtwo}>
        <label className={C.checkbox}>
            <input type="checkbox" onChange={onChangeHandler} checked={props.reducerCheckBoxValue} />
            <span className={C.checkbox__icon}></span>

        </label>
    </div>
})
export default CheckBoxNew;