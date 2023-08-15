import React, {
    useMemo,
    useState,
    useEffect,
    createContext,
    useLayoutEffect
} from 'react';

import {
    ThemeProvider as MuiThemeProvider
} from '@mui/material/styles';

import { themes as designs } from './../Data/themes';
import { getDesignToken } from './../Utils/getDesignToken';
import { localStorage as ls } from './../Modules/LocalStorageSlim';

export const ThemeContext = createContext({
    theme: designs.mode, setTheme: () => { }
});

function ThemeProvider(props) {
    const currentMode = (
        null === ls.get("theme")
        ? designs.mode : ls.get("theme")
    );

    const [mode, setMode] = useState(currentMode);

    const themeHandler = () => {
        return getDesignToken(mode);
    };

    const theme = useMemo(themeHandler, [mode]);

    useEffect(() => {
        ls.set("theme",mode);
    },[mode]);

    useLayoutEffect(() => {
        document.getElementsByTagName("html")[0].className = (
            `${mode} `+{light:"bg-[#ffffff]",dark:"bg-[#202124]"}[mode]
        );
    });

    return (
        <ThemeContext.Provider value={{ theme:mode,setTheme:setMode }}>
            <MuiThemeProvider theme={theme}>
                {props.children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;