import React from 'react'
import ConnectedAcc from './ConnectedAcc'
import SocialAcc from './SocialAcc'

export default function Connections({display}) {
  return (
    <div className={`${display} connections`}>

        <div className="connected  shadow-md shadow-gray-200 rounded-xl overflow-hidden bg-white mb-8 py-7 px-9">
            <div className="connected__header">
                <h2 className=" text-gray-500 text-3xl normal-case font-medium pb-5">Connected accounts</h2>
                <p className=" text-gray-500 text-2xl normal-case font-normal">Display content from your connected accounts on your site</p>
            </div>
            <ConnectedAcc/>
        </div>

        <div className="accounts  shadow-md shadow-gray-200 rounded-xl overflow-hidden bg-white py-7 px-9">
            <div className="connected__header">
                <h2 className=" text-gray-500 text-3xl normal-case font-medium pb-5">Social accounts</h2>
                <p className=" text-gray-500 text-2xl normal-case font-normal">Display content from social accounts on your site</p>
            </div>
            <SocialAcc/>
        </div>

    </div>
  )
}
