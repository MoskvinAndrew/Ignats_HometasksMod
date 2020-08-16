import {hwReducer, sortByAgeActionCreator, testReducerArray, testReducerArrayTypes} from './homeWorkReducer';
import {sortPeoplesActionCreator} from './homeWorkReducer'
import {v1} from "uuid";

test('sortTestByName',()=>{


    let startState:Array<testReducerArrayTypes>=[
        {id: v1(), name: 'Andrey', age: 28},
        {id: v1(), name: 'Inat', age: 29},
        {id: v1(), name: 'Dima', age: 30},
        {id: v1(), name: 'Aleksandr', age: 17},
        {id: v1(), name: 'Arsenii', age: 22},
        {id: v1(), name: 'Kolya', age: 12}];

    const endState = hwReducer(startState,sortPeoplesActionCreator('up'))

    expect(endState.sort);
    expect(endState.length).toBe(6);
});

test('sortTestByAge',()=>{
    let startState:Array<testReducerArrayTypes> = [
        {id: v1(), name: 'Andrey', age: 28},
        {id: v1(), name: 'Inat', age: 29},
        {id: v1(), name: 'Dima', age: 30},
        {id: v1(), name: 'Aleksandr', age: 17},
        {id: v1(), name: 'Arsenii', age: 22},
        {id: v1(), name: 'Kolya', age: 12}];
    const endState = hwReducer(startState,sortByAgeActionCreator(18))
    expect(endState[1].age).toBe(29);
    expect(endState.length).toBe(4);
})