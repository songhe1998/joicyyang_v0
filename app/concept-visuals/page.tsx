"use client"

import { ArrowRight, Info, Search, Share } from "lucide-react"
import { useState } from "react"
import ResumePanel from "@/components/resume-panel"
import { ContactSection, SiteHeader, SocialRail, SocialStrip } from "@/components/site-chrome"
import VideoPlayer from "@/components/video-player"

// Helper function to extract YouTube video ID and generate thumbnail URL
const getYouTubeThumbnail = (url: string) => {
  let videoId = ""

  if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1])
    videoId = urlParams.get("v") || ""
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
  }

  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  return "/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
}

export default function ConceptVisuals() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null)

  // Update the featured video
  const featuredVideo = {
    title: "Featured Concept Visuals & Choreography",
    videoUrl: "https://www.youtube.com/watch?v=1mok9lTrvHc",
  }

  // Update all videos array
  const videos = [
    {
      id: 1,
      title: "Concept Visual 1",
      duration: "02:45",
      videoUrl: "https://youtu.be/IV76VC0HrHo",
    },
    {
      id: 2,
      title: "Choreography Piece 1",
      duration: "03:12",
      videoUrl: "https://www.youtube.com/watch?v=jhBPsDZ6eA4",
    },
    {
      id: 3,
      title: "Creative Movement",
      duration: "01:58",
      videoUrl: "https://www.youtube.com/watch?v=tjWxjKeKT5Q",
    },
  ]

  const filteredVideos = videos.filter((video) => video.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleVideoClick = (video: { title: string; videoUrl: string }) => {
    setSelectedVideo({
      url: video.videoUrl,
      title: video.title,
    })
  }

  // EXTRACT THUMBNAIL URLS TO VARIABLES LIKE IN WORKING VERSION
  const featuredThumbnailUrl = getYouTubeThumbnail(featuredVideo.videoUrl)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header and Navigation */}
      <SiteHeader
        activePage="videos"
        activeVideoPage="concept"
        onResumeClick={() => setIsResumeOpen(true)}
      />

      {/* Main Content */}
      <main className="lg:flex">
        <div className="flex-1 px-5 py-10 sm:px-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <h2 className="mb-8 text-center text-4xl font-light text-gray-800 sm:mb-12 sm:text-5xl">
              Concept Visuals & Choreography
            </h2>

            {/* Featured Video Section */}
            <div className="mb-10 sm:mb-12">
              <div className="rounded-lg bg-white p-4 shadow-sm sm:p-6">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-medium text-gray-800">Concept Visuals & Choreography</h3>
                  <div className="flex space-x-3">
                    <button className="text-gray-500 transition-colors hover:text-gray-700" aria-label="Share">
                      <Share size={20} />
                    </button>
                    <button className="text-gray-500 transition-colors hover:text-gray-700" aria-label="Info">
                      <Info size={20} />
                    </button>
                  </div>
                </div>

                {/* Featured Video Player - USING EXACT SAME STRUCTURE AS WORKING LIVE-PERFORMANCE PAGE */}
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleVideoClick(featuredVideo)}
                >
                  <div className="relative aspect-video w-full bg-gray-100">
                    <img
                      src={featuredThumbnailUrl || "/placeholder.svg"}
                      alt="Featured concept visuals and choreography video"
                      className="block h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Featured+Video"
                      }}
                    />

                    {/* Play button overlay - EXACT SAME AS LIVE-PERFORMANCE */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20">
                      <div className="flex size-16 items-center justify-center rounded-full bg-red-600/90 shadow sm:size-20">
                        <svg
                          style={{ width: "32px", height: "32px", color: "white", marginLeft: "4px" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                    </div>

                    <h4
                      className="absolute left-4 right-4 top-4 text-center text-xl font-light leading-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] sm:left-1/2 sm:right-auto sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-20 sm:text-4xl"
                    >
                      Concept Visuals &<br />
                      Choreography
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search video..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Video Grid - USING EXACT SAME STRUCTURE AS WORKING LIVE-PERFORMANCE PAGE */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredVideos.map((video) => {
                // EXTRACT THUMBNAIL URL TO VARIABLE LIKE IN WORKING VERSION
                const thumbnailUrl = getYouTubeThumbnail(video.videoUrl)

                return (
                  <div
                    key={video.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div className="relative aspect-video w-full bg-gray-100">
                      <img
                        src={thumbnailUrl || "/placeholder.svg"}
                        alt={video.title}
                        className="block h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Video+Thumbnail"
                        }}
                      />
                      {/* Duration overlay */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "8px",
                          right: "8px",
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          color: "white",
                          fontSize: "12px",
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontWeight: "500",
                        }}
                      >
                        {video.duration}
                      </div>
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors hover:bg-black/20">
                        <div className="flex size-14 items-center justify-center rounded-full bg-red-600/90 shadow sm:size-16">
                          <svg
                            style={{ width: "24px", height: "24px", color: "white", marginLeft: "4px" }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="font-medium text-gray-900">{video.title}</h5>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <span>Next</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <SocialRail />
      </main>
      <SocialStrip />

      {/* Resume Panel */}
      <ResumePanel isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
