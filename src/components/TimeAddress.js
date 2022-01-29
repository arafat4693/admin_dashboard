import React from 'react'

export default function TimeAddress({Icon, text, desc}) {
    return (
        <div className="timeAddress mt-7 flex gap-6 items-center">
            <span className="w-12 h-14 bg-blue-100 overflow-hidden rounded-lg flex justify-center items-center"><Icon className="w-8 h-8 text-blue-500"/></span>
            <div className="content">
                <h3 className="text-2xl text-gray-600 font-medium">{text}</h3>
                <p className="text-lg text-gray-500 font-medium">{desc}</p>
            </div>
        </div>
    )
}
