import React, {useEffect} from 'react'
import UserAvatar from './UserAvatar'
import UserRole from './UserRole'
import UserStatus from './UserStatus'
import ActionMenu from './ActionMenu'
import { ChevronUpIcon } from '@heroicons/react/outline'

export default function UserTable({showUsers,userSlice,setUserSlice, buttonActive, allUsers}) {

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
    },[allUsers, showUsers])

    return (
        <>
        {
            allUsers.length?
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr className="text-left">
                        <th className="th__style w-1/4 cursor-pointer group">USER <ChevronUpIcon className="w-6 h-6 text-gray-600 inline-block ml-2 opacity-0 group-hover:opacity-50 transition duration-150 ease-in"/></th>
                        <th className="th__style w-1/6">ROLE</th>
                        <th className="th__style w-1/6">PLAN</th>
                        <th className="th__style w-1/6">BILLING</th>
                        <th className="th__style">STATUS</th>
                        <th className="th__style">ACTION</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        userSlice[buttonActive-1]?.map((user, index)=>(
                            <tr key={user.id} className={`${(index !== userSlice[+buttonActive-1].length-1) && 'border-0 border-b border-gray-300 border-solid'}`}>
                                <td className="py-4 px-11"><UserAvatar avatarImg={user.avatarImg} name={user.name} mail={user.mail} color={user.avatarColor} bgColor={user.avatarBg}/></td>
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
