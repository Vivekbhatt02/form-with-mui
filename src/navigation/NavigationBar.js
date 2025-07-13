import React from 'react';
import {AppBar, Toolbar, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <AppBar position="static">
            <Toolbar sx={{justifyContent: 'flex-end', gap: '2rem'}}>
                <Button
                    component={Link}
                    to="/"
                    color='white'>
                    Form
                </Button>
                <Button
                    component={Link}
                    to="/history"
                    color='white'>
                    History
                </Button>
                <Button
                    component={Link}
                    to="/about"
                    color='white'>
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
}