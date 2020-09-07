 import {v1} from "uuid";

 let SORT_UP = 'SORT_UP';
 let SORT_DOWN = 'SORT_DOWN';
 let CHECK = 'CHECK';


 export type sortUpPeoplesACType = {
     type:typeof SORT_UP
     payload:string
 }
 export type sortDownPeoplesACType = {
     type:typeof SORT_DOWN
     payload:string
 }
 export type sortByAgeACType = {
     type:typeof CHECK
     payload:number
 }
export type testReducerArrayType = {
    id: string,
    name: string,
    age: number
}

 export type initialStateTypes = {
     testReducerArray:Array<testReducerArrayType>
};

 type ActionsType = sortUpPeoplesACType|sortByAgeACType|sortDownPeoplesACType

 let initialState = {
    testReducerArray:[
    {id: v1(), name: 'Andrey', age: 28},
    {id: v1(), name: 'Inat', age: 29},
    {id: v1(), name: 'Dima', age: 30},
    {id: v1(), name: 'Aleksandr', age: 17},
    {id: v1(), name: 'Arsenii', age: 22},
    {id: v1(), name: 'Kolya', age: 12},
    {id: v1(), name: 'Kolya', age: 12}]
 };




 const hwReducer = (state:initialStateTypes = initialState  , action: ActionsType) => {

    switch (action.type) {
        case SORT_UP:

            return {...state,
                testReducerArray:[...state.testReducerArray.sort(function (a, b) {
                                 if (a.name > b.name) {return 1}
                                 if (a.name < b.name) {return -1 }
                                 return 0;

                             })]}

            case SORT_DOWN:
                return {...state,
                    testReducerArray:[...state.testReducerArray.sort(function (a, b) {
                        if (a.name < b.name) {return 1}
                        if (a.name > b.name) {return -1}
                        return 0;

                    })]}


        case  CHECK:
            return {...state,
                  testReducerArray:[...state.testReducerArray.filter(s => s.age > action.payload)]
              }
        default:return state;
    }



    };

export const sortUpPeoplesAC = (payload:string):sortUpPeoplesACType =>({type: 'SORT_UP', payload});
 export const sortDownPeoplesAC = (payload:string):sortDownPeoplesACType =>({type: 'SORT_DOWN', payload});
export const sortByAgeAC = (payload:number):sortByAgeACType =>({type: 'CHECK', payload});

export default hwReducer;