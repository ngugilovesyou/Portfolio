import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { 
  FaHome, 
  FaFolderOpen, 
  FaCode, 
  FaUser, 
  FaEnvelope, 
  FaBriefcase, 
  FaGraduationCap
} from 'react-icons/fa'

const MobileNav = () => {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) return null

  const navItems = [
    { path: '/', icon: FaHome, label: 'Home' },
    { path: '/projects', icon: FaFolderOpen, label: 'Projects' },
    { path: '/skills', icon: FaCode, label: 'Skills' },
    { path: '/experience', icon: FaBriefcase, label: 'Exp' },
    { path: '/education', icon: FaGraduationCap, label: 'Edu' },
    { path: '/about', icon: FaUser, label: 'About' },
    { path: '/contact', icon: FaEnvelope, label: 'Contact' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary/95 border-t border-white/5 px-2 py-2 lg:hidden z-50 safe-bottom">
      <div className="flex items-center justify-around max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path || 
                          (item.path !== '/' && location.pathname.startsWith(item.path))
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-colors duration-200 ${
                isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon size={20} />
              <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNav