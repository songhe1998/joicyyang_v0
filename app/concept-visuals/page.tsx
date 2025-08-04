"use client"

import { Instagram, Youtube, Search, Share, Info, ArrowRight } from "lucide-react"
import { useState } from "react"
import ResumePanel from "@/components/resume-panel"
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
      <header className="bg-gray-100 p-8">
        <h1 className="text-yellow-400 text-2xl font-light mb-8">Joicy Yang</h1>

        {/* Navigation */}
        <nav className="bg-teal-700 px-6 py-4 rounded">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="/" className="hover:text-yellow-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition-colors">
                About
              </a>
            </li>
            <li className="relative group">
              <a href="#" className="text-yellow-400">
                Videos
              </a>
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-teal-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-2">
                  <a
                    href="/live-performance"
                    className="block px-4 py-3 text-white hover:text-yellow-400 transition-colors"
                  >
                    Live Performance & Commercial Dance
                  </a>
                  <a href="/concept-visuals" className="block px-4 py-3 text-yellow-400">
                    Concept Visuals & Choreography
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="/gallery" className="hover:text-yellow-400 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <button onClick={() => setIsResumeOpen(true)} className="hover:text-yellow-400 transition-colors">
                Resume
              </button>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex">
        <div className="flex-1 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <h2 className="text-5xl font-light text-gray-800 text-center mb-12">Concept Visuals & Choreography</h2>

            {/* Featured Video Section */}
            <div className="mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-medium text-gray-800">Concept Visuals & Choreography</h3>
                  <div className="flex space-x-3">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <Share size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <Info size={20} />
                    </button>
                  </div>
                </div>

                {/* Featured Video Player - USING EXACT SAME STRUCTURE AS WORKING LIVE-PERFORMANCE PAGE */}
                <div
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleVideoClick(featuredVideo)}
                >
                  <div style={{ width: "100%", height: "400px", backgroundColor: "#f3f4f6", position: "relative" }}>
                    <img
                      src={featuredThumbnailUrl || "/placeholder.svg"}
                      alt="Featured concept visuals and choreography video"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        opacity: 1,
                        backgroundColor: "transparent",
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Featured+Video"
                      }}
                    />

                    {/* Play button overlay - EXACT SAME AS LIVE-PERFORMANCE */}
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        bottom: "0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
                        const playButton = e.currentTarget.querySelector(".play-button") as HTMLElement
                        if (playButton) playButton.style.opacity = "1"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)"
                        const playButton = e.currentTarget.querySelector(".play-button") as HTMLElement
                        if (playButton) playButton.style.opacity = "0"
                      }}
                    >
                      <div
                        className="play-button"
                        style={{
                          width: "80px",
                          height: "80px",
                          backgroundColor: "rgba(220, 38, 38, 0.9)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: "0",
                          transition: "opacity 0.3s",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
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
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -80px)",
                        color: "white",
                        fontSize: "36px",
                        fontWeight: "300",
                        textAlign: "center",
                        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                        lineHeight: "1.2",
                      }}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {filteredVideos.map((video) => {
                // EXTRACT THUMBNAIL URL TO VARIABLE LIKE IN WORKING VERSION
                const thumbnailUrl = getYouTubeThumbnail(video.videoUrl)

                return (
                  <div
                    key={video.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => handleVideoClick(video)}
                  >
                    <div style={{ width: "100%", height: "200px", backgroundColor: "#f3f4f6", position: "relative" }}>
                      <img
                        src={thumbnailUrl || "/placeholder.svg"}
                        alt={video.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          opacity: 1,
                          backgroundColor: "transparent",
                        }}
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
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          transition: "background-color 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.2)"
                          const playButton = e.currentTarget.querySelector(".play-button") as HTMLElement
                          if (playButton) playButton.style.opacity = "1"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)"
                          const playButton = e.currentTarget.querySelector(".play-button") as HTMLElement
                          if (playButton) playButton.style.opacity = "0"
                        }}
                      >
                        <div
                          className="play-button"
                          style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: "rgba(220, 38, 38, 0.9)",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: "0",
                            transition: "opacity 0.3s",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                          }}
                        >
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
        <div className="w-16 bg-yellow-400 flex flex-col items-center justify-center space-y-6">
          <a href="https://www.instagram.com/yang.meiyi/" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="YouTube">
            <Youtube size={24} />
          </a>
        </div>
      </main>

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
      <section id="contact" className="py-20 bg-teal-700">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-light text-yellow-400 mb-12">Contact</h2>

          <div className="max-w-2xl">
            <h3 className="text-2xl font-light text-white mb-6">Booking Information</h3>

            <div className="mb-8">
              <p className="text-white mb-2">Email: joicyyangbooking@gmail.com</p>
            </div>

            <p className="text-white mb-8">Please reach out via email or instagram!</p>

            <div className="flex space-x-6">
              <a href="https://www.instagram.com/yang.meiyi/" className="text-white hover:text-yellow-400 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
