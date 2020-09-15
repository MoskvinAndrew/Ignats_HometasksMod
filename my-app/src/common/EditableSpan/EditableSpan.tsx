import React, {ChangeEvent, useCallback, useState} from 'react';
import InputNew from "../input/inputNew";
import ES from "./ES.module.css"



type EditableSpanType={
    title:string;
    settitle:(title:string)=>void,
}

let  EditableSpan = React.memo((props:EditableSpanType) => {




    let [editMode,setEditMode]=useState(false);

    const onEditMode = useCallback(()=>{
        setEditMode(true);
    },[])


    const offEditMode = useCallback(()=>{
        setEditMode(false);
        props.settitle(props.title);
    },[props.settitle,props.title])

    const changeTitle = useCallback((e: ChangeEvent<HTMLInputElement>)=>{
        props.settitle(e.currentTarget.value)
    },[props.settitle]);

    return editMode
        ? <InputNew
            autoFocus={true}
            onBlur={offEditMode}
            onKeyPressHandler={offEditMode}
            onChangeHandler={changeTitle}
            offEditMode={offEditMode}/>:
        <span className={ES.editableSpan} onDoubleClick={onEditMode}>{props.title}</span>})





export default EditableSpan;