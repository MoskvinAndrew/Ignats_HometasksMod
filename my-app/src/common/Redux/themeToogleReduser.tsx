const SET_THEME = 'SET_THEME'

export type themeSwitcherInitialStateType = {
    themeMode: string
};
export type themeSwitcherType = {
    type: typeof SET_THEME,
    themeMode: string,
}

export let themeModeInitialState = {
    themeMode: "dark"
}

type ActionsType = themeSwitcherType

const themeSwitcherReducer = (state: themeSwitcherInitialStateType = themeModeInitialState, action: ActionsType) => {
    switch (action.type) {
        case SET_THEME:
            return {...state, themeMode: action.themeMode}
        default:
            return state;
    }
}
export const themeSwitcher = (themeMode: string): themeSwitcherType => ({type: 'SET_THEME', themeMode});


export default themeSwitcherReducer;