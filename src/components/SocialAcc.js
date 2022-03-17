import React from 'react'
import { XIcon, LinkIcon } from '@heroicons/react/outline'
import SocialRow from './SocialRow'

export default function SocialAcc() {
    return (
    <div className="pt-9">
        <SocialRow image="facebook.png" title="Facebook" desc="Not Connected" icon={LinkIcon}/>
        <SocialRow image="twitter.png" title="Twitter" desc="@sunnyIslam" icon={XIcon}/>
        <SocialRow image="linkedin.png" title="Linkedin" desc="@sunnyIslam" icon={LinkIcon}/>
        <SocialRow image="dribble.png" title="Explorer" desc="Not Connected" icon={XIcon}/>
        <SocialRow image="behance.png" title="Explorer" desc="Not Connected" icon={XIcon} last/>
    </div>
    )
}
