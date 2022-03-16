import React from 'react'
import SocialAvatar from './SocialAvatar'
import UnLink from './UnLink'


export default function SocialRow({icon, image, title, desc, last}) {
    return (
        <div className={`socialAcc_row flex justify-between ${!last && 'mb-9'}`}>
            <SocialAvatar image={image} title={title} desc={desc}/>
            <UnLink Icon={icon}/>
        </div>
    )
}
