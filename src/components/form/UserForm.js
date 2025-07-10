import React from 'react';
import {
    Box,
    Button,
    Container,
} from '@mui/material';
import {ThemeProvider} from '@emotion/react';

import {customTheme} from '../themes/customTheme';
import InputField from "./InputField";
import GenderSelect from "./GenderSelect";
import DatePickerField from "./DatePickerField";
import SubmissionHistoryPanel from "./SubmissionHistoryPanel";
import {useSelector, useDispatch} from "react-redux";
import {submitForm, clearHistory, resetForm} from "../../feature/userform/userFormSlice";

const pageStyle = {
    backgroundColor: 'rgb(239, 239, 239)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const containerStyle = {
    backgroundColor: 'white',
    width: '25rem',
    height: 'auto',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    borderRadius: '1rem',
    boxShadow: [
        "0.1875rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)",
        " -0.1875rem -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)"
    ].join(','),
};

export default function UserForm() {
    const dispatch = useDispatch();
    const {name, gender, dob, submissionHistory} = useSelector(state => state.userForm);
    const isSubmitDisabled = !name || !gender || !dob;

    const handleFormSubmit = () => {
        if (!isSubmitDisabled) {
            dispatch(submitForm());
            dispatch(resetForm());
        }
    }

    const handleClearHistory = () => {
        dispatch(clearHistory());
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={pageStyle}>
                <Container sx={containerStyle}>
                    <InputField value={name}/>
                    <GenderSelect value={gender}/>
                    <DatePickerField value={dob}/>
                    <Button
                        variant='contained'
                        sx={{width: '100%'}}
                        onClick={handleFormSubmit}
                        disabled={isSubmitDisabled}>
                        Submit
                    </Button>
                    <SubmissionHistoryPanel submissionHistory={submissionHistory}/>
                    <Button
                        variant="contained"
                        sx={{width: "7rem", marginTop: "1rem", marginLeft: "auto"}}
                        onClick={handleClearHistory}>
                        Clear All
                    </Button>
                </Container>
            </Box>
        </ThemeProvider>
    );
}