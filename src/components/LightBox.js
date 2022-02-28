import React,{useState} from 'react'
import { XIcon } from '@heroicons/react/outline'
import InputBox from './InputBox'
import {userRole, userPlan} from '../data'
import UserFilter from './UserFilter'

export default function LightBox() {
    const [userInfo, setUserInfo] = useState({
        'User Role': 'Subscriber',
        'User Plan': 'Basic'
    })

    function submitForm(e){
        e.preventDefault()
        console.log('hello')
    }

    return (
    <section className="lightBox fixed w-full h-screen top-0 left-0 lightBox_bg z-50">
        <div className="addUser bg-white absolute top-0 right-0 h-screen w-98 normal-case">
            <h2 className="h-4.5 px-7 bg-gray-100 flex justify-between items-center text-2xl text-gray-600 font-medium">
                New User 
                <XIcon className="w-6 h-6 text-gray-500 cursor-pointer"/>
            </h2>
            <form className="inputContainer py-6 px-7 w-full overflow-y-scroll myScroll">
                <InputBox name="Full Name" iType="text" label="fullName"/>
                <InputBox name="Username" iType="text" label="userName"/>
                <InputBox name="Email" iType="email" label="email" desc/>
                <InputBox name="Contact" iType="number" label="number"/>
                <InputBox name="Company" iType="text" label="company"/>
                <UserFilter setPowerState={setUserInfo} option="User Role" setting={userRole}/>
                <div className="divider" className="py-3.5"></div>
                <UserFilter setPowerState={setUserInfo} option="User Plan" setting={userPlan}/>
                <div className="mt-6">
                    <input onClick={submitForm} type="submit" value="Submit" className="rounded-lg text-2xl px-8 py-3 bg-blue-600 text-white capitalize hover:shadow-sm hover:shadow-blue-400 mr-5 cursor-pointer"/>
                    <button className="rounded-lg text-2xl px-8 py-3 border border-solid border-gray-400 text-gray-500 capitalize font-medium">Cancel</button>
                </div>
            </form>
        </div>
    </section>
  )
}
