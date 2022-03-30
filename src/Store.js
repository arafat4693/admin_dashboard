import { configureStore } from '@reduxjs/toolkit'
import adminReducer from './slice'

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['admin/userDelete','admin/ascSort','admin/dscSort','admin/openBox','admin/userDetail','admin/setLoc','admin/setMenu'],
        }
    }),

    reducer:{
        users: adminReducer
    }
})

export default store