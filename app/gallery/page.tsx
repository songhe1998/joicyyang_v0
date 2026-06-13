"use client"
import { useState } from "react"
import ResumePanel from "@/components/resume-panel"
import { ContactSection, SiteHeader, SocialRail, SocialStrip } from "@/components/site-chrome"

export default function Gallery() {
  // Generate 15 gallery images with organized paths
  const images = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery photo ${i + 1}`,
    src: `/images/optimized/gallery/gallery-photo-${String(i + 1).padStart(2, "0")}.webp`,
  }))

  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header and Navigation */}
      <SiteHeader activePage="gallery" onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="lg:flex">
        <div className="flex-1 px-5 py-10 sm:px-8 sm:py-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-8 text-4xl font-light text-teal-700 sm:mb-12 sm:text-5xl">Gallery</h2>

            {/* Image Grid - 5 rows x 3 columns */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <SocialRail />
      </main>
      <SocialStrip />

      {/* Resume Panel */}
      <ResumePanel isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
