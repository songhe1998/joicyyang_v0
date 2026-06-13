"use client"

import { useState } from "react"
import ResumePanel from "@/components/resume-panel"
import { ContactSection, SiteHeader, SocialRail, SocialStrip } from "@/components/site-chrome"

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header and Navigation */}
      <SiteHeader activePage="about" onResumeClick={() => setIsResumeOpen(true)} />

      {/* Main Content */}
      <main className="lg:flex">
        <div className="flex-1 px-5 py-10 sm:px-8 sm:py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-8 text-4xl font-light text-teal-700 sm:mb-12 sm:text-5xl">All About Me</h2>

            <div className="space-y-6 text-base leading-7 text-gray-800 sm:space-y-8 sm:text-lg sm:leading-relaxed">
              <p>Joicy Yang is a dancer and choreographer based in New York City.</p>

              <p>
                Born and grew up in China, where she trained and discovered her love in street styles dance at age of
                16. Although there were limited opportunities back then, she still performed as much as she can at
                various of events in school, showing her love for stage.
              </p>

              <p>
                In 2015, Joicy moved away from home to attend graduate school and further pursue her dance training in
                New York. Her major was finance, but she never lost her passion for dance. She has been training
                intensively with world renowned instructors in Hip-Hop, Street Jazz and House etc.
              </p>

              <p>
                Joicy trained heavily in commercial dance as well. New York opened up more opportunities for her in the
                most recent years. She was hired as a dancer for Baseline HQ concerts New York tour 2022. She also
                worked with Tic-Tock (David Nervil) and performed at Choreographer's Carnival.
              </p>

              <p>She also teaches sometimes and shares her love for dance!</p>
            </div>
          </div>
        </div>

        {/* Social Media Sidebar */}
        <SocialRail />
      </main>
      <SocialStrip />

      {/* Contact Section */}
      <ContactSection />

      {/* Resume Panel */}
      <ResumePanel isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  )
}
