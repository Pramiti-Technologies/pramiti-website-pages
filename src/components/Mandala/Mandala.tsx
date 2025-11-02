import { motion } from 'motion/react';

interface MandalaProps {
  className?: string;
  animate?: boolean;
}

export function Mandala({ className = "", animate = true }: MandalaProps) {
  return (
    <motion.svg
      viewBox="0 0 200 200"
      className={className}
      initial={{ rotate: 0 }}
      animate={animate ? { rotate: 360 } : {}}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
    >
      <g transform="translate(100, 100)">
        {/* Outer petals */}
        {[...Array(12)].map((_, i) => (
          <motion.path
            key={`outer-${i}`}
            d="M 0,-80 Q 15,-70 0,-60 Q -15,-70 0,-80"
            fill="currentColor"
            fillOpacity="0.15"
            transform={`rotate(${i * 30})`}
            initial={{ scale: 0 }}
            animate={animate ? { scale: 1 } : { scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
        
        {/* Middle petals */}
        {[...Array(8)].map((_, i) => (
          <motion.path
            key={`middle-${i}`}
            d="M 0,-55 Q 12,-48 0,-40 Q -12,-48 0,-55"
            fill="currentColor"
            fillOpacity="0.25"
            transform={`rotate(${i * 45})`}
            initial={{ scale: 0 }}
            animate={animate ? { scale: 1 } : { scale: 1 }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.5 }}
          />
        ))}
        
        {/* Inner circle petals */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={`inner-${i}`}
            cx={Math.cos((i * 60 * Math.PI) / 180) * 30}
            cy={Math.sin((i * 60 * Math.PI) / 180) * 30}
            r="5"
            fill="currentColor"
            fillOpacity="0.3"
            initial={{ scale: 0 }}
            animate={animate ? { scale: 1 } : { scale: 1 }}
            transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
          />
        ))}
        
        {/* Center circle */}
        <motion.circle
          cx="0"
          cy="0"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeOpacity="0.4"
          initial={{ scale: 0 }}
          animate={animate ? { scale: 1 } : { scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        
        <motion.circle
          cx="0"
          cy="0"
          r="8"
          fill="currentColor"
          fillOpacity="0.5"
          initial={{ scale: 0 }}
          animate={animate ? { scale: 1 } : { scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
      </g>
    </motion.svg>
  );
}
