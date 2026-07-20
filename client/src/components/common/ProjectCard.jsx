import React, { useEffect, useRef, useState } from 'react'
import { 
  ExternalLink, 
  Heart, 
  Bookmark, 
  Share2, 
  MessageCircle,
  Play,
  Pause,
  AlertCircle,
  Image
} from 'lucide-react'
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showScreenshot, setShowScreenshot] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleVideoClick = async () => {
    if (videoRef.current && !videoError) {
      try {
        if (isPlaying) {
          videoRef.current.pause()
          setIsPlaying(false)
        } else {
          await videoRef.current.play()
          setIsPlaying(true)
          setHasStartedPlaying(true)
        }
      } catch (error) {
        console.error('Video playback error:', error)
        setVideoError(true)
        setShowScreenshot(true)
      }
    }
  }


  const handleVideoError = (e) => {
    console.error('Video error:', e)
    setVideoError(true)
    setShowScreenshot(true)
    setIsLoaded(true)
  }

  // Check if video URL is valid
  const isValidVideoUrl = (url) => {
    if (!url) return false
    // Check if it's a local file or cloudinary URL
    return url.startsWith('/videos/') || url.includes('cloudinary.com')
  }

  return (
    <div className="snap-item relative group">
      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center p-2 sm:p-4">
        {/* Video Container */}
        <div 
          className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Show screenshot or video based on error state */}
          {showScreenshot || videoError ? (
            // Screenshot Fallback
            <div className="w-full h-full relative bg-black">
              {project.images && project.images.length > 0 ? (
                <img 
                  src={project.images[0]} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    setShowScreenshot(false)
                  }}
                />
              ) : (
                // Fallback UI if no screenshot
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <Image className="w-12 h-12 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 max-w-md mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.stack.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      View Code
                    </a>
                    <a 
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-accent hover:bg-accent-hover transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Video Player
            <>
              <video
                ref={videoRef}
                className="w-full h-full object-contain bg-black"
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.images?.[0] || `/thumbnails/${project.id}.jpg`}
                onLoadedData={() => setIsLoaded(true)}
                onError={handleVideoError}
                style={{ 
                  opacity: isLoaded || hasStartedPlaying ? 1 : 0,
                  transition: 'opacity 0.3s ease-in-out'
                }}
              >
                {/* Try multiple source formats */}
                {isValidVideoUrl(project.video) && (
                  <>
                    <source src={project.video} type="video/mp4" />
                    <source src={project.video.replace('.mp4', '.webm')} type="video/webm" />
                    <source src={project.video.replace('.mp4', '.mov')} type="video/quicktime" />
                  </>
                )}
              </video>

              {/* Loading placeholder while video loads */}
              {!isLoaded && !hasStartedPlaying && !videoError && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </>
          )}

          {/* Video Overlay - Only show if video is working */}
          {!videoError && !isMobile && !showScreenshot && (
            <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={handleVideoClick}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause size={24} sm:size={28} /> : <Play size={24} sm:size={28} className="ml-1" />}
                </button>
              </div>
            </div>
          )}

          {/* Mobile touch overlay - Only for working videos */}
          {!videoError && isMobile && !showScreenshot && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/30"
              onClick={handleVideoClick}
            >
              <button 
                className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
              </button>
            </div>
          )}

          {/* Project Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold truncate">{project.title}</h3>
                <p className="text-text-secondary text-xs sm:text-sm mt-0.5 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
                  {project.stack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-white/10 border border-white/5 text-text-secondary whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-white/10 text-text-secondary">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Action Buttons - Desktop */}
              {!isMobile && (
                <div className="flex gap-2 sm:gap-3 flex-shrink-0">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  >
                    <FaGithub size={16} sm:size={18} />
                  </a>
                  <a 
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 sm:p-2.5 rounded-full bg-accent hover:bg-accent-hover transition-colors"
                  >
                    <ExternalLink size={16} sm:size={18} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Side Actions - TikTok Style */}
          <div className={`absolute right-2 sm:right-3 md:right-4 bottom-20 sm:bottom-24 md:bottom-28 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 ${
            isMobile ? 'bottom-20' : ''
          }`}>

            {/* Mobile action buttons */}
            {isMobile && (
              <div className="flex flex-col gap-2 mt-1">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <FaGithub size={16} />
                </a>
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard