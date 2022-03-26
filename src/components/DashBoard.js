import React from 'react'
import ECommerce from './ECommerce'
import Header from './Header'
import {Routes, Route, Navigate} from "react-router-dom";
import Users from './Users';
import UserDetail from './UserDetail';

export default function DashBoard() {
    return (
        <main className="mainDashboard h-screen w-full pl-0 xlg:pl-97">
            <section className="max-w-screen-xl mx-auto pt-6 pb-4 px-10">
                <Header/>
                <Routes>
                    <Route path="/dashboard/ecommerce" element={<ECommerce/>} />
                    <Route path="/user/list" element={<Users/>} />
                    <Route path="/user/view" element={<UserDetail/>} />
                    <Route path="/" element={<Navigate to="/dashboard/ecommerce" />} />
                </Routes>
            </section>
        </main>
    )
}
