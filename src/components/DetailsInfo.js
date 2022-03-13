import React,{useState} from 'react'
import {detailsNav} from '../data'
import SkillsTable from './SkillsTable'

export default function DetailsInfo() {
    const [activeNav, setActiveNav] = useState(detailsNav[0].navName)

    return (
    <div className="info col-span-2">
        <nav className="detailsNav flex mb-8">
            {detailsNav.map(({navName, Icon}, index)=>(
            <button key={index} onClick={e=>setActiveNav(e.target.innerText)} className={`${navName===activeNav?'activeNav':'unActiveNav'} flex justify-center items-center px-8 py-5 text-2xl`}>
                <Icon className="w-8 h-8 mr-2"/>
                {navName}
            </button>
            ))}
        </nav>
        <div className="skillsDetail shadow-sm">
            <h2 className="bg-white text-gray-500 text-3xl normal-case font-medium rounded-lg py-7 px-9">User's Projects List</h2>
            <SkillsTable/>
        </div>
    </div>
    )
}
