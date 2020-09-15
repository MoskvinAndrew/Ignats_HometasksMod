const SET_RANGE = 'SET_RANGE'

export type rangeInitialStateType = {
    maxValue: number,
    minValue:number,
    value:number
};
export type setRangeType = {
    type: typeof SET_RANGE,
    value:number
}

export let rangeInitialState = {
    maxValue: 1000,
    minValue:0,
    value:0
}

type ActionsType = setRangeType

const rangeReducer = (state: rangeInitialStateType = rangeInitialState, action: ActionsType) => {
    switch (action.type) {
        case SET_RANGE:
            return {...state, value: action.value}
        default:
            return state;
    }
}
export const setRangeValue = (value:number): setRangeType => ({type: 'SET_RANGE', value});


export default rangeReducer;