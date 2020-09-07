const SET_LOADING = 'SET_LOADING'

type initialStateType = {
    loading: boolean
};
export type setLoadingType = {
    type: typeof SET_LOADING,
    loading: boolean,
}

let initialState = {
    loading: false
}

type ActionsType = setLoadingType

const loadingReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
        default:
            return state;
    }
}
export const setLoading = (loading: boolean): setLoadingType => ({type: 'SET_LOADING', loading});


export default loadingReducer;