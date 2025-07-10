import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";
import {useDispatch} from "react-redux";
import {setGender} from "../../feature/userform/userFormSlice";

export default function GenderSelect({value}) {
    const dispatch = useDispatch();
    const handleGenderChange = (event) => {
        dispatch(setGender(event.target.value));
    };

    return (
        <FormControl sx={{width: '100%'}}>
            <InputLabel>Gender</InputLabel>
            <Select
                label='Gender'
                onChange={handleGenderChange}
                value={value}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
            </Select>
        </FormControl>
    )
}