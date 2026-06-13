"use client"

import { useState } from "react"
import ResumePanel from "@/components/resume-panel"
import { ContactSection, SiteHeader, SocialRail, SocialStrip } from "@/components/site-chrome"
import VideoPlayer from "@/components/video-player"

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Update the showreel video data
  const showreelVideo = {
    url: "https://www.youtube.com/watch?v=1mok9lTrvHc",
    title: "Joicy Yang - Showreel",
  }

  // Use local thumbnail image instead of YouTube thumbnail
  const showreelThumbnailUrl = "/images/optimized/showreel/showreel-thumbnail.webp"

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative min-h-[100svh] overflow-hidden bg-gray-900 lg:flex lg:overflow-visible">
        <div className="absolute inset-0 lg:hidden">
          <img
            src="/images/optimized/hero/joicy-portrait-hero.webp"
            alt="Joicy Yang - Professional dancer and choreographer portrait"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-teal-900/90 via-teal-800/45 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </div>

        {/* Left Section - Teal Background */}
        <div className="relative z-10 lg:flex-1 lg:bg-teal-700">
          <div className="flex min-h-[100svh] flex-col px-5 py-6 sm:p-8 lg:min-h-screen">
            {/* Header */}
            <SiteHeader activePage="home" onResumeClick={() => setIsResumeOpen(true)} variant="hero" />

            {/* Hero Content */}
            <div className="flex flex-1 flex-col justify-end pb-16 pt-20 sm:justify-center sm:pb-0 lg:py-0">
              <div className="max-w-lg">
                <h2 className="mb-4 text-4xl font-light leading-tight sm:text-6xl">
                  <span className="text-yellow-400">Hey, I'm</span>
                  <br />
                  <span className="text-white">Joicy Yang</span>
                </h2>
                <p className="text-xl font-light italic text-white">Dancer/Choreographer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Photo */}
        <div className="relative hidden bg-gray-800 lg:block lg:h-[100svh] lg:min-h-0 lg:flex-1">
          <img
            src="/images/optimized/hero/joicy-portrait-hero.webp"
            alt="Joicy Yang - Professional dancer and choreographer portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Social Media Sidebar */}
        <SocialRail />
      </div>
      <SocialStrip />

      {/* Showreel Section */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="mb-10 text-center text-4xl font-light text-teal-700 sm:mb-16 sm:text-6xl">Showreel</h2>

          <div className="max-w-4xl mx-auto">
            {/* USING EXACT SAME STRUCTURE AS WORKING LIVE-PERFORMANCE PAGE */}
            <div
              className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setIsVideoOpen(true)}
            >
              <div className="relative aspect-[4/5] w-full bg-black sm:aspect-video">
                <img
                  src={showreelThumbnailUrl || "/placeholder.svg"}
                  alt="Showreel video thumbnail"
                  className="block h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Showreel+Thumbnail"
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

                <span
                  className="absolute bottom-4 left-4 text-base font-medium text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] sm:text-lg"
                >
                  Play Showreel
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <h2 className="mb-10 text-center text-4xl font-light text-teal-700 sm:mb-16 sm:text-6xl">Photos</h2>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
            <div className="aspect-[3/4] bg-pink-200 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/photos/dance-photo-1.webp"
                alt="Dance photo 1"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/photos/dance-photo-2.webp"
                alt="Dance photo 2"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] bg-yellow-100 rounded-lg overflow-hidden">
              <img
                src="/images/optimized/photos/dance-photo-3.webp"
                alt="Dance photo 3"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

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
