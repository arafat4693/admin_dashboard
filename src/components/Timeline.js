import React from 'react'

export default function Timeline() {
  return (
    <div className="timeline relative border-0 border-l border-solid border-gray-200 pl-10 flex justify-between pb-12">
        <span className="circle w-5 h-5 rounded-full bg-blue-500 absolute top-1 -left-3"></span>
        <div className="timeline__info">
            <h2 className="text-2xl text-gray-500 font-medium pb-2 normal-case">User login</h2>
            <h2 className="text-2xl text-gray-400 font-normal normal-case">User login at 2:12pm</h2>
        </div>
        <span className="text-xl text-gray-400 font-medium">12 mins ago</span>
    </div>
  )
}
