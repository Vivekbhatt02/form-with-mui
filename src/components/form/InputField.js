import React from "react";
import {InputLabel, FormControl, Input, FormHelperText} from "@mui/material";

export default function InputField({name, setName, isNameNotEntered}) {

    return (
        <FormControl error={isNameNotEntered} sx={{width: '100%', minHeight: '3rem'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
                id="name-input"
                placeholder="Write your name here"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
            {
                isNameNotEntered
                &&
                <FormHelperText focused>
                    Name should not be empty.
                </FormHelperText>
            }
        </FormControl>
    )
}