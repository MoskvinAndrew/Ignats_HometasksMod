import loadingReducer from "./homeTask10Reduser";
import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import hwReducer from "./homeWorkReducer";
import rangeReducer from "./homeTask11Range";
import rangeDblReducer from "./DoubleRangeReduser";
import themeSwitcherReducer from "./themeToogleReduser";
import requestReducer from "./requestReducer";
export type StoreReduxType = typeof store
export type RootState = ReturnType<typeof reducers>



let reducers = combineReducers({
    loadingForm:loadingReducer,
    hwReducer,
    rangeReducer,
    rangeDblReducer,
    themeSwitcherReducer,
    requestReducer
});

let store = createStore(reducers,applyMiddleware(thunk))

// @ts-ignore
window.store = store;

export default store;