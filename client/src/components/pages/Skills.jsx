import React, { useEffect, useRef } from 'react'
import { skills } from '../data/skills'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Layout, Server, Database, Wrench, 
  Code2, Zap, Shield, Rocket 
} from 'lucide-react'
import HelmetMeta from '../SEO/HelmetMeta'

// Register ScrollTrigger if not already registered
gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Layout,
  Server,
  Database,
  Wrench
}

const Skills = () => {
  const containerRef = useRef(null)
  const sectionRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el, i) => {
        if (!el) return
        
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
            invalidateOnRefresh: true
          }
        })
      })
    }, containerRef)

    
    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
 const allSkills = skills.categories.flatMap(cat => cat.skills.map(s => s.name))
  const skillKeywords = allSkills.join(', ')

  return (
    <>
    <HelmetMeta 
        title="Skills & Expertise"
        description={`Full-Stack Developer skills including ${skillKeywords}. Specialized in React, Next.js, Django, Flask, TypeScript, Python, and modern web technologies.`}
        keywords={`${skillKeywords}, Full-Stack skills, Web development technologies, Programming languages`}
        url="https://samuel-pi-three.vercel.app/skills"
      />
      <div ref={containerRef} className="min-h-screen p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
      <div className="max-w-5xl mx-auto mt-14 sm:mt-16 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Skills & Expertise</h1>
        <p className="text-text-secondary text-sm sm:text-base mb-6 sm:mb-8">Technologies and tools I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {skills.categories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2
            return (
              <div 
                key={category.name}
                ref={el => sectionRefs.current[idx] = el}
                className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/20">
                    <Icon size={16} sm:size={20} className="text-accent" />
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold">{category.name}</h2>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-0.5 sm:space-y-1">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="flex items-center gap-1.5 sm:gap-2">
                          <span className="text-sm sm:text-base">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </span>
                        <span className="text-text-secondary text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1 sm:h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className="glass rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xl sm:text-2xl font-bold gradient-text">5+</p>
            <p className="text-xs sm:text-sm text-text-secondary">Projects Delivered</p>
          </div>
          <div className="glass rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xl sm:text-2xl font-bold gradient-text">15+</p>
            <p className="text-xs sm:text-sm text-text-secondary">Technologies</p>
          </div>
          <div className="glass rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xl sm:text-2xl font-bold gradient-text">1yr</p>
            <p className="text-xs sm:text-sm text-text-secondary">Experience</p>
          </div>
          <div className="glass rounded-xl p-3 sm:p-4 text-center">
            <p className="text-xl sm:text-2xl font-bold gradient-text">3</p>
            <p className="text-xs sm:text-sm text-text-secondary">Payment Integrations</p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Skills