

export type StateType = {
    value:string,

}
// saveState<StateType>("test", {title: ""});

// const state: StateType = restoreState<StateType>("test", {title: ""});


export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}