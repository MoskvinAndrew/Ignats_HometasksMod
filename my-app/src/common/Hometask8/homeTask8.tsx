import React, {useCallback, useReducer} from "react";
import H from "./H.module.css";
import hwReducer, {
    initialStateTypes,
    sortByAgeAC,
    sortDownPeoplesAC,
    sortUpPeoplesAC,
    testReducerArrayType
} from "../Redux/homeWorkReducer";
import ButtonNew from "../button/Button";
import {v1} from "uuid";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/redux-store";


export const HomeTask8 = React.memo(()=>{

    const peoples = useSelector<RootState,any>(state=>state.hwReducer.testReducerArray)
    const dispatch = useDispatch();

    let arrayOfGuys = peoples.map((a:any)=> <div key={a.id}><p >Name:{a.name}, age:{a.age}</p></div> )

    let sortPeoplesByNameUp = useCallback(() => {
        const action = sortUpPeoplesAC('up');
        dispatch(action);
    },[])

    let sortPeoplesByNameDown = useCallback(() => {
        const action = sortDownPeoplesAC('down');
        dispatch(action);
    },[])
    let filterPeoplesByAge = useCallback(() => {
        const action = sortByAgeAC(18);
        dispatch(action);
    },[])







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
})