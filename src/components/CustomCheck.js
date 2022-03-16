import React, {useState} from 'react'

export default function CustomCheck({checked}) {
    const [check , setCheck] = useState(checked)
    return (
    <>
        <input type="checkbox" id="check" className="checkbox hidden" checked={check}/>
        <span className="custom__checkbox w-8 h-8 rounded-md border border-solid border-gray-300 flex items-center justify-center mx-auto" onClick={()=>setCheck(state=>!state)}>
            <i className="fas fa-check text-white text-xl pointer-events-none"></i>
        </span>
    </>
    )
}
