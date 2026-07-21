import React, { useEffect, useRef } from 'react'
import { MapPin, Download, Mail } from 'lucide-react'
import gsap from 'gsap'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import HelmetMeta from '../SEO/HelmetMeta'

const About = () => {
  const containerRef = useRef(null)
  const sectionsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

 return (
  <>
  <HelmetMeta 
        title="About Me"
        description="Learn about Samuel Ngugi - a Full-Stack Developer based in Nairobi, Kenya. Specializing in React, Next.js, Django, Flask, and modern web technologies."
        keywords="About Samuel Ngugi, Full-Stack Developer, Nairobi developer, React developer, Django developer"
        url="https://samuel-pi-three.vercel.app/about"
        type="profile"
      />
       <div ref={containerRef} className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 pb-24 lg:pb-8 pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-4xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">About Me</h1>
        <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">Get to know me better</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Profile Card */}
          <div 
            ref={el => sectionsRef.current[0] = el}
            className="md:col-span-1 glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center"
          >
            <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden border-2 border-accent/30">
  <img
    src="https://res.cloudinary.com/dxwzdftzm/image/upload/v1784570856/IMG_20260720_210543_x5shnl.jpg"
    alt="Samuel Ngugi"
    className="w-full h-full object-cover"
  />
</div>
            <h2 className="text-base sm:text-lg md:text-xl font-bold">Samuel Ngugi</h2>
            <p className="text-text-secondary text-xs sm:text-sm">Full-Stack Developer</p>
            <div className="flex items-center justify-center gap-1 text-xs sm:text-sm text-text-secondary mt-1.5 sm:mt-2">
              <MapPin size={14} sm:size={16} />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <a href="mailto:amsamgittau@gmail.com" className="p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Mail size={16} sm:size={18} />
              </a>
              <a href="https://github.com/ngugilovesyou" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors">
                <FaGithub size={16} sm:size={18} />
              </a>
              <a href="https://www.linkedin.com/in/samuel-gitau-361350261/" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors">
                <FaLinkedin size={16} sm:size={18} />
              </a>
              <a href="https://x.com/k_ntycoon" target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-white/5 transition-colors">
                <FaTwitter size={16} sm:size={18} />
              </a>
            </div>
            <a 
              href="https://res.cloudinary.com/dxwzdftzm/image/upload/v1784622160/Samuel_Ngugi_Gitau_CV_O_c4vqxp.pdf" 
              download
              className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-accent hover:bg-accent-hover text-xs sm:text-sm font-medium transition-colors"
            >
              <Download size={14} sm:size={16} />
              <span>Download CV</span>
            </a>
          </div>

          {/* Bio */}
          <div 
            ref={el => sectionsRef.current[1] = el}
            className="md:col-span-2 glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
          >
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Who I Am</h3>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              I'm a passionate Full-Stack Developer with hands-on experience building and shipping 
              responsive, secure web applications using React, Next.js, Django, and Flask. 
              I enjoy owning projects end-to-end — from UI/UX design and REST API development 
              through authentication, payment integration, and deployment.
            </p>
            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
              With freelance and internship experience gathering requirements directly from clients 
              and delivering production-ready features independently and as part of a team, 
              I'm always looking to keep building on a growing foundation in modern JavaScript/TypeScript 
              and Python web development.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/5 rounded-xl p-3 sm:p-4">
                <p className="text-xl sm:text-2xl font-bold gradient-text">2+</p>
                <p className="text-[10px] sm:text-xs text-text-secondary">Years Experience</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3 sm:p-4">
                <p className="text-xl sm:text-2xl font-bold gradient-text">5+</p>
                <p className="text-[10px] sm:text-xs text-text-secondary">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div 
          ref={el => sectionsRef.current[2] = el}
          className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mt-4 sm:mt-6"
        >
          <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">My Philosophy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2"></div>
              <h4 className="font-medium text-xs sm:text-sm">Quality First</h4>
              <p className="text-[10px] sm:text-xs text-text-secondary mt-0.5 sm:mt-1">Clean, maintainable code</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2"></div>
              <h4 className="font-medium text-xs sm:text-sm">User-Centric</h4>
              <p className="text-[10px] sm:text-xs text-text-secondary mt-0.5 sm:mt-1">Delightful experiences</p>
            </div>
            <div className="bg-white/5 rounded-xl p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2"></div>
              <h4 className="font-medium text-xs sm:text-sm">Security Minded</h4>
              <p className="text-[10px] sm:text-xs text-text-secondary mt-0.5 sm:mt-1">Best-in-class practices</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
   
  )
}

export default About