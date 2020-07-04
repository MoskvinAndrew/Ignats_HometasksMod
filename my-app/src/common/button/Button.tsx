import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import B from "./B.module.css"
import ThirdHometask from "../3Hometask/Third-Hometask";


export type ButtonNewTypes = {
    name:string,
    typeofButton?:boolean,
    setnNew?:(value:string)=>void,
    NewElemInNewArr?:(name:string)=>void,
    nNew:string,



}


function ButtonNew(props: ButtonNewTypes) {
   function onClickHandler(){

       if (props.nNew !== '') {
            props.NewElemInNewArr && props.NewElemInNewArr(props.nNew);
            props.setnNew && props.setnNew('');


        }
    }

    return (
        <div className={props.typeofButton?B.box1 +" "+B.box11:B.box1}>
            <div className={B.btn + ' ' + B.btnone} onClick={onClickHandler} >
                <span>{props.name}</span>
            </div>
        </div>)
}

export default ButtonNew;