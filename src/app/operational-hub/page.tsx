"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DecorativeBackground } from "@/components/ui/decorative-background"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SectionHeader } from "@/components/ui/section-header"

type TabType = "open-space" | "train-room" | "security" | "staff-facilities"

const tabs = [
  { id: "open-space" as TabType, label: "Open Space" },
  { id: "train-room" as TabType, label: "Train Room" },
  { id: "security" as TabType, label: "Security" },
  { id: "staff-facilities" as TabType, label: "Staff Facilities" },
]

// Using placeholder images with different colors for each category
const galleryImages: Record<TabType, { url: string; alt: string }[]> = {
  "open-space": [
    { url: "https://via.placeholder.com/800x600/FF6B6B/FFFFFF?text=Open+Space+1", alt: "Open Space 1" },
    { url: "https://via.placeholder.com/800x600/4ECDC4/FFFFFF?text=Open+Space+2", alt: "Open Space 2" },
    { url: "https://via.placeholder.com/800x600/45B7D1/FFFFFF?text=Open+Space+3", alt: "Open Space 3" },
  ],
  "train-room": [
    { url: "https://via.placeholder.com/800x600/96CEB4/FFFFFF?text=Training+Room+1", alt: "Train Room 1" },
    { url: "https://via.placeholder.com/800x600/FFEAA7/333333?text=Training+Room+2", alt: "Train Room 2" },
    { url: "https://via.placeholder.com/800x600/DDA0DD/FFFFFF?text=Training+Room+3", alt: "Train Room 3" },
  ],
  security: [
    { url: "https://via.placeholder.com/800x600/778899/FFFFFF?text=Security+1", alt: "Security 1" },
    { url: "https://via.placeholder.com/800x600/708090/FFFFFF?text=Security+2", alt: "Security 2" },
    { url: "https://via.placeholder.com/800x600/2F4F4F/FFFFFF?text=Security+3", alt: "Security 3" },
  ],
  "staff-facilities": [
    { url: "https://via.placeholder.com/800x600/F4A460/FFFFFF?text=Staff+Facilities+1", alt: "Staff Facilities 1" },
    { url: "https://via.placeholder.com/800x600/CD853F/FFFFFF?text=Staff+Facilities+2", alt: "Staff Facilities 2" },
    { url: "https://via.placeholder.com/800x600/D2691E/FFFFFF?text=Staff+Facilities+3", alt: "Staff Facilities 3" },
  ],
}

export default function OperationalHubPage() {
  const [activeTab, setActiveTab] = useState<TabType>("open-space")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentImages = galleryImages[activeTab]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length)
  }

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId)
    setCurrentImageIndex(0)
  }

  return (
    <DecorativeBackground>
        {/* Header Section */}
        <header className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="Operational Hub"
              subtitle="Control like they are next to you"
            />
          </div>
        </header>

        {/* Tabs and Gallery Section */}
        <section className="container mx-auto px-4 py-3">
          <div className="max-w-6xl mx-auto space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "px-6 py-3.5 rounded-xl border-2 transition-all duration-300 font-medium text-sm md:text-base",
                    "hover:scale-[1.02] hover:shadow-md",
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-white text-muted-foreground border-border/50 hover:border-primary/30",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Desktop Gallery - 3 Column Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-md">
                <img
                  src={currentImages[currentImageIndex].url}
                  alt={currentImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />

                {/* Carousel Navigation - Overlay on image */}
                <div className="absolute inset-x-0 bottom-0 pb-4">
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevImage}
                      className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-white/90 backdrop-blur-sm shadow-md"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <div className="flex gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full">
                      {currentImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all duration-300",
                            currentImageIndex === index ? "bg-primary w-8" : "bg-foreground/40 hover:bg-primary/50",
                          )}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextImage}
                      className="rounded-full border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-white/90 backdrop-blur-sm shadow-md"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-6 md:py-8">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-14 py-7 text-xl md:text-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              Get Started
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-muted-foreground text-sm md:text-base">Click to know more</p>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-16" />
    </DecorativeBackground>
  )
}