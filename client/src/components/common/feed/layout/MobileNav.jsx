import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, FolderGit2, Code2, User, Mail, Briefcase, GraduationCap } from 'lucide-react'

const MobileNav = () => {
  const location = useLocation()
  
  // Show only on mobile
  if (window.innerWidth >= 1024) return null

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/projects', icon: FolderGit2, label: 'Projects' },
    { path: '/skills', icon: Code2, label: 'Skills' },
    { path: '/experience', icon: Briefcase, label: 'Exp' },
    { path: '/education', icon: GraduationCap, label: 'Edu' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' }
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary/95 backdrop-blur-xl border-t border-white/5 px-2 py-1.5 lg:hidden z-50 safe-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
                          (item.path !== '/' && location.pathname.startsWith(item.path))
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded-lg transition-all duration-200 relative ${
                isActive ? 'text-accent' : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <item.icon size={20} strokeWidth={isActive ? 2 : 1.5} />
              <span className="text-[9px] font-medium tracking-wide">{item.label}</span>
              {isActive && (
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileNav