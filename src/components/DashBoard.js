import React from 'react'
import ECommerce from './ECommerce'
import Header from './Header'

export default function DashBoard() {
    return (
        <main className="mainDashboard h-screen w-full pl-97">
            <section className="max-w-screen-2xl mx-auto py-6 px-10">
                <Header/>
                <ECommerce/>
            </section>
        </main>
    )
}
