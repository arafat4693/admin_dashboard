import {createSlice} from '@reduxjs/toolkit'
import {allUsers} from './data'

const initialState = {
    usersList: [...allUsers]
}

export const admin = createSlice({
    name: "admin",
    initialState,
    reducers:{}
})

export const users = (state)=>state.users.usersList
export default admin.reducer 