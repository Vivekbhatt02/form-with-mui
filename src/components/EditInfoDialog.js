import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import {useDispatch, useSelector} from "react-redux";
import {
    setIsEditDialogOpen,
    setName,
    setGender,
    setDOB,
    setSelectedIndex,
    setShowSuccessMessage,
    updateHistoryItem, resetForm
} from "../feature/userform/userFormSlice";
import InputField from "./form/InputField";
import GenderSelect from "./form/GenderSelect";
import DatePickerField from "./form/DatePickerField";
import {Typography} from "@mui/material";

const editDialogStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 3
};

const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 2
};

export default function EditInfoDialog() {
    const dispatch = useDispatch();
    const {
        isEditDialogOpen,
        name,
        gender,
        dob,
        selectedIndex,
        submissionHistory
    } = useSelector(state => state.userForm);

    useEffect(() => {
        if (isEditDialogOpen && selectedIndex !== null) {
            const editItem = submissionHistory[selectedIndex];
            dispatch(setName(editItem.name));
            dispatch(setGender(editItem.gender));
            dispatch(setDOB(editItem.dob));
        }
    }, [isEditDialogOpen, selectedIndex]);

    const handleClose = () => {
        dispatch(setIsEditDialogOpen(false));
        dispatch(resetForm());
        dispatch(setSelectedIndex(null));
    };

    const handleSave = () => {
        dispatch(updateHistoryItem({
            index: selectedIndex,
            data: {name, gender, dob}
        }));
        dispatch(resetForm());
        dispatch(setIsEditDialogOpen(false));
        dispatch(setShowSuccessMessage(true));
    };

    const isSubmitDisabled = !name || !gender || !dob;

    return (
        <Modal
            open={isEditDialogOpen}
            onClose={handleClose}
        >
            <Box sx={editDialogStyle}>
                <Typography variant="h6" sx={{fontWeight: '600'}}>Edit Details</Typography>
                <InputField value={name}/>
                <GenderSelect value={gender}/>
                <DatePickerField value={dob}/>
                <Box sx={buttonStyle}>
                    <Button variant="contained" color="error" size="small" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" size="small" onClick={handleSave} disabled={isSubmitDisabled}>
                        Save
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}