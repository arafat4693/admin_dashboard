import React from 'react'

export default function InputBox({name, iType, label, desc}) {
  return (
    <div className="mb-7">
        <label htmlFor={label} className="text-gray-500 text-xl font-normal">{name} <span className="text-red-400">*</span></label>
        <input type={iType} id={label} placeholder={name} className='w-full input__style mt-2'/>
        {desc && <p className="text-gray-300 text-xl font-medium normal-case pt-2">You can use letters, numbers & periods</p>}
    </div>
  )
}
