import { cn } from "@/lib/utils"

interface DecorativeBackgroundProps {
  className?: string
  children?: React.ReactNode
  showCircles?: boolean
  showStars?: boolean
  showWaves?: boolean
  showDots?: boolean
  showTopWave?: boolean
}

export function DecorativeBackground({
  className,
  children,
  showCircles = true,
  showStars = true,
  showWaves = true,
  showDots = true,
  showTopWave = true,
}: DecorativeBackgroundProps) {
  return (
    <div className={cn("bg-background relative overflow-hidden", className)}>

      {/* Decorative Elements */}
      {showCircles && (
        <>
          {/* Circles - improved positioning for better balance */}
          <div className="absolute top-[10%] left-[5%] w-48 h-48 border-[3px] border-primary/15 rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] left-[10%] w-64 h-64 border-[2px] border-primary/10 rounded-full" />
          <div className="absolute top-[35%] right-[8%] w-40 h-40 border-[2px] border-primary/12 rounded-full" />
          <div className="absolute bottom-[40%] right-[12%] w-28 h-28 border-[1px] border-primary/8 rounded-full animate-pulse" />
          <div className="absolute top-[60%] left-[45%] w-20 h-20 border-[1px] border-primary/6 rounded-full" />
        </>
      )}

      {showStars && (
        <>
          {/* Stars - better distribution across the viewport */}
          <div className="absolute top-[8%] right-[25%] text-primary/35 animate-pulse">
            <svg width="48" height="48" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
            </svg>
          </div>
          <div className="absolute top-[25%] right-[5%] text-primary/25 rotate-45">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-[25%] right-[35%] text-primary/30 -rotate-12">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
            </svg>
          </div>
          <div className="absolute top-[65%] left-[15%] text-primary/20 rotate-[30deg]">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
            </svg>
          </div>
          <div className="absolute bottom-[10%] left-[40%] text-primary/15 animate-pulse">
            <svg width="20" height="20" viewBox="0 0 40 40" fill="currentColor">
              <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
            </svg>
          </div>
        </>
      )}

      {showWaves && (
        <>
          {/* Wavy lines - more dynamic placement */}
          <div className="absolute top-[45%] left-0 text-primary/12 -rotate-3">
            <svg
              width="180"
              height="60"
              viewBox="0 0 180 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M0 30 Q 45 5, 90 30 T 180 30" />
            </svg>
          </div>
          <div className="absolute bottom-[30%] right-0 text-primary/10 rotate-3">
            <svg
              width="200"
              height="50"
              viewBox="0 0 200 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M0 25 Q 50 5, 100 25 T 200 25" />
            </svg>
          </div>
          <div className="absolute top-[20%] left-[50%] text-primary/8 rotate-12">
            <svg
              width="120"
              height="40"
              viewBox="0 0 120 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M0 20 Q 30 5, 60 20 T 120 20" />
            </svg>
          </div>
        </>
      )}

      {showDots && (
        <>
          {/* Dot grids - more interesting placement */}
          <div className="absolute top-[15%] right-[20%] rotate-12 opacity-60">
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary/25" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-[35%] left-[20%] -rotate-6 opacity-50">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full bg-primary/20" />
              ))}
            </div>
          </div>
          <div className="absolute top-[70%] right-[45%] rotate-45 opacity-40">
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/15" />
              ))}
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

    </div>
  )
}

// Individual decorative elements for flexible composition
export function DecorativeCircles() {
  return (
    <>
      <div className="absolute top-[10%] left-[5%] w-48 h-48 border-[3px] border-primary/15 rounded-full animate-pulse" />
      <div className="absolute bottom-[20%] left-[10%] w-64 h-64 border-[2px] border-primary/10 rounded-full" />
      <div className="absolute top-[35%] right-[8%] w-40 h-40 border-[2px] border-primary/12 rounded-full" />
      <div className="absolute bottom-[40%] right-[12%] w-28 h-28 border-[1px] border-primary/8 rounded-full animate-pulse" />
      <div className="absolute top-[60%] left-[45%] w-20 h-20 border-[1px] border-primary/6 rounded-full" />
    </>
  )
}

export function DecorativeStars() {
  return (
    <>
      <div className="absolute top-[8%] right-[25%] text-primary/35 animate-pulse">
        <StarIcon size={48} />
      </div>
      <div className="absolute top-[25%] right-[5%] text-primary/25 rotate-45">
        <StarIcon size={32} />
      </div>
      <div className="absolute bottom-[25%] right-[35%] text-primary/30 -rotate-12">
        <StarIcon size={36} />
      </div>
      <div className="absolute top-[65%] left-[15%] text-primary/20 rotate-[30deg]">
        <StarIcon size={24} />
      </div>
      <div className="absolute bottom-[10%] left-[40%] text-primary/15 animate-pulse">
        <StarIcon size={20} />
      </div>
    </>
  )
}

export function DecorativeWaves() {
  return (
    <>
      <div className="absolute top-[45%] left-0 text-primary/12 -rotate-3">
        <WaveIcon width={180} height={60} />
      </div>
      <div className="absolute bottom-[30%] right-0 text-primary/10 rotate-3">
        <WaveIcon width={200} height={50} />
      </div>
      <div className="absolute top-[20%] left-[50%] text-primary/8 rotate-12">
        <WaveIcon width={120} height={40} />
      </div>
    </>
  )
}

export function DecorativeDots() {
  return (
    <>
      <div className="absolute top-[15%] right-[20%] rotate-12 opacity-60">
        <DotGrid size={2} />
      </div>
      <div className="absolute bottom-[35%] left-[20%] -rotate-6 opacity-50">
        <DotGrid size={2.5} />
      </div>
      <div className="absolute top-[70%] right-[45%] rotate-45 opacity-40">
        <DotGrid count={4} cols={2} size={1.5} />
      </div>
    </>
  )
}

// Reusable SVG components
function StarIcon({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="currentColor">
      <path d="M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18L20 0Z" />
    </svg>
  )
}

function WaveIcon({ width = 140, height = 50 }: { width?: number; height?: number }) {
  const midY = height / 2
  const quarterX = width / 4
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d={`M0 ${midY} Q ${quarterX} 5, ${quarterX * 2} ${midY} T ${width} ${midY}`} />
    </svg>
  )
}

function DotGrid({ count = 9, cols = 3, size = 2.5 }: { count?: number; cols?: number; size?: number }) {
  return (
    <div className={`grid grid-cols-${cols} gap-2`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="rounded-full bg-primary/20"
          style={{ width: `${size * 0.25}rem`, height: `${size * 0.25}rem` }}
        />
      ))}
    </div>
  )
}