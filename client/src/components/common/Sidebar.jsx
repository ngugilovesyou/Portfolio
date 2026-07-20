import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  Home, 
  FolderGit2, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  User, 
  Mail,
  Download,
  User2
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/projects', icon: FolderGit2, label: 'Projects' },
  { path: '/skills', icon: Code2, label: 'Skills' },
  { path: '/experience', icon: Briefcase, label: 'Experience' },
  { path: '/education', icon: GraduationCap, label: 'Education' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/contact', icon: Mail, label: 'Contact' }
]

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-primary/95 backdrop-blur-xl border-r border-white/5 flex flex-col z-50 transition-all duration-300">
      {/* Logo */}
      <div className="flex items-center justify-center lg:justify-start gap-2 h-20 px-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-mono font-bold text-lg">
          <User2 />
        </div>
        <span className="hidden lg:block font-semibold text-lg ">
          Samuel Ngugi
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''} justify-center lg:justify-start`
            }
          >
            <item.icon size={22} strokeWidth={1.5} />
            <span className="hidden lg:inline text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Social Links */}
      <div className="border-t border-white/5 p-4 space-y-2">
        <div className="flex justify-center lg:justify-start gap-2">
          <a href="https://github.com/ngugilovesyou" target="_blank" rel="noopener noreferrer" 
             className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/samuel-gitau-361350261/" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="https://x.com/k_ntycoon" target="_blank" rel="noopener noreferrer"
             className="p-2 rounded-lg hover:bg-white/5 transition-colors">
            <FaTwitter size={18} />
          </a>
        </div>
        <a 
          href="/public/Samuel_Ngugi_Gitau_CV_O.pdf" 
          download
          className="hidden lg:flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
        >
          <Download size={16} />
          Download CV
        </a>
      </div>
    </aside>
  )
}

export default Sidebar