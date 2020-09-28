import React from "react";
import {action} from "@storybook/addon-actions";
import {Meta} from "@storybook/react";
import JuniorPlus from "../common/JuniorsFolder/Junior+";

export default {
    title:'CustomizedMenus Component',
    component:JuniorPlus
} as Meta;

export const juniorPageBaseExample = (props:any) =>{
    return <JuniorPlus onThemeChange={action("sd")} themeSwitch={'light'} />
}