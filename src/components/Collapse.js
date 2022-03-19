import React,{useEffect, useRef, useState} from 'react'

export default function Collapse({children, name, iconName, nParent, value, parent, setNParent, active}) {
    const subRef = useRef()

    useEffect(()=>{
        const subMenu = subRef.current
        if(nParent!==name.toLowerCase() && parent!==name.toLowerCase()){
            subMenu.style.maxHeight = null
        }
    },[nParent, active])

    useEffect(()=>{
        const subMenu = subRef.current
        // console.log(parent, name.toLowerCase())
        if(parent===name.toLowerCase()){
            subMenu.style.maxHeight = subMenu.scrollHeight + "px"
        }
    },[parent])

    function openSubMenu(){
        const subMenu = subRef.current
        const parentName = name.toLowerCase()
        if(parent!==parentName){
            if(subMenu.style.maxHeight){
                subMenu.style.maxHeight = null
                setNParent(null)
            }else{
                subMenu.style.maxHeight = subMenu.scrollHeight + "px"
                setNParent(parentName)
            }
        }else{
            if(subMenu.style.maxHeight){
                subMenu.style.maxHeight = null
            }else{
                subMenu.style.maxHeight = subMenu.scrollHeight + "px"
            }
        }
    }

    return (
        <div className="collapse__container">
            <div onClick={openSubMenu} className={`${(parent===name.toLowerCase() || nParent===name.toLowerCase())?'bg-gray-100':''} collapse rounded-lg flex justify-between items-end px-6 py-4 cursor-pointer mb-2 hover:pl-8 transition-all duration-300`}>
                <div className="name flex items-end gap-4 pointer-events-none text-gray-600 select-none">
                    <i className={`${iconName} text-3xl`}></i>
                    <h3 className="font-normal text-2xl tracking-wide normal-case">{name}</h3>
                </div>
                {value?
                <div className="arrow flex items-center gap-5 pointer-events-none select-none">
                    <span className="flex items-center justify-center bg-orange-200 w-9 h-9 rounded-full text-xl text-orange-600 font-semibold">2</span>
                    <i className="fas fa-chevron-right text-gray-400 text-lg dir"></i>
                </div>
                :<i className="fas fa-chevron-right text-gray-400 text-lg dir pointer-events-none select-none"></i>}
            </div>

            <div ref={subRef} className={`submenu transition-all duration-400 overflow-hidden max-h-0 select-none`}>
                {children}
            </div>
        </div>
    )
}
