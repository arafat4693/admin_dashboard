import React from 'react'

export default function Timeline({circleColor, InnerComponent, title, desc, time, last}) {
  return (
    <div className={`timeline relative border-0 border-l border-solid border-gray-200 pl-10 flex justify-between ${!last&&'pb-12'}`}>
        <span className="flex h-5 w-5 absolute top-0.5 -left-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${circleColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-5 w-5 ${circleColor}`}></span>
        </span>
        <div className="timeline__info">
            <h2 className="text-2xl text-gray-500 font-medium pb-2 normal-case">{title}</h2>
            <span className="text-lg text-gray-300 font-medium normal-case block sm:hidden pb-2">{time}</span>
            <h2 className="text-2xl text-gray-400 font-normal normal-case">{desc}</h2>
            {InnerComponent && <InnerComponent/>}
        </div>
        <span className="text-lg text-gray-300 font-medium normal-case hidden sm:block">{time}</span>
    </div>
  )
}
