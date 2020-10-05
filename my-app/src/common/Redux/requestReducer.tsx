import {themeSwitcherInitialStateType} from "./themeToogleReduser";
import {Dispatch} from "redux";
import {requestAPI} from "../../api/request-api";

const REQUEST_MAKER = 'REQUEST_MAKER';
const SHOW_RESULT = 'SHOW_RESULT';

export type requestSwitcherInitialStateType = {
    success: boolean,
    resultText: string
};
export type requestSwitcherType = {
    type: typeof REQUEST_MAKER,
    success: boolean,
};
export type resultMonitorIntroducerType = {
    type: typeof SHOW_RESULT;
    resultText: string
}

export let requestInitialState = {
    success: false,
    resultText: 'Push the button,for server request'

}

type ActionsType = requestSwitcherType | resultMonitorIntroducerType

const requestReducer = (state: requestSwitcherInitialStateType = requestInitialState, action: ActionsType) => {
    switch (action.type) {
        case REQUEST_MAKER:

            return {...state, success: action.success}
        case SHOW_RESULT:
            return {...state, resultText: action.resultText}
        default:
            return state;
    }
}
export const checkBoxSwitcher = (success: boolean): requestSwitcherType => ({type: 'REQUEST_MAKER', success});
export const resultMonitorIntroducer = (resultText: string): resultMonitorIntroducerType => ({
    type: 'SHOW_RESULT',
    resultText
});

export const checkBoxToggleTC = (success: boolean) => {
    return (dispatch: Dispatch) => {
        requestAPI.makeRequest(success)
            .then((res) => {
                dispatch(resultMonitorIntroducer(res.data.info))
            })
            .catch((rr) => {
                dispatch(resultMonitorIntroducer(rr.toString()))
            })
    }
}


export default requestReducer;