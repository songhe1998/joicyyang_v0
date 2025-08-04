"use client"

import { X, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

interface VideoPlayerProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export default function VideoPlayer({ isOpen, onClose, videoUrl, title }: VideoPlayerProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      setHasError(false)
      setIsLoading(true)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    }
    return url // For MP4 files or other formats
  }

  const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
  const isMp4 = videoUrl.endsWith(".mp4")

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close video"
          >
            <X size={32} />
          </button>

          {/* Video Title */}
          <h3 className="absolute -top-12 left-0 text-white text-lg font-medium">{title}</h3>

          {/* Video Player */}
          <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">
            {/* Loading State */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Loading video...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="text-white text-center max-w-md px-6">
                  <AlertCircle size={48} className="mx-auto mb-4 text-yellow-400" />
                  <h4 className="text-xl font-medium mb-2">Video Unavailable</h4>
                  <p className="text-gray-300 mb-4">
                    This video cannot be played due to restrictions or privacy settings.
                  </p>
                  <button
                    onClick={() => window.open(videoUrl, "_blank")}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Watch on YouTube
                  </button>
                </div>
              </div>
            )}

            {/* Video Content */}
            {isYouTube ? (
              <iframe
                src={getEmbedUrl(videoUrl)}
                title={title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            ) : isMp4 ? (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full"
                title={title}
                onLoadedData={handleIframeLoad}
                onError={handleIframeError}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <AlertCircle size={48} className="mx-auto mb-4 text-yellow-400" />
                  <p>Unsupported video format</p>
                  <button
                    onClick={() => window.open(videoUrl, "_blank")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4 transition-colors"
                  >
                    Open Link
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
