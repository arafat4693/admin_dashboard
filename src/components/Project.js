import React from 'react'

export default function Project({name, desc, image, bgColor}) {
  return (
    <div className="project flex items-center gap-6">
        <span className={`${bgColor} w-14 h-14 rounded-full flex justify-center items-center cursor-pointer`}>
            <img src={image} alt="project" className="w-9 h-9 object-cover"/>
        </span>
        <div className="content">
            <h3 className="text-gray-500 text-xl font-semibold normal-case">{name}</h3>
            <p className="text-gray-400 text-lg font-normal normal-case">{desc}</p>
        </div>
    </div>
  )
}
