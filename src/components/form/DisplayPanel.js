import React from 'react';
import {Box, Typography} from '@mui/material';

export default function DisplayPanel({submittedDetails}) {

    return (
        <Box sx={{justifyContent: 'flex-start'}}>
            <Typography>
                Name: {submittedDetails.name}
            </Typography>
            <Typography>
                Gender: {submittedDetails.gender}
            </Typography>
            <Typography>
                Age: {submittedDetails.dob && submittedDetails.dob.format('DD-MM-YYYY')}
            </Typography>
        </Box>
    )
}