import React,{useState, useEffect} from 'react'
import { XIcon } from '@heroicons/react/outline'
import InputBox from './InputBox'
import {userRole, userPlan} from '../data'
import UserFilter from './UserFilter'
import { useForm } from "react-hook-form";
import {openBox} from '../slice'
import { motion  } from "framer-motion"

export default function UpdateUser({cancelForm, dispatch, Lb}) {
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();
    const [userInfo, setUserInfo] = useState({
        'User Role': 'Subscriber',
        'User Plan': 'Basic'
    })
    useEffect(()=>{
        setValue("fullName", Lb.edit.fullName)
        setValue("email", Lb.edit.email)
    },[Lb.edit.fullName, Lb.edit.email, setValue])

    function updateUser(data){
        const userData = {email: data.email, fullName: data.fullName, role: userInfo['User Role'], plan: userInfo['User Plan']}
        reset()
        dispatch(openBox({visibleClass:false, typeAction:'Update', userData}))
    }
    return (
    <motion.div className={` addUser bg-white absolute top-0 right-0 h-screen w-full sm:w-98 normal-case`} initial={{x: "35rem"}} animate={{x: 0}}>
        <h2 className="h-4.5 px-7 bg-gray-100 flex justify-between items-center text-2xl text-gray-600 font-medium">
            Update User 
            <XIcon className="w-6 h-6 text-gray-500 cursor-pointer" onClick={cancelForm}/>
        </h2>
        <form className="inputContainer py-6 px-7 w-full overflow-y-scroll myScroll" onSubmit={handleSubmit(updateUser)}>
            <InputBox name="Full Name" iType="text" label="fullName" register={register} errors={errors}/>
            <InputBox name="Email" iType="email" label="email" desc register={register} errors={errors}/>
            <UserFilter setPowerState={setUserInfo} option="User Role" setting={userRole}/>
            <div className="py-3.5"></div>
            <UserFilter setPowerState={setUserInfo} option="User Plan" setting={userPlan}/>
            <div className="mt-6">
                <input type="submit" value="Update" className="rounded-lg text-2xl px-8 py-3 bg-blue-600 text-white capitalize hover:shadow-sm hover:shadow-blue-400 mr-5 cursor-pointer"/>
                <button type="button" onClick={cancelForm} className="rounded-lg text-2xl px-8 py-3 border border-solid border-gray-400 text-gray-500 capitalize font-medium">Cancel</button>
            </div>
        </form>
    </motion.div>
    )
}
