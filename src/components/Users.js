import React, {useState, useEffect} from 'react';
import TotalUser from './TotalUser';
import { UserIcon, UserAddIcon, UserGroupIcon, UserRemoveIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import {role, plan, status} from '../data'
import UserFilter from './UserFilter';
import UserTable from './UserTable';
import {useSelector, useDispatch} from 'react-redux'
import {users} from '../slice'
import {openBox} from '../slice'
import Footer from './Footer';
import {useLocation } from "react-router-dom"
import {setLoc} from '../slice'

export default function Users() {
  const allUsers = useSelector(users)
  const [filteredUsers, setFilteredUsers] = useState([...allUsers])
  const [showUsers, setShowUsers] = useState(10)
  const [userSlice, setUserSlice] = useState([[]])
  const [buttonActive, setButtonActive] = useState(1)
  const [powerState, setPowerState] = useState({
    Role: 'Select Role',
    Plan: 'Select Plan',
    Status: 'Select Status'
  })
  const [inputState, setInputState] = useState('')
  const dispatch = useDispatch()

  const { pathname } = useLocation()
    
  useEffect(()=>{
      dispatch(setLoc(pathname))
  },[pathname])

  function numberOfUser(e){
    setShowUsers(+e.target.value)
    setButtonActive(1)
  }

  useEffect(()=>{
    const value = inputState.toLowerCase()
    setFilteredUsers(allUsers.filter(user=>((user.user[0].toLowerCase().includes(value) || user.mail.toLowerCase().includes(value)) && user.role.includes(powerState.Role) && user.plan.includes(powerState.Plan) && user.status.includes(powerState.Status))))
  },[powerState, allUsers, inputState])

    useEffect(()=>{
        !userSlice[+buttonActive-1] && setButtonActive((userSlice.length===0?1:userSlice.length))
    },[userSlice, buttonActive])

    function moveRight(){
      setButtonActive(state=>(
        state===userSlice.length?userSlice.length:state+1
      ))
    }

    function moveLeft(){
      setButtonActive(state=>(
        state===1?1:state-1
      ))
    }

    function newUser(){
      dispatch(openBox({visibleClass:true, typeAction:'Submit'}))
    }

  return (
    <section className="users">

        <div className="totalUsers grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 my-8">
            <TotalUser amount="45,443" desc="Total Users" Icon={UserIcon} bg="bg-indigo-100" color="text-indigo-500"/>
            <TotalUser amount="5,937" desc="Paid Users" Icon={UserAddIcon} bg="bg-red-100" color="text-red-500"/>
            <TotalUser amount="23,474" desc="Active Users" Icon={UserGroupIcon} bg="bg-green-100" color="text-green-500"/>
            <TotalUser amount="354" desc="Pending Users" Icon={UserRemoveIcon} bg="bg-orange-100" color="text-orange-500"/>
        </div>
        
        <div className="filtersContainer bg-white px-8 py-6 rounded-xl shadow-lg mb-8">
          <h3 className="filterHeader font-medium text-3xl text-gray-600 pb-8">Filters</h3>
          <div className="filterBody grid grid-cols-1 md:grid-cols-3 gap-10">
            <UserFilter setPowerState={setPowerState} option="Role" setting={role}/>
            <UserFilter setPowerState={setPowerState} option="Plan" setting={plan}/>
            <UserFilter setPowerState={setPowerState} option="Status" setting={status}/>
          </div>
        </div>

        <div className="usersContainer bg-white rounded-xl shadow-lg mb-16">
          <div className="usersContainer_header px-7 py-6 flex sm:flex-row flex-col sm:items-center items-start justify-between gap-4">

            <div className="userEntries">
              <label htmlFor="rows" className="label__style">show</label>
              <select id="rows" className="input__style mx-3" onChange={numberOfUser}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
              </select>
              <label htmlFor="rows"  className="label__style">Entries</label>
            </div>

            <div className="addUser flex gap-5 items-start sm:flex-row flex-col sm:items-center">
              <div className="inputBox">
                <label htmlFor="input" className="label__style mr-3">search:</label>
                <input type="search" id="input" className="input__style normal-case" onChange={e=>setInputState(e.target.value)}  value={inputState}/>
              </div>
              <button onClick={newUser} className="rounded-lg text-2xl px-8 py-4 bg-blue-600 text-white capitalize hover:shadow-lg hover:shadow-blue-400">add new user</button>
            </div>

          </div>
          <div className="bg-white overflow-x-scroll mxl:overflow-hidden">
            <UserTable showUsers={showUsers} userSlice={userSlice} setUserSlice={setUserSlice} buttonActive={buttonActive} allUsers={filteredUsers}/>
          </div>

            {filteredUsers.length !== 0 &&
            <div className="userNav_container flex justify-end py-7 px-4">
              <div className="userNavigation flex items-center bg-gray-100 rounded-full select-none">
                <ChevronLeftIcon className={`w-5 h-5 ml-3 mr-5 ${buttonActive===1?'text-gray-400 cursor-default':'text-gray-600 cursor-pointer'}`} onClick={moveLeft}/>
                  {userSlice.map((slice, index)=>(
                  <button key={index} onClick={e=>setButtonActive(+e.target.innerText)} className={`w-12 h-12 rounded-full ${index+1===buttonActive?'bg-blue-500 text-white':'text-gray-500'} font-medium text-xl`}>
                    {index+1}
                  </button>
                  ))}
                <ChevronRightIcon className={`w-5 h-5 p ml-5 mr-3 ${buttonActive===userSlice.length?'text-gray-400 cursor-default':'text-gray-600 cursor-pointer'}`} onClick={moveRight}/>
              </div>
            </div>
            }
        </div>

        <Footer/>
    </section>
  )
}
