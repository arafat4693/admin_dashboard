import React,{useState} from 'react'
import News from './News'
import ReactApexChart from 'react-apexcharts'
import {barChart, lineChart, pieChart, doubleBarChart, dashesLineChart} from '../data'

export default function ECommerce() {
    const [bar] = useState(barChart)
    const [line] = useState(lineChart)
    const [donut] = useState(pieChart)
    const [doubleBar] = useState(doubleBarChart)
    const [dashedLine] = useState(dashesLineChart)

    return (
        <section className="eCommerce my-8">

            <div className="eCommerce__statistics grid grid-cols-3 gap-10 mb-8">
                <div className="congrats bg-white shadow-lg p-7 rounded-xl overflow-hidden relative">
                    <img src="images/medal.png" alt="medal" className="absolute top-0 right-4"/>
                    <h3 className="font-medium text-2xl text-gray-600">congratulations 🎉 sunny!</h3>
                    <p className="font-normal text-lg text-gray-500 normal-case tracking-wider mt-3">You have won the first place</p>
                    <h2 className="font-medium text-4xl text-blue-600 mt-14 mb-4 cursor-pointer">$50.6k</h2>
                    <button className="py-4 px-7 rounded-xl text-white text-2xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-150 capitalize">view sales</button>
                </div>
                <div className="statistics bg-white col-span-2 shadow-lg rounded-xl overflow-hidden">
                    <div className="statisticsHeader p-7 pl-12 flex items-center justify-between">
                        <h3 className="font-medium text-3xl text-gray-600">statistics</h3>
                        <p className="font-normal text-lg text-gray-500 normal-case tracking-wider">Updated 2 months ago</p>
                    </div>
                    <div className="statisticsResult p-12 pr-24 flex items-center justify-between">
                        <News icon="fas fa-chart-line" bgColor="bg-blue-100" color="text-blue-600" amount="320k" name="sales"/>
                        <News icon="far fa-user" color="text-teal-600" bgColor="bg-teal-100" amount="6.349k" name="customers"/>
                        <News icon="fas fa-cube" color="text-red-600" bgColor="bg-red-100" amount="1.349k" name="products"/>
                        <News icon="fas fa-dollar-sign" color="text-green-600" bgColor="bg-green-100" amount="6748k" name="revenue"/>
                    </div>
                </div>
            </div>

            <div className="eCommerce__reports grid grid-cols-3 gap-10">
                <div className="reportNews grid grid-cols-2 gap-8">
                    <div className="pt-8 pl-8 bg-white shadow-lg rounded-xl">
                        <p className="font-medium text-2xl text-gray-500">Orders</p>
                        <h2 className="font-semibold text-4xl text-gray-600 my-3">4,50k</h2>
                        <div className="-ml-5 -mt-3">
                            <ReactApexChart options={bar.options} series={bar.series} type="bar" height={100} width={150}/>
                        </div>
                    </div>
 
                    <div className="pt-8 pl-8 bg-white shadow-lg rounded-xl">
                        <p className="font-medium text-2xl text-gray-500">Profit</p>
                        <h2 className="font-semibold text-4xl text-gray-600 my-3">3.62k</h2>
                        <div className="-mt-6">
                            <ReactApexChart options={line.options} series={line.series} type="line" height={108} width={140}/>
                        </div>
                    </div>

                    <div className="col-span-2 bg-white px-7 py-8 grid grid-cols-2 shadow-lg rounded-xl">
                        <div className="left">
                            <h2 className="text-3xl text-gray-500 font-medium">earnings</h2>
                            <p className="text-xl text-gray-500 font-normal tracking-wider mt-6">this month</p>
                            <h2 className="text-2xl text-gray-500 font-medium">$5652.14</h2>
                            <p className="text-lg text-gray-400 font-normal tracking-wider normal-case mt-6">
                                <span className="text-gray-500 font-semibold leading-10">78.6% </span>
                                more earnings than last three months
                            </p>
                        </div>

                        <div className="right">
                            <div className="pieChart pt-4">
                                <ReactApexChart options={donut.options} series={donut.series} type="donut"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reportRevenue bg-white col-span-2 shadow-lg rounded-xl overflow-hidden grid grid-cols-3">

                    <div className="left col-span-2 border-0 border-r border-solid border-gray-200">
                        <div className="title flex justify-between items-center px-8 py-6">
                            <h2 className="text-3xl text-gray-500 font-medium">Revenue Report</h2>
                            <div className="colors flex gap-6 items-center">
                                <p className="earnings flex gap-3 items-center text-xl text-gray-500 font-normal tracking-wider">
                                    <span className="inline-block w-6 h-6 rounded-full bg-blue-600"></span> 
                                    Earning
                                </p>
                                <p className="expenses flex gap-3 items-center text-xl text-gray-500 font-normal tracking-wider">
                                    <span className="inline-block w-6 h-6 rounded-full bg-orange-400"></span> 
                                    expenses
                                </p>
                            </div>
                        </div>

                        <div className="ml-10 mt-4">
                            <ReactApexChart options={doubleBar.options} series={doubleBar.series} type="bar" height={270} width={490}/>
                        </div>
                    </div>
                    
                    <div className="right px-12 py-9">
                        <h2 className="text-4xl text-gray-600 font-medium text-center">$15,463</h2>
                        <p className=" mt-2 text-2xl text-gray-500 font-normal text-center"><span className="font-semibold">Budget:</span> 36,632</p>
                        <div className="dashline">
                            <ReactApexChart options={dashedLine.options} series={dashedLine.series} type="line" height={125} width={'100%'} />
                        </div>
                        <button className="w-full py-4 rounded-xl text-white text-2xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-150 capitalize">increase budget</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
