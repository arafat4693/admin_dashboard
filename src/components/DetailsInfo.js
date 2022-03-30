import React,{useState} from 'react'
import {detailsNav} from '../data'
import Account from './Account'
import Connections from './Connections'
import Notifications from './Notifications'

export default function DetailsInfo() {
    const [activeNav, setActiveNav] = useState(detailsNav[0].navName)
    const [navPage, setNavPage] = useState(detailsNav[0].navName)

    function changeNav(e){
        const current = e.target.innerText
        setActiveNav(current)
        if(current !== 'Security' && current !== 'Billing & Plans'){
            setNavPage(current)   
        }
    }

    return (
    <div className="info md:col-span-2">
        <nav className="detailsNav flex flex-wrap mb-8">
            {detailsNav.map(({navName, Icon}, index)=>(
            <button key={index} onClick={changeNav} className={`${navName===activeNav?'activeNav':'unActiveNav'} flex justify-center items-center px-8 py-5 text-2xl`}>
                <Icon className="w-8 h-8 mr-2 pointer-events-none"/>
                {navName}
            </button>
            ))}
        </nav>
        <Account display={`${navPage === "Account"?"block":"hidden"}`}/>
        <Notifications display={`${navPage === "Notifications"?"block":"hidden"}`}/>
        <Connections display={`${navPage === "Connections"?"block":"hidden"}`}/>
    </div>
    )
}
