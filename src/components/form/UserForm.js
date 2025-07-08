import React, {useState} from 'react';
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
import DisplayPanel from "./DisplayPanel";

const pageStyle = {
    backgroundColor: 'rgb(239, 239, 239)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const containerStyle = {
    backgroundColor: 'white',
    width: '20rem',
    height: '30rem',
    paddingTop: '4rem',
    paddingBottom: '4rem',
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
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState(null);
    const [isNameBlank, setIsNameBlank] = useState(false);
    const [submittedDetails, setSubmittedDetails] = useState({name: '', gender: '', dob: '',});

    const isSubmitDisabled = !name || !gender || !dob;

    const handleNameChange = (event) => {
        setName(event.target.value);
        if (event.target.value.trim().length === 0) {
            setIsNameBlank(true);
        }
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSubmittedDetails({name, gender, dob});
        setName('');
        setGender('');
        setDOB(null);
        setIsNameBlank(false);
    };

    return (
        <ThemeProvider theme={customTheme}>
            <Box sx={pageStyle}>
                <Container sx={containerStyle}>
                    <InputField value={name} error={isNameBlank} onChange={handleNameChange}/>
                    <GenderSelect gender={gender} setGender={setGender}/>
                    <DatePickerField dob={dob} setDOB={setDOB}/>
                    <Button
                        variant='contained'
                        sx={{width: '100%'}}
                        onClick={handleFormSubmit}
                        disabled={isSubmitDisabled}>
                        Submit
                    </Button>
                    <DisplayPanel submittedDetails={submittedDetails}/>
                </Container>
            </Box>
        </ThemeProvider>
    );
}