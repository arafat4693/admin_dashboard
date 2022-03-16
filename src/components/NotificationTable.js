import React from 'react'
import CustomCheck from './CustomCheck'

export default function NotificationTable() {
  return (
    <table className="w-full">
        <thead className="bg-gray-100">
            <tr>
                <th className="dth__style text-gray-500 w-2/5 text-left">TYPE</th>
                <th className="dth__style text-gray-500">📧 EMAIL</th>
                <th className="dth__style text-gray-500">🌉 BROWSER</th>
                <th className="dth__style text-gray-500">👨‍💻 APP</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">New for you</span></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
                <td className="py-4 px-11"><CustomCheck/></td>
                <td className="py-4 px-11"><CustomCheck/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">Account activity</span></td>
                <td className="py-4 px-11"><CustomCheck/></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">A new browser used to sign in</span></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><span className="text-gray-500 font-normal normal-case text-2xl text-left">A new device is linked</span></td>
                <td className="py-4 px-11"><CustomCheck/></td>
                <td className="py-4 px-11"><CustomCheck checked/></td>
                <td className="py-4 px-11"><CustomCheck/></td>
            </tr>
        </tbody>
    </table>
  )
}
