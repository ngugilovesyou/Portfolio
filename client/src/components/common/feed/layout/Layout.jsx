import React from 'react'
import { Outlet } from 'react-router-dom'
import MobileNav from './MobileNav'
import Sidebar from '../../Sidebar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-primary relative">
      <Sidebar />
      <main className="lg:pl-64 min-h-screen w-full transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </div>
      </main>
      <MobileNav />
    </div>
  )
}

export default Layout