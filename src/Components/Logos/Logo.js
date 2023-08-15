import { useContext } from 'react';
import { ThemeContext } from './../../Providers/ThemeProvider';

function Logo(props) {
    const themeContext = useContext(ThemeContext);
    
    const logos = {
        dark: '/assets/images/logos/logo-dark.png',
        light: '/assets/images/logos/logo-light.png'
    };

    return (
        <img src={logos[themeContext.theme]} {...props}>
            {props.children}
        </img>
    );
};

export default Logo;