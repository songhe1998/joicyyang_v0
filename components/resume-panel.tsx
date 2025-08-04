"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ResumePanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumePanel({ isOpen, onClose }: ResumePanelProps) {
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
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop - only covers the left portion */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity duration-300" onClick={onClose} />
      )}

      {/* Resume Panel - slides from left, leaves margin on right */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-3xl bg-teal-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 h-full overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-light text-yellow-400">Resume</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 transition-colors"
              aria-label="Close resume"
            >
              <X size={24} />
            </button>
          </div>

          {/* Personal Details */}
          <div className="mb-8 text-white space-y-2">
            <p>Height: 5'5"</p>
            <p>Eye Color: Brown</p>
            <p>Hair Color: Dark Brown</p>
            <p>Languages: English, Mandarin</p>
          </div>

          {/* Divider */}
          <hr className="border-white border-opacity-30 mb-8" />

          {/* Live Performance Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-light text-yellow-400 mb-4">Live performance</h3>
            <div className="text-white space-y-2">
              <p>Baseline HQ record lable concerts 2022 New York Tour (Drom, Chelsea Music Hall etc.) - Dancer</p>
              <p>Choreographer's Carnival New York 2021 & 2022 Dancer</p>
              <p>Yumiko Cheng Los Angeles 2019 Concert - Dancer</p>
              <p>UCBA Half Time Show - Dancer</p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Film Section */}
              <div>
                <h3 className="text-2xl font-light text-yellow-400 mb-4">Film</h3>
                <div className="text-white space-y-2">
                  <p>Feature Film: My Heavenly City (2022-2023)</p>
                  <p>Role: Dance Teacher/ Dancer</p>
                </div>
              </div>

              {/* Training Section */}
              <div>
                <h3 className="text-2xl font-light text-yellow-400 mb-4">Training</h3>
                <div className="text-white space-y-2">
                  <p>Broadway Dance Center</p>
                  <p>Peridance Center</p>
                  <p>EXPG</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Teaching Section */}
              <div>
                <h3 className="text-2xl font-light text-yellow-400 mb-4">Teaching</h3>
                <div className="text-white space-y-2">
                  <p>D&M Dancing Art Studio</p>
                  <p>Mae Mae Dance Studio</p>
                </div>
              </div>

              {/* Special Skills Section */}
              <div>
                <h3 className="text-2xl font-light text-yellow-400 mb-4">Special Skills</h3>
                <div className="text-white space-y-2">
                  <p>Choreography</p>
                  <p>Teaching</p>
                  <p>Music and Video Editing</p>
                  <p>Skiing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
