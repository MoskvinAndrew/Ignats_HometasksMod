import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Route, Switch} from "react-router-dom";
import PreJunior from "./common/JuniorsFolder/PreJunior";
import Navigation from "./common/Navigation/Navigation";
import JuniorContainer from "./common/JuniorsFolder/JuniorContainer";
import JuniorPlusContainer from "./common/JuniorsFolder/JuniorPlusContainer";


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
                    <Route exact path='/Junior+' render={() => <JuniorPlusContainer/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;