import React,{useRef, useState, useEffect} from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function Filter({option, setting}) {
    const listRef = useRef()
    const inputRef = useRef()
    const [inputValue, setInputValue] = useState('')
    const [placeholderValue, setPlaceholderValue] = useState('Select Role')
    const [show, setShow] = useState(false)
    const [filters, setFilters] = useState([...setting])
    const currentHover = useRef(0)
    const [activeState, setActiveState] = useState('Select Role')
    const [hoverState, setHoverState] = useState('Select Role')

    useEffect(()=>{
        if(!filters.length){
            return
        }
        const foundedItem = filters.find(item=>item===hoverState)
        const listBox = listRef.current
        if(!foundedItem || filters.length === setting.length){
            currentHover.current = 0
            const firstItem = listBox.querySelector('[data-order="0"]')
            setHoverState(firstItem.innerText)
            if(!firstItem.classList.contains('filterActive__style')){
                firstItem.classList.add('filterHover__style')
            }
        }else{
            const orderNumber = filters.indexOf(hoverState)
            currentHover.current = orderNumber
            const Old = listRef.current.querySelector('.filterHover__style') || null
            const New = listBox.querySelector(`[data-order="${orderNumber}"]`)
            Old?.classList.remove('filterHover__style')
            if(!New.classList.contains('filterActive__style')){
                New.classList.add('filterHover__style')
            }
        }
    },[filters])

    function openLists(){
        const listBox = listRef.current
        if(show){//close
            listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
            inputRef.current.blur()
            setPlaceholderValue(activeState)
            setInputValue('')
            setShow(false)
        }else{//open
            inputRef.current.focus()
            setShow(true)
            setFilters([...setting])
        }
    }

    function inputChange(e){
        setInputValue(e.target.value)
        const inputValue = e.target.value.toLowerCase()
        setFilters(setting.filter(option=>option.toLowerCase().includes(inputValue)))
    }
    
    function selectActive(e){
        const New = e.target
        const Old = listRef.current.querySelector('.filterActive__style') || null
        if(Old === New){
            setShow(false)
            setInputValue('')
            inputRef.current.blur()
            return
        }
        Old?.classList.remove('filterActive__style')
        New.classList.remove('filterUnActive__style')
        New.classList.remove('filterHover__style')
        Old?.classList.add('filterUnActive__style')
        New.classList.add('filterActive__style')
        setPlaceholderValue(New.innerText)
        setInputValue('')
        setShow(false)
        inputRef.current.blur()
        setActiveState(New.innerText)
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
        setHoverState(currentLi.innerText)
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
                if(currentHover.current === filters.length-1){
                    currentHover.current = -1
                }
                const next = currentHover.current = currentHover.current + 1
                const nextNode = listBox.querySelector(`[data-order="${next}"]`)
                setHoverState(nextNode.innerText)
                listBox.querySelector('.filterHover__style')?.classList.remove('filterHover__style')
                if(!checkingActive(listBox, nextNode)){
                    nextNode.classList.add('filterHover__style')
                }
                break
            case 'ArrowUp':
                if(currentHover.current === 0){
                    currentHover.current = filters.length
                }
                const prev = currentHover.current = currentHover.current - 1
                const prevNode = listBox.querySelector(`[data-order="${prev}"]`)
                setHoverState(prevNode.innerText)
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
                <input ref={inputRef} onKeyDown={pressingKeys} value={inputValue} onChange={inputChange} type="text" placeholder={placeholderValue} className="inputBox normal-case w-full font-normal text-xl text-gray-600 placeholder:text-gray-600 cursor-default"/>
                <ChevronDownIcon className="w-6 h-6 text-gray-700"/>
            </div>
            <ul ref={listRef} className={`${show?'block':'hidden'} filterOptions absolute top-full left-0 mt-3 bg-white w-full rounded-lg border border-solid border-gray-200 overflow-hidden`}>
                {
                    filters.map((opt, index)=>(<li data-order={index} onClick={selectActive} onMouseEnter={mouseEnter} key={index} className={`${opt===activeState?"filterActive__style":"filterUnActive__style"} px-5 py-4 text-xl font-normal cursor-pointer`}>{opt}</li>))
                }
            </ul>
        </div>
    </div>
)
}
