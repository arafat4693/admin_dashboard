import React, {useState} from 'react'
import { DotsVerticalIcon, DocumentTextIcon, ArchiveIcon, TrashIcon } from '@heroicons/react/outline'

export default function ActionMenu() {
    const [visibilty, setVisibility] = useState(false)
    return (
    <div className="relative">
        <DotsVerticalIcon tabIndex={0} className="w-7 h-7 text-gray-600 cursor-pointer" onClick={()=>setVisibility(state=>!state)} onBlur={()=>setVisibility(false)}/>
        <div className={`${visibilty?'block':'hidden'} actions absolute top-full -left-6 w-52 bg-white shadow-lg rounded-lg mt-4 py-3 border border-solid border-gray-200 z-10`}>
            <button className="button__style hover:buttonHover"><DocumentTextIcon className="w-6 h-6"/> Details</button>
            <button className="button__style hover:buttonHover"><ArchiveIcon className="w-7 h-7"/>Edit</button>
            <button className="button__style hover:buttonHover"><TrashIcon className="w-7 h-7"/> Delete</button>
        </div>
    </div>
  )
}
