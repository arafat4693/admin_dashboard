import React,{useRef, useState} from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Filter({option, setting}) {
    const listRef = useRef()
    const [inputValue, setInputValue] = useState('')
    const [placeholderValue, setPlaceholderValue] = useState('Select Role')
    const [show, setShow] = useState(false)
    const currentHover = useRef(0)

    function openLists(e){
        setShow(state=>!state)
        const listBox = listRef.current
        currentHover.current = 0
        if(show){
            listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
        }else{
            if(!listBox.querySelector('[data-order="0"]').classList.contains('filterActive__style')){
                listBox.querySelector('[data-order="0"]').classList.add('filterHover__style')
            }
        }
    }
    
    function selectActive(e){
        const New = e.target
        const Old = listRef.current.querySelector('.filterActive__style')
        if(Old === New){
            setShow(false)
            setInputValue('')
            return
        }
        Old.classList.remove('filterActive__style')
        New.classList.remove('filterUnActive__style')
        New.classList.remove('filterHover__style')
        Old.classList.add('filterUnActive__style')
        New.classList.add('filterActive__style')
        setPlaceholderValue(New.innerText)
        setInputValue('')
        setShow(false)
    }

    function checkingActive(listBox, listItem){
        if(listItem.classList.contains('filterActive__style')){
            listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
            return true
        }
        return false
    }

    function mouseEnter(e){
        const currentLi = e.target
        const orderNumber = +currentLi.dataset.order
        currentHover.current = orderNumber
        if(currentLi.classList.contains('filterHover__style')) return
        const listBox = listRef.current
        if(checkingActive(listBox, currentLi)){
            return
        }else{
            listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
            currentLi.classList.add('filterHover__style')
        }
    }

    function pressingKeys(e){
        const listBox = listRef.current
        switch(e.code){
            case 'ArrowDown':
                if(currentHover.current === setting.length-1){
                    currentHover.current = -1
                }
                const next = currentHover.current = currentHover.current + 1
                const nextNode = listBox.querySelector(`[data-order="${next}"]`)
                listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
                if(!checkingActive(listBox, nextNode)){
                    nextNode.classList.add('filterHover__style')
                }
                break
            case 'ArrowUp':
                if(currentHover.current === 0){
                    currentHover.current = setting.length
                }
                const prev = currentHover.current = currentHover.current - 1
                const prevNode = listBox.querySelector(`[data-order="${prev}"]`)
                listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
                if(!checkingActive(listBox, prevNode)){
                    prevNode.classList.add('filterHover__style')
                }
                break
            case 'Enter':
                const currentNode = listBox.querySelector(`[data-order="${currentHover.current}"]`)
                selectActive({target: currentNode})
                break
            default:
                return
        }
    }
    
    return (
    <div className="filter">
        <label htmlFor={option} className="text-gray-500 font-normal text-xl inline-block pb-2">{option}</label>
        <div className="relative">
            <div onClick={openLists} className="border border-solid border-gray-200 rounded-lg flex items-center px-4 py-4 gap-4 w-full">
                <input onKeyDown={pressingKeys} value={inputValue} onChange={e=>setInputValue(e.target.value)} type="text" placeholder={placeholderValue} className="inputBox w-full font-normal text-xl text-gray-600 placeholder:text-gray-600 cursor-default"/>
                <ChevronDownIcon className="w-6 h-6 text-gray-700"/>
            </div>
            <ul ref={listRef} className={`${show?'block':'hidden'} filterOptions absolute top-full left-0 mt-3 bg-white w-full rounded-lg border border-solid border-gray-200 overflow-hidden`}>
                {
                    setting.map((opt, index)=>(<li data-order={index} onClick={selectActive} onMouseEnter={mouseEnter} key={index} className={`${index===0?"filterActive__style":"filterUnActive__style"} px-5 py-4 text-xl font-normal cursor-pointer`}>{opt}</li>))
                }
            </ul>
        </div>
    </div>
)
}
