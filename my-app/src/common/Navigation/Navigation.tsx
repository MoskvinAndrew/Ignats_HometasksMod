import React from 'react';
import N from "./N.module.css";
import {NavLink, Route} from "react-router-dom";
import EditableSpan from "../EditableSpan/EditableSpan";



function Navigation (){
    return(
        <div className={N.dropdown}>
            <button className={N.dropbtn}>МЕНЮ</button>
            <div className={N.dropdown_content}>
                <div className={N.accordion}><NavLink  to="/PreJunior">PreJunior</NavLink></div>
                <div ><NavLink  to="/Junior">Junior</NavLink></div>
                <div ><NavLink  to="/Junior+">Junior+</NavLink></div>
            </div>
        </div>


    )
}

export default Navigation;