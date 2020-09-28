import React from "react";
import themeSwitcherReducer, {themeSwitcherInitialStateType,themeSwitcher} from '../common/Redux/themeToogleReduser';

test('themeChangeReducerTest',()=>{


    let startState:themeSwitcherInitialStateType = {
        themeMode: "dark"
    };
    const action = themeSwitcher('light');
    const endState = themeSwitcherReducer(startState,action)

    expect(endState.themeMode).toEqual('light');
});



