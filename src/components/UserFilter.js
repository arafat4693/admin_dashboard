import React,{useState, useEffect, useRef} from 'react'
import { ChevronDownIcon } from '@heroicons/react/outline'

export default function UserFilter({option, setting, setPowerState}) {
  const [filters, setFilters] = useState([...setting])
  const [border, setBorder] = useState(false)
  const [show, setShow] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [activeState, setActiveState] = useState(setting[0])
  const [hoverState, setHoverState] = useState(setting[0])
  const [placeholderState, setPlaceholderState] = useState(setting[0])
  const inputRef = useRef()
  const listRef = useRef()

  useEffect(()=>{
    if(!filters.length){
        setHoverState(null)
        return
    }
    const foundedItem = filters.find(item=>item===hoverState)
    if(!foundedItem){
        setHoverState(filters[0])
    }
  },[filters])

  function openLists(e){
    e.preventDefault()
    if(e.buttons === 2 || e.buttons === 4){
      return
    }
    inputRef.current.focus()
    if(show){//close
        closeBox()
    }else{//open
        setFilters([...setting])
        setHoverState(null)
        setShow(true)
    }
 }

 function hideOptions(){
    closeBox()
    setBorder(false)
 }

 function closeBox(){
    setInputValue('')
    setShow(false)
    setPlaceholderState(activeState)
 }

  function filterSearch(e){
    if(!show){
        setShow(true)
        setHoverState(null)
    }
    setInputValue(e.target.value)
    const valueOfInput = e.target.value.toLowerCase()
    setFilters(setting.filter(option=>option.toLowerCase().includes(valueOfInput)))
  }

  function reset(){
    setInputValue('')
    setShow(false)
    inputRef.current.blur()
  }

  function selectActive(e){
    e.preventDefault && e.preventDefault()
    if(e.buttons && (e.buttons === 2 || e.buttons === 4)){
        reset()
        return
    }
    const New = e.target
    reset()
    setActiveState(New.innerText)
    setPlaceholderState(New.innerText)
    setHoverState(setting[0])
    setPowerState(state=>({...state, [option]:New.innerText}))
  }

  function mouseEnter(e){
    const currentLi = e.target
    if(currentLi.innerText === hoverState) return
    setHoverState(currentLi.innerText)
  }

  function pressingKeys(e){
    if(!filters.length) return
    const listBox = listRef.current
    const targetedItem = filters.indexOf(hoverState)
    switch(e.code){
        case 'ArrowDown':
            const nextNode = listBox.querySelector(`[data-order="${targetedItem + 1}"]`)
            nextNode?setHoverState(nextNode.innerText):setHoverState(filters[0])
            break
        case 'ArrowUp':
            const prevNode = listBox.querySelector(`[data-order="${targetedItem - 1}"]`)
            prevNode?setHoverState(prevNode.innerText):setHoverState(filters[filters.length-1])
            break
        case 'Enter':
            const currentNode = listBox.querySelector(`[data-order="${targetedItem}"]`)
            selectActive({target: currentNode})
            break
        default:
            return
    }
}

  return (
    <div className="userFilter">
        <label htmlFor={option} className="text-gray-500 font-normal text-xl inline-block pb-2">{option}</label>
        <div className="relative">
            <div onMouseDown={openLists}className={`border border-solid ${border?'border-blue-400':'border-gray-200'} rounded-lg flex items-center px-4 py-4 gap-4 w-full`}>
                <input value={inputValue} ref={inputRef} placeholder={placeholderState} className="inputBox normal-case w-full font-normal text-xl text-gray-600 placeholder:text-gray-600 cursor-default" onFocus={()=>setBorder(true)} onChange={filterSearch} onBlur={hideOptions} onKeyDown={pressingKeys}/>
                <ChevronDownIcon className="w-6 h-6 text-gray-700"/>
            </div>
            <ul ref={listRef} className={`${show?'block':'hidden'} filterOptions absolute top-full left-0 mt-3 bg-white w-full rounded-lg border border-solid border-gray-200 overflow-hidden shadow-md z-10`}>
                {
                    filters.length ? filters.map((opt, index)=>(<li data-order={index} onMouseDown={selectActive} onMouseEnter={mouseEnter} key={index} className={`${opt===activeState?"filterActive__style":"filterUnActive__style"} ${(opt===hoverState && opt !==activeState) && "filterHover__style"} px-5 py-4 text-xl font-normal cursor-pointer`}>{opt}</li>))
                    : <li className="px-5 py-4 text-xl font-normal filterUnActive__style text-center">No options</li>
                }
            </ul>
        </div>
    </div>
  )
}
