import { Routes, Route, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/common/feed/layout/Layout'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Experience from './components/pages/Experience'
import About from './components/pages/About'
import Education from './components/pages/Education'
import Contact from './components/pages/Contact'

function App() {
  const location = useLocation()

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Analytics />
    </>
  )
}

export default App