import React, {useEffect, useState} from 'react'
import UserAvatar from './UserAvatar'
import UserRole from './UserRole'
import UserStatus from './UserStatus'
import ActionMenu from './ActionMenu'
import { ChevronUpIcon } from '@heroicons/react/outline'
import {useDispatch} from 'react-redux'
import {ascSort, dscSort} from '../slice'

const columnStatus = {
    user: false,
    role: false,
    plan: false,
    billing: false,
    status: false
}

export default function UserTable({showUsers,userSlice,setUserSlice, buttonActive, allUsers}) {
    const [userState, setUserState] = useState({
        status: {...columnStatus},
        rotate: {...columnStatus}
    })
    const dispatch = useDispatch()

    useEffect(()=>{
        const fullPage = Math.floor(allUsers.length/showUsers)
        const remainedUser = allUsers.length%showUsers
        let userListPerPage = []
        let count = 0
        Array(fullPage).fill(0).forEach(elm=>{
            userListPerPage.push(allUsers.slice(showUsers*count, showUsers*(count+1)))
            count+=1
        })
        remainedUser && userListPerPage.push(allUsers.slice(-remainedUser))
        setUserSlice([...userListPerPage])
    },[allUsers, showUsers, setUserSlice])

    function sortUsers(columnName){
        const name = columnName.trim().toLowerCase()
        if(userState.status[name]){
            setUserState(state=>({...state, rotate:{...state.rotate, [name]:!state.rotate[name]}}))
            if(userState.rotate[name]){
                dispatch(ascSort(name))
            }else{
                dispatch(dscSort(name))
            }
        }else{
            setUserState(state=>({...state, status:{...state.status, [name]:!state.status[name]}}))
            if(userState.rotate[name]){
                dispatch(dscSort(name))
            }else{
                dispatch(ascSort(name))
            }
        }
    }

    function loseFocus(columnName){
        const name = columnName.trim().toLowerCase()
        setUserState(state=>({...state, status:{...state.status, [name]:false}}))
    }

    return (
        <>
        {
            allUsers.length?
            <table className="min-w-[1220px] w-full mxl:min-w-0 mxl:w-full">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th onBlur={e=>loseFocus(e.target.innerText)} onClick={e=>sortUsers(e.target.innerText)} tabIndex={0} className="th__style cursor-pointer group">
                            USER 
                            <ChevronUpIcon className={`sortIcon__style ${!userState.status.user&&'opacity-0 group-hover:opacity-50'} ${userState.rotate.user?'rotate-180':'rotate-0'}`}/>
                        </th>
                        <th onBlur={e=>loseFocus(e.target.innerText)} onClick={e=>sortUsers(e.target.innerText)} tabIndex={0} className="th__style cursor-pointer group">
                            ROLE
                            <ChevronUpIcon className={`sortIcon__style ${!userState.status.role&&'opacity-0 group-hover:opacity-50'} ${userState.rotate.role?'rotate-180':'rotate-0'}`}/>
                        </th>
                        <th onBlur={e=>loseFocus(e.target.innerText)} onClick={e=>sortUsers(e.target.innerText)} tabIndex={0} className="th__style cursor-pointer group">
                            PLAN
                            <ChevronUpIcon className={`sortIcon__style ${!userState.status.plan&&'opacity-0 group-hover:opacity-50'} ${userState.rotate.plan?'rotate-180':'rotate-0'}`}/>
                        </th>
                        <th onBlur={e=>loseFocus(e.target.innerText)} onClick={e=>sortUsers(e.target.innerText)} tabIndex={0} className="th__style cursor-pointer group">
                            BILLING
                            <ChevronUpIcon className={`sortIcon__style ${!userState.status.billing&&'opacity-0 group-hover:opacity-50'} ${userState.rotate.billing?'rotate-180':'rotate-0'}`}/>
                        </th>
                        <th onBlur={e=>loseFocus(e.target.innerText)} onClick={e=>sortUsers(e.target.innerText)} tabIndex={0} className="th__style cursor-pointer group">
                            STATUS
                            <ChevronUpIcon className={`sortIcon__style ${!userState.status.status&&'opacity-0 group-hover:opacity-50'} ${userState.rotate.status?'rotate-180':'rotate-0'}`}/>
                        </th>
                        <th className="th__style">ACTION</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        userSlice[buttonActive-1]?.map((user, index)=>(
                            <tr key={user.id} className={`${(index !== userSlice[+buttonActive-1].length-1) && 'border-0 border-b border-gray-300 border-solid'}`}>
                                <td className="py-4 px-11"><UserAvatar avatarImg={user.avatarImg} name={user.user[0]} mail={user.mail} color={user.avatarColor} bgColor={user.avatarBg}/></td>
                                <td className="py-4 px-11"><UserRole Icon={user.roleIcon} role={user.role[0]} color={user.roleIconColor}/></td>
                                <td className="py-4 px-11"><p className="font-medium text-xl text-gray-500">{user.plan[0]}</p></td>
                                <td className="py-4 px-11 font-normal text-2xl text-gray-600"><p className="font-medium text-xl text-gray-500">{user.billing}</p></td>
                                <td className="py-4 px-11"><UserStatus status={user.status[0]} color={user.statusColor} bgColor={user.statusBg}/></td>
                                <td className="py-4 px-11"><ActionMenu userId={user.id}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            : <h2 className="text-center text-xl text-gray-600 font-normal py-8">There are no records to display</h2>
        }
        </>
  )
}
