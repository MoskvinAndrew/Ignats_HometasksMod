import React, {ChangeEvent, useState} from 'react';
import InputNew from "../input/inputNew";
import ES from "./ES.module.css"



type EditableSpanType={
    title:string;
    settitle:(title:string)=>void,
}

function EditableSpan (props:EditableSpanType){




    let [editMode,setEditMode]=useState(false);

    // let [title,settitle]=useState<string>("Кликни на мне 2 раза")

    const onEditMode = ()=>{
        setEditMode(true);
    }
    const offEditMode = ()=>{
        setEditMode(false);
        props.settitle(props.title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        props.settitle(e.currentTarget.value)
    }





    return editMode
        ? <InputNew
            autoFocus={true}
            onBlur={offEditMode}
            onKeyPressHandler={offEditMode}
            onChangeHandler={changeTitle}
            offEditMode={offEditMode}/>:
        <span className={ES.editableSpan} onDoubleClick={onEditMode}>{props.title}</span>}





export default EditableSpan;