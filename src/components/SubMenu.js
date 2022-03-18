import React,{useRef} from 'react'

export default function SubMenu({name, iconName, active, setActive}) {
    const nameRef = useRef()
    
    function activeMenu(){
        setActive(nameRef.current.innerText.toLowerCase())
    }

    return (
        <div onClick={activeMenu} className={`${active===name.toLowerCase()?'active__style':'text-gray-600'} select-none rounded-lg flex items-end gap-4 cursor-pointer pl-6 py-4 hover:pl-9 transition-all duration-300`}>
            <i className={`${iconName} ${iconName==='far fa-circle'?'text-lg':'text-3xl'} pointer-events-none`}></i>
            <h3 ref={nameRef} className="font-normal tracking-wide text-2xl normal-case pointer-events-none">{name}</h3>
        </div>
    )
}
