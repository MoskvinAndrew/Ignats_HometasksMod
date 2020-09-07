import React from "react";
import hwReducer,
{
    initialStateTypes,
    sortByAgeAC, sortDownPeoplesAC, sortUpPeoplesAC


} from '../common/Redux/homeWorkReducer';
import {v1} from "uuid";

test('sortTestByNameUp',()=>{


    let startState:initialStateTypes = {
        testReducerArray:[
            {id: v1(), name: 'Andrey', age: 28},
            {id: v1(), name: 'Inat', age: 29},
            {id: v1(), name: 'Dima', age: 30},
            {id: v1(), name: 'Aleksandr', age: 17},
            {id: v1(), name: 'Arsenii', age: 22},
            {id: v1(), name: 'Kolya', age: 12},
            {id: v1(), name: 'Kolya', age: 12}]
    };


    const action = sortUpPeoplesAC('up');

    const endState = hwReducer(startState,action)

    expect(endState.testReducerArray[0].name).toBe('Aleksandr');
    expect(endState.testReducerArray.length).toBe(7);
});

test('sortTestByNameDown',()=>{


    let startState:initialStateTypes = {
        testReducerArray:[
            {id: v1(), name: 'Andrey', age: 28},
            {id: v1(), name: 'Inat', age: 29},
            {id: v1(), name: 'Dima', age: 30},
            {id: v1(), name: 'Aleksandr', age: 17},
            {id: v1(), name: 'Arsenii', age: 22},
            {id: v1(), name: 'Kolya', age: 12},
            {id: v1(), name: 'Kolya', age: 12}]
    };

    const action = sortDownPeoplesAC('down');
    const endState = hwReducer(startState,action)

    expect(endState.testReducerArray[0].name).toBe('Kolya');
    expect(endState.testReducerArray.length).toBe(7);
});

test('sortTestByAge',()=>{

    let startState:initialStateTypes = {
        testReducerArray:[
            {id: v1(), name: 'Andrey', age: 28},
            {id: v1(), name: 'Inat', age: 29},
            {id: v1(), name: 'Dima', age: 30},
            {id: v1(), name: 'Aleksandr', age: 17},
            {id: v1(), name: 'Arsenii', age: 22},
            {id: v1(), name: 'Kolya', age: 12},
            {id: v1(), name: 'Kolya', age: 12}]
    };


    const action = sortByAgeAC(18)
    const endState = hwReducer(startState,action)

    expect(endState.testReducerArray[1].age).toBe(29);
    expect(endState.testReducerArray.length).toBe(4);
})