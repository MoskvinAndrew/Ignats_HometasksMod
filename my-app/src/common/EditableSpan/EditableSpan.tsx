import React, {ChangeEvent, useState} from 'react';
import InputNew from "../input/inputNew";
import ES from "./ES.module.css"



type EditableSpanType={

}

function EditableSpan (){




    let [editMode,setEditMode]=useState(false);

    let [title,settitle]=useState<string>("Кликни на мне 2 раза")

    const onEditMode = ()=>{
        setEditMode(true);
    }
    const offEditMode = ()=>{
        setEditMode(false);
        settitle(title);
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>)=>{
        settitle(e.currentTarget.value)
    }





    return editMode
        ? <InputNew
            autoFocus={true}
            onBlur={offEditMode}
            onKeyPressHandler={offEditMode}
            onChangeHandler={changeTitle}
            offEditMode={offEditMode}/>:
        <span className={ES.editableSpan} onDoubleClick={onEditMode}>{title}</span>}





export default EditableSpan;