import React from 'react'
import { motion, AnimatePresence  } from "framer-motion"
import {useSelector, useDispatch} from 'react-redux'
import {lb, openBox} from '../slice'
import { useForm } from "react-hook-form";
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

export default function LightBox() {
    const Lb = useSelector(lb)
    const dispatch = useDispatch()
    const { reset } = useForm();

    function cancelForm(){
        dispatch(openBox({visibleClass:false, typeAction:'Submit'}))
        reset()
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
                    {Lb.actionType==="Submit"
                    ?<AddUser cancelForm={cancelForm} dispatch={dispatch} Lb={Lb}/>
                    :<UpdateUser cancelForm={cancelForm} dispatch={dispatch} Lb={Lb}/>}
                </motion.section>}
        </AnimatePresence>
  )
}
