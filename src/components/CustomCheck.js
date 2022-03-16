import React, {useState} from 'react'

export default function CustomCheck({checked, id}) {
    const [check , setCheck] = useState(checked)
    return (
    <>
        <input type="checkbox" id={id} className="hidden checkbox" checked={check} onChange={()=>setCheck(state=>!state)}/>
        <label htmlFor={id}className="custom__checkbox w-8 h-8 rounded-md border border-solid border-gray-300 flex items-center justify-center mx-auto">
            <i className="fas fa-check text-white text-xl pointer-events-none"></i>
        </label>
    </>
    )
}
