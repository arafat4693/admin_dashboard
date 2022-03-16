import React from 'react'

export default function SocialAvatar({image, title, desc}) {
    return (
        <div className="left flex items-center gap-5">
            <img src={`/images/${image}`} alt={title} className="w-14 h-14 object-cover"/>
            <div className="box">
                <h2 className="font-semibold text-2xl text-gray-500">{title}</h2>
                <p className="font-normal text-2xl text-gray-500 normal-case">{desc}</p>
            </div>
        </div>
    )
}
