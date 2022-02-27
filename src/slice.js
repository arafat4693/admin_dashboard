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
        },
        ascSort: (state, action)=>{
            state.usersList = state.usersList.sort((a, b) => { return (a[action.payload] > b[action.payload] ? 1 : (a[action.payload] === b[action.payload] ? 0 : -1)) })
        },
        dscSort: (state, action)=>{
            state.usersList = state.usersList.sort((a, b) => { return (a[action.payload] > b[action.payload] ? -1 : (a[action.payload] === b[action.payload] ? 0 : 1)) })
        }
    }
})

export const users = (state)=>state.users.usersList
export const {userDelete, ascSort, dscSort} = admin.actions
export default admin.reducer 