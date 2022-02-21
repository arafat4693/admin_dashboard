import React from 'react'

export default function UserRole({Icon, role, color}) {
  return (
    <div className="flex items-center gap-2">
        <Icon className={`w-8 h-8 ${color}`}/>
        <p className="font-medium text-xl text-gray-500">{role}</p>
    </div>
  )
}
