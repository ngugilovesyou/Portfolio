import React, { useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../common/ProjectCard'
import HelmetMeta from '../SEO/HelmetMeta'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const containerRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power2.out'
      })
    }, containerRef)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const projectNames = projects.map(p => p.title).join(', ')

  return (
    <>
      <HelmetMeta 
        title="Projects"
        description={`Explore my portfolio of software development projects including ${projectNames}. Built with React, Next.js, Django, Flask, and modern technologies.`}
        keywords={`Software projects, portfolio, ${projectNames}, React projects, Django projects, Full-Stack development`}
        url="https://samuel-pi-three.vercel.app/projects"
        type="article"
        publishedTime="2026-07-20"
        modifiedTime="2026-07-20"
      />
      <div ref={containerRef} className="min-h-screen">
        {/* Responsive Header - Full width on mobile, offset for sidebar on desktop */}
        <div
          ref={headerRef}
          className="
            fixed top-0 right-0 z-20
            left-0
            lg:left-64
            px-4 sm:px-6
            py-3 sm:py-4
            bg-primary/80 backdrop-blur-xl
            border-b border-white/5
          "
        >
          <h1 className="text-xl sm:text-2xl font-bold">Projects</h1>
          <p className="text-text-secondary text-xs sm:text-sm">
            Explore my latest work
          </p>
        </div>

        {/* Project Feed - Adjusted padding for header and bottom nav */}
        <div className="feed-container pt-14 sm:pt-16 pb-20 lg:pb-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects