'use client'

interface PetalDividerProps {
  className?: string
  color?: string
}

export function PetalDivider({ className = '', color = '#C4907A' }: PetalDividerProps) {
  return (
    <div className={`flex items-center justify-center py-2 ${className}`} aria-hidden="true">
      <svg
        width="180"
        height="24"
        viewBox="0 0 180 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left line */}
        <line x1="0" y1="12" x2="64" y2="12" stroke={color} strokeWidth="0.75" strokeOpacity="0.5" />
        {/* Left small petal */}
        <ellipse cx="74" cy="12" rx="4" ry="7" fill={color} fillOpacity="0.25" transform="rotate(-20 74 12)" />
        {/* Center petal (larger) */}
        <ellipse cx="90" cy="12" rx="6" ry="9" fill={color} fillOpacity="0.5" transform="rotate(5 90 12)" />
        {/* Right small petal */}
        <ellipse cx="106" cy="12" rx="4" ry="7" fill={color} fillOpacity="0.25" transform="rotate(20 106 12)" />
        {/* Right line */}
        <line x1="116" y1="12" x2="180" y2="12" stroke={color} strokeWidth="0.75" strokeOpacity="0.5" />
      </svg>
    </div>
  )
}

export function PetalScatter({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <ellipse cx="80" cy="60" rx="18" ry="32" fill="#C4907A" fillOpacity="0.12" transform="rotate(-35 80 60)" />
        <ellipse cx="160" cy="130" rx="12" ry="22" fill="#8A9E8C" fillOpacity="0.15" transform="rotate(15 160 130)" />
        <ellipse cx="280" cy="40" rx="22" ry="38" fill="#C4907A" fillOpacity="0.08" transform="rotate(10 280 40)" />
        <ellipse cx="400" cy="120" rx="14" ry="26" fill="#8A9E8C" fillOpacity="0.12" transform="rotate(-20 400 120)" />
        <ellipse cx="520" cy="55" rx="16" ry="28" fill="#C4907A" fillOpacity="0.10" transform="rotate(30 520 55)" />
        <ellipse cx="560" cy="150" rx="10" ry="18" fill="#8A9E8C" fillOpacity="0.18" transform="rotate(-10 560 150)" />
        <ellipse cx="330" cy="170" rx="8" ry="15" fill="#C4907A" fillOpacity="0.14" transform="rotate(45 330 170)" />
        <ellipse cx="50" cy="160" rx="6" ry="12" fill="#8A9E8C" fillOpacity="0.10" transform="rotate(-60 50 160)" />
      </svg>
    </div>
  )
}
