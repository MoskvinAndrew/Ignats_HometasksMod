import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import B from "./B.module.css"
import ThirdHometask from "../3Hometask/Third-Hometask";


export type ButtonNewTypes = {
    name: string,
    typeofButton?: boolean,
    onClick: () => void,
}
let ButtonNew = React.memo((props: ButtonNewTypes) => {


    return (
        <div className={props.typeofButton ? B.box1 + " " + B.box11 : B.box1}>
            <div className={B.btn + ' ' + B.btnone} onClick={props.onClick}>
                <span>{props.name}</span>
            </div>
        </div>)
})

export default ButtonNew;