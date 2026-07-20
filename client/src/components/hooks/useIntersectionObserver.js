import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    once = true,
    ...rest
  } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting
        setIsVisible(isElementVisible)

        if (isElementVisible && once) {
          setHasBeenVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, once])

  return { elementRef, isVisible, hasBeenVisible }
}