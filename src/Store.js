import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slice'

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['admin/userDelete'],
        }
    }),

    reducer:{
        users: adminReducer
    }
})

export default store