import React,{useState, useRef} from 'react'
import ReactApexChart from 'react-apexcharts'
import {dashesLineChart} from '../data'

export default function ReportRight() {
    const [dashedLine, setDashedLine] = useState({series: dashesLineChart.series1, options: dashesLineChart.options})
    const [btnGroup, setBtnGroup] = useState(false)
    const dataIndex = useRef(0)
    const btnRef = useRef()
    const buttonsRef =useRef()

    function selectBtn(e){
        const currentYear = e.target.innerText
        btnRef.current.innerText = currentYear
        showChart(currentYear)
    }

    function showChart(year){
        switch(year){
            case "2022":
                setDashedLine(state=>({...state, series: dashesLineChart.series1}))
                break
            case "2021":
                setDashedLine(state=>({...state, series: dashesLineChart.series2}))
                break
            default:
                setDashedLine(state=>({...state, series: dashesLineChart.series3}))
                break
        }
    }

    function showBtn(e){
        if(dataIndex.current !== 0){
            buttonsRef.current.querySelector('.buttonHover').classList.remove('buttonHover')
            dataIndex.current = 0
        }
        if(!e.target.classList.contains('activeButton')){
            setBtnGroup(false)
        }else{
            setBtnGroup(state=>!state)
        }
    }

    function pressingKeys(e){
        e.preventDefault()
        const buttons = buttonsRef.current
        switch(e.code){
            case 'ArrowDown':
                if(dataIndex.current === 0){
                    buttons.querySelector('[data-index="1"]').classList.add('buttonHover')
                    dataIndex.current = 1
                }else if(dataIndex.current === 3){
                    buttons.querySelector('.buttonHover').classList.remove('buttonHover')
                    buttons.querySelector('[data-index="1"]').classList.add('buttonHover')
                    dataIndex.current = 1
                }else{
                    const next = buttons.querySelector(`[data-index="${dataIndex.current + 1}"]`)
                    buttons.querySelector('.buttonHover').classList.remove('buttonHover')
                    next.classList.add('buttonHover')
                    dataIndex.current = dataIndex.current + 1
                }
                break
            case 'ArrowUp':
                if(dataIndex.current === 1){
                    buttons.querySelector('.buttonHover').classList.remove('buttonHover')
                    buttons.querySelector('[data-index="3"]').classList.add('buttonHover')
                    dataIndex.current = 3
                }else if(dataIndex.current !== 0){
                    const prev = buttons.querySelector(`[data-index="${dataIndex.current - 1}"]`)
                    buttons.querySelector('.buttonHover').classList.remove('buttonHover')
                    prev.classList.add('buttonHover')
                    dataIndex.current = dataIndex.current - 1
                }
                break
            case 'Enter':
                const current = buttonsRef.current.querySelector('.buttonHover')
                dataIndex.current = 0
                btnRef.current.innerText = current.innerText
                current.classList.remove('buttonHover')
                setBtnGroup(false)
                showChart(current.innerText)
                break
            default:
                return
        }
    }

    return (
        <div onClick={showBtn} className="right px-12 py-11 text-center">
            <div className="btnGroup relative mb-10 inline-block">
                <button className="text-blue-500 py-2 pl-6 pr-4 rounded-lg border border-solid border-blue-500 activeButton" onKeyDown={pressingKeys}>
                    <span ref={btnRef} className="font-medium text-xl pr-5 pointer-events-none">2022</span> 
                    <i className="fas fa-chevron-down text-base pointer-events-none"></i>
                </button>
                <div ref={buttonsRef} className={`${btnGroup?'block':'hidden'} buttons bg-white shadow-lg absolute top-full left-0 overflow-hidden rounded-lg w-52 mt-3 z-10 border border-solid border-gray-200`}>
                    <button onClick={selectBtn} className="block text-xl text-gray-500 font-medium py-4 pl-6 w-full text-left hover:buttonHover" data-index="1">2022</button>
                    <button onClick={selectBtn} className="block text-xl text-gray-500 font-medium py-4 pl-6 w-full text-left hover:buttonHover" data-index="2">2021</button>
                    <button onClick={selectBtn} className="block text-xl text-gray-500 font-medium py-4 pl-6 w-full text-left hover:buttonHover" data-index="3">2020</button>
                </div>
            </div>

            <h2 className="text-4xl text-gray-600 font-medium">$15,463</h2>
            <p className=" mt-2 text-2xl text-gray-500 font-normal"><span className="font-semibold">Budget:</span> 36,632</p>
            <div className="dashline">
                <ReactApexChart options={dashedLine.options} series={dashedLine.series} type="line" height={125} width={'100%'} />
            </div>
            <button className=" mt-6 w-full py-4 rounded-xl text-white text-2xl bg-blue-600 font-semibold shadow-md hover:shadow-blue-500 transition-all duration-150 capitalize">increase budget</button>
        </div>
    )
}
