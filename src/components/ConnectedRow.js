import React from 'react'
import CustomToggle from './CustomToggle'
import SocialAvatar from './SocialAvatar'

export default function ConnectedRow({image,id,checked,title, desc, last}) {
    return (
    <div className={`connectedAcc_row flex justify-between ${!last && 'mb-9'}`}>
        <SocialAvatar image={image} title={title} desc={desc}/>
        <CustomToggle checked={checked} id={id}/>
    </div>
    )
}
