"use client"

import { Check } from 'lucide-react'
import { DecorativeBackground } from "@/components/ui/decorative-background"
import { SectionHeader } from "@/components/ui/section-header"

const differentiators = [
  {
    id: '1',
    title: 'Industry Leader',
    description: 'Trusted by over 500 companies worldwide managing 10,000+ facilities.'
  },
  {
    id: '2',
    title: 'ROI Guaranteed',
    description: 'Average ROI of 300% within the first year or your money back.'
  },
  {
    id: '3',
    title: 'Global Scale',
    description: 'Operate seamlessly across 50+ countries with local compliance.'
  },
  {
    id: '4',
    title: 'Expert Team',
    description: '200+ facility management experts ready to support your success.'
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DecorativeBackground>
        <section className="w-full py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header using reusable component */}
              <SectionHeader
                title="Why Choose Operational Hub"
                subtitle="Join industry leaders who trust our platform"
              />

              {/* Single column grid with cards - improved spacing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                {differentiators.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-7 lg:p-8 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1.5">
                            {item.title}
                          </h3>
                          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </DecorativeBackground>
    </div>
  )
}