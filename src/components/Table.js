import React from 'react'
import Company from './Company'
import Category from './Category'
import { DesktopComputerIcon, TrendingUpIcon, TruckIcon, TrendingDownIcon, ClockIcon } from '@heroicons/react/outline'
import Views from './Views'
import Sales from './Sales'

export default function Table() {
    return (
            <table className="min-w-[820px] w-full mxl:min-w-0 mxl:w-full">
                <thead className="bg-gray-200">
                    <tr className="text-left">
                        <th className="th__style">COMPANY</th>
                        <th className="th__style">CATEGORY</th>
                        <th className="th__style">VIEWS</th>
                        <th className="th__style">REVENUE</th>
                        <th className="th__style">SALES</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="rave" desc="rave@yahoo.com" image="💼"/></td>
                        <td className="py-4 px-11"><Category Icon={DesktopComputerIcon} name="technology" bgColor="bg-blue-100" color="text-blue-500"/></td>
                        <td className="py-4 px-11"><Views amount="54.2k" time="in 14 hours"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$546.2</td>
                        <td className="py-4 px-11"><Sales percent="52%" Icon={TrendingUpIcon} color="text-green-600"/></td>
                    </tr>

                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="jes" desc="jes@hotmail.com" image="🪂"/></td>
                        <td className="py-4 px-11"><Category Icon={TruckIcon} name="grocery" bgColor="bg-green-100" color="text-green-500"/></td>
                        <td className="py-4 px-11"><Views amount="542" time="in 22 hours"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$326.12</td>
                        <td className="py-4 px-11"><Sales percent="48%" Icon={TrendingDownIcon} color="text-red-600"/></td>
                    </tr>

                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="sun" desc="sun@ifc.se" image="🖌️"/></td>
                        <td className="py-4 px-11"><Category Icon={ClockIcon} name="fashion" bgColor="bg-yellow-100" color="text-yellow-500"/></td>
                        <td className="py-4 px-11"><Views amount="987" time="in 2 weeks"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$484.09</td>
                        <td className="py-4 px-11"><Sales percent="25%" Icon={TrendingDownIcon} color="text-red-600"/></td>
                    </tr>

                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="star" desc="star@kfc.io" image="⭐"/></td>
                        <td className="py-4 px-11"><Category Icon={TruckIcon} name="grocery" bgColor="bg-green-100" color="text-green-500"/></td>
                        <td className="py-4 px-11"><Views amount="45.3k" time="in 5 days"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$134.45</td>
                        <td className="py-4 px-11"><Sales percent="37%" Icon={TrendingDownIcon} color="text-red-600"/></td>
                    </tr>

                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="cafes" desc="cafes@gmail.com" image="📘"/></td>
                        <td className="py-4 px-11"><Category Icon={ClockIcon} name="fashion" bgColor="bg-yellow-100" color="text-yellow-500"/></td>
                        <td className="py-4 px-11"><Views amount="58k" time="in 4 months"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$475.38</td>
                        <td className="py-4 px-11"><Sales percent="72%" Icon={TrendingUpIcon} color="text-green-600"/></td>
                    </tr>

                    <tr className="border-0 border-b border-gray-300 border-solid">
                        <td className="py-4 px-11"><Company name="mall" desc="mall@rfc.se" image="🚀"/></td>
                        <td className="py-4 px-11"><Category Icon={DesktopComputerIcon} name="technology" bgColor="bg-blue-100" color="text-blue-500"/></td>
                        <td className="py-4 px-11"><Views amount="450.3k" time="in 1 year"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$382.83</td>
                        <td className="py-4 px-11"><Sales percent="67%" Icon={TrendingUpIcon} color="text-green-600"/></td>
                    </tr>

                    <tr>
                        <td className="py-4 px-11"><Company name="sellers" desc="sel@sol.se" image="🔊"/></td>
                        <td className="py-4 px-11"><Category Icon={DesktopComputerIcon} name="technology" bgColor="bg-blue-100" color="text-blue-500"/></td>
                        <td className="py-4 px-11"><Views amount="373k" time="in 45 min"/></td>
                        <td className="py-4 px-11 font-normal text-2xl text-gray-600">$924.02</td>
                        <td className="py-4 px-11"><Sales percent="57%" Icon={TrendingDownIcon} color="text-red-600"/></td>
                    </tr>

                </tbody>
            </table>
    )
}
