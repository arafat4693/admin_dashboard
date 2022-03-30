import React from 'react'
import { HashtagIcon, TrendingUpIcon, CheckCircleIcon, PaperAirplaneIcon, EyeIcon, DownloadIcon, ChartPieIcon, TableIcon, InformationCircleIcon } from '@heroicons/react/outline'

export default function InvoiceTable() {
  return (
<table className="min-w-[737px] w-full mxl:min-w-0 mxl:w-full">
        <thead className="bg-gray-100">
            <tr className="text-left">
                <th className="dth__style text-gray-500"><HashtagIcon className="w-5 h-5 text-gray-500"/></th>
                <th className="dth__style text-gray-500"><TrendingUpIcon className="w-6 h-6 text-gray-500"/></th>
                <th className="dth__style text-gray-500">TOTAL PAID</th>
                <th className="dth__style text-gray-500">ISSUED DATE</th>
                <th className="dth__style text-gray-500">ACTION</th>
            </tr>
        </thead>
        <tbody className="bg-white">
            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5045</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircleIcon className="w-7 h-7 text-green-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$3171</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">25 Sep 2019</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5046</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
                        <TableIcon className="w-7 h-7 text-blue-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$4263</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">12 Jun 2019</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5047</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircleIcon className="w-7 h-7 text-green-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$4836</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">22 Oct 2019</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5048</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                        <ChartPieIcon className="w-7 h-7 text-yellow-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$2869</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">22 Mar 2020</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5049</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center">
                        <InformationCircleIcon className="w-7 h-7 text-red-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$5181</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">22 Oct 2019</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>

            <tr className="border-0 border-b border-gray-200 border-solid">
                <td className="py-4 px-11"><p className="text-blue-500 font-semibold text-xl">#5050</p></td>
                <td className="py-4 px-11">
                    <span className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                        <ChartPieIcon className="w-7 h-7 text-yellow-500"/>
                    </span>
                </td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">$3313</span></td>
                <td className="py-4 px-11"><span className="text-gray-500 font-medium text-xl">09 Jun 2019</span></td>
                <td className="py-4 px-11">
                    <div className="iconBox flex gap-3">
                        <PaperAirplaneIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <EyeIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                        <DownloadIcon className="cursor-pointer w-7 h-7 text-gray-500"/>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
  )
}
