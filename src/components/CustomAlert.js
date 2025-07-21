import React from "react";
import {Snackbar, Alert} from "@mui/material";

function CustomAlert({alertMessage, severity, handleClose}) {
    return <>
        {!!alertMessage && (
            <Snackbar
                open
                anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                sx={{marginTop: '4rem'}}
                onClose={handleClose}
                autoHideDuration={3000}
            >
                <Alert severity={severity}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        )}
    </>
}

export default CustomAlert;