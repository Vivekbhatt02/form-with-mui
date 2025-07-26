import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import store from './redux/Store';
import {Provider, useSelector} from 'react-redux';
import {RouterProvider} from "react-router-dom";
import router from '../src/navigation/Router';
import {getTheme} from '../src/components/themes/customTheme';

const ThemedApp =() =>{
    const currentTheme = useSelector(state => state.theme.theme);
    const theme = getTheme(currentTheme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <RouterProvider router={router}/>
            </LocalizationProvider>
        </ThemeProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemedApp/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();