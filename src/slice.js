import {createSlice} from '@reduxjs/toolkit'
import {allUsers} from './data'

const KEY = 'DETAIL'
if(!localStorage.getItem(KEY)){
    localStorage.setItem(KEY, JSON.stringify({...allUsers[0]}))
}

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
    details: {...JSON.parse(localStorage.getItem(KEY))},
    currentLoc: '/dashboard/ecommerce',
    menuState: false
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
                state.usersList[idx].mail = action.payload.userData.email
                state.usersList[idx].plan = [action.payload.userData.plan, "Select Plan"]
                state.usersList[idx].role = [action.payload.userData.role, "Select Role"]
                if(JSON.parse(localStorage.getItem(KEY)).id === state.usersList[idx].id){
                    localStorage.setItem(KEY, JSON.stringify(state.usersList[idx]))
                    state.details = state.usersList[idx]
                }
            }
            if(action.payload.id){
                const userId = action.payload.id
                const currentUser = state.usersList.find(user=>user.id===userId)
                state.lbVisible.edit.fullName = currentUser.user[0]
                state.lbVisible.edit.email = currentUser.mail
                state.lbVisible.edit.id = userId
            }
        },
        userDetail: (state, action) => {
            const detailId = action.payload.id
            const detailedUser = state.usersList.find(user=>user.id===detailId)
            if(detailedUser){
                state.details = detailedUser
                localStorage.setItem(KEY, JSON.stringify(detailedUser))
            }else{
                state.details = ''
            }
        },
        setLoc: (state, action) => {
            state.currentLoc = action.payload
        },
        setMenu: (state) => {
            state.menuState = !state.menuState
        }
    }
})

export const users = (state)=>state.users.usersList
export const lb = (state) => state.users.lbVisible
export const detail = (state) => state.users.details
export const currentRoute = (state) => state.users.currentLoc
export const getMenuState = (state) => state.users.menuState
export const {userDelete, ascSort, dscSort, openBox, userDetail, setLoc, setMenu} = admin.actions
export default admin.reducer 