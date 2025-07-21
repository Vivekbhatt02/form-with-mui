import {createSlice} from '@reduxjs/toolkit'

export const userFormSlice = createSlice({
    name: 'userForm',
    initialState: {
        name: '',
        gender: '',
        dob: null,
        submissionHistory: [],
        isNameValid: true,
        isPreviewDialogOpen: false,
        isEditDialogOpen: false,
        showSuccessMessage: false,
        showDeleteConfirmation: false,
        selectedIndex: null,
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
        setIsNameValid: (state, action) => {
            state.isNameValid = action.payload
        },
        setIsPreviewDialogOpen: (state, action) => {
            state.isPreviewDialogOpen = action.payload
        },
        setIsEditDialogOpen: (state, action) => {
            state.isEditDialogOpen = action.payload
        },
        setShowSuccessMessage: (state, action) => {
            state.showSuccessMessage = action.payload
        },
        setShowDeleteConfirmation: (state, action) => {
            state.showDeleteConfirmation = action.payload
        },
        setSelectedIndex: (state, action) => {
            state.selectedIndex = action.payload
        },
        updateHistoryItem: (state, action) => {
            const {index, data} = action.payload;
            state.submissionHistory[index] = data;

        },
        deleteSelectedHistoryItem: (state, action) => {
            const index = action.payload.index;
            state.submissionHistory.splice(index, 1);
        }
    },
})

export const {
    setName,
    setGender,
    setDOB,
    submitForm,
    resetForm,
    clearHistory,
    setIsNameValid,
    setIsPreviewDialogOpen,
    setIsEditDialogOpen,
    setShowSuccessMessage,
    setSelectedIndex,
    updateHistoryItem,
    deleteSelectedHistoryItem,
    setShowDeleteConfirmation
} = userFormSlice.actions

export default userFormSlice.reducer