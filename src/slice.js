import {createSlice} from '@reduxjs/toolkit'
import {allUsers} from './data'

const initialState = {
    usersList: [...allUsers],
    lbVisible : {
        visible:false, 
        actionType:'Submit',
        edit:{
            id: '',
            fullName: '',
            email: ''
        }
    },
    details: {...allUsers[0]}
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
            }else if(action.payload.userData && action.payload.typeAction==='Update'){
                const updatedUserId = state.lbVisible.edit.id
                const idx = state.usersList.findIndex(user=>user.id===updatedUserId)
                state.usersList[idx].user = [action.payload.userData.fullName]
                state.usersList[idx].mail = [action.payload.userData.email]
                state.usersList[idx].plan = [action.payload.userData.plan, "Select Plan"]
                state.usersList[idx].role = [action.payload.userData.role, "Select Role"]
            }
            if(action.payload.id){
                const userId = action.payload.id
                const currentUser = state.usersList.find(user=>user.id===userId)
                state.lbVisible.edit.fullName = currentUser.user[0]
                state.lbVisible.edit.email = currentUser.mail
                state.lbVisible.edit.id = userId
            }
        }
    }
})

export const users = (state)=>state.users.usersList
export const lb = (state) => state.users.lbVisible
export const detail = (state) => state.users.details
export const {userDelete, ascSort, dscSort, openBox} = admin.actions
export default admin.reducer 