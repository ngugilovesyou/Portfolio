export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const debounce = (func, delay = 300) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func(...args), delay)
  }
}

export const throttle = (func, limit = 300) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy text: ', err)
    return false
  }
}

export const getTechColor = (tech) => {
  const colors = {
    'React': '#61DAFB',
    'Next.js': '#000000',
    'TypeScript': '#3178C6',
    'JavaScript': '#F7DF1E',
    'Python': '#3776AB',
    'Django': '#092E20',
    'Flask': '#000000',
    'Node.js': '#339933',
    'PostgreSQL': '#336791',
    'MySQL': '#4479A1',
    'SQLite': '#003B57',
    'Tailwind CSS': '#06B6D4',
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'Angular': '#DD0031',
    'Git': '#F05032',
    'GitHub': '#181717',
    'Linux': '#FCC624',
    'VS Code': '#007ACC',
    'Vercel': '#000000',
    'Postman': '#FF6C37'
  }
  return colors[tech] || '#6C63FF'
}