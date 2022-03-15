import React from 'react'
import ActivityUser from './ActivityUser'
import Timeline from './Timeline'

export default function Activity() {
  return (
    <div className="activity pl-2.5">
        <Timeline circleColor="bg-blue-500" title="User login" desc="User login at 2:12pm" time="12 mins ago"/>
        <Timeline circleColor="bg-orange-500" title="Meeting with john" desc="React Project meeting with john @10:15am" time="45 mins ago" InnerComponent={ActivityUser}/>
        <Timeline circleColor="bg-sky-500" title="Create a new react project for client" desc="Add files to new design folder" time="2 days ago"/>
        <Timeline circleColor="bg-red-500" title="Create Invoices for client" desc="Create new Invoices and send to Leona Watkins" time="6 years ago" last/>
        <div className="pdf flex gap-3 items-center mt-7 pl-10">
          <img src="/images/pdfImg.png" alt="pdf file" className="w-8 h-8 object-cover"/>
          <p className="text-gray-500 text-xl font-medium normal-case">invoice.pdf</p>
        </div>
    </div>
  )
}
