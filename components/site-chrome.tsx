"use client"

import { ChevronDown, Instagram, Menu, X, Youtube } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

type ActivePage = "home" | "about" | "videos" | "gallery"
type ActiveVideoPage = "live" | "concept"

interface SiteHeaderProps {
  activePage: ActivePage
  activeVideoPage?: ActiveVideoPage
  onResumeClick: () => void
  variant?: "hero" | "page"
  className?: string
}

const videoLinks = [
  {
    href: "/live-performance",
    label: "Live Performance & Commercial Dance",
    page: "live" as const,
  },
  {
    href: "/concept-visuals",
    label: "Concept Visuals & Choreography",
    page: "concept" as const,
  },
]

const socialLinks = [
  {
    href: "https://www.instagram.com/yang.meiyi/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "#",
    label: "YouTube",
    Icon: Youtube,
  },
]

function desktopLinkClass(isActive: boolean) {
  return cn("transition-colors hover:text-yellow-400", isActive && "text-yellow-400")
}

function mobileLinkClass(isActive: boolean) {
  return cn(
    "block rounded px-3 py-2 transition-colors hover:bg-white/10 hover:text-yellow-300",
    isActive ? "text-yellow-400" : "text-white",
  )
}

export function SiteHeader({
  activePage,
  activeVideoPage,
  onResumeClick,
  variant = "page",
  className,
}: SiteHeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isVideoMenuOpen, setIsVideoMenuOpen] = useState(false)
  const isHero = variant === "hero"

  const closeMobileNav = () => setIsMobileNavOpen(false)

  return (
    <header className={cn(isHero ? "" : "bg-gray-100 p-5 sm:p-8", className)}>
      <div className="flex items-center justify-between gap-4 sm:block">
        <a
          href="/"
          className={cn(
            "text-2xl font-light text-yellow-400 transition-colors hover:text-yellow-300",
            !isHero && "sm:mb-8 sm:block",
          )}
        >
          Joicy Yang
        </a>

        <button
          type="button"
          className={cn(
            "inline-flex size-10 items-center justify-center rounded border transition-colors sm:hidden",
            isHero
              ? "border-white/30 text-white hover:bg-white/10"
              : "border-teal-700/30 text-teal-800 hover:bg-teal-700/10",
          )}
          aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMobileNavOpen}
          onClick={() => setIsMobileNavOpen((open) => !open)}
        >
          {isMobileNavOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <nav
        className={cn(
          "mt-5 hidden sm:block",
          isHero ? "text-white" : "rounded bg-teal-700 px-6 py-4 text-white",
        )}
        aria-label="Primary navigation"
      >
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <li>
            <a href="/" className={desktopLinkClass(activePage === "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={desktopLinkClass(activePage === "about")}>
              About
            </a>
          </li>
          <li className="group relative">
            <button
              type="button"
              className={cn("flex items-center gap-1", desktopLinkClass(activePage === "videos"))}
              aria-expanded={isVideoMenuOpen}
              onClick={() => setIsVideoMenuOpen((open) => !open)}
            >
              <span>Videos</span>
              <ChevronDown size={16} />
            </button>

            <div
              className={cn(
                "invisible absolute left-0 top-full z-20 mt-2 w-80 rounded bg-teal-700 py-2 opacity-0 shadow-lg transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100",
                isVideoMenuOpen && "visible opacity-100",
              )}
            >
              {videoLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 text-white transition-colors hover:text-yellow-400",
                    activeVideoPage === link.page && "text-yellow-400",
                  )}
                  onClick={() => setIsVideoMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </li>
          <li>
            <a href="/gallery" className={desktopLinkClass(activePage === "gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <button type="button" onClick={onResumeClick} className={desktopLinkClass(false)}>
              Resume
            </button>
          </li>
          <li>
            <a href="#contact" className={desktopLinkClass(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {isMobileNavOpen && (
        <nav
          className={cn(
            "mt-4 rounded px-3 py-3 text-sm shadow-lg sm:hidden",
            isHero ? "bg-teal-800/95" : "bg-teal-700",
          )}
          aria-label="Mobile navigation"
        >
          <a href="/" className={mobileLinkClass(activePage === "home")} onClick={closeMobileNav}>
            Home
          </a>
          <a href="/about" className={mobileLinkClass(activePage === "about")} onClick={closeMobileNav}>
            About
          </a>
          <div className="py-1">
            <div className={cn("px-3 py-2", activePage === "videos" ? "text-yellow-400" : "text-white")}>Videos</div>
            <div className="space-y-1 pl-3">
              {videoLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={mobileLinkClass(activeVideoPage === link.page)}
                  onClick={closeMobileNav}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <a href="/gallery" className={mobileLinkClass(activePage === "gallery")} onClick={closeMobileNav}>
            Gallery
          </a>
          <button
            type="button"
            onClick={() => {
              closeMobileNav()
              onResumeClick()
            }}
            className={cn(mobileLinkClass(false), "w-full text-left")}
          >
            Resume
          </button>
          <a href="#contact" className={mobileLinkClass(false)} onClick={closeMobileNav}>
            Contact
          </a>
        </nav>
      )}
    </header>
  )
}

export function SocialLinks({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a key={label} href={href} className={cn("transition-colors", iconClassName)} aria-label={label}>
          <Icon size={24} />
        </a>
      ))}
    </div>
  )
}

export function SocialRail() {
  return (
    <aside className="hidden w-16 shrink-0 flex-col items-center justify-center bg-yellow-400 lg:flex">
      <SocialLinks className="flex-col" iconClassName="text-gray-900 hover:text-gray-700" />
    </aside>
  )
}

export function SocialStrip() {
  return (
    <div className="flex justify-center bg-yellow-400 py-4 lg:hidden">
      <SocialLinks iconClassName="text-gray-900 hover:text-gray-700" />
    </div>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-teal-700 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="mb-8 text-4xl font-light text-yellow-400 sm:mb-12 sm:text-6xl">Contact</h2>

        <div className="max-w-2xl">
          <h3 className="mb-5 text-2xl font-light text-white sm:mb-6">Booking Information</h3>

          <div className="mb-6 sm:mb-8">
            <p className="break-words text-white">Email: joicyyangbooking@gmail.com</p>
          </div>

          <p className="mb-8 text-white">Please reach out via email or instagram!</p>

          <SocialLinks iconClassName="text-white hover:text-yellow-400" />
        </div>
      </div>
    </section>
  )
}
