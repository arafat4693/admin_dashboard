import React from 'react'
import Bar from './Bar'
import Project from './Project'

export default function SkillsTable() {
  return (
    <table className="min-w-[737px] w-full mxl:min-w-0 mxl:w-full">
        <thead className="bg-gray-100">
            <tr className="text-left">
                <th className="dth__style text-gray-500">PROJECT</th>
                <th className="dth__style text-gray-500">TOTAL TASKS</th>
                <th className="dth__style text-gray-500">PROGRESS</th>
                <th className="dth__style text-gray-500">HOURS</th>
            </tr>
        </thead>
        <tbody className="bg-white">
            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="BGC eCommerce App" desc="React Project" image="/images/react.png" bgColor="bg-sky-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">233/240</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">60%</p>
                    <Bar percent="w-3/5" innerColor="bg-sky-400" outerColor="bg-sky-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">210:30h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="Falcon Logo Design" desc="UI/UX Project" image="/images/xd.png" bgColor="bg-fuchsia-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">9/50</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">15%</p>
                    <Bar percent="w-15%" innerColor="bg-red-400" outerColor="bg-red-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">89h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="Dashboard Design" desc="Vuejs Project" image="/images/vue.png" bgColor="bg-green-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">100/190</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">90%</p>
                    <Bar percent="w-11/12" innerColor="bg-green-500" outerColor="bg-green-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">129:45h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="Foodista mobile app" desc="iPhone Project" image="/images/sketch.png" bgColor="bg-orange-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">12/86</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">49%</p>
                    <Bar percent="w-1/2" innerColor="bg-orange-400" outerColor="bg-orange-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">45h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="Graphic Design" desc="Figma Project" image="/images/figma.png" bgColor="bg-violet-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">234/378</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">73%</p>
                    <Bar percent="w-9/12" innerColor="bg-violet-400" outerColor="bg-violet-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">67:10h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="HTML Project" desc="Crypto Website" image="/images/html.png" bgColor="bg-red-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">264/537</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">81%</p>
                    <Bar percent="w-4/5" innerColor="bg-red-500" outerColor="bg-red-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">108:39h</span></td>
            </tr>

            <tr className="border-0 border-b border-gray-100 border-solid">
                <td className="py-4 px-11"><Project name="Database Manipulation" desc="Mongo Db Project" image="/images/mongo.png" bgColor="bg-emerald-100"/></td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">214/627</span></td>
                <td className="py-4 px-11">
                    <p className="font-normal text-gray-500 text-xl pb-3">41%</p>
                    <Bar percent="w-5/12" innerColor="bg-emerald-400" outerColor="bg-emerald-100" height="h-2.5"/>
                </td>
                <td className="py-4 px-11"><span className="font-normal text-gray-500 text-xl">88:19h</span></td>
            </tr>
        </tbody>
    </table>
  )
}
