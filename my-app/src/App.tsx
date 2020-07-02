import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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


export type AppTypes = {
    id: string,
    name: string,
}


function App() {
    let [error, setErr] = useState<string | null>(null);
    let [nNew, setnNew] = useState<string>("");
    let [newArr, setnewArr] = useState<Array<{ id: string, name: string }>>([]);


    function NewElemInNewArr(name: string) {
        let newElement = {id: v1(), name: name};
        setnewArr([newElement, ...newArr]);
    }


    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setnNew(e.currentTarget.value);
        setErr("sdf");
    }

    let onEnter = () => {
        alert('Функция сработала на энтер!!');
    }

    function onClickHandler() {
        setErr("sd")
        if (nNew !== '') {
            // alert('Privet' + ' ' + nNew);
            NewElemInNewArr(nNew);
            setnNew('');

        }
    }

    function onKeyPressHandler() {
        (nNew !== "" && NewElemInNewArr(nNew));
        (nNew !== "" && alert('Privet' + ' ' + nNew));
        setnNew('');
    }

    return (
        <div className="App">
          <HashRouter>
                <Navigation/>
                <div>
                    <Switch>
                        <Route exact path='/PreJunior' render={() => <PreJunior
                            onKeyPressHandler={onKeyPressHandler}
                            onClickHandler={onClickHandler}
                            onEnter={onEnter}
                            onChangeHandler={onChangeHandler}
                            error={error}
                            nNew={nNew}
                            setnNew={setnNew}
                            typeofButton={false}
                            newArr={newArr}

                        />}/>
                        <Route exact path='/Junior' render={() => <Junior/>}/>
                        <Route exact path='/Junior+' render={() => <JuniorPlus/>}/>
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;