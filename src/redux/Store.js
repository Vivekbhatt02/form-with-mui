import {configureStore} from '@reduxjs/toolkit'
import userFormReducer from '../feature/userform/userFormSlice'

export default configureStore({
    reducer: {
        userForm: userFormReducer,
    },
})