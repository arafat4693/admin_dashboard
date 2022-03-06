import React from 'react'

export default function Bar({innerColor,outerColor,percent, height}) {
  return (
    <div className={`w-full overflow-hidden ${height} rounded-full p-0 relative ${outerColor}`}>
        <span className={`${percent} ${innerColor} h-full rounded-full inline-block absolute top-0 left-0`}></span>
    </div>
  )
}
