import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {Container, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {clearHistory} from "../feature/userform/userFormSlice";

export default function HistoryPanel() {
    const dispatch = useDispatch();
    const {submissionHistory} = useSelector(state => state.userForm);
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 300,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 300,
        },
        {
            field: 'dob',
            headerName: 'DOB',
            width: 300,
        },
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
        <Container sx={{marginTop: '4rem', width: '60rem'}}>
            <Typography variant="h6" sx={{fontWeight: '600', marginBottom: '1rem'}}>
                Submission History
            </Typography>
            <Box sx={{width: '100%'}}>
                <DataGrid
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
                onClick={handleClearHistory}>
                Clear All
            </Button>
        </Container>
    )
}