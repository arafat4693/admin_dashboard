import React,{useState} from 'react'
import { XIcon } from '@heroicons/react/outline'
import InputBox from './InputBox'
import {userRole, userPlan} from '../data'
import UserFilter from './UserFilter'
import { useForm } from "react-hook-form";
import {openBox} from '../slice'
import {randomColors, pickColor, randomRole} from '../data'
import { motion  } from "framer-motion"

export default function AddUser({cancelForm, dispatch, Lb}) {
    const [userInfo, setUserInfo] = useState({
        'User Role': 'Subscriber',
        'User Plan': 'Basic'
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    function submitForm(data){
        const fullName = data.fullName.split(' ')
        const avatarStyle = pickColor(randomColors)
        const roleInfo = randomRole[userInfo['User Role']]
        const newUser = {
            id: Date.now(),
            avatarImg: fullName.length===1?`${fullName[0].slice(0,2)}`.toUpperCase():`${fullName[0][0]}${fullName[1][0]}`.toUpperCase(),
            avatarColor: avatarStyle[0],
            avatarBg: avatarStyle[1],
            user: [fullName.join(' ')],
            mail: data.email,
            plan: [userInfo['User Plan'], "Select Plan"],
            billing: "Auto Debit",
            status: ["Active", "Select Status"],
            statusBg: "bg-green-100",
            statusColor: "text-green-500",
            role: [userInfo['User Role'], "Select Role"],
            roleIcon: roleInfo[0],
            roleIconColor: roleInfo[1]
        }
        reset()
        dispatch(openBox({visibleClass:false, typeAction:'Submit', userData:newUser}))
    }

    return (
    <motion.div className={` addUser bg-white absolute top-0 right-0 h-screen w-full sm:w-98 normal-case`} initial={{x: "35rem"}} animate={{x: 0}}>
        <h2 className="h-4.5 px-7 bg-gray-100 flex justify-between items-center text-2xl text-gray-600 font-medium">
            New User 
            <XIcon className="w-6 h-6 text-gray-500 cursor-pointer" onClick={cancelForm}/>
        </h2>
        <form className="inputContainer py-6 px-7 w-full overflow-y-scroll myScroll" onSubmit={handleSubmit(submitForm)}>
            <InputBox name="Full Name" iType="text" label="fullName" register={register} errors={errors}/>
            <InputBox name="Username" iType="text" label="userName" register={register} errors={errors}/>
            <InputBox name="Email" iType="email" label="email" desc register={register} errors={errors}/>
            <InputBox name="Contact" iType="number" label="number" register={register} errors={errors}/>
            <InputBox name="Company" iType="text" label="company" register={register} errors={errors}/>
            <UserFilter setPowerState={setUserInfo} option="User Role" setting={userRole}/>
            <div className="py-3.5"></div>
            <UserFilter setPowerState={setUserInfo} option="User Plan" setting={userPlan}/>
            <div className="mt-6">
                <input type="submit" value="Submit" className="rounded-lg text-2xl px-8 py-3 bg-blue-600 text-white capitalize hover:shadow-sm hover:shadow-blue-400 mr-5 cursor-pointer"/>
                <button type="button" onClick={cancelForm} className="rounded-lg text-2xl px-8 py-3 border border-solid border-gray-400 text-gray-500 capitalize font-medium">Cancel</button>
            </div>
        </form>
    </motion.div>
    )
}
