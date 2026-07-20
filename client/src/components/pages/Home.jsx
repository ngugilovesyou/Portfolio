import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight,  Mail } from 'lucide-react'
import gsap from 'gsap'
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import HelmetMeta from '../SEO/HelmetMeta'

const Home = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      })
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
      })
      gsap.from(descRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
      })
      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.6,
        ease: 'power2.out'
      })
      gsap.from(socialRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        ease: 'power2.out'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

 return (
  <>
  <HelmetMeta 
        title="Home"
        description="Samuel Ngugi - Full-Stack Developer specializing in React, Next.js, Django, and Flask. Building responsive, secure web applications with modern technologies."
        url="https://samuel-ngugi.dev"
      />
       <div ref={containerRef} className="min-h-screen flex items-center justify-center px-4 pb-20 lg:pb-0 pt-16 lg:pt-0">
      <div className="max-w-3xl text-center">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3"
        >
          Samuel{' '}
          <span className="gradient-text">Ngugi</span>
          <span className="block text-xl sm:text-2xl md:text-3xl font-normal text-text-secondary mt-1">
            Full-Stack Developer
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-base sm:text-lg md:text-xl text-text-secondary mb-4"
        >
          Building responsive, secure web applications with React, Next.js, Django & Flask
        </p>

        <p 
          ref={descRef}
          className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed px-2"
        >
          I craft end-to-end solutions from UI/UX design through deployment, 
          with expertise in authentication, payment integration, and performance optimization.
          Passionate about delivering production-ready features that solve real problems.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6"
        >
          <Link
            to="/projects"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3 bg-accent hover:bg-accent-hover rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-white/10 hover:border-white/20 rounded-lg font-medium transition-all duration-300 text-center"
          >
            Let's Connect
          </Link>
        </div>

        <div 
          ref={socialRef}
          className="flex items-center justify-center gap-3 mt-6"
        >
          <a 
            href="https://github.com/ngugilovesyou" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/samuel-gitau-361350261/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://x.com/k_ntycoon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href="mailto:amsamgittau@gmail.com"
            className="p-2.5 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </div>
  </>
   
  )
}

export default Home