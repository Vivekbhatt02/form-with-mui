import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    typography: {
        fontFamily: [ 'cursive', 'Roboto',
        'Raleway',
        'Open Sans',
        ].join(','),
    }
});