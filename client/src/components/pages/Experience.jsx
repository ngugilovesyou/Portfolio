import React, { useEffect, useRef } from 'react'
import { experiences } from '../data/experience'
import gsap from 'gsap'
import { Calendar, MapPin, Briefcase, Award } from 'lucide-react'
import HelmetMeta from '../SEO/HelmetMeta'

const Experience = () => {
  const containerRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -30 : 30,
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
 const companyNames = experiences.map(exp => exp.company).join(', ')
   return (
    <>
    <HelmetMeta 
  title="Experience"
  description="Explore my professional experience, the projects I've contributed to, and how I've helped build scalable web applications and digital solutions."
  keywords={`${companyNames}, Full-Stack Developer, Software Engineer, React Developer, Flask Developer, Django Developer, Web Development`}
  url="https://samuel-pi-three.vercel.app//experience"
  type="article"
  publishedTime="2026-07-20"
  modifiedTime="2026-07-20"
/>
<div ref={containerRef} className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 pb-24 lg:pb-8 pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-4xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Experience</h1>
        <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">My professional journey</p>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile */}
          <div className="hidden sm:block absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/10" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={el => itemRefs.current[index] = el}
              className="relative pl-0 sm:pl-12 md:pl-16 pb-6 sm:pb-8 md:pb-12 last:pb-0"
            >
              {/* Timeline Dot - Hidden on mobile */}
              <div className="hidden sm:block absolute left-0 top-1.5 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-accent" />

              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-accent/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                  <div>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold">{exp.role}</h2>
                    <h3 className="text-accent font-medium text-sm sm:text-base">{exp.company}</h3>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-0.5 sm:gap-1 text-xs sm:text-sm text-text-secondary">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} sm:size={14} />
                      <span className="text-[10px] sm:text-sm">{exp.duration}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} sm:size={14} />
                      <span className="text-[10px] sm:text-sm">{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                      <Briefcase size={14} sm:size={16} />
                      <span>Responsibilities</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.achievements && (
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                        <Award size={14} sm:size={16} />
                        <span>Achievements</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-text-secondary">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                            <span className="text-accent mt-0.5 flex-shrink-0">★</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-xs rounded-full bg-white/5 border border-white/5 text-text-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Experience