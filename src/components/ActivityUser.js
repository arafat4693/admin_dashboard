import React from 'react'

export default function ActivityUser() {
  return (
    <div className="flex gap-3 items-center mt-5">
        <img src="/images/pic1.png" alt="profile" className="w-16 h-16 rounded-full object-cover"/>
        <div className="content">
            <h2 className="text-2xl text-gray-500 font-medium normal-case">Leona Watkins (Client)</h2>
            <h2 className="text-2xl text-gray-400 font-normal normal-case">CEO of Waterloo</h2>
        </div>
    </div>
  )
}
