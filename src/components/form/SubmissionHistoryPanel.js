import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";

export default function SubmissionHistoryPanel({submissionHistory}) {
    return (
        <>
            <TableContainer component={Paper} sx={{width: "22rem",margin:"auto", maxHeight: "20rem", overflowY: "auto"}}>
                <Typography variant="h6" sx={{marginX: "1rem", marginTop: "1rem",fontWeight: '600', }}>
                    Submission History
                </Typography>
                <Table sx={{ minWidth: 200 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {submissionHistory?.map((details,index) => (
                            <TableRow
                                key={index}>
                                <TableCell align="left">{details.name}</TableCell>
                                <TableCell align="left">{details.gender}</TableCell>
                                <TableCell align="left">{details.dob.format('DD-MM-YYYY')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}