import {
    NavLink,
    useNavigate
} from 'react-router-dom';

import React from 'react';
import Logo from './../Logos/Logo';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from '@mui/material/Divider';
import { route } from './../../Utils/route';
import ThemeSwitch from './../Themes/Switch';
import { useTranslation } from 'react-i18next';
import LocaleSwitch from './../Locales/Switch';
import { routes } from './../../Data/Web/routes';
import Typography from '@mui/material/Typography';

function MobileHeader({
    onClick
}) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box onClick={onClick} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <div
                    onClick={() => {navigate(route('Home'))}}
                    className="flex items-center p-2 opacity-85 w-[100%] h-auto"
                >
                    {" "}
                    <Logo
                        width="100%"
                        height="auto"
                        alt="Almabetter Logo"
                    />
                </div>
            </Typography>

            <Divider />
            
            <List
                className="drawerLinks"
                sx={{
                    display: "flex",
                    textAlign: "left",
                    paddingLeft: "20px",
                    flexDirection: "column",
                }
            }>
                {Object.entries(routes).map(([name, value], index) => {
                    if(true !== value?.public){
                        return;
                    }

                    return (
                        <NavLink
                            color="inherit"
                            to={value?.path}
                            className="nav-link"
                            key={`DesktopLink#${name}::${index}`}
                        >
                            {t(value?.name)}
                        </NavLink>
                    );
                })}
            </List>
            
            <ThemeSwitch /> <LocaleSwitch />
        </Box>
    );
}

export default MobileHeader;