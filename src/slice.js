import {createSlice} from '@reduxjs/toolkit'
import {allUsers} from './data'

const initialState = {
    usersList: [...allUsers],
}

export const admin = createSlice({
    name: "admin",
    initialState,
    reducers:{
        userDelete: (state, action)=>{
            state.usersList = state.usersList.filter(user=>(user.id!=action.payload))
        }
    }
})

export const users = (state)=>state.users.usersList
export const {userDelete} = admin.actions
export default admin.reducer 