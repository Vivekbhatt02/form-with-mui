import React from "react";
import {FormControl} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function DatePickerField({dob, setDOB}) {

    return (
        <FormControl sx={{width: '100%'}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label={'DOB'}
                    views={['year', 'month', 'day']}
                    sx={{minWidth: 250}}
                    onChange={(event) => setDOB(event)}
                    value={dob}
                    maxDate={dayjs().subtract(1, 'day')}
                />
            </LocalizationProvider>
        </FormControl>
    )
}