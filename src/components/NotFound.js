import React from 'react'
import Logo from './Logo'
import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div className="relative">
        <div className="logo sm:block sm:pt-0 sm:pb-0 sm:absolute sm:top-8 sm:left-10 flex items-center justify-center pt-20">
            <Logo/>
        </div>
        <main className="w-full sm:max-w-7xl sm:mx-auto text-center pt-20">
            <h3 className="text-4xl text-gray-600 font-medium">Page Not Found 🦇</h3>
            <p className="text-2xl text-gray-500 font-normal normal-case py-7">Oops! 😓 The requested URL was not found on this server.</p>
            <Link to="/dashboard/ecommerce"><button className="secButton__style px-5 py-4">Back to home</button></Link>
            <img src="/images/error.png" alt="error" className="w-50 h-50 object-cover mt-4 mx-auto"/>
        </main>
    </div>
  )
}
