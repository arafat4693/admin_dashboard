import React from 'react'

export default function Completed({amount, desc, Icon}) {
  return (
    <div className="flex gap-4 items-center">
        <span className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-lg"><Icon className="w-9 h-9 text-blue-600"/></span>
        <div className="desc">
            <h2 className="text-3xl font-medium text-gray-600">{amount}</h2>
            <p className="text-xl font-normal text-gray-500">{desc}</p>
        </div>
    </div>
  )
}
