import React from 'react';
import Logo from '../Logos/Logo';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ThemeSwitch from './../Themes/Switch';
import LocaleSwitch from './../Locales/Switch';
import { routes } from './../../Data/Web/routes';
import { Link, NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function MobileHeader({
    onClick
}) {
    return (
        <Box onClick={onClick} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Link to="/templete" className="flex items-center p-2 opacity-85">
                    {" "}
                    <Logo
                        width="100%"
                        height="auto"
                        alt="Almabetter Logo"
                    />
                </Link>
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
                            {value?.name}
                        </NavLink>
                    );
                })}
            </List>
            
            <ThemeSwitch /> <LocaleSwitch />
        </Box>
    );
}

export default MobileHeader;