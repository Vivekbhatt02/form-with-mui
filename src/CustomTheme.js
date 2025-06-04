import { createTheme } from "@mui/material";

export const CustomTheme = createTheme({
    typography: {
        fontFamily: [ 'cursive', 'Roboto',
        'Raleway',
        'Open Sans',
        ].join(','),
    }
});