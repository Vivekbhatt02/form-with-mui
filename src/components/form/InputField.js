import React from "react";
import {InputLabel, FormControl, Input} from "@mui/material";

export default function InputField({name, setName}) {
    return (
        <FormControl required sx={{width: '100%'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
                id="name-input"
                placeholder="Write your name here"
                onChange={(event) => setName(event.target.value)}
                value={name}
            />
        </FormControl>
    )
}