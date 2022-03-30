import React,{useMemo, useEffect} from 'react'
import {detail} from '../slice'
import {useSelector} from 'react-redux'
import { CheckIcon, BriefcaseIcon } from '@heroicons/react/outline'
import Completed from './Completed'
import UserStatus from './UserStatus'
import Bar from './Bar'
import DetailsInfo from './DetailsInfo'
import Footer from './Footer'
import {useLocation } from "react-router-dom"
import {useDispatch} from 'react-redux'
import {setLoc,userDetail} from '../slice'
import {Link} from "react-router-dom";

export default function UserDetail() {
    const {avatarColor, avatarBg, avatarImg, user, status, statusBg, statusColor, role, roleIconColor, mail, id} = useSelector(detail)
    const { pathname } = useLocation()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(userDetail({id}))
    },[])

    const roleBg = useMemo(()=>{
        if(!roleIconColor) return
        const color = roleIconColor.split('-')
        return `bg-${color[1]}-100`
    },[roleIconColor])

    
    useEffect(()=>{
        dispatch(setLoc(pathname))
    },[pathname])

    return (
        <>
    {id?
    <>
    <section className="userDetail grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 mt-10">
        <div className="detail col-span-1">

            <div className="aboutUser bg-white rounded-xl shadow-md pt-20 mb-10">
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
                        <UserStatus color={statusColor} bgColor={statusBg} status={status[0]}/>
                    </p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Role:</span> {role[0]}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Tax Id:</span> Tax-{Math.floor(Math.random()*5000)+1105}</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Contact:</span> (200) 586-2264</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Language:</span> Swedish</p>
                    <p className="detailsP__style"><span className="font-semibold text-gray-600">Country:</span> Sweden</p>
                    <div className="button flex justify-center mt-12 gap-6">
                        <button className="px-8 py-3 secButton__style">Contact</button>
                        <button className="rounded-lg text-2xl px-8 py-3 font-medium text-red-600 capitalize cursor-pointer border border-solid border-red-600">Like</button>
                    </div>
                </div>
            </div>

            <div className="price bg-white border border-blue-500 border-solid shadow-md rounded-xl p-6">
                <div className="priceAmount flex justify-between items-start">
                    <button className={`text-blue-500 bg-blue-100 text-xl text-semibold py-0.5 px-3 rounded-lg font-semibold cursor-text`}>Standard</button>
                    <div className="totalPrice flex">
                        <sup className="text-blue-500 font-semibold text-2xl mt-3">$</sup>
                        <span className="text-blue-500 font-bold text-6xl">99</span>
                        <sub className="text-gray-600 font-normal text-xl normal-case mt-auto mb-2">/month</sub>
                    </div>
                </div>
                <ul className="list-disc pl-6 text-2xl text-gray-600 font-normal pt-5 pb-8">
                    <li>20 Users</li>
                    <li className="py-2">Up to 100 GB storage</li>
                    <li>Advance Support</li>
                </ul>
                <div className="levelBox">
                    <div className="levelHeader text-2xl font-semibold text-gray-600 flex justify-between items-center normal-case mb-3">
                        <h2>Days</h2>
                        <h2>4 of 30 Days</h2>
                    </div>
                    <Bar percent="w-4/5" innerColor="bg-blue-500" outerColor="bg-blue-100" height="h-3"/>
                    <p className="text-xl text-gray-400 font-medium normal-case mt-3">5 days remaining</p>
                </div>
                <button className="secButton__style px-8 py-3 w-full mt-7">upgrade plan</button>
            </div>

        </div>

        <DetailsInfo/>

    </section>
    <Footer/>
    </>
    :<div className="errorMsg mt-8">
        <h2 className="normal-case bg-red-100 text-red-500 text-2xl drop-shadow font-semibold py-3 pl-4 rounded-tl-xl rounded-tr-xl">User not found</h2>
        <h2 className="normal-case bg-red-100 text-red-500 text-2xl font-medium py-3 pl-4 rounded-bl-xl rounded-br-xl">User might've got deleted. Check list of all Users: <Link to="/user/list" className="text-blue-500">Users List</Link></h2>
    </div>}
    </>
    )
}
