import React from "react";
import moment from "moment";
import {FormControl} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers";
import {useDispatch} from "react-redux";
import {setDOB} from "../../feature/userform/userFormSlice";

export default function DatePickerField({value}) {
    const dispatch = useDispatch();
    const handleDOBChange = (event) => {
        dispatch(setDOB(event));
    };

    return (
        <FormControl sx={{width: '100%'}}>
            <DatePicker
                label={'DOB'}
                views={['year', 'month', 'day']}
                sx={{minWidth: 250}}
                onChange={handleDOBChange}
                value={value}
                maxDate={moment().startOf('day').subtract(1, 'day')}/>
        </FormControl>
    )
}