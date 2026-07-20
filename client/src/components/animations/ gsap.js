import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin - THIS IS CRITICAL
gsap.registerPlugin(ScrollTrigger)

// Page transitions
export const pageTransition = {
  enter: (container) => {
    gsap.from(container, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all'
    })
  },
  exit: (container) => {
    gsap.to(container, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in'
    })
  }
}

// Fade in animations
export const fadeIn = (elements, options = {}) => {
  const {
    duration = 0.6,
    delay = 0,
    stagger = 0.1,
    y = 20,
    ease = 'power2.out',
    ...rest
  } = options

  return gsap.from(elements, {
    opacity: 0,
    y,
    duration,
    delay,
    stagger,
    ease,
    ...rest
  })
}

// Scroll animations with proper ScrollTrigger config
export const scrollReveal = (elements, options = {}) => {
  const {
    duration = 0.8,
    y = 40,
    opacity = 0,
    stagger = 0.1,
    ease = 'power2.out',
    trigger = null,
    start = 'top bottom-=100',
    toggleActions = 'play none none reverse',
    ...rest
  } = options

  return gsap.from(elements, {
    opacity,
    y,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: trigger || elements,
      start,
      toggleActions,
      invalidateOnRefresh: true,
      ...rest
    }
  })
}

// Loading animation
export const loadingAnimation = (container) => {
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' }
  })

  tl.to(container, {
    opacity: 0,
    duration: 0.6,
    delay: 0.3
  })
  .to(container, {
    display: 'none',
    duration: 0
  })

  return tl
}

// Counter animation
export const animateCounter = (element, target, options = {}) => {
  const {
    duration = 1.5,
    ease = 'power1.out',
    ...rest
  } = options

  return gsap.to(element, {
    innerText: target,
    duration,
    ease,
    snap: { innerText: 1 },
    ...rest
  })
}

// Parallax animation with ScrollTrigger
export const parallax = (elements, options = {}) => {
  const {
    speed = 0.5,
    start = 'top bottom',
    end = 'bottom top',
    scrub = 1,
    ...rest
  } = options

  return gsap.to(elements, {
    y: (i, el) => {
      const factor = el.dataset.speed || speed
      return `-${factor * 100}%`
    },
    ease: 'none',
    scrollTrigger: {
      trigger: elements,
      start,
      end,
      scrub,
      invalidateOnRefresh: true,
      ...rest
    }
  })
}

// Clean up all ScrollTrigger instances (call this when unmounting)
export const cleanupScrollTriggers = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

// Refresh ScrollTrigger (call after dynamic content changes)
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh()
}