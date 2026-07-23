import React, { useEffect, useRef } from 'react'
import { education } from '../data/education'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react'
import HelmetMeta from '../SEO/HelmetMeta'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const containerRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el, i) => {
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

  return (
    <>
    <HelmetMeta 
  title="Education"
  description="Explore my educational background, certifications, and the learning experiences that have shaped my journey as a full-stack software developer."
  keywords={`Software Engineering, Full-Stack Development, Moringa School, Web Development, Samuel Ngugi`}
  url="https://samuel-pi-three.vercel.app/education"
  type="article"
  publishedTime="2026-07-20"
  modifiedTime="2026-07-20"
/>
<div ref={containerRef} className="min-h-screen px-3 sm:px-4 md:px-6 lg:px-8 pb-24 lg:pb-8 pt-4 sm:pt-6 md:pt-8">
      <div className="max-w-4xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Education</h1>
        <p className="text-text-secondary text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">My academic journey</p>

        <div className="relative space-y-4 sm:space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              ref={el => itemRefs.current[index] = el}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-accent/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                <div>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold">{edu.program}</h2>
                  <h3 className="text-accent font-medium text-sm sm:text-base">{edu.school}</h3>
                </div>
                <div className="flex flex-col items-start md:items-end gap-0.5 sm:gap-1 text-xs sm:text-sm text-text-secondary">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} sm:size={14} />
                    <span className="text-[10px] sm:text-sm">{edu.duration}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} sm:size={14} />
                    <span className="text-[10px] sm:text-sm">{edu.location}</span>
                  </span>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                    <BookOpen size={14} sm:size={16} />
                    <span>Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-sm rounded-lg bg-white/5 border border-white/5 text-text-secondary">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.achievements && (
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-text-secondary mb-1.5 sm:mb-2 flex items-center gap-1.5 sm:gap-2">
                      <Award size={14} sm:size={16} />
                      <span>Achievements</span>
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-text-secondary">
                      {edu.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 sm:gap-2">
                          <span className="text-accent mt-0.5 flex-shrink-0">★</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Education