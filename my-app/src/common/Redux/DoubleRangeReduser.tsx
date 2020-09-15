const SET_DBL_RANGE = 'SET_DBL_RANGE'

export type dblRangeInitialStateType = {
    DRvalue: Array<number>
};
export type setDBLRangeType = {
    type: typeof SET_DBL_RANGE,
    DRvalue: Array<number>,
}

export let rangeInitialState = {
    DRvalue: [345, 800]
}

type ActionsType = setDBLRangeType

const rangeDblReducer = (state: dblRangeInitialStateType = rangeInitialState, action: ActionsType) => {
    switch (action.type) {
        case SET_DBL_RANGE:
            return {...state, DRvalue: action.DRvalue}
        default:
            return state;
    }
}
export const setDBLRangeValue = (DRvalue: Array<number>): setDBLRangeType => ({type: 'SET_DBL_RANGE', DRvalue});


export default rangeDblReducer;