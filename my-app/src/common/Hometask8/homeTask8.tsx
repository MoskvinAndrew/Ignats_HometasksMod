import React, {useReducer} from "react";
import H from "./H.module.css";
import {hwReducer, sortByAgeAC, sortPeoplesAC, testReducerArray} from "../../redusers/homeWorkReducer";
import ButtonNew from "../button/Button";


export const HomeTask8 = ()=>{

    let [peoples,dispatchToPeoples] = useReducer(hwReducer,testReducerArray)

    let arrayOfGuys = peoples.map(a=> <p>Name: {a.name}, age: {a.age}</p> )

    function sortPeoplesByNameUp () {
        const action = sortPeoplesAC('up');
        dispatchToPeoples(action);
    };
    function sortPeoplesByNameDown () {
        const action = sortPeoplesAC('down');
        dispatchToPeoples(action);
    }
    function filterPeoplesByAge () {
        const action = sortByAgeAC(18);
        dispatchToPeoples(action);
    }







    return<div className={H.homeTaskcontainer}>
        <h2 className={H.title}>Восьмая домашка:</h2>
       <div className={H.namesContainer}> {arrayOfGuys}</div>


        <div className={H.buttonsContainer}>
      <ButtonNew name={'SORT UP'}
                  onClick={sortPeoplesByNameUp}/>
        <ButtonNew name={'SORT DOWN'}
                   onClick={sortPeoplesByNameDown}/>
            <ButtonNew name={'FILTER'}
                       onClick={filterPeoplesByAge}/>
        </div>
    </div>
}