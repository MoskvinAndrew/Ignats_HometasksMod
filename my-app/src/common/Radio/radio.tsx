import React, {ChangeEvent, RefObject} from 'react';
import {ArrayForRadio} from "../JuniorsFolder/Junior";

type RadioTypes={
    value:Array<ArrayForRadio>,
    onRadioChange:(id:string)=>void,
    name:string

}


function Radio (props:RadioTypes){

    // let radioButton = React.createRef<HTMLTextAreaElement>();

 let onStatusChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
     let newIsDoneValue = e.currentTarget.id;
     props.onRadioChange(newIsDoneValue)
 }
 let inputs = props.value.map((i)=> <div>

                                                <input type="radio"
                                                       key={i.id}
                                                       name={props.name}
                                                       id={i.id}
                                                       value={i.item}
                                                       onChange={onStatusChangeHandler}
                                                />
                                                       <label htmlFor={i.id}>{i.item}</label>
                                                      </div>)




    return(

         <div>

             <p>Выберите персонажа:</p>
            {inputs}
         
         </div>
     )
 }
export default Radio;