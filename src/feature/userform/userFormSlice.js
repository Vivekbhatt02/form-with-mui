import {createSlice} from '@reduxjs/toolkit'

export const userFormSlice = createSlice({
    name: 'userForm',
    initialState: {
        name: '',
        gender: '',
        dob: null,
        submissionHistory: [],
        isNameVaild: false,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setGender: (state, action) => {
            state.gender = action.payload
        },
        setDOB: (state, action) => {
            state.dob = action.payload
        },
        submitForm: (state) => {
            state.submissionHistory.push({
                name: state.name,
                gender: state.gender,
                dob: state.dob,
            })
        },
        resetForm: (state) => {
            state.name = ''
            state.gender = ''
            state.dob = null
        },
        clearHistory: (state) => {
            state.submissionHistory = []
        },
        setIsNameVaild: (state, action) => {
            state.isNameVaild = action.payload
        }
    },
})

export const {setName, setGender, setDOB, submitForm, resetForm, clearHistory, setIsNameVaild} = userFormSlice.actions

export default userFormSlice.reducer