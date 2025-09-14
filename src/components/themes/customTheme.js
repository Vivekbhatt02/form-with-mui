import {createTheme} from "@mui/material";


const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#ffffff',
            paper: '#f5f5f5',
        },
        text: {
            primary: '#000000',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: 'cursive',
        fontSize: 14,
    }
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#000000',
            paper: '#0a0a0a',
        },
        text: {
            primary: '#ffffff',
            secondary: '#999999',
        },
    },
    typography: {
        fontFamily: 'cursive',
        fontSize: 14,
    }
});

export const getTheme = (mode) => {
    return mode === 'dark' ? darkTheme : lightTheme;
};