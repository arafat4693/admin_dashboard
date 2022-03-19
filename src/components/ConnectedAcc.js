import React from 'react'
import ConnectedRow from './ConnectedRow'

export default function ConnectedAcc() {
  return (
    <div className="pt-9">
        <ConnectedRow image="google.png" id="1" checked={true} title="Google" desc="Calendar and contacts"/>
        <ConnectedRow image="slack.png" id="2" checked={false} title="Slack" desc="Communication"/>
        <ConnectedRow image="git.png" id="3" checked={true} title="Github" desc="Git repositories"/>
        <ConnectedRow image="discord.png" id="4" checked={false} title="Discord" desc="Group chat rooms"/>
        <ConnectedRow image="telegram.png" id="5" checked={false} title="Telegram" desc="Online chatting" last/>
    </div>
  )
}
