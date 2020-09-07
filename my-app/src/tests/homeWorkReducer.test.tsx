import React from "react";
// import hwReducer,
 //{
//     sortByAgeAC, sortUpPeoplesAC, testReducerArrayType, testStateOfElementsTypes,

//
// } from '../common/Redux/homeWorkReducer';
// import {v1} from "uuid";
//
// test('sortTestByNameUp',()=>{
//
//
//     let startState:testStateOfElementsTypes = {
//         testReducerArray:[
//             {id: v1(), name: 'Andrey', age: 28},
//             {id: v1(), name: 'Inat', age: 29},
//             {id: v1(), name: 'Dima', age: 30},
//             {id: v1(), name: 'Aleksandr', age: 17},
//             {id: v1(), name: 'Arsenii', age: 22},
//             {id: v1(), name: 'Kolya', age: 12},
//             {id: v1(), name: 'Kolya', age: 12}]
//     };
//
//     const action = sortUpPeoplesAC('up');
//
//     const endState = hwReducer(startState,action)
//
//     expect(endState.name).toBe('Aleksandr');
//     expect(endState.length).toBe(6);
// });
//
// test('sortTestByNameDown',()=>{
//
//
//     let startState:testStateOfElementsTypes = {
//         testReducerArray:[
//             {id: v1(), name: 'Andrey', age: 28},
//             {id: v1(), name: 'Inat', age: 29},
//             {id: v1(), name: 'Dima', age: 30},
//             {id: v1(), name: 'Aleksandr', age: 17},
//             {id: v1(), name: 'Arsenii', age: 22},
//             {id: v1(), name: 'Kolya', age: 12},
//             {id: v1(), name: 'Kolya', age: 12}]
//     };
//
//     const action = sortPeoplesAC('down');
//
//     const endState = hwReducer(startState,action)
//
//     expect(endState[0].name).toBe('Kolya');
//     expect(endState.length).toBe(6);
// });
//
// test('sortTestByAge',()=>{
//     let startState:Array<testReducerArrayType> = [
//             {id: v1(), name: 'Andrey', age: 28},
//             {id: v1(), name: 'Inat', age: 29},
//             {id: v1(), name: 'Dima', age: 30},
//             {id: v1(), name: 'Aleksandr', age: 17},
//             {id: v1(), name: 'Arsenii', age: 22},
//             {id: v1(), name: 'Kolya', age: 12},
//             {id: v1(), name: 'Kolya', age: 12}]
//
//
//     const action = sortByAgeAC(18)
//
//     const endState = hwReducer(startState,action)
//
//     expect(endState[0]).toBe(29);
//     expect(endState.length).toBe(4);
// })