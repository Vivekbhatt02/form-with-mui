import React from "react";
import {FormControl, InputLabel, Select, MenuItem} from "@mui/material";

export default function GenderSelect({gender, setGender}) {

    return (
        <FormControl sx={{width: '100%'}}>
            <InputLabel>Gender</InputLabel>
            <Select
                label='Gender'
                onChange={(event) => setGender(event.target.value)}
                value={gender}>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
            </Select>
        </FormControl>
    )
}