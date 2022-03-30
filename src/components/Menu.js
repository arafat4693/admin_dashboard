import React,{useState, useEffect} from 'react'
import Collapse from './Collapse'
import Logo from './Logo'
import SubMenu from './SubMenu'
import {useSelector} from 'react-redux'
import {currentRoute, getMenuState} from '../slice'
import { XIcon } from '@heroicons/react/outline'
import {setMenu} from '../slice'
import {useDispatch} from 'react-redux'


export default function Menu() {
    const [megaMenu, subMenu] = useSelector(currentRoute).split('/').slice(1)
    const [active, setActive] = useState(subMenu)
    const [parent, setParent] = useState(megaMenu)
    const [nParent, setNParent] = useState(null)
    const menuState = useSelector(getMenuState)
    const dispatch = useDispatch()

    useEffect(()=>{
        setActive(subMenu)
        setParent(megaMenu)
        setNParent(null)
    },[megaMenu, subMenu])

    return (
        <section className={`menu w-97 bg-white h-screen fixed top-0 shadow-lg ${menuState?'left-0':'-left-full'} xlg:left-0 z-[100] transition-all ease-in-out`}>
            <div className="menu__logo h-24 flex items-center justify-between px-8">
                <Logo/>
                <span className="circles hidden xlg:flex justify-center items-center w-8 h-8 rounded-full border-2 border-solid border-blue-600"></span>
                <XIcon className="w-8 h-8 text-blue-600 block xlg:hidden cursor-pointer" onClick={()=>dispatch(setMenu())}/>
            </div>
            <nav className="menu__container pl-6 pr-4 overflow-y-scroll myScroll">

                <Collapse iconName="fas fa-home" name="Dashboard" nParent={nParent} parent={parent} setNParent={setNParent} value active={active}>
                    <SubMenu name="eCommerce" iconName="far fa-circle" active={active} setActive={setActive} collapse="dashboard" setParent={setParent} setNParent={setNParent} loc="/dashboard/ecommerce"/>
                    <SubMenu name="Analytics" iconName="far fa-circle" active={active} setActive={setActive} collapse="dashboard" setParent={setParent} setNParent={setNParent}/>
                </Collapse>

                <div className="pages pt-12">
                    <h3 className="font-medium text-gray-400 text-2xl uppercase pb-4 pl-6 select-none pointer-events-none">apps & pages</h3>
                    <SubMenu name="Email" iconName="far fa-envelope" active={active} setActive={setActive} setParent={setParent} setNParent={setNParent}/>
                    <SubMenu name="Chat" iconName="far fa-comment-alt" active={active} setActive={setActive} setParent={setParent} setNParent={setNParent}/>
                    <SubMenu name="Todo" iconName="far fa-check-square" active={active} setActive={setActive} setParent={setParent} setNParent={setNParent}/>
                    <SubMenu name="Calendar" iconName="far fa-calendar" active={active} setActive={setActive} setParent={setParent} setNParent={setNParent}/>

                    <Collapse iconName="far fa-file-alt" name="Invoice" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Full List" iconName="far fa-circle" active={active} setActive={setActive} collapse="invoice" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Preview" iconName="far fa-circle" active={active} setActive={setActive} collapse="invoice" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Edit" iconName="far fa-circle" active={active} setActive={setActive} collapse="invoice" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Add" iconName="far fa-circle" active={active} setActive={setActive} collapse="invoice" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>

                    <Collapse iconName="fas fa-shield-alt" name="Roles & Permission" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Roles" iconName="far fa-circle" active={active} setActive={setActive} collapse="roles & permission" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Permission" iconName="far fa-circle" active={active} setActive={setActive} collapse="roles & permission" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>

                    <Collapse iconName="fas fa-shopping-cart" name="eCommerce" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Shop" iconName="far fa-circle" active={active} setActive={setActive} collapse="ecommerce" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Details" iconName="far fa-circle" active={active} setActive={setActive} collapse="ecommerce" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Wishlist" iconName="far fa-circle" active={active} setActive={setActive} collapse="ecommerce" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Checkout" iconName="far fa-circle" active={active} setActive={setActive} collapse="ecommerce" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>

                    <Collapse iconName="far fa-user" name="User" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="List" iconName="far fa-circle" active={active} setActive={setActive} collapse="user" setParent={setParent} setNParent={setNParent} loc="/user/list"/>
                        <SubMenu name="View" iconName="far fa-circle" active={active} setActive={setActive} collapse="user" setParent={setParent} setNParent={setNParent} loc="/user/view"/>
                    </Collapse>

                    <Collapse iconName="far fa-file-alt" name="Pages" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Profile" iconName="far fa-circle" active={active} setActive={setActive} collapse="pages" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="FAQ" iconName="far fa-circle" active={active} setActive={setActive} collapse="pages" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>

                    <Collapse iconName="fas fa-user-check" name="Authentication" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Login" iconName="far fa-circle" active={active} setActive={setActive} collapse="authentication" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Sign Out" iconName="far fa-circle" active={active} setActive={setActive} collapse="authentication" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>

                    <SubMenu name="Modal Examples" iconName="far fa-square" active={active} setActive={setActive} setParent={setParent} setNParent={setNParent}/>

                </div>

                <div className="charts pt-7">
                    <h3 className="font-medium text-gray-400 text-2xl uppercase pb-3 pl-6 select-none pointer-events-none">charts</h3>
                    <Collapse iconName="fas fa-chart-pie" name="Charts" nParent={nParent} setNParent={setNParent} parent={parent} active={active}>
                        <SubMenu name="Apex" iconName="far fa-circle" active={active} setActive={setActive} collapse="charts" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="ChartJS" iconName="far fa-circle" active={active} setActive={setActive} collapse="charts" setParent={setParent} setNParent={setNParent}/>
                        <SubMenu name="Recharts" iconName="far fa-circle" active={active} setActive={setActive} collapse="charts" setParent={setParent} setNParent={setNParent}/>
                    </Collapse>
                </div>

            </nav>
        </section>
    )
}
