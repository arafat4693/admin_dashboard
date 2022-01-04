import React from 'react'

export default function Collapse({children, openSubMenu, name, iconName}) {
    return (
        <div className="collapse__container">
            <div onClick={openSubMenu} className="collapse rounded-lg flex justify-between items-end px-6 py-4 cursor-pointer mb-2 hover:pl-8 transition-all duration-300">
                <div className="name flex items-end gap-4 pointer-events-none text-gray-600">
                    <i className={`${iconName} text-3xl`}></i>
                    <h3 className="font-normal text-2xl tracking-wide normal-case">{name}</h3>
                </div>
                <i className="fas fa-chevron-right text-gray-400 text-lg dir pointer-events-none"></i>
            </div>

            <div className="submenu transition-all duration-400 overflow-hidden max-h-0">
                {children}
            </div>
        </div>
    )
}
