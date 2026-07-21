import React from 'react'
import { NavLink } from 'react-router-dom'
import { 
  FaHome, 
  FaFolderOpen, 
  FaCode, 
  FaBriefcase, 
  FaGraduationCap, 
  FaUser, 
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload
} from 'react-icons/fa'
import { User2 } from 'lucide-react'


const navItems = [
  { path: '/', icon: FaHome, label: 'Home' },
  { path: '/projects', icon: FaFolderOpen, label: 'Projects' },
  { path: '/skills', icon: FaCode, label: 'Skills' },
  { path: '/experience', icon: FaBriefcase, label: 'Experience' },
  { path: '/education', icon: FaGraduationCap, label: 'Education' },
  { path: '/about', icon: FaUser, label: 'About' },
  { path: '/contact', icon: FaEnvelope, label: 'Contact' }
]

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary/95 backdrop-blur-xl border-r border-white/5 flex flex-col z-50 transition-all duration-300 hidden lg:flex">
      {/* Logo */}
      <div className="flex items-center justify-start gap-3 h-20 px-4 border-b border-white/5">
        <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center font-mono font-bold text-lg">
          <User2 />
        </div>
        <span className="font-semibold text-lg gradient-text">
          Samuel Ngugi
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'text-accent bg-accent/10' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                }`
              }
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          )
        })}
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
          href="https://res.cloudinary.com/dxwzdftzm/image/upload/v1784622160/Samuel_Ngugi_Gitau_CV_O_c4vqxp.pdf" 
          download
          className="hidden lg:flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors"
        >
          <FaDownload size={16} />
          Download CV
        </a>
      </div>
    </aside>
  )
}

export default Sidebar