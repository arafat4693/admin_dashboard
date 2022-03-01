import React,{useState} from 'react'
import { XIcon } from '@heroicons/react/outline'
import InputBox from './InputBox'
import {userRole, userPlan} from '../data'
import UserFilter from './UserFilter'
import { useForm } from "react-hook-form";
import { motion, AnimatePresence  } from "framer-motion"
import {useSelector, useDispatch} from 'react-redux'
import {lb, openBox} from '../slice'
import {randomColors, pickColor} from '../data'

export default function LightBox() {
    const [userInfo, setUserInfo] = useState({
        'User Role': 'Subscriber',
        'User Plan': 'Basic'
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const Lb = useSelector(lb)
    const dispatch = useDispatch()

    function cancelForm(){
        dispatch(openBox({visibleClass:false, typeAction:'Submit', userData:null}))
    }

    function submitForm(data){
        console.log(data)
        const fullName = data.fullName.split(' ')
        const avatarStyle = pickColor(randomColors)
        newUser = {
            id:1,
            avatarImg: fullName.length===1?fullName.slice(0,2):`${fullName[0][0]}${fullName[1][0]}`,
            avatarColor: avatarStyle[0],
            avatarBg: avatarStyle[1],
            user: [...fullName],
            mail: "bkrabbe1d@home.pl",
            plan: ["Company", "Select Plan"],
            billing: "Auto Debit",
            status: ["Active", "Select Status"],
            statusBg: "bg-green-100",
            statusColor: "text-green-500",
            role: ["Editor", "Select Role"],
            roleIcon: PencilIcon,
            roleIconColor: "text-sky-500"
        }
        dispatch(openBox({visibleClass:false, typeAction:'Submit', userData:newUser}))

    }

    function hideLb(e){
        if(e.target.classList.contains('lightBox')){
            cancelForm()
        }
    }

    return (
        <AnimatePresence>
        {Lb.visible&&
            <motion.section onClick={hideLb} className={`lightBox fixed w-full h-screen top-0 left-0 lightBox_bg z-50`} initial={{opacity:0}} animate={{opacity:1}} exit={{x:"105%"}}>
                <motion.div className={` addUser bg-white absolute top-0 right-0 h-screen w-98 normal-case`} initial={{x: "35rem"}} animate={{x: 0}}>
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
                            <input type="submit" value={Lb.actionType} className="rounded-lg text-2xl px-8 py-3 bg-blue-600 text-white capitalize hover:shadow-sm hover:shadow-blue-400 mr-5 cursor-pointer"/>
                            <button type="button" onClick={cancelForm} className="rounded-lg text-2xl px-8 py-3 border border-solid border-gray-400 text-gray-500 capitalize font-medium">Cancel</button>
                        </div>
                    </form>
                </motion.div>
            </motion.section>}
        </AnimatePresence>
  )
}
