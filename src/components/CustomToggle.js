import React,{useState} from 'react'
import { CheckIcon, XIcon } from '@heroicons/react/outline'

export default function CustomToggle({checked, id}) {
    const [check , setCheck] = useState(checked)
    return (
        <>
        <input type="checkbox" id={id} className="toggleCheck hidden" checked={check} onChange={()=>setCheck(state=>!state)}/>
        <label htmlFor={id} className="toggleBtn w-4.5 h-9 rounded-full cursor-pointer px-2 flex items-center justify-between relative">
            <CheckIcon className="w-6 h-6 text-white"/>
            <XIcon className="w-6 h-6 text-gray-500"/>
        </label>
        </>
    )
}
