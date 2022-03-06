import React,{useMemo} from 'react'
import {detail} from '../slice'
import {useSelector} from 'react-redux'
import { CheckIcon, BriefcaseIcon } from '@heroicons/react/outline'
import Completed from './Completed'
import UserStatus from './UserStatus'

export default function UserDetail() {
    const {avatarColor, avatarBg, avatarImg, user, status, statusBg, statusColor, role, roleIconColor, mail} = useSelector(detail)

    const roleBg = useMemo(()=>{
        const color = roleIconColor.split('-')
        return `bg-${color[1]}-100`
    },[roleIconColor])

    return (
    <section className="userDetail grid grid-cols-3 gap-10 mb-16 mt-10">
        <div className="detail col-span-1">

            <div className="aboutUser bg-white rounded-xl shadow-md pt-20">
                <figure className={`w-40 h-40 mx-auto rounded-lg flex items-center justify-center font-semibold text-7xl ${avatarColor} ${avatarBg}`}>{avatarImg}</figure>
                <div className="userName text-center pt-7 pb-11">
                    <h2 className="text-3xl font-medium text-gray-500 pb-3">{user[0]}</h2>
                    <button className={`${roleIconColor} ${roleBg} text-lg text-semibold py-0.5 px-3 rounded-lg font-semibold cursor-text`}>{role[0]}</button>
                </div>
                <div className="completedTask px-14 flex justify-between items-center">
                    <Completed amount="1.76k" desc="Tasks Done" Icon={CheckIcon}/>
                    <Completed amount="865" desc="Projects Done" Icon={BriefcaseIcon}/>
                </div>
                <div className="allDetails px-8 pt-10 pb-7">
                    <h2 className="text-gray-600 text-3xl font-semibold border-0 border-b border-solid border-gray-200 pb-3 mb-6">Details</h2>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">User Name:</span> {user[0]}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Billing Email:</span> {mail}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Status:</span>
                        {/* <button className={`${statusColor} ${statusBg} text-lg text-semibold py-0.5 px-3 rounded-xl font-semibold cursor-text ml-2`}>{status[0]}</button> */}
                        <UserStatus color={statusColor} bgColor={statusBg} status={status[0]}/>
                    </p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Role:</span> {role[0]}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Tax Id:</span> Tax-{Math.floor(Math.random()*5000)+1105}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Contact:</span> (200) 586-2264</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Language:</span> Swedish</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Country:</span> Sweden</p>
                    <div className="button flex justify-center mt-12 gap-6">
                        <button className="rounded-lg text-2xl px-8 py-3 bg-blue-600 font-medium text-white capitalize hover:shadow-md hover:shadow-blue-400 cursor-pointer">Contact</button>
                        <button className="rounded-lg text-2xl px-8 py-3 font-medium text-red-600 capitalize cursor-pointer border border-solid border-red-600">Like</button>
                    </div>
                </div>
            </div>

        </div>

        <div className="info col-span-2">dsafsd</div>
    </section>
    )
}
