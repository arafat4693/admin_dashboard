import React from 'react'

export default function InputBox({name, iType, label, desc, register, errors}) {
  return (
    <div className="mb-7">
        <label htmlFor={label} className="text-gray-500 text-xl font-normal">{name} <span className="text-red-400">*</span></label>
        <input type={iType} id={label} placeholder={name} className='w-full input__style mt-2 normal-case' {...register(label, { required: true })} name={label}/>
        {desc && <p className="text-gray-300 text-xl font-medium normal-case pt-2">You can use letters, numbers & periods</p>}
        {label === "fullName"&&errors.fullName&&<span className="error__style">Your full name is required</span>}
        {label === "userName"&&errors.userName&&<span className="error__style">Your user name is required</span>}
        {label === "email"&&errors.email&&<span className="error__style">Your email is required</span>}
        {label === "number"&&errors.number&&<span className="error__style">Your number is required</span>}
        {label === "company"&&errors.company&&<span className="error__style">Your company name is required</span>}
    </div>
  )
}
