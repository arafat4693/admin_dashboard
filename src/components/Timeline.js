import React from 'react'

export default function Timeline({circleColor, InnerComponent, title, desc, time, last}) {
  return (
    <div className={`timeline relative border-0 border-l border-solid border-gray-200 pl-10 flex justify-between ${!last&&'pb-12'}`}>
        <span className={`circle w-5 h-5 rounded-full ${circleColor} absolute top-1 -left-3`}></span>
        <div className="timeline__info">
            <h2 className="text-2xl text-gray-500 font-medium pb-2 normal-case">{title}</h2>
            <h2 className="text-2xl text-gray-400 font-normal normal-case">{desc}</h2>
            {InnerComponent && <InnerComponent/>}
        </div>
        <span className="text-lg text-gray-300 font-medium normal-case">{time}</span>
    </div>
  )
}
