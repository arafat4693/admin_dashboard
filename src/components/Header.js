import React,{useState, useRef, useEffect} from 'react'
import {contacts, files, pages} from '../data'

export default function Header() {
    const [openSrc, setOpenSrc] = useState(true)
    const resultRef = useRef()
    const [data, setData] = useState({
        pages: [],
        files: [],
        contacts: []
    })

    function searchResult(){
        console.log('hi')
    }

    function submit(e){
        e.preventDefault()
        console.log('hello')
    }

    function closeSrc(){
        setOpenSrc(false)
    }

    function selectActive(e){
        if(e.target.classList.contains('bg-gray-300')) return
        const resultBox = resultRef.current
        resultBox.querySelector('.bg-gray-300').classList.remove('bg-gray-300')
        e.target.classList.add('bg-gray-300')
    }

    function searching(e){
        const value = e.target.value
        if(!value){
            setData({pages: [], files: [], contacts: []})
        }else{
            const pagesData = pages.filter(page=>page.title.toLowerCase().includes(value.toLowerCase()))
            const filesData = files.filter(file=>file.title.toLowerCase().includes(value.toLowerCase()))
            const contactsData = contacts.filter(contact=>contact.title.toLowerCase().includes(value.toLowerCase()))
            setData(state=>({...state, pages: pagesData, files: filesData, contacts: contactsData}))
        }
    }

    function keyControl(e){
        const resultBox = resultRef.current
        const activeNode = resultBox.querySelector('.bg-gray-300')
        switch(e.code){
            case 'ArrowDown':
                const next = +activeNode.dataset.pos + 1
                const nextNode = resultBox.querySelector(`[data-pos="${next}"]`)
                activeNode.classList.remove('bg-gray-300')
                nextNode.classList.add('bg-gray-300')
                break
            case 'ArrowUp':
                const prev = +activeNode.dataset.pos - 1
                const prevNode = resultBox.querySelector(`[data-pos="${prev}"]`)
                activeNode.classList.remove('bg-gray-300')
                prevNode.classList.add('bg-gray-300')
                break
        }
    }

    return (
        <header className="header w-full bg-white py-6 px-8 rounded-lg shadow-md flex justify-between items-center relative">
            {openSrc ?
            <>
                <form onSubmit={submit} className="w-full searchBar flex items-center justify-between gap-5">
                    <i className="fas fa-search text-2xl text-gray-400 cursor-pointer" onClick={searchResult}></i>
                    <input onKeyDown={keyControl} onChange={searching} type="text" placeholder="Search here" className="normal-case py-3 w-full placeholder:text-gray-400 text-gray-500 placeholder:font-normal font-medium text-xl"/>
                    <i className="fas fa-times text-3xl text-gray-400 cursor-pointer" onClick={closeSrc}></i>
                </form>

                <div className="results w-full left-0 top-full absolute bg-white p-6 mt-4 rounded-xl shadow-lg" ref={resultRef}>
                    <div className="pages">
                        <h3 data-h="1">pages</h3>
                        {/* <p className="active" onMouseEnter={()=>console.log('enter')} onClick={()=>console.log('click')}>
                            <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                            no result
                        </p> */}
                        {
                            data.pages.map((page, ind) => (
                                <p onMouseEnter={selectActive} key={page.id} className={ind===0?'bg-gray-300' : ''} data-pos={ind}>
                                    <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                                    {page.title}
                                </p>
                            ))
                        }
                    </div>

                    <div className="files">
                        <h3>files</h3>
                        {/* <p>
                            <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                            no result
                        </p> */}
                        {
                            data.files.map((file, ind) => (
                                <p onMouseEnter={selectActive} key={file.id} className={!data.pages.length && ind === 0?'bg-gray-300' : ''} data-pos={(data.pages.length - 1) + 1}>
                                    <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                                    {file.title}
                                </p>
                            ))
                        }
                    </div>

                    <div className="contacts">
                        <h3>contacts</h3>
                        {/* <p>
                            <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                            no result
                        </p> */}
                        {
                            data.contacts.map((con, ind) => (
                                <p onMouseEnter={selectActive} key={con.id} className={!data.pages.length && !data.files.length && ind === 0?'bg-gray-300' : ''} data-pos={(data.pages.length + data.files.length - 1) + 1}>
                                    <i className="fas fa-exclamation-circle text-2xl text-gray-500 pointer-events-none"></i>
                                    {con.title}
                                </p>
                            ))
                        }
                    </div>
                </div>
             </> 

            : <>
                <div className="header__left flex items-end gap-6">
                    <i className="far fa-envelope text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-comment-alt text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-check-square text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-calendar text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-star text-3xl text-orange-400"></i>
                </div>

                <div className="header__right flex items-center gap-6">
                    <div className="flag flex items-center gap-2">
                        <span className="flag-icon flag-icon-se text-2xl"></span>
                        <span className="text-gray-500 text-xl font-medium">Swedish</span>
                    </div>
                    <i onClick={()=>setOpenSrc(true)} className="fas fa-search text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="fas fa-sign-out-alt text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-bell text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>

                    <div className="avatar flex items-center gap-4 ml-3 cursor-pointer">
                        <div className="avatar__info">
                            <h3 className="lowercase text-gray-500 text-2xl font-medium">johndoe</h3>
                            <p className="pl-6 lowercase font-normal text-gray-500 text-base">member</p>
                        </div>
                        <img src="images/pic1.png" alt="user" className="w-16 h-16 border-0 object-cover rounded-full"/>
                    </div>
                </div>
            </>
            }
        </header>
    )
}
