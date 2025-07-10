import Box from '@mui/material/Box';
import {DataGrid} from '@mui/x-data-grid';
import {Typography} from "@mui/material";

export default function SubmissionHistoryPanel({submissionHistory}) {
    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            width: 130,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 110,
        },
        {
            field: 'dob',
            headerName: 'DOB',
            width: 110,
        },
    ]

    const rows = submissionHistory.map((submission, index) => ({
        id: index,
        name: submission.name,
        gender: submission.gender,
        dob: submission.dob.format('DD-MM-YYYY'),
    }));

    return (
        <>
            <Typography variant="h6" sx={{fontWeight: '600',marginBottom: '-2rem'}}>
                Submission History
            </Typography>
            <Box sx={{height: 400, width: '100%'}}>
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
        </>
    )
}