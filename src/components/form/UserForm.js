import React from 'react';
import {
    Box,
    Button,
    Container,
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import InputField from "./InputField";
import GenderSelect from "./GenderSelect";
import DatePickerField from "./DatePickerField";
import InputPreviewBox from "./InputPreviewBox";
import {useSelector, useDispatch} from "react-redux";
import {setIsPreviewDialogOpen, setShowSuccessMessage} from "../../feature/userform/userFormSlice";
import CustomAlert from "../CustomAlert";

export default function UserForm() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const {name, gender, dob, showSuccessMessage} = useSelector(state => state.userForm);
    const isSubmitDisabled = !name || !gender || !dob;

    const pageStyle = {
        backgroundColor: theme.palette.background.default,
        height: '93vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const containerStyle = {
        backgroundColor: theme.palette.background.paper,
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
        boxShadow: theme.palette.mode === 'dark'
            ? '0.1875rem 0.1875rem 0.3125rem rgba(255, 255, 255, 0.1), -0.1875rem -0.1875rem 0.3125rem rgba(255, 255, 255, 0.1)'
            : '0.1875rem 0.1875rem 0.3125rem rgba(0, 0, 0, 0.2), -0.1875rem -0.1875rem 0.3125rem rgba(0, 0, 0, 0.2)',
    };

    const handleFormSubmit = () => {
        dispatch(setIsPreviewDialogOpen(true));
    };

    return (
        <>
            <Box sx={pageStyle}>
                <Container sx={containerStyle}>
                    <InputField value={name}/>
                    <GenderSelect value={gender}/>
                    <DatePickerField value={dob}/>
                    <Button
                        variant='contained'
                        sx={{
                            width: '100%',
                        }}
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
        </>
    );
}