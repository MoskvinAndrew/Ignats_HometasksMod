import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './App.css';
import ThirdHometask from "./common/3Hometask/Third-Hometask";
import {v1} from "uuid";
import InputNew from "./common/input/inputNew";
import CheckBoxNew from "./common/checkBox/CheckBox";
import ButtonNew from "./common/button/Button";
import {BrowserRouter, HashRouter, NavLink, Route, Switch} from "react-router-dom";
import PreJunior from "./common/JuniorsFolder/PreJunior";
import Junior from "./common/JuniorsFolder/Junior";
import JuniorPlus from "./common/JuniorsFolder/Junior+";
import N from "./common/Navigation/N.module.css";
import Navigation from "./common/Navigation/Navigation";
import {RootState, StoreReduxType} from "./common/Redux/redux-store";
import JuniorContainer from "./common/JuniorsFolder/JuniorContainer";


export type AppTypes = {
    id: string,
    name: string,
}


function App() {
    let [error, setErr] = useState<string | null>(null);
    let [nNew, setnNew] = useState<string>("");
    let [newArr, setnewArr] = useState<Array<{ id: string, name: string }>>([]);


    let NewElemInNewArr = useCallback((name: string) => {
        let newElement = {id: v1(), name: name};
        setnewArr([newElement, ...newArr]);
    }, [])


    let onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setnNew(e.currentTarget.value);
        setErr("sdf");
    }, [])

    let onEnter = useCallback(() => {
        alert('Функция сработала на энтер!!');
    }, []);

    let onClick = useCallback(() => {
        if (nNew !== '') {
            NewElemInNewArr(nNew);
            setnNew('');
        }
    }, []);

    let onKeyPressHandler = useCallback(() => {
        (nNew !== "" && NewElemInNewArr(nNew));
        (nNew !== "" && alert('Privet' + ' ' + nNew));
        setnNew('');
    }, []);

    return (

        <div className="App">
            <Navigation/>
            <div>
                <Switch>
                    <Route exact path='/PreJunior' render={() => <PreJunior
                        onKeyPressHandler={onKeyPressHandler}
                        onEnter={onEnter}
                        onChangeHandler={onChangeHandler}
                        error={error}
                        nNew={nNew}
                        setnNew={setnNew}
                        typeofButton={false}
                        newArr={newArr}
                        NewElemInNewArr={NewElemInNewArr}
                        onClick={onClick}


                    />}/>
                    <Route exact path='/JuniorContainer' render={() => <JuniorContainer/>}/>
                    <Route exact path='/Junior+' render={() => <JuniorPlus/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;