import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export const useGSAP = (animation, dependencies = []) => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Kill any existing animations
    if (animationRef.current) {
      animationRef.current.kill()
    }

    // Create new animation
    animationRef.current = animation(containerRef.current)

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, dependencies)

  return containerRef
}

export const useGSAPTimeline = (timelineConfig, dependencies = []) => {
  const containerRef = useRef(null)
  const timelineRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create new timeline
    const tl = gsap.timeline(timelineConfig || {})
    timelineRef.current = tl

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, dependencies)

  return { containerRef, timeline: timelineRef }
}