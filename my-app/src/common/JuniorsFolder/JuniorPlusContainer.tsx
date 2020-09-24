import React from 'react';
import JuniorPlus from "./Junior+";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/redux-store";
import {darkTheme, lightTheme} from "../HomeTask12/theme";
import {rangeInitialStateType, setRangeValue} from "../Redux/homeTask11Range";
import {themeSwitcher} from "../Redux/themeToogleReduser";

let JuniorPlusContainer = () => {
    let themeSwitch = useSelector<RootState,string>(state=>state.themeSwitcherReducer.themeMode)
    const dispatch = useDispatch();

    let onThemeChange = (kindOfTheme:string) => {
        const action = themeSwitcher(kindOfTheme);
        dispatch(action);
    }

    return <JuniorPlus themeSwitch={themeSwitch}
                       onThemeChange={onThemeChange}/>
}

export default JuniorPlusContainer;