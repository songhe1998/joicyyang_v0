"use client"

import { Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import ResumePanel from "@/components/resume-panel"

export default function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

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
              <a href="/about" className="text-yellow-400">
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

      {/* Main Content */}
      <main className="flex">
        <div className="flex-1 px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light text-teal-700 mb-12">All About Me</h2>

            <div className="space-y-8 text-gray-800 text-lg leading-relaxed">
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
        <div className="w-16 bg-yellow-400 flex flex-col items-center justify-center space-y-6">
          <a href="https://www.instagram.com/yang.meiyi/" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-gray-900 hover:text-gray-700 transition-colors" aria-label="YouTube">
            <Youtube size={24} />
          </a>
        </div>
      </main>

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
    </div>
  )
}
