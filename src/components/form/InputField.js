import React from "react";
import {InputLabel, FormControl, Input, FormHelperText} from "@mui/material";

export default function InputField({name, setName, showError}) {

    return (
        <FormControl error={showError} sx={{width: '100%', minHeight: '3rem'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
                id="name-input"
                placeholder="Write your name here"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
            {
                showError
                &&
                <FormHelperText focused>
                    Name should not be empty.
                </FormHelperText>
            }
        </FormControl>
    )
}