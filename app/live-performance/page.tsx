"use client"

import { Instagram, Youtube, ChevronDown } from "lucide-react"
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

export default function LivePerformance() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null)

  const allVideos = [
    {
      id: 1,
      title: "David Tic-Tock Nervil NYC Apr 2022 | Choreographer's Carnival (Live Dance...)",
      category: "Choreographers Carnival",
      description: "Choreographed by: David Tic-Tock Nervil @tictock1.0 Follow Carnival! IG:...",
      duration: "05:34",
      categories: ["Entertainment"],
      videoUrl: "https://www.youtube.com/watch?v=1mok9lTrvHc",
    },
    {
      id: 2,
      title: "Bury a Friend by Galen Hooks",
      category: "GHM Classic",
      description: "",
      duration: "01:08",
      categories: [],
      videoUrl: "https://youtu.be/IV76VC0HrHo",
    },
    {
      id: 3,
      title: "Estilazo",
      category: "Choreo by Miles Keeney",
      description: "",
      duration: "00:22",
      categories: [],
      videoUrl: "https://www.youtube.com/watch?v=jhBPsDZ6eA4",
    },
    {
      id: 4,
      title: "Music for Love - Mario",
      category: "Carlos Neto Choreo",
      description: "",
      duration: "00:19",
      categories: [],
      videoUrl: "https://www.youtube.com/watch?v=tjWxjKeKT5Q",
    },
    {
      id: 5,
      title: "Tic Tock Nov 2021 | Choreographer's Carnival NYC (Live Dance Performance)",
      category: "Choreographers Carnival",
      description:
        "Choreographed by: Tic Tock @tictock1.0 Follow Carnival! IG: http://instagram.com/choreographers_carnival",
      duration: "03:59",
      categories: ["Entertainment"],
      videoUrl: "https://www.youtube.com/watch?v=1mok9lTrvHc",
    },
    {
      id: 6,
      title: "Opening Act for Baseline HQ Concert",
      category: "",
      description: "",
      duration: "00:39",
      categories: [],
      videoUrl: "https://youtu.be/IV76VC0HrHo",
    },
    {
      id: 7,
      title: "Afro",
      category: "",
      description: "",
      duration: "02:19",
      categories: [],
      videoUrl: "https://www.youtube.com/watch?v=jhBPsDZ6eA4",
    },
  ]

  const filteredVideos =
    selectedCategory === "All Categories"
      ? allVideos
      : allVideos.filter((video) => video.categories.includes(selectedCategory))

  const handleVideoClick = (video: (typeof allVideos)[0]) => {
    setSelectedVideo({
      url: video.videoUrl,
      title: video.title,
    })
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header and Navigation */}
      <header className="bg-gray-100 p-8">
        <h1 className="text-yellow-400 text-2xl font-light mb-8">Joicy Yang</h1>

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
              <div className="absolute top-full left-0 mt-2 w-80 bg-teal-700 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <div className="py-2">
                  <a href="/live-performance" className="block px-4 py-3 text-yellow-400">
                    Live Performance & Commercial Dance
                  </a>
                  <a
                    href="/concept-visuals"
                    className="block px-4 py-3 text-white hover:text-yellow-400 transition-colors"
                  >
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

      <main className="flex">
        <div className="flex-1 px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-light text-gray-800">Live Performance & Commercial Dance</h2>

            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                onClick={() => {
                  const newCategory = selectedCategory === "All Categories" ? "Entertainment" : "All Categories"
                  setSelectedCategory(newCategory)
                }}
              >
                <span>{selectedCategory}</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => {
              const thumbnailUrl = getYouTubeThumbnail(video.videoUrl)

              return (
                <div
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
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
                    {video.category && <p className="text-sm text-gray-600 mb-2">{video.category}</p>}
                    <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 leading-tight">{video.title}</h3>
                    {video.description && <p className="text-sm text-gray-600 line-clamp-3">{video.description}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="w-16 bg-yellow-400 flex flex-col items-center justify-center space-y-6">
          <a href="https://www.instagram.com/yang.meiyi/" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="YouTube">
            <Youtube size={24} />
          </a>
        </div>
      </main>

      <ResumePanel isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {selectedVideo && (
        <VideoPlayer
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
        />
      )}

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
