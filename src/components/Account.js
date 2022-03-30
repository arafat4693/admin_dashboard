import React from 'react'
import Activity from './Activity'
import InvoiceTable from './InvoiceTable'
import SkillsTable from './SkillsTable'

export default function Account({display}) {
  return (
    <div className={`${display}`}>
        <div className="skillsDetail shadow-md mb-8 rounded-xl overflow-hidden shadow-gray-200">
            <h2 className="bg-white text-gray-500 text-3xl normal-case font-medium py-7 px-9">User's Projects List</h2>
            <div className="bg-white overflow-x-scroll mxl:overflow-hidden">
              <SkillsTable/>
            </div>
        </div>

        <div className="activity shadow-md mb-8 rounded-xl overflow-hidden py-7 px-9 bg-white shadow-gray-200">
            <h2 className=" text-gray-500 text-3xl normal-case font-medium pb-10">User Activity Timeline</h2>
            <Activity/>
        </div>

        <div className="invoices shadow-md rounded-xl overflow-hidden shadow-gray-200">
            <h2 className="bg-white text-gray-500 text-3xl normal-case font-medium py-7 px-9">Invoice</h2>
            <div className="bg-white overflow-x-scroll mxl:overflow-hidden">
              <InvoiceTable/>
            </div>
        </div>
    </div>
  )
}
