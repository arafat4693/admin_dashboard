import React,{useState, useRef} from 'react'
import {contacts, files, pages} from '../data'
import {Link} from 'react-router-dom'

export default function Search({setOpenSrc}) {
    const [srcValue, setSrcValue] = useState('')
    const resultRef = useRef()
    const srcRef = useRef()
    const [data, setData] = useState({
        pages: [],
        files: [],
        contacts: []
    })

    function getRes(node){
        node.click()
        closeSrc()
    }

    function submit(e){
        e.preventDefault()
        const resultBox = resultRef.current
        getRes(resultBox.querySelector('.bg-gray-100'))
    }

    function closeSrc(){
        setOpenSrc(false)
        setSrcValue('')
    }

    function focusInput(){
        srcRef.current.focus()
    }

    function selectActive(e){
        if(e.target.classList.contains('bg-gray-100')) return
        const resultBox = resultRef.current
        resultBox.querySelector('.bg-gray-100').classList.remove('bg-gray-100')
        e.target.classList.add('bg-gray-100')
    }

    function searching(e){
        const value = e.target.value
        setSrcValue(value)
        if(!value){
            setData({pages: [], files: [], contacts: []})
        }else{
            const pagesData = pages.filter(page=>page.title.toLowerCase().includes(value.toLowerCase())).slice(0,4)
            const filesData = files.filter(file=>file.title.toLowerCase().includes(value.toLowerCase())).slice(0,4)
            const contactsData = contacts.filter(contact=>contact.title.toLowerCase().includes(value.toLowerCase())).slice(0,4)
            setData(state=>({...state, pages: pagesData, files: filesData, contacts: contactsData}))
        }
    }

    function keyControl(e){
        if((data.pages.length === 0 && data.files.length === 0 && data.contacts.length === 0) || !srcValue) return
        
        const resultBox = resultRef.current
        const activeNode = resultBox.querySelector('.bg-gray-100')
        switch(e.code){
            case 'ArrowDown':
                const next = +activeNode.dataset.pos + 1
                if(next >= data.pages.length + data.files.length + data.contacts.length) return
                const nextNode = resultBox.querySelector(`[data-pos="${next}"]`)
                activeNode.classList.remove('bg-gray-100')
                nextNode.classList.add('bg-gray-100')
                break
            case 'ArrowUp':
                const prev = +activeNode.dataset.pos - 1
                if(prev < 0) return
                const prevNode = resultBox.querySelector(`[data-pos="${prev}"]`)
                activeNode.classList.remove('bg-gray-100')
                prevNode.classList.add('bg-gray-100')
                break
            default:
                return
        }
    }
    return (
        <>
            <form onSubmit={submit} className="w-full searchBar flex items-center justify-between gap-5">
                <i className="fas fa-search text-2xl text-gray-400 cursor-pointer" onClick={submit}></i>
                <input autoFocus="autofocus" ref={srcRef} value={srcValue} onKeyDown={keyControl} onChange={searching} type="text" placeholder="Search here" className="normal-case py-3 w-full placeholder:text-gray-400 text-gray-500 placeholder:font-normal font-medium text-xl"/>
                <i className="fas fa-times text-3xl text-gray-400 cursor-pointer" onClick={closeSrc}></i>
            </form>

            {srcValue && 
            <div className="results w-full left-0 top-full absolute bg-white mt-4 rounded-xl shadow-lg max-h-100 overflow-y-scroll myScroll" ref={resultRef}>
                <div className="pages">
                    <h3 className="p-5 pb-6 text-gray-500 text-2xl font-medium" onClick={focusInput}>pages</h3>
                    {
                        (data.pages.length === 0) ?
                        <p onClick={focusInput} className="flex items-center gap-4 p-5 font-normal text-xl text-gray-500 tracking-wider">
                            <i className="fas fa-exclamation-circle text-xl text-gray-400 pointer-events-none"></i>
                            no result
                        </p> 
                        : 
                        data.pages.map((page, ind) => (
                            <Link to={page.path}><p onClick={e=>getRes(e.target)} onMouseEnter={selectActive} key={page.id} className={`normal-case cursor-pointer flex items-center gap-4 p-5 font-medium text-xl text-gray-400 tracking-wider ${ind===0?'bg-gray-100' : ''}`} data-pos={ind}>
                                <page.Icon className="w-8 h-8 text-gray-400 pointer-events-none"/>
                                {page.title}
                            </p></Link>
                        ))
                    }
                </div>

                <div className="files">
                    <h3 className="p-5 pb-6 text-gray-500 text-2xl font-medium" onClick={focusInput}>files</h3>
                    {
                        (data.files.length === 0) ?
                        <p onClick={focusInput} className="p-5 font-normal text-xl text-gray-500 tracking-wider">
                            <i className="fas fa-exclamation-circle text-xl text-gray-400 pointer-events-none mr-4"></i>
                            no result
                        </p>
                        :
                        data.files.map((file, ind) => (
                            <div onMouseEnter={selectActive} key={file.id} className={`cursor-pointer flex items-center gap-4 p-5 ${!data.pages.length && ind === 0?'bg-gray-100' : ''}`}data-pos={(data.pages.length - 1) + (ind+1)}>
                                <img src={file.img} alt="file" className="w-11 h-14 object-cover pointer-events-none"/>
                                <div className="content pointer-events-none">
                                    <h3 className="font-normal text-xl text-gray-500 tracking-wider">{file.title}</h3>
                                    <p className="font-normal text-lg text-gray-400 tracking-wider pt-1">{file.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="contacts">
                    <h3 className="p-5 pb-6 text-gray-500 text-2xl font-medium" onClick={focusInput}>contacts</h3>
                    {
                        (data.contacts.length === 0) ?
                        <p onClick={focusInput} className="p-5 font-normal text-xl text-gray-500 tracking-wider">
                            <i className="fas fa-exclamation-circle text-xl text-gray-400 pointer-events-none mr-4"></i>
                            no result
                        </p>
                        :
                        data.contacts.map((con, ind) => (
                            <div onMouseEnter={selectActive} key={con.id} className={`cursor-pointer flex items-center gap-4 p-5 ${!data.pages.length && !data.files.length && ind === 0?'bg-gray-100' : ''}`} data-pos={(data.pages.length + data.files.length - 1) + (ind+1)}>
                                <img src={con.img} alt="user" className="w-12 h-12 object-cover rounded-full pointer-events-none"/>
                                <div className="content pointer-events-none">
                                    <h3 className="font-normal text-xl text-gray-500 tracking-wider">{con.title}</h3>
                                    <p className="font-normal text-lg text-gray-400 tracking-wider pt-1 normal-case">{con.mail}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>}
    </>
    )
}
