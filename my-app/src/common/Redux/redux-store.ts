import loadingReducer from "./homeTask10Reduser";
import {combineReducers, createStore} from "redux";
import hwReducer from "./homeWorkReducer";
export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    loadingForm:loadingReducer,
    hwReducer
});

let store = createStore(reducers)

// @ts-ignore
window.store = store;

export default store;