import React,{useState} from 'react'
import News from './News'
import ReactApexChart from 'react-apexcharts'
// import Chart from 'react-apexcharts'
import {barChart} from '../data'

export default function ECommerce() {
    const [bar, setBar] = useState(barChart)

    return (
        <section className="eCommerce my-8">

            <div className="eCommerce__statistics grid grid-cols-3 gap-10 mb-8">
                <div className="congrats bg-white shadow-lg p-7 rounded-xl overflow-hidden relative">
                    <img src="images/medal.png" alt="medal" className="absolute top-0 right-4"/>
                    <h3 className="font-medium text-2xl text-gray-600">congratulations 🎉 sunny!</h3>
                    <p className="font-normal text-lg text-gray-500 normal-case tracking-wider mt-3">You have won the first place</p>
                    <h2 className="font-semibold text-4xl text-blue-600 mt-14 mb-4 cursor-pointer">$50.6k</h2>
                    <button className="py-4 px-7 rounded-xl text-white text-2xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-150 capitalize">view sales</button>
                </div>
                <div className="statistics bg-white col-span-2 shadow-lg rounded-xl overflow-hidden">
                    <div className="statisticsHeader p-7 pl-12 flex items-center justify-between">
                        <h3 className="font-medium text-3xl text-gray-600">statistics</h3>
                        <p className="font-normal text-lg text-gray-500 normal-case tracking-wider">Updated 2 months ago</p>
                    </div>
                    <div className="statisticsResult p-12 flex items-center justify-between">
                        <News icon="fas fa-chart-line" bgColor="blue" amount="320k" name="sales"/>
                        <News icon="far fa-user" bgColor="teal" amount="6.349k" name="customers"/>
                        <News icon="fas fa-cube" bgColor="red" amount="1.349k" name="products"/>
                        <News icon="fas fa-dollar-sign" bgColor="green" amount="6748k" name="revenue"/>
                    </div>
                </div>
            </div>

            <div className="eCommerce__reports grid grid-cols-3 gap-10">
                <div className="reportNews grid grid-cols-2 gap-8">
                    <div className="p-6 pb-2 bg-white shadow-lg rounded-xl">
                        <p className="font-medium text-2xl text-gray-500">Orders</p>
                        <h2 className="font-semibold text-4xl text-gray-600 my-3">4,50k</h2>
                        <ReactApexChart options={bar.options} series={bar.series} type="bar" height={70}/>
                    </div>
                    <div className="">2</div>
                    <div className="">3</div>
                </div>
                <div className="reportRevenue bg-white col-span-2 shadow-lg rounded-xl overflow-hidden">
                    jsjs
                </div>
            </div>

        </section>
    )
}
