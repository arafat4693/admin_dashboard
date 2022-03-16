import React from 'react'

export default function UnLink({Icon}) {
  return (
    <div className="w-16 h-16 rounded-xl border border-solid border-gray-500 flex justify-center items-center cursor-pointer">
        <Icon className="w-8 h-8 text-gray-500 pointer-events-none"/>
    </div>
  )
}
