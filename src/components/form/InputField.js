import React from "react";
import {InputLabel, FormControl, Input, FormHelperText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setIsNameVaild, setName} from "../../feature/userform/userFormSlice";

export default function InputField({value}) {
    const dispatch = useDispatch();
    const isNameValid = useSelector(state => state.userForm.isNameVaild);
    const handleNameChange = (event) => {
        dispatch(setName(event.target.value));
        if (event.target.value.trim().length === 0) {
            dispatch(setIsNameVaild(false));
        } else if (event.target.value.trim().length > 0){
            dispatch(setIsNameVaild(true));
        }
    };

    return (
        <FormControl required error={!isNameValid} sx={{width: '100%', minHeight: '3rem'}}>
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
                id="name-input"
                placeholder="Write your name here"
                onChange={handleNameChange}
                value={value}
            />
            {
                !isNameValid
                &&
                <FormHelperText focused>
                    Name should not be empty.
                </FormHelperText>
            }
        </FormControl>
    )
}