import React, {useState, useEffect} from "react";
import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {Container, Typography, Fade} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {
    clearHistory,
    setIsEditDialogOpen,
    setSelectedIndex,
    deleteSelectedHistoryItem,
    setShowSuccessMessage,
    setShowDeleteConfirmation
} from "../../feature/userform/userFormSlice";
import EditInfoDialog from "./EditInfoDialog";
import CustomAlert from "../alert/CustomAlert";

export default function HistoryPanel() {
    const dispatch = useDispatch();
    const {submissionHistory, isEditDialogOpen, showSuccessMessage, showDeleteConfirmation} = useSelector(state => state.userForm);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 200
        },
        {
            field: 'dob',
            headerName: 'DOB',
            width: 200,
        },
        {
            field: 'edit',
            headerName: 'Edit',
            width: 150,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    size="small"
                    onClick={() => {
                        dispatch(setSelectedIndex(params.row.id));
                        dispatch(setIsEditDialogOpen(true));
                    }}>
                    Edit
                </Button>
            )
        },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => {
                        dispatch(deleteSelectedHistoryItem({ index: params.row.id}));
                        dispatch(setShowDeleteConfirmation(true));
                    }}>
                    Delete
                </Button>
            )
        }
    ]

    const rows = submissionHistory.map((submission, index) => ({
        id: index,
        name: submission.name,
        gender: submission.gender,
        dob: submission.dob.format('DD-MM-YYYY'),
    }));

    const handleClearHistory = () => {
        dispatch(clearHistory());
    };

    return (
        <>
            <Fade in={isVisible} timeout={800}>
                <Container sx={{marginTop: '4rem', width: '60rem'}}>
                    <Typography variant="h6" sx={{fontWeight: '600', marginBottom: '1rem'}}>
                        Submission History
                    </Typography>
                        <Box sx={{width: '100%'}}>
                            <DataGrid
                                disableRowSelectionOnClick
                                rows={rows}
                                columns={columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                pageSizeOptions={[5]}/>
                        </Box>
                        <Button
                            variant="contained"
                            sx={{width: "7rem", marginTop: "1rem", marginLeft: "auto"}}
                            disabled={submissionHistory.length === 0}
                            onClick={handleClearHistory}>
                            Clear All
                        </Button>
                </Container>
            </Fade>
            {
                isEditDialogOpen
                &&
                <EditInfoDialog/>
            }
            {
                showSuccessMessage
                &&
                <CustomAlert alertMessage={'Details Updated Successfully.'} severity="success" handleClose={() => dispatch(setShowSuccessMessage(false))}/>
            }
            {
                showDeleteConfirmation
                &&
                <CustomAlert alertMessage={'Deleted Successfully.'} severity="error" handleClose={() => dispatch(setShowDeleteConfirmation(false))}/>

            }
        </>
    )
}