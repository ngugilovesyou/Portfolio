import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from './MobileNav'
import Sidebar from '../../Sidebar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Sidebar />
      <main className="ml-20 lg:ml-64 min-h-screen">
        <Outlet />
      </main>
      <MobileNav />
    </div>
  )
}

export default Layout