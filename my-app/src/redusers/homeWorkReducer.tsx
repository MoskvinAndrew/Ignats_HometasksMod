 import {v1} from "uuid";

 let SORT = 'SORT';
 let CHECK = 'CHECK';


 export type sortPeoplesACType = {
     type:typeof SORT
     payload:string
 }
 export type sortByAgeACType = {
     type:typeof CHECK
     payload:number
 }


 export type testReducerArrayTypes = {
     id: string,
    name: string,
    age: number
};

 type ActionsType = sortPeoplesACType|sortByAgeACType

export let testReducerArray = [
    {id: v1(), name: 'Andrey', age: 28},
    {id: v1(), name: 'Inat', age: 29},
    {id: v1(), name: 'Dima', age: 30},
    {id: v1(), name: 'Aleksandr', age: 17},
    {id: v1(), name: 'Arsenii', age: 22},
    {id: v1(), name: 'Kolya', age: 12},{id: v1(), name: 'Kolya', age: 12}];




export const hwReducer = (state: Array<testReducerArrayTypes>, action: ActionsType) => {

    switch (action.type) {
        case SORT:
            if(action.payload == 'up'){

                state.sort(function (a, b) {
                     if (a.name > b.name) {
                       return 1;
                    }
                     if (a.name < b.name) {
                         return -1;
                     }
                     // a должно быть равным b
                     return 0;
                 });
             }else if(action.payload == 'down'){
                state.sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });
            }
                return [...state];

        case CHECK:
            if(action.type == 'CHECK' ){
            let newArray =  state.filter(s => s.age > action.payload);
            console.log(newArray);
            return[...newArray];}


    }

        return [...state];
    };

export const sortPeoplesAC = (payload:string):sortPeoplesACType =>({type: 'SORT', payload});
export const sortByAgeAC = (payload:number):sortByAgeACType =>({type: 'CHECK', payload});
