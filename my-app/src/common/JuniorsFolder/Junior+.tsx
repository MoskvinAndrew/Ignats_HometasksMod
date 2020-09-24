import React, {useState} from 'react';
import CustomizedMenus from "../HomeTask12/ThemeSwitcher";
import {lightTheme,darkTheme,middleTheme} from "../HomeTask12/theme";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './../HomeTask12/global';
import jPlus from "./JuniorPlusStyles.module.css";


type JuniorPlusType = {
    themeSwitch:string,
    onThemeChange:(kindOfTheme:string)=>void
}

function JuniorPlus(props:JuniorPlusType){
    let themeSetter = () => {
        if(props.themeSwitch === 'light')return lightTheme
        else if(props.themeSwitch === 'dark')return darkTheme
        else if(props.themeSwitch === 'middle') return middleTheme
        return
    }

    return(

        <ThemeProvider theme={themeSetter()}>
            <>
                <GlobalStyles />
                <div >
                    <span>JuniorPlus</span>
                    <div>
                    <CustomizedMenus
                        onThemeChange={props.onThemeChange}/>
                    </div>
                </div>
            </>
        </ThemeProvider>
    )
}

export default JuniorPlus;