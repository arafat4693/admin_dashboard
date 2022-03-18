import React from 'react'
import ECommerce from './ECommerce'
import Header from './Header'
import {Routes, Route, Navigate, Link} from "react-router-dom";
import Users from './Users';
import UserDetail from './UserDetail';

export default function DashBoard() {
    return (
        <main className="mainDashboard h-screen w-full pl-97">
            <section className="max-w-screen-2xl mx-auto pt-6 pb-4 px-10">
                <Link to="/dashboard/ecommerce">ecom</Link>
                <Link to="/user/list">list</Link>
                <Link to="/user/view">detail</Link>
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
