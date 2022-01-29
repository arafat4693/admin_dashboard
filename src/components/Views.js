import React from 'react'

export default function Views({time, amount}) {
    return (
        <div>
            <h3 className="text-gray-600 text-2xl font-semibold pb-1">{amount}</h3>
            <p className="text-gray-400 text-lg font-medium normal-case">{time}</p>
        </div>
    )
}
