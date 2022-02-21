import React, {useEffect} from 'react'
import UserAvatar from './UserAvatar'
import UserRole from './UserRole'
import UserStatus from './UserStatus'
import ActionMenu from './ActionMenu'
import {useSelector} from 'react-redux'
import {users} from '../slice'

export default function UserTable({showUsers,userSlice,setUserSlice, buttonActive}) {
    const allUsers = useSelector(users)

    useEffect(()=>{
        const fullPage = Math.floor(allUsers.length/showUsers)
        const remainedUser = allUsers.length%showUsers
        let userListPerPage = []
        let count = 0
        Array(fullPage).fill(0).forEach(elm=>{
            userListPerPage.push(allUsers.slice(showUsers*count, showUsers*(count+1)))
            count+=1
        })
        remainedUser && userListPerPage.push(allUsers.slice(remainedUser))
        setUserSlice([...userListPerPage])
    },[allUsers, showUsers])

    return (
    <table className="w-full">
        <thead className="bg-gray-100">
            <tr className="text-left">
                <th className="th__style w-1/4">USER</th>
                <th className="th__style w-1/6">ROLE</th>
                <th className="th__style w-1/6">PLAN</th>
                <th className="th__style w-1/6">BILLING</th>
                <th className="th__style">STATUS</th>
                <th className="th__style">ACTION</th>
            </tr>
            </thead>
        <tbody>
            {
                userSlice[+buttonActive-1]?.map((user, index)=>(
                    <tr key={user.id} className={`${(index != userSlice[+buttonActive-1].length-1) && 'border-0 border-b border-gray-300 border-solid'}`}>
                        <td className="py-4 px-11"><UserAvatar avatarImg={user.avatarImg} name={user.name} mail={user.mail} color={user.avatarColor} bgColor={user.avatarBg}/></td>
                        <td className="py-4 px-11"><UserRole Icon={user.roleIcon} role={user.role} color={user.roleIconColor}/></td>
                        <td className="py-4 px-11"><p className="font-medium text-xl text-gray-500">{user.plan}</p></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600"><p className="font-medium text-xl text-gray-500">{user.billing}</p></td>
                        <td className="py-4 px-11"><UserStatus status={user.status} color={user.statusColor} bgColor={user.statusBg}/></td>
                        <td className="py-4 px-11"><ActionMenu/></td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}
