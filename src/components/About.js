import React from 'react';
import {Box, Typography, Paper, Divider} from '@mui/material';
import {useTheme} from '@mui/material/styles';

export default function About() {
    const theme = useTheme();

    const pageStyle = {
        minHeight: '93vh',
        bgcolor: theme.palette.background.default,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
    };

    const paperStyle = {
        maxWidth: '56.25rem',
        width: '100%',
        p: '2rem',
        borderRadius: '1rem',
        bgcolor: theme.palette.background.paper,
    };

    return (
        <Box sx={pageStyle}>
            <Paper elevation={4} sx={paperStyle}>
                <Typography variant="h3" gutterBottom align="center">
                    About This Project
                </Typography>
                <Divider sx={{mb: '2rem'}}/>
                <Typography variant="body1">
                    This project is a modern, interactive, and modular form-based web application developed
                    using <strong>React.js</strong>, <strong>Redux</strong>, and <strong>Material UI (MUI)</strong>.
                    It demonstrates key front-end development practices like reusable components, form validation,
                    global state management, and multi-page routing.
                </Typography>
                <Typography variant="body1" mt={'2rem'}>
                    📦 <strong>Technology Stack:</strong>
                </Typography>
                <ul>
                    <li><strong>React.js</strong> – for building the user interface</li>
                    <li><strong>Redux</strong> – for predictable and centralized state management</li>
                    <li><strong>MUI (Material UI)</strong> – for modern, responsive UI components</li>
                    <li><strong>@mui/x-date-pickers</strong> – for date selection components</li>
                    <li><strong>React Router</strong> – for client-side routing between pages</li>
                    <li><strong>JavaScript (ES6+)</strong> – for core logic and interactivity</li>
                </ul>
                <Typography variant="body1" mt={'2rem'}>
                    🚀 <strong>Core Features Implemented:</strong>
                </Typography>
                <ul>
                    <li>Basic form input with live name display</li>
                    <li>Gender selection via dropdown and Date of Birth via date picker</li>
                    <li>Reusable components
                        like <code>InputField</code>, <code>GenderSelect</code>, <code>DatePickerField</code>, etc.
                    </li>
                    <li>Form validation with dynamic error messages using <code>FormHelperText</code></li>
                    <li>Submission preview dialog with confirm/cancel options</li>
                    <li>Submission history tracking with persistent data</li>
                    <li>Clear-all functionality for the history panel</li>
                    <li>Global state management using Redux for form and history data</li>
                    <li>Multi-page navigation with full AppBar and routing setup</li>
                </ul>
                <Typography variant="body1" mt={'2rem'}>
                    💡 <strong>Why This Project?</strong>
                </Typography>
                <Typography variant="body2" paragraph>
                    This project was created as a hands-on exercise to strengthen practical skills in React and Redux.
                    It emphasizes modular architecture, UI consistency, and real-world app structure — making it easy to
                    scale and maintain.
                </Typography>
                <Typography variant="body1" mt={'2rem'}>
                    👨‍💻 <strong>Created by:</strong> Vivek Bhatt
                </Typography>
                <Typography variant="body2">
                    React.js, Redux & JavaScript enthusiast | Skilled in building modular components, managing global
                    state,
                    and designing responsive user interfaces.
                </Typography>
            </Paper>
        </Box>
    );
}