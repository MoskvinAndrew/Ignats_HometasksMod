import React, {ChangeEvent, useState} from 'react';
import {ArrayForSelect} from "../JuniorsFolder/Junior";
import Select from '@material-ui/core/Select';

type SelectTypes={
    onSelectChange:(selectValue:string)=>void,
    value:Array<ArrayForSelect>
    parentValue:string|undefined

}

function SelectComponent (props:SelectTypes){



      let option = props.value.map(v=> <option key={v.id} value={v.digit}>{v.item}</option>);

     let onChangeHandler = ((event: ChangeEvent<{ name?: string | undefined; value: unknown; }>)=>{
       let selectValue = event.currentTarget.value;

         props.onSelectChange(selectValue as string);


      })



    return <Select value={props.parentValue} onChange={onChangeHandler}>
            {option}
        </Select>

}
export default SelectComponent;

