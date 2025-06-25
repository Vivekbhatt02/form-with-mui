import React from "react";
import moment from "moment";
import { FormControl } from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterMoment} from '@mui/x-date-pickers/AdapterMoment';

export default function DatePickerField({ dob, setDOB }) {

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <FormControl sx={{ width: '100%' }}>
                <DatePicker
                    label={'DOB'}
                    views={['year', 'month', 'day']}
                    sx={{ minWidth: 250 }}
                    onChange={(event) => setDOB(event)}
                    value={dob}
                    maxDate={moment().startOf('day').subtract(1, 'day')}
                />
            </FormControl>
        </LocalizationProvider>
    )
}