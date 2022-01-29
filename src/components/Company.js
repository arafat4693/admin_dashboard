import React from 'react'

export default function Company({name, desc, image}) {
    return (
        <div className="company flex items-center gap-10">
            <span className="w-14 h-12 rounded-xl bg-gray-100 flex justify-center items-center text-3xl cursor-pointer">{image}</span>
            <div className="content">
                <h3 className="text-gray-600 text-2xl font-semibold">{name}</h3>
                <p className="text-gray-400 text-lg font-medium normal-case">{desc}</p>
            </div>
        </div>
    )
}
