import React from 'react';

export default function TotalUser({amount, desc, Icon, bg, color}) {
  return (
    <div className="totalUser bg-white shadow-md rounded-xl flex items-center justify-between p-8">
        <div className="content">
            <h2 className="font-semibold text-3xl text-gray-600">{amount}</h2>
            <p className="font-normal text-xl text-gray-500 pt-3">{desc}</p>
        </div>
        <span className={`flex justify-center items-center w-16 h-16 rounded-full ${bg}`}><Icon className={`w-8 h-8 ${color}`}/></span>
    </div>
  )
}
