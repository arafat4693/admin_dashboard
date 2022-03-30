import React,{useState, useEffect} from 'react'
import News from './News'
import ReactApexChart from 'react-apexcharts'
import {barChart, lineChart, pieChart, doubleBarChart, customAngleChart, radialBarChart} from '../data'
import ReportRight from './ReportRight'
import Table from './Table'
import TimeAddress from './TimeAddress'
import { NewspaperIcon, LocationMarkerIcon, QuestionMarkCircleIcon, DotsVerticalIcon, ChevronDoubleDownIcon, CheckIcon, CurrencyDollarIcon, CreditCardIcon, TrendingUpIcon, HeartIcon } from '@heroicons/react/outline'
import ReactTooltip from 'react-tooltip';
import BrowserCard from './BrowserCard'
import TransIcon from './TransIcon'
import Footer from './Footer'
import {useLocation, Link} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {setLoc} from '../slice'

export default function ECommerce() {
    const [bar] = useState(barChart)
    const [line] = useState(lineChart)
    const [donut] = useState(pieChart)
    const [doubleBar] = useState(doubleBarChart)
    const [customAngle] = useState(customAngleChart)
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(setLoc(pathname))
    },[pathname])

    return (
        <section className="eCommerce">

            <Link to="/user/list" className="z-50 fixed bottom-16 right-5 text-xl bg-red-500 text-white font-semibold py-3 px-6 shadow-lg shadow-red-500 rounded-lg transition-all hover:shadow-none">Users List</Link>

            <div className="eCommerce__statistics grid grid-cols-1 md:grid-cols-2 xlg:grid-cols-3 gap-10 my-8">
                <div className="congrats bg-white shadow-lg p-7 rounded-xl overflow-hidden relative">
                    <img src="/images/medal.png" alt="medal" className="absolute top-0 right-4"/>
                    <h3 className="font-medium text-2xl text-gray-600">congratulations 🎉 sunny!</h3>
                    <p className="font-normal text-lg text-gray-500 normal-case tracking-wider mt-3">You have won the first place</p>
                    <h2 className="font-medium text-4xl text-blue-600 mt-14 mb-4 cursor-pointer">$50.6k</h2>
                    <button className="py-4 px-7 rounded-xl text-white text-2xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-150 capitalize">view sales</button>
                </div>
                <div className="statistics bg-white xlg:col-span-2 shadow-lg rounded-xl overflow-hidden">
                    <div className="statisticsHeader p-7 pl-12 flex items-center justify-between">
                        <h3 className="font-medium text-3xl text-gray-600">statistics</h3>
                        <p className="font-normal text-lg text-gray-500 normal-case tracking-wider">Updated 2 months ago</p>
                    </div>
                    <div className="statisticsResult p-12 grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-4 gap-8">
                        <News icon="fas fa-chart-line" bgColor="bg-blue-100" color="text-blue-600" amount="320k" name="sales"/>
                        <News icon="far fa-user" color="text-teal-600" bgColor="bg-teal-100" amount="6.349k" name="customers"/>
                        <News icon="fas fa-cube" color="text-red-600" bgColor="bg-red-100" amount="1.349k" name="products"/>
                        <News icon="fas fa-dollar-sign" color="text-green-600" bgColor="bg-green-100" amount="6748k" name="revenue"/>
                    </div>
                </div>
            </div>

            <div className="eCommerce__reports grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8">
                <div className="reportNews grid grid-cols-2 lg:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="pt-8 pl-8 bg-white shadow-lg rounded-xl">
                        <p className="font-medium text-2xl text-gray-500">Orders</p>
                        <h2 className="font-semibold text-4xl text-gray-600 my-3">4,50k</h2>
                        <div className="-ml-6 -mt-3 mr-8">
                            <ReactApexChart options={bar.options} series={bar.series} type="bar" height={100} width={'100%'}/>
                        </div>
                    </div>
 
                    <div className="pt-8 pl-8 bg-white shadow-lg rounded-xl">
                        <p className="font-medium text-2xl text-gray-500">Profit</p>
                        <h2 className="font-semibold text-4xl text-gray-600 my-3">3.62k</h2>
                        <div className="-mt-6 mr-8">
                            <ReactApexChart options={line.options} series={line.series} type="line" height={108} width={'100%'}/>
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

                <div className="reportRevenue bg-white lg:col-span-2 shadow-lg rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-3">

                    <div className="left md:col-span-2 border-0 border-r border-solid border-gray-200">
                        <div className="title flex justify-between flex-col sm:flex-row items-center px-8 py-6">
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

                        <div className="ml-7 mt-4">
                            <ReactApexChart options={doubleBar.options} series={doubleBar.series} type="bar" height={270} width={'100%'}/>
                        </div>
                    </div>

                    <ReportRight/>
                </div>
            </div>

            <div className="eCommerce__property grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
                <div className="properties bg-white md:col-span-2 shadow-lg rounded-xl overflow-x-scroll mxl:overflow-hidden">
                    <Table/>
                </div>
                <div className="schedule bg-white shadow-lg rounded-xl overflow-hidden">
                    <div className="scheduleImage h-72 w-full bg-indigo-100">
                        <img src="/images/office.png" alt="storyset image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="scheduleInfo px-7">
                        <div className="scheduleTime flex mt-8 pb-5">
                            <div className="scheduleDate pr-7 border-0 border-r border-solid border-gray-300">
                                <p className="text-gray-500 text-2xl font-medium">wed</p>
                                <h3 className="text-gray-600 text-4xl font-medium text-center">27</h3>
                            </div>
                            <div className="scheduleContent pl-7">
                                <h2 className="text-gray-600 text-3xl font-medium">Developer Meetup</h2>
                                <p className="normal-case text-gray-500 text-xl font-medium pt-2">Meet world popular developers</p>
                            </div>
                        </div>
                        <TimeAddress Icon={NewspaperIcon} text="Sat, May 25, 2020" desc="10:AM to 6:PM"/>
                        <TimeAddress Icon={LocationMarkerIcon} text="Central Park" desc="Manhattan, New york City"/>
                        <div className="scheduleBottom flex gap-4 items-center mt-8 mb-3">
                            <div className="scheduleImages flex">
                                <ReactTooltip place="bottom" type="dark" effect="solid"  className="tooltip"/>
                                <img src="/images/pic1.png" alt="user Image" className="scheduleImg__style ml-0" data-tip="nil dreyar"/>
                                <img src="/images/pic2.png" alt="user Image" className="scheduleImg__style" data-tip="laxus rex"/>
                                <img src="/images/pic3.png" alt="user Image" className="scheduleImg__style" data-tip="alucard"/>
                                <img src="/images/pic4.png" alt="user Image" className="scheduleImg__style" data-tip="shoun ryu"/>
                                <img src="/images/pic2.png" alt="user Image" className="scheduleImg__style" data-tip="mark ivan"/>
                            </div>
                            <p className="text-2xl font-normal text-gray-600">+54</p>
                        </div>
                    </div>
                </div>
                <div className="browserContainer bg-white overflow-hidden shadow-lg rounded-xl py-8 px-10">
                    <div className="browserHeader flex justify-between items-center">
                        <div className="content">
                            <h3 className="text-gray-600 text-3xl font-medium">Browser States</h3>
                            <p className="text-gray-500 font-medium text-lg">Counter January 2022</p>
                        </div>
                        <DotsVerticalIcon className="w-7 h-7 text-gray-600 cursor-pointer"/>
                    </div>

                    <div className="browserBody">
                        <BrowserCard image="chrome.png" name="google chrome" amount="54.9%" settings={{series:radialBarChart.series1, options:{...radialBarChart.options, colors:radialBarChart.options.colors1}}}/>
                        <BrowserCard image="mini.png" name="opera mini" amount="8.6%" settings={{series:radialBarChart.series2, options:{...radialBarChart.options, colors:radialBarChart.options.colors2}}}/>
                        <BrowserCard image="safari.png" name="apple safari" amount="25.7%" settings={{series:radialBarChart.series3, options:{...radialBarChart.options, colors:radialBarChart.options.colors3}}}/>
                        <BrowserCard image="explorer.png" name="internet explorer" amount="6.8%" settings={{series:radialBarChart.series4, options:{...radialBarChart.options, colors:radialBarChart.options.colors4}}}/>
                        <BrowserCard image="firefox.png" name="mozilla firefox" amount="13.5%" settings={{series:radialBarChart.series5, options:{...radialBarChart.options, colors:radialBarChart.options.colors5}}}/>
                    </div>
                </div>

                <div className="goalContainer bg-white overflow-hidden shadow-lg rounded-xl">
                    <div className="goal flex justify-between items-center py-8 px-10">
                        <h3 className="text-gray-600 text-3xl font-medium">goal overview</h3>
                        <QuestionMarkCircleIcon className="w-7 h-7 text-gray-400"/>
                    </div>
                    <div className="customAngle flex justify-center items-center mb-12">
                        <ReactApexChart options={customAngle.options} series={customAngle.series} type="radialBar" height={230} width={200}/>
                    </div>
                    <div className="goalNumbers flex border-0 border-t border-solid border-gray-200">
                        <div className="completed w-1/2 py-6 border-0 border-r border-solid border-gray-200 text-center">
                            <p className="text-gray-400 font-medium text-xl tracking-wider">Completed</p>
                            <h2 className="text-gray-600 font-semibold text-3xl">734,484</h2>
                        </div>
                        <div className="progress w-1/2 py-6 text-center">
                            <p className="text-gray-400 font-medium text-xl tracking-wider">in progress</p>
                            <h2 className="text-gray-600 font-semibold text-3xl">135,483</h2>
                        </div>
                    </div>
                </div>

                <div className="transaction bg-white overflow-hidden shadow-lg rounded-xl py-8 px-10">
                    <div className="transactionHeader flex justify-between items-center">
                        <h3 className="text-gray-600 text-3xl font-medium">Transactions</h3>
                        <DotsVerticalIcon className="w-7 h-7 text-gray-600 cursor-pointer"/>
                    </div>
                    <div className="transactionBody">
                        <TransIcon Icon={ChevronDoubleDownIcon} color="text-indigo-500" bg="bg-indigo-100" amount="- $74" name="Wallet" desc="Starbucks" amountColor="text-red-500"/>
                        <TransIcon Icon={CheckIcon} color="text-green-500" bg="bg-green-100" amount="+ $346" name="bank transfer" desc="add money" amountColor="text-green-500"/>
                        <TransIcon Icon={CurrencyDollarIcon} color="text-red-500" bg="bg-red-100" amount="+ $762" name="paypal" desc="add money" amountColor="text-green-500"/>
                        <TransIcon Icon={CreditCardIcon} color="text-yellow-500" bg="bg-yellow-100" amount="+ $82" name="Mastercard" desc="ordered food" amountColor="text-red-500"/>
                        <TransIcon Icon={TrendingUpIcon} color="text-blue-500" bg="bg-blue-100" amount="+ $95" name="transfer" desc="refund" amountColor="text-green-500"/>
                    </div>
                </div>
            </div>

            <Footer/>

        </section>
    )
}
