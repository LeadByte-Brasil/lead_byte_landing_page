import { SVGProps } from "react";

export const LogoLeadByte = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(187 76% 43%)" />
        <stop offset="100%" stopColor="hsl(258 91% 50%)" />
      </linearGradient>
    </defs>
    {/* Hexagon shape */}
    <path
      d="M20 2L36.5 11.5V28.5L20 38L3.5 28.5V11.5L20 2Z"
      stroke="url(#logo-gradient)"
      strokeWidth="2"
      fill="none"
    />
    {/* Inner circuit lines */}
    <path
      d="M12 16L20 12L28 16V24L20 28L12 24V16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    {/* Center dot */}
    <circle cx="20" cy="20" r="3" fill="currentColor" />
    {/* Connection nodes */}
    <circle cx="12" cy="16" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="28" cy="16" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="12" cy="24" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="28" cy="24" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="20" cy="28" r="1.5" fill="currentColor" opacity="0.8" />
  </svg>
);
