import React, {useState} from 'react'
import { DotsVerticalIcon, DocumentTextIcon, ArchiveIcon, TrashIcon } from '@heroicons/react/outline'
import {useDispatch} from 'react-redux'
import {userDelete, openBox, userDetail} from '../slice'
import {Link} from "react-router-dom";

export default function ActionMenu({userId}) {
    const dispatch = useDispatch()
    const [visibilty, setVisibility] = useState(false)

    function deleteUser(e){
        e.preventDefault()
        dispatch(userDelete(userId))
        setVisibility(false)
    }

    function editUser(e){
        e.preventDefault()
        dispatch(openBox({visibleClass:true, typeAction:'Update', userData:null, id:userId}))
        setVisibility(false)
    }

    function userDetails(e){
        e.preventDefault()
        dispatch(userDetail({id:userId}))
        e.target.click()
        setVisibility(false)
    }
    
    return (
    <div className="relative">
        <DotsVerticalIcon tabIndex={0} className="w-7 h-7 text-gray-600 cursor-pointer" onClick={()=>setVisibility(state=>!state)} onBlur={()=>setVisibility(false)}/>
        <div className={`${visibilty?'block':'hidden'} actions absolute top-full -left-6 w-52 bg-white shadow-lg rounded-lg mt-4 py-3 border border-solid border-gray-200 z-10`}>
            <Link to="/user/view"><button className="button__style hover:buttonHover" onMouseDown={userDetails}><DocumentTextIcon className="w-6 h-6"/> Details</button></Link>
            <button className="button__style hover:buttonHover" onMouseDown={editUser}><ArchiveIcon className="w-7 h-7"/>Edit</button>
            <button className="button__style hover:buttonHover"  onMouseDown={deleteUser}><TrashIcon className="w-7 h-7"/> Delete</button>
        </div>
    </div>
  )
}
