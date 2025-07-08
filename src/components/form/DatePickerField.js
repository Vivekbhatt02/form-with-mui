import React from "react";
import moment from "moment";
import {FormControl} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";

export default function DatePickerField({ dob, setDOB }) {

    return (
            <FormControl sx={{ width: '100%' }}>
                <DatePicker
                    label={'DOB'}
                    views={['year', 'month', 'day']}
                    sx={{ minWidth: 250 }}
                    onChange={(event) => setDOB(event)}
                    value={dob}
                    maxDate={moment().startOf('day').subtract(1, 'day')}/>
            </FormControl>
    )
}