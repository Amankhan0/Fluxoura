// Filename - Components/Switcher.js

import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../Navigation/hooks/useDarkSide";
import { setThemeColor } from "../Store/Action/Sidebar/SidebarAciton";
import { useDispatch, useSelector } from "react-redux";

export default function Switcher({size}) {
    const [colorTheme, setTheme] = useDarkSide();
    const dispatch = useDispatch()
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
        dispatch(setThemeColor(colorTheme==='dark'?'light':'dark'))
    };

    return (
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={size?size:26}/>
    );
}
