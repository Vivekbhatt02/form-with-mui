import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {List} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import {useDispatch, useSelector} from "react-redux";
import {
    resetForm,
    setIsPreviewDialogOpen,
    setShowSuccessMessage,
    submitForm
} from "../../feature/userform/userFormSlice";

const listStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
};
const buttonStyle = {
    mt: 3,
    display: 'flex',
    justifyContent: 'space-between',
};

export default function InputPreviewBox() {
    const dispatch = useDispatch();
    const {isPreviewDialogOpen, name, gender, dob} = useSelector(state => state.userForm);

    const handleCancel = () => {
        dispatch(setIsPreviewDialogOpen(false));
    };

    const handleConfirm = () => {
        dispatch(submitForm());
        dispatch(resetForm());
        dispatch(setIsPreviewDialogOpen(false));
        dispatch((setShowSuccessMessage(true)));
        setTimeout(() => {
            dispatch(setShowSuccessMessage(false));
        }, 1500);

    };

    return (
        <Box>
            <Modal
                open={isPreviewDialogOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <List sx={listStyle}>
                        <ListItemText primary={`Name: ${name}`}/>
                        <Divider/>
                        <ListItemText primary={`Gender: ${gender}`}/>
                        <Divider/>
                        <ListItemText primary={`DOB: ${dob?.format('DD-MM-YYYY')}`}/>
                        <Box sx={buttonStyle}>
                            <Button size='small' variant="contained" color='error'
                                    onClick={handleCancel}>Cancel</Button>
                            <Button size='small' variant="contained" onClick={handleConfirm}>Confirm</Button>
                        </Box>
                    </List>
                </Box>
            </Modal>

        </Box>
    );
}
