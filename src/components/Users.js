import React from 'react';
import TotalUser from './TotalUser';
import { UserIcon, UserAddIcon, UserGroupIcon, UserRemoveIcon } from '@heroicons/react/outline'
import Filter from './Filter';
import {role} from '../data'

export default function Users() {
  return (
    <section className="users">

        <div className="totalUsers grid grid-cols-4 gap-10 my-8">
            <TotalUser amount="45,443" desc="Total Users" Icon={UserIcon} bg="bg-indigo-100" color="text-indigo-500"/>
            <TotalUser amount="5,937" desc="Paid Users" Icon={UserAddIcon} bg="bg-red-100" color="text-red-500"/>
            <TotalUser amount="23,474" desc="Active Users" Icon={UserGroupIcon} bg="bg-green-100" color="text-green-500"/>
            <TotalUser amount="354" desc="Pending Users" Icon={UserRemoveIcon} bg="bg-orange-100" color="text-orange-500"/>
        </div>
        
        <div className="filtersContainer bg-white px-8 py-6 rounded-xl shadow-lg">
          <h3 className="filterHeader font-medium text-3xl text-gray-600 pb-8">Filters</h3>
          <div className="filterBody grid grid-cols-3 gap-10">
            <Filter option="Role" setting={role}/>
          </div>
        </div>
    </section>
  )
}
