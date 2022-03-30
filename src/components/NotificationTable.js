import React from 'react'
import CustomCheck from './CustomCheck'

export default function NotificationTable() {
  return (
    <table className="min-w-[737px] w-full mxl:min-w-0 mxl:w-full">
        <thead className="bg-gray-100">
            <tr>
                <th className="dth__style text-gray-500 text-left">TYPE</th>
                <th className="dth__style text-gray-500">📧 EMAIL</th>
                <th className="dth__style text-gray-500">🌉 BROWSER</th>
                <th className="dth__style text-gray-500">👨‍💻 APP</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">New for you</span></td>
                <td className="py-4 px-11"><CustomCheck id="one" checked={true}/></td>
                <td className="py-4 px-11"><CustomCheck id="two" checked={false}/></td>
                <td className="py-4 px-11"><CustomCheck id="three" checked={false}/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">Account activity</span></td>
                <td className="py-4 px-11"><CustomCheck id="four" checked={false}/></td>
                <td className="py-4 px-11"><CustomCheck id="five" checked={true}/></td>
                <td className="py-4 px-11"><CustomCheck id="six" checked={true}/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">A new browser used to sign in</span></td>
                <td className="py-4 px-11"><CustomCheck id="sev" checked={true}/></td>
                <td className="py-4 px-11"><CustomCheck id="elv" checked={true}/></td>
                <td className="py-4 px-11"><CustomCheck id="tlw" checked={true}/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">A new device is linked</span></td>
                <td className="py-4 px-11"><CustomCheck id="eight" checked={false}/></td>
                <td className="py-4 px-11"><CustomCheck id="nine" checked={true}/></td>
                <td className="py-4 px-11"><CustomCheck id="ten" checked={false}/></td>
            </tr>
        </tbody>
    </table>
  )
}
