import {createSlice} from '@reduxjs/toolkit'
import {allUsers} from './data'

const initialState = {
    usersList: [...allUsers],
    lbVisible : {
        visible:false, 
        actionType:'Submit'
    }
}

export const admin = createSlice({
    name: "admin",
    initialState,
    reducers:{
        userDelete: (state, action)=>{
            state.usersList = state.usersList.filter(user=>(user.id!==action.payload))
        },
        ascSort: (state, action)=>{
            state.usersList = state.usersList.sort((a, b) => { return (a[action.payload][0] > b[action.payload][0] ? 1 : (a[action.payload][0] === b[action.payload][0] ? 0 : -1)) })
        },
        dscSort: (state, action)=>{
            state.usersList = state.usersList.sort((a, b) => { return (a[action.payload][0] > b[action.payload][0] ? -1 : (a[action.payload][0] === b[action.payload][0] ? 0 : 1)) })
        },
        openBox: (state, action)=>{
            state.lbVisible.visible = action.payload.visibleClass
            state.lbVisible.actionType = action.payload.typeAction
            if(action.payload.userData && action.payload.typeAction==='Submit'){
                state.usersList = [action.payload.userData, ...state.usersList]
            }
        }
    }
})

export const users = (state)=>state.users.usersList
export const lb = (state) => state.users.lbVisible
export const {userDelete, ascSort, dscSort, openBox} = admin.actions
export default admin.reducer 