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
import InputPreviewBox from "./InputPreviewBox";
import {useSelector, useDispatch} from "react-redux";
import {setIsPreviewDialogOpen, setShowSuccessMessage} from "../../feature/userform/userFormSlice";
import CustomAlert from "../CustomAlert";

const pageStyle = {
    backgroundColor: 'rgb(239, 239, 239)',
    height: '93vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const containerStyle = {
    backgroundColor: 'white',
    width: '20rem',
    height: '30rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '3rem',
    borderRadius: '1rem',
    boxShadow: [
        "0.1875rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)",
        " -0.1875rem -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)"
    ].join(','),
};

export default function UserForm() {
    const dispatch = useDispatch();
    const {name, gender, dob, showSuccessMessage} = useSelector(state => state.userForm);
    const isSubmitDisabled = !name || !gender || !dob;

    const handleFormSubmit = () => {
        dispatch(setIsPreviewDialogOpen(true));
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
                </Container>
            </Box>
            <InputPreviewBox/>
            {
                showSuccessMessage
                &&
                <CustomAlert alertMessage={'Form Submitted Successfully.'} severity="success" handleClose={() => dispatch(setShowSuccessMessage(false))} />
            }
        </ThemeProvider>
    );
}