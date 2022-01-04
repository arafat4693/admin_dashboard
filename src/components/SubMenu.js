import React from 'react'

export default function SubMenu({name, activeMenu, iconName}) {
    return (
        <div onClick={activeMenu} className={`rounded-lg flex items-end gap-4 cursor-pointer pl-6 py-4 hover:pl-9 transition-all duration-300 text-gray-600`}>
            <i className={`${iconName} ${iconName==='far fa-circle'?'text-lg':'text-3xl'} pointer-events-none`}></i>
            <h3 className="font-normal tracking-wide text-2xl normal-case pointer-events-none">{name}</h3>
        </div>
    )
}
