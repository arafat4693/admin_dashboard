import React from 'react'

export default function Sales({percent, Icon, color}) {
    return (
        <div className="flex gap-4 items-center">
            <h3 className="text-gray-600 text-2xl font-semibold pb-1">{percent}</h3>
            <Icon className={`${color} h-7 w-7`}/>
        </div>
    )
}
