import React from 'react'

export default function UserAvatar({avatarImg, name, mail, color, bgColor}) {
  return (
    <div className="flex item-center gap-5">
        <figure className={`w-14 h-14 rounded-full flex items-center justify-center font-semibold text-xl ${color} ${bgColor}`}>{avatarImg}</figure>
        <div className="avatarContent">
            <h2 className="text-gray-600 text-xl font-semibold cursor-pointer hover:text-blue-600">{name}</h2>
            <p className="text-gray-400 text-lg font-medium normal-case">{mail}</p>
        </div>
    </div>
  )
}
