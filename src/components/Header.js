import React,{useState, useEffect} from 'react'
import Search from './Search'
import { MenuIcon } from '@heroicons/react/outline'
import {useDispatch} from 'react-redux'
import {setMenu} from '../slice'

export default function Header() {
    const [openSrc, setOpenSrc] = useState(false)
    const dispatch = useDispatch()

    function setMenuState(){
        dispatch(setMenu())
    }

    return (
        <header className="header w-full bg-white py-6 px-8 rounded-lg shadow-md flex justify-between items-center z-50 sticky top-0 left-0">
            {openSrc ?
            <Search setOpenSrc={setOpenSrc}/>
            : <>
                <div className="header__left items-center gap-6 flex">
                    <MenuIcon onClick={setMenuState} className="w-8 h-8 text-gray-500 cursor-pointer block xlg:hidden"/>
                    <i className="hidden lg:block far fa-envelope text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="hidden lg:block far fa-comment-alt text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="hidden lg:block far fa-check-square text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="hidden lg:block far fa-calendar text-3xl text-gray-500 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="hidden lg:block far fa-star text-3xl text-orange-400"></i>
                </div>
                <div className="header__right flex items-center gap-6">
                    <div className="flag flex items-center gap-2">
                        <span className="flag-icon flag-icon-se text-2xl"></span>
                        <span className="text-gray-500 text-xl font-medium hidden sm:block">Swedish</span>
                    </div>
                    <i onClick={()=>setOpenSrc(true)} className="fas fa-search text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="fas fa-sign-out-alt text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>
                    <i className="far fa-bell text-3xl text-gray-400 hover:text-blue-500 transition-all duration-200 cursor-pointer"></i>

                    <div className="avatar flex items-center gap-4 ml-3 cursor-pointer">
                        <div className="avatar__info hidden sm:block">
                            <h3 className="lowercase text-gray-500 text-2xl font-medium">johndoe</h3>
                            <p className="pl-6 lowercase font-normal text-gray-500 text-base">member</p>
                        </div>
                        <img src="/images/pic2.png" alt="user" className="w-16 h-16 border-0 object-cover rounded-full"/>
                    </div>
                </div>
            </>
            }
        </header>
    )
}
