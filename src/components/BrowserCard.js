import React,{useState} from 'react';
import ReactApexChart from 'react-apexcharts'
// import {radialBarChart} from '../data'

export default function BrowserCard({image, name, amount, settings}) {
const [radialBar] = useState(settings)
  return (
  <div className="browserCard flex justify-between items-center mt-9">
        <div className="browser flex items-center gap-5">
            <img src={`/images/${image}`} alt="browser" className="h-12 object-cover"/>
            <h3 className="text-gray-500 text-2xl font-medium">{name}</h3>
        </div>
        <div className="amount flex items-center gap-5">
            <p className="text-gray-500 text-2xl font-medium">{amount}</p>
            <ReactApexChart options={radialBar.options} series={radialBar.series} type="radialBar" height={80} width={35}/>
        </div>
    </div>
  )
}
