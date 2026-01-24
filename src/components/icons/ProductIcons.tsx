import { SVGProps } from "react";

export const IconNexus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Central hub */}
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="2" fill="currentColor" />
    
    {/* Connection nodes */}
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="36" cy="36" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    
    {/* Connection lines */}
    <path d="M18 18L15 15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M30 18L33 15" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M18 30L15 33" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M30 30L33 33" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    
    {/* Side nodes */}
    <circle cx="6" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="42" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <path d="M9 24H18" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M30 24H39" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

export const IconAutomata = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Robot head */}
    <rect x="12" y="8" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    
    {/* Eyes */}
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="30" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="18" cy="18" r="1" fill="currentColor" />
    <circle cx="30" cy="18" r="1" fill="currentColor" />
    
    {/* Antenna */}
    <path d="M24 8V4" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="3" r="2" fill="currentColor" />
    
    {/* Mouth/Processing bar */}
    <rect x="16" y="23" width="16" height="2" rx="1" fill="currentColor" opacity="0.6" />
    
    {/* Body connections */}
    <path d="M20 28V34" stroke="currentColor" strokeWidth="1.5" />
    <path d="M28 28V34" stroke="currentColor" strokeWidth="1.5" />
    
    {/* Base */}
    <rect x="14" y="34" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    
    {/* Signals */}
    <path d="M8 12C6 14 6 18 8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    <path d="M40 12C42 14 42 18 40 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const IconPulse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Radar rings */}
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
    <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
    <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.7" />
    
    {/* Center point */}
    <circle cx="24" cy="24" r="3" fill="currentColor" />
    
    {/* Radar sweep line */}
    <path d="M24 24L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    
    {/* Target points */}
    <circle cx="16" cy="14" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="32" cy="18" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="30" cy="32" r="2" fill="currentColor" opacity="0.8" />
    <circle cx="14" cy="28" r="2" fill="currentColor" opacity="0.8" />
    
    {/* Pulse waves */}
    <path d="M4 24H10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M38 24H44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M24 4V10" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M24 38V44" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
  </svg>
);
