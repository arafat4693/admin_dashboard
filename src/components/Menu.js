import React,{useRef} from 'react'
import Collapse from './Collapse'
import Logo from './Logo'
import SubMenu from './SubMenu'

export default function Menu() {
    const menuRef = useRef()
    const menu = useRef()
    const dashboardRef = useRef()

    function activeMenu(e){
        menuRef.current.classList.remove('active__style')
        menuRef.current.classList.add('text-gray-600')
        e.target.classList.add('active__style')
        e.target.classList.remove('text-gray-600')
        menuRef.current = e.target
    }

    function openSubMenu(e){
        const icon = e.target.querySelector('.dir')
        const subMenu = e.target.nextElementSibling
        const current = e.target

        if(current.classList.contains('collapse') && subMenu.style.maxHeight){
            menu.current = null
            current.classList.remove('bg-gray-100')
        }else if(current.classList.contains('collapse') && !subMenu.style.maxHeight){
            if(menu.current){
                menu.current.classList.remove('bg-gray-100')
                menu.current.nextElementSibling.style.maxHeight = null
            }
            if(dashboardRef.current){
                dashboardRef.current.nextElementSibling.style.maxHeight = null
                dashboardRef.current = null
            }
            menu.current = current
            current.classList.add('bg-gray-100')
        }

        if(current.classList.contains('dashBoard') && !subMenu.style.maxHeight){
            if(menu.current){
                menu.current.classList.remove('bg-gray-100')
                menu.current.nextElementSibling.style.maxHeight = null
                menu.current = null
            }
            dashboardRef.current = current
        }else if(current.classList.contains('dashBoard') && subMenu.style.maxHeight){
            dashboardRef.current = null
        }

        if(subMenu.style.maxHeight){
            subMenu.style.maxHeight = null
            icon.classList.add('fa-chevron-right')
            icon.classList.remove('fa-chevron-down')
        }else{
            subMenu.style.maxHeight = subMenu.scrollHeight + "px"
            icon.classList.remove('fa-chevron-right')
            icon.classList.add('fa-chevron-down')
        }
    }

    return (
        <section className="menu w-97 bg-white h-screen fixed top-0 left-0 shadow-lg">
            <div className="menu__logo h-24 flex items-center justify-between px-8">
                <Logo/>
                <span className="circles flex justify-center items-center w-8 h-8 rounded-full border-2 border-solid border-blue-600"></span>
            </div>
            <nav className="menu__container h-full pl-6 pr-4 overflow-y-scroll myScroll">

                <div className="dashBoard__container">
                    <div onClick={openSubMenu} className="dashBoard bg-gray-100 rounded-lg flex justify-between px-6 py-5 cursor-pointer mb-2 hover:pl-8 transition-all duration-300">
                        <div className="name flex items-center gap-4 pointer-events-none">
                            <i className="fas fa-home text-2xl text-gray-700"></i>
                            <h3 className="font-medium text-2xl text-gray-600 tracking-wider">dashboards</h3>
                        </div>
                        <div className="arrow flex items-center gap-5 pointer-events-none">
                            <span className="flex items-center justify-center bg-orange-200 w-9 h-9 rounded-full text-xl text-orange-600 font-semibold">2</span>
                            <i className="fas fa-chevron-right text-gray-400 text-lg dir"></i>
                        </div>
                    </div>

                    <div className="submenu transition-all duration-400 overflow-hidden max-h-0">
                        <div onClick={activeMenu} ref={menuRef} className="rounded-lg flex items-end gap-4 cursor-pointer pl-7 py-5 hover:pl-9 transition-all duration-300 active__style">
                            <i className="far fa-circle text-lg pointer-events-none"></i>
                            <h3 className="font-normal tracking-wide text-2xl pointer-events-none">analytics</h3>
                        </div>
                        <SubMenu name="eCommerce" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </div>
                </div>

                <div className="pages pt-12">
                    <h3 className="font-medium text-gray-400 text-2xl uppercase pb-4 pl-6">apps & pages</h3>
                    <SubMenu name="Email" activeMenu={activeMenu} iconName="far fa-envelope"/>
                    <SubMenu name="Chat" activeMenu={activeMenu} iconName="far fa-comment-alt"/>
                    <SubMenu name="Todo" activeMenu={activeMenu} iconName="far fa-check-square"/>
                    <SubMenu name="Calendar" activeMenu={activeMenu} iconName="far fa-calendar"/>

                    <Collapse iconName="far fa-file-alt" openSubMenu={openSubMenu} name="Invoice">
                        <SubMenu name="List" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Preview" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Edit" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Add" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <Collapse iconName="fas fa-shield-alt" openSubMenu={openSubMenu} name="Roles & Permission">
                        <SubMenu name="Roles" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Permission" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <Collapse iconName="fas fa-shopping-cart" openSubMenu={openSubMenu} name="eCommerce">
                        <SubMenu name="Shop" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Details" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Wishlist" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Checkout" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <Collapse iconName="far fa-user" openSubMenu={openSubMenu} name="User">
                        <SubMenu name="List" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="View" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <Collapse iconName="far fa-file-alt" openSubMenu={openSubMenu} name="Pages">
                        <SubMenu name="Profile" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="FAQ" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <Collapse iconName="fas fa-user-check" openSubMenu={openSubMenu} name="Authentication">
                        <SubMenu name="Login" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Sign Out" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>

                    <SubMenu name="Modal Examples" activeMenu={activeMenu} iconName="far fa-square"/>

                </div>

                <div className="charts pt-7">
                    <h3 className="font-medium text-gray-400 text-2xl uppercase pb-3 pl-6">charts</h3>
                    <Collapse iconName="fas fa-chart-pie" openSubMenu={openSubMenu} name="Charts">
                        <SubMenu name="Apex" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="ChartJS" activeMenu={activeMenu} iconName="far fa-circle"/>
                        <SubMenu name="Recharts" activeMenu={activeMenu} iconName="far fa-circle"/>
                    </Collapse>
                </div>

            </nav>
        </section>
    )
}
