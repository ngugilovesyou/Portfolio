import React, { useState } from 'react'
import {
  Heart,
  Bookmark,
  Share2,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const ProjectActions = ({ project }) => {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(project.stats?.likes || 2400)
  const [bookmarkCount, setBookmarkCount] = useState(project.stats?.bookmarks || 345)
  const [commentCount, setCommentCount] = useState(project.stats?.comments || 87)
  const [shareCount, setShareCount] = useState(project.stats?.shares || 28)

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1)
    } else {
      setLikeCount(prev => prev + 1)
    }
    setLiked(!liked)
  }

  const handleBookmark = () => {
    if (bookmarked) {
      setBookmarkCount(prev => prev - 1)
    } else {
      setBookmarkCount(prev => prev + 1)
    }
    setBookmarked(!bookmarked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveDemo
      }).catch(() => {})
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(project.liveDemo)
      setShareCount(prev => prev + 1)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <button 
        onClick={handleLike}
        className="flex flex-col items-center gap-1 group"
      >
        <div className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 ${
          liked 
            ? 'bg-red-500/20 text-red-500' 
            : 'bg-white/10 hover:bg-white/20'
        } group-hover:scale-110`}>
          <Heart size={22} className={liked ? 'fill-current' : ''} />
        </div>
        <span className="text-xs text-text-secondary">{likeCount.toLocaleString()}</span>
      </button>

      <button className="flex flex-col items-center gap-1 group">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-colors group-hover:scale-110">
          <MessageCircle size={22} />
        </div>
        <span className="text-xs text-text-secondary">{commentCount}</span>
      </button>

      <button 
        onClick={handleBookmark}
        className="flex flex-col items-center gap-1 group"
      >
        <div className={`p-3 rounded-full backdrop-blur-xl transition-all duration-300 ${
          bookmarked 
            ? 'bg-accent/20 text-accent' 
            : 'bg-white/10 hover:bg-white/20'
        } group-hover:scale-110`}>
          <Bookmark size={22} className={bookmarked ? 'fill-current' : ''} />
        </div>
        <span className="text-xs text-text-secondary">{bookmarkCount.toLocaleString()}</span>
      </button>

      <button 
        onClick={handleShare}
        className="flex flex-col items-center gap-1 group"
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-colors group-hover:scale-110">
          <Share2 size={22} />
        </div>
        <span className="text-xs text-text-secondary">{shareCount}</span>
      </button>

      {/* Project Links */}
      <div className="flex flex-col gap-2 mt-2">
        {project.github && (
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            title="View on GitHub"
          >
            <FaGithub size={18} />
          </a>
        )}
        {project.liveDemo && (
          <a 
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 transition-colors"
            title="Live Demo"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectActions