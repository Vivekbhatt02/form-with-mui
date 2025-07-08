import React from "react";
import {InputLabel, FormControl, Input, FormHelperText} from "@mui/material";

export default function InputField({value, error, onChange}) {

    return (
        <FormControl error={error} required sx={{width: '100%', minHeight: '3rem'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
                id="name-input"
                placeholder="Write your name here"
                onChange={onChange}
                value={value}
            />
            {
                error
                &&
                <FormHelperText focused>
                    Name should not be empty.
                </FormHelperText>
            }
        </FormControl>
    )
}