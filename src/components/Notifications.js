import React from 'react'
import NotificationTable from './NotificationTable'

export default function Notifications({display}) {
    return (
        <div className={`${display} notifications shadow-md shadow-gray-200 rounded-xl overflow-hidden bg-white`}>
            <div className="notification__header py-7 px-9">
                <h2 className=" text-gray-500 text-3xl normal-case font-medium pb-3">Notifications</h2>
                <p className=" text-gray-500 text-xl normal-case font-normal">Change to notification settings, the user will get the update</p>
            </div>
            <div className="bg-white overflow-x-scroll mxl:overflow-hidden">
                <NotificationTable/>
            </div>
            <div className="button flex gap-6 py-7 px-9">
                <button className="px-8 py-3 secButton__style">Save Changes</button>
                <button className="rounded-lg text-2xl px-8 py-3 font-medium text-gray-500 border border-solid border-gray-500">Discard</button>
            </div>
        </div>
    )
}
