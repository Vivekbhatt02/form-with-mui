import React from 'react';
import NavigationBar from "./NavigationBar";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTheme} from "../components/themes/customTheme";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";

export default function PageLayout() {
    const currentTheme = useSelector(state => state.theme.theme);
    const theme = getTheme(currentTheme);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <NavigationBar/>
                <Outlet/>
            </ThemeProvider>

        </>
    )
}
