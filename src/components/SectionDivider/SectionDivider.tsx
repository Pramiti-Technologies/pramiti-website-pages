export function SectionDivider() {
  return (
    <div className="w-full py-8 flex justify-center">
      <svg
        viewBox="0 0 400 40"
        className="w-full max-w-md text-primary opacity-30"
        fill="currentColor"
      >
        {/* Temple pillar inspired divider */}
        <g>
          {/* Center ornament */}
          <circle cx="200" cy="20" r="4" />
          <circle cx="180" cy="20" r="3" opacity="0.7" />
          <circle cx="220" cy="20" r="3" opacity="0.7" />
          
          {/* Decorative lines */}
          <rect x="160" y="18" width="15" height="4" opacity="0.5" />
          <rect x="225" y="18" width="15" height="4" opacity="0.5" />
          
          {/* Side ornaments */}
          <circle cx="140" cy="20" r="2.5" opacity="0.5" />
          <circle cx="260" cy="20" r="2.5" opacity="0.5" />
          
          {/* Dots pattern */}
          <circle cx="120" cy="20" r="2" opacity="0.4" />
          <circle cx="280" cy="20" r="2" opacity="0.4" />
          <circle cx="100" cy="20" r="1.5" opacity="0.3" />
          <circle cx="300" cy="20" r="1.5" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
