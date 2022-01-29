import React from 'react';

export default function TransIcon({Icon, color, bg, desc, name, amount, amountColor}) {
  return (
  <div className="transIcon flex items-center justify-between mt-7">
      <div className="icon flex gap-6 items-center">
        <span className={`w-16 h-16 flex items-center justify-center ${bg} rounded-lg`}><Icon className={`w-7 h-7 ${color}`}/></span>
        <div className="content">
            <h3 className="text-2xl font-medium text-gray-600">{name}</h3>
            <p className="text-lg font-normal text-gray-500 pt-1">{desc}</p>
        </div>
      </div>
      <p className={`${amountColor} text-2xl font-semibold`}>{amount}</p>
  </div>
  );
}
