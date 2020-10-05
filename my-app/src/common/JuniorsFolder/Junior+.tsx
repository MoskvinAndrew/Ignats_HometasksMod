import React, {useState} from 'react';
import CustomizedMenus from "../HomeTask12/ThemeSwitcher";
import {lightTheme, darkTheme, middleTheme} from "../HomeTask12/theme";
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './../HomeTask12/global';
import jPlus from "./JuniorPlusStyles.module.css";
import RequestFC from "../Homework13/Request/Request";


type JuniorPlusType = {
    themeSwitch: string,
    onThemeChange: (kindOfTheme: string) => void
}

function JuniorPlus(props: JuniorPlusType) {
    let themeSetter = () => {
        if (props.themeSwitch === 'light') return lightTheme
        else if (props.themeSwitch === 'dark') return darkTheme
        else if (props.themeSwitch === 'middle') return middleTheme
        return
    }

    return (

        <ThemeProvider theme={themeSetter()}>


            <div className={jPlus.generalContainer}>
                <span>JuniorPlus</span>

                <div className={jPlus.themeToggle}>
                    <CustomizedMenus onThemeChange={props.onThemeChange}/>
                </div>

            </div>
            <div className={jPlus.requestSend}>
                <RequestFC/>
            </div>
            <GlobalStyles/>
        </ThemeProvider>

    )
}

export default JuniorPlus;