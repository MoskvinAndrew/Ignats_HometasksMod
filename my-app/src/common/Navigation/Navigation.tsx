import React from 'react';
import N from "./N.module.css";
import {NavLink, Route} from "react-router-dom";
import EditableSpan from "../EditableSpan/EditableSpan";
import {Button} from "@material-ui/core";



const Navigation = React.memo(() => {
    return(
        <div className={N.dropdown}>
            <Button className={N.dropbtn} variant='contained'>МЕНЮ</Button>
            <div className={N.dropdown_content}>
                <div className={N.accordion}><NavLink  activeClassName={N.active}  to="/PreJunior" >PreJunior</NavLink></div>
                <div className={N.accordion}><NavLink activeClassName={N.active} to="/JuniorContainer">Junior</NavLink></div>
                <div className={N.accordion}><NavLink activeClassName={N.active} to="/Junior+">Junior+</NavLink></div>
            </div>
        </div>


    )
})

export default Navigation;