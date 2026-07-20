import { useEffect, useRef, useState } from 'react'

export const useScrollSnap = (options = {}) => {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const {
    snapPosition = 'center',
    threshold = 0.6,
    duration = 300,
    ...rest
  } = options

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const children = container.children
    const totalItems = children.length

    let timeoutId = null
    let lastScrollTime = 0

    const handleScroll = () => {
      if (isScrolling) return

      const now = Date.now()
      if (now - lastScrollTime < duration) return
      lastScrollTime = now

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.top + containerRect.height / 2

      let closestIndex = 0
      let closestDistance = Infinity

      for (let i = 0; i < totalItems; i++) {
        const child = children[i]
        const childRect = child.getBoundingClientRect()
        let childPosition

        switch (snapPosition) {
          case 'center':
            childPosition = childRect.top + childRect.height / 2
            break
          case 'start':
            childPosition = childRect.top
            break
          case 'end':
            childPosition = childRect.bottom
            break
          default:
            childPosition = childRect.top + childRect.height / 2
        }

        const distance = Math.abs(containerCenter - childPosition)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      }

      if (closestDistance / window.innerHeight < threshold) {
        setActiveIndex(closestIndex)
        setIsScrolling(true)

        // Scroll to the closest item
        const targetChild = children[closestIndex]
        if (targetChild) {
          targetChild.scrollIntoView({
            behavior: 'smooth',
            block: snapPosition === 'center' ? 'center' : 'start'
          })
        }

        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          setIsScrolling(false)
        }, duration + 100)
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(timeoutId)
    }
  }, [snapPosition, threshold, duration, isScrolling])

  return { containerRef, activeIndex, isScrolling }
}