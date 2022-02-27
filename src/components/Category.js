import React from 'react'

export default function Category({Icon, name, bgColor, color}) {
    return (
        <div className="category flex items-center gap-6">
            <span className={`${bgColor} ${color} w-14 h-14 flex justify-center items-center rounded-full`}><Icon className="h-9 w-9"/></span>
            <h3 className="font-medium text-gray-500 text-xl">{name}</h3>
        </div>
    )
}
