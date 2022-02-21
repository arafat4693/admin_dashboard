import React from 'react'

export default function UserStatus({status, color, bgColor}) {
  return (
      <button className={`${color} ${bgColor} text-lg text-semibold py-0.5 px-3 rounded-full font-semibold`}>{status}</button>
  )
}
