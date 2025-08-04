"use client"

import { Instagram, Youtube } from "lucide-react"
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

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Update the showreel video data
  const showreelVideo = {
    url: "https://www.youtube.com/watch?v=1mok9lTrvHc",
    title: "Joicy Yang - Showreel",
  }

  // Use local thumbnail image instead of YouTube thumbnail
  const showreelThumbnailUrl = "/images/showreel/showreel-thumbnail.png"

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="min-h-screen flex">
        {/* Left Section - Teal Background */}
        <div className="flex-1 bg-teal-700 relative">
          <div className="p-8 h-full flex flex-col">
            {/* Header */}
            <header className="mb-16">
              <h1 className="text-yellow-400 text-2xl font-light mb-8">Joicy Yang</h1>

              {/* Navigation */}
              <nav>
                <ul className="flex space-x-8 text-white">
                  <li>
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-yellow-400 transition-colors">
                      About
                    </a>
                  </li>
                  <li className="relative group">
                    <a href="#" className="hover:text-yellow-400 transition-colors">
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

            {/* Hero Content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="max-w-lg">
                <h2 className="text-6xl font-light leading-tight mb-4">
                  <span className="text-yellow-400">Hey, I'm</span>
                  <br />
                  <span className="text-white">Joicy Yang</span>
                </h2>
                <p className="text-white text-xl italic font-light">Dancer/Choreographer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Photo */}
        <div className="flex-1 relative bg-gray-800">
          <img
            src="/images/hero/joicy-portrait-hero.png"
            alt="Joicy Yang - Professional dancer and choreographer portrait"
            className="object-cover object-center w-full h-full"
          />
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
      </div>

      {/* Showreel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-light text-teal-700 text-center mb-16">Showreel</h2>

          <div className="max-w-4xl mx-auto">
            {/* USING EXACT SAME STRUCTURE AS WORKING LIVE-PERFORMANCE PAGE */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setIsVideoOpen(true)}
            >
              <div style={{ width: "100%", height: "400px", backgroundColor: "#000000", position: "relative" }}>
                <img
                  src={showreelThumbnailUrl || "/placeholder.svg"}
                  alt="Showreel video thumbnail"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    opacity: 1,
                    backgroundColor: "transparent",
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Showreel+Thumbnail"
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

                <span
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    color: "white",
                    fontWeight: "500",
                    fontSize: "18px",
                    textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
                >
                  Play Showreel
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8">
          <h2 className="text-6xl font-light text-teal-700 text-center mb-16">Photos</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="aspect-[3/4] bg-pink-200 rounded-lg overflow-hidden">
              <img src="/images/photos/dance-photo-1.png" alt="Dance photo 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <img src="/images/photos/dance-photo-2.png" alt="Dance photo 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] bg-yellow-100 rounded-lg overflow-hidden">
              <img src="/images/photos/dance-photo-3.png" alt="Dance photo 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

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

      {/* Resume Panel */}
      <ResumePanel isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Video Player Modal */}
      <VideoPlayer
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={showreelVideo.url}
        title={showreelVideo.title}
      />
    </div>
  )
}
