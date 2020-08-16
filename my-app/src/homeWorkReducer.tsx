import {v1} from "uuid";

export type testReducerArrayTypes = {
    id: string,
    name: string,
    age: number
};

export let testReducerArray = [
    {id: v1(), name: 'Andrey', age: 28},
    {id: v1(), name: 'Inat', age: 29},
    {id: v1(), name: 'Dima', age: 30},
    {id: v1(), name: 'Aleksandr', age: 17},
    {id: v1(), name: 'Arsenii', age: 22},
    {id: v1(), name: 'Kolya', age: 12}];

let SORT = 'SORT';
let CHECK = 'CHECK';



export const hwReducer = (state: Array<testReducerArrayTypes>, action: {type: string, payload: any}):Array<testReducerArrayTypes> => {

    switch (action.type) {
        case SORT:
            if(action.payload == 'up'){
                state.sort();
                return[...state];
            }
        case CHECK:
            let newArray =  state.filter(s => s.age > action.payload);
            console.log(newArray);
            return[...newArray];

    }
        return state;
    };

export const sortPeoplesActionCreator = (payload:any) =>({type: 'SORT', payload: 'up'});
export const sortByAgeActionCreator = (payload:number)=>({type: 'CHECK', payload: 18})