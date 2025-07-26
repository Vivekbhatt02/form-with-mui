import {configureStore} from '@reduxjs/toolkit'
import userFormReducer from '../feature/userform/userFormSlice'
import themeReducer from '../feature/theme/themeSlice'

export default configureStore({
    reducer: {
        userForm: userFormReducer,
        theme: themeReducer,
    },
})