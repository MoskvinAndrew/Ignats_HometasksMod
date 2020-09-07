import React, {ChangeEvent, useState} from 'react';
import EditableSpan from "../EditableSpan/EditableSpan";
import J from "./Junior.module.css";
import ButtonNew from "../button/Button";
import {restoreState, saveState, StateType} from "../helpers";
import {v1} from "uuid";
import Radio from "../Radio/radio";
import SelectComponent from "../Select/Select";
import {HomeTask8} from "../Hometask8/homeTask8";
import Time from "../HomeTask9/homeTask9";
import Preloader from "../loading/preLoader";


export type ArrayForSelect = {
    id: string,
    item: string,
    digit: string
}
export type ArrayForRadio = {
    id: string,
    item: string
    isChecked: boolean
}
type JuniorTypes = {
    loading: boolean,
    setLoading: (loading: boolean) => void
}

function Junior(props: JuniorTypes) {

    let ArrayForSelect = [{id: v1(), item: 'Чебурашка', digit: '1'},
        {id: v1(), item: 'Крокодил Гена', digit: '2'},
        {id: v1(), item: 'Шапокляк', digit: '3'},
        {id: v1(), item: 'Крыса Лариса', digit: '4'}];
    let ArrayForRadio = [{id: v1(), item: 'Чебурашка', isChecked: false},
        {id: v1(), item: 'Крокодил Гена', isChecked: false},
        {id: v1(), item: 'Шапокляк', isChecked: false},
        {id: v1(), item: 'Крыса Лариса', isChecked: false}];


    let [title, settitle] = useState<string>("Кликни на мне 2 раза");

    let [parentValue, setParentValue] = useState<string | undefined>('1');

    let onSelectChange = (selectValue: string) => {
        let a = ArrayForSelect.find(a => a.item == selectValue);
        if (a) {
            setParentValue(a.digit)
        }
        ;
    }
    const onRadioChange = (id: string) => {
        let choseValue = ArrayForRadio.find(e => e.id == id);
        if (choseValue) {
            choseValue.isChecked = true;
            console.log(choseValue)
        }

    }

    let waitForThreeSeconds = () => {
        props.setLoading(true)
        const timer = setTimeout(() => props.setLoading(false), 2000);
    }


    const saveClick = () => {
        saveState<StateType>("test", {value: title});
    }
    const restoreTitle = () => {
        const state: StateType = restoreState<StateType>("test", {value: 'jhh'});

    }


    return (

        <div className={J.wrrapp}>
            {props.loading == true ? <Preloader/> : <div>
                <EditableSpan title={title}
                              settitle={settitle}/>
                <div className={J.buttonsBlock}>
                    <ButtonNew name={"Сохранить"}
                               typeofButton={true}
                               onClick={saveClick}

                    />


                    <ButtonNew name={"Воcстановить"}
                               typeofButton={false}
                               onClick={restoreTitle}/>
                </div>

                <div className={J.Sevenand8TaskContainer}>
                    <div className={J.hometaskSeven}>

                        <h2>Седьмая домашка:</h2>

                        <div className={J.selectComponent}>
                            <SelectComponent value={ArrayForSelect}
                                             onSelectChange={onSelectChange}
                                             parentValue={parentValue}/>
                        </div>
                        <div className={J.radioComponent}>
                            <Radio value={ArrayForRadio}
                                   name={"HomeTask"}
                                   onRadioChange={onRadioChange}/>
                        </div>
                    </div>
                    <HomeTask8/>
                </div>
                <Time/>
                <div>
                    <ButtonNew name={'Подумать 3 секунды'} onClick={waitForThreeSeconds}/>
                </div>

            </div>}

        </div>)
}

export default Junior;