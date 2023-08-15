import React, {
    useRef, useContext
} from 'react';

import { SwitchStyled } from './Styles/SwitchStyled';
import { ThemeContext } from './../../Providers/ThemeProvider';

function Switch() {
    const themeContext = useContext(ThemeContext);

    const mode = useRef(
        {light: false, dark: true}[themeContext.theme]
    );
    
    const handleSwitch = () => {
        switch(themeContext.theme){
            case 'dark':
                mode.current = false;
                themeContext.setTheme('light');
                break;
            case 'light':
                mode.current = true;
                themeContext.setTheme('dark');
                break;
        }
    };

    return (
        <button
            type="button"
            onClick={handleSwitch}
            className="text-dark rounded-full-500"
        >
            <SwitchStyled 
                sx={{ m: 1 }} 
                checked={mode.current}
            />
        </button>
    )
}

export default Switch;