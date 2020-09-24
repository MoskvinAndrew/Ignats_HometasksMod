import loadingReducer from "./homeTask10Reduser";
import {combineReducers, createStore} from "redux";
import hwReducer from "./homeWorkReducer";
import rangeReducer from "./homeTask11Range";
import rangeDblReducer from "./DoubleRangeReduser";
import themeSwitcherReducer from "./themeToogleReduser";
export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>


let reducers = combineReducers({
    loadingForm:loadingReducer,
    hwReducer,
    rangeReducer,
    rangeDblReducer,
    themeSwitcherReducer
});

let store = createStore(reducers)

// @ts-ignore
window.store = store;

export default store;