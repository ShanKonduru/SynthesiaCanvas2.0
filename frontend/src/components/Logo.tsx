import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface LogoProps {
  size?: number;
  variant?: 'full' | 'icon';
  sx?: SxProps<Theme>;
}

const Logo: React.FC<LogoProps> = ({ size = 120, variant = 'full', sx }) => {
  if (variant === 'icon') {
    return (
      <Box
        sx={{
          width: size,
          height: size,
          position: 'relative',
          ...sx,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="secondaryGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Outer Circle - Represents Canvas/System */}
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="url(#primaryGradient)"
            strokeWidth="4"
            opacity="0.3"
          />

          {/* Neural Network Nodes - Represents AI/Agents */}
          <circle cx="100" cy="60" r="12" fill="url(#primaryGradient)" opacity="0.9" />
          <circle cx="70" cy="100" r="12" fill="url(#primaryGradient)" opacity="0.9" />
          <circle cx="130" cy="100" r="12" fill="url(#primaryGradient)" opacity="0.9" />
          <circle cx="85" cy="140" r="12" fill="url(#secondaryGradient)" opacity="0.9" />
          <circle cx="115" cy="140" r="12" fill="url(#secondaryGradient)" opacity="0.9" />
          
          {/* Connecting Lines - Represents Workflows */}
          <line x1="100" y1="60" x2="70" y2="100" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="100" y1="60" x2="130" y2="100" stroke="url(#primaryGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="70" y1="100" x2="85" y2="140" stroke="url(#secondaryGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="70" y1="100" x2="115" y2="140" stroke="url(#secondaryGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="130" y1="100" x2="85" y2="140" stroke="url(#secondaryGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="130" y1="100" x2="115" y2="140" stroke="url(#secondaryGradient)" strokeWidth="2" opacity="0.5" />

          {/* Center Hub - Represents Multi-Tenant Core */}
          <circle
            cx="100"
            cy="100"
            r="25"
            fill="url(#primaryGradient)"
            filter="url(#glow)"
          />
          
          {/* SC Initials */}
          <text
            x="100"
            y="110"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            SC
          </text>

          {/* Orbital Rings - Represents Automation */}
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="url(#secondaryGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </Box>
    );
  }

  // Full Logo with Text
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        ...sx,
      }}
    >
      <Box sx={{ width: size, height: size, position: 'relative' }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <filter id="logoGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#mainGradient)" strokeWidth="4" opacity="0.3" />
          
          <circle cx="100" cy="60" r="12" fill="url(#mainGradient)" opacity="0.9" />
          <circle cx="70" cy="100" r="12" fill="url(#mainGradient)" opacity="0.9" />
          <circle cx="130" cy="100" r="12" fill="url(#mainGradient)" opacity="0.9" />
          <circle cx="85" cy="140" r="12" fill="url(#accentGradient)" opacity="0.9" />
          <circle cx="115" cy="140" r="12" fill="url(#accentGradient)" opacity="0.9" />
          
          <line x1="100" y1="60" x2="70" y2="100" stroke="url(#mainGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="100" y1="60" x2="130" y2="100" stroke="url(#mainGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="70" y1="100" x2="85" y2="140" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="70" y1="100" x2="115" y2="140" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="130" y1="100" x2="85" y2="140" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="130" y1="100" x2="115" y2="140" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.5" />

          <circle cx="100" cy="100" r="25" fill="url(#mainGradient)" filter="url(#logoGlow)" />
          
          <text
            x="100"
            y="110"
            textAnchor="middle"
            fill="white"
            fontSize="24"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            SC
          </text>

          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="url(#accentGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.4"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 100 100"
              to="360 100 100"
              dur="20s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </Box>
      
      <Box>
        <Box
          sx={{
            fontSize: size * 0.35,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          SynthesiaCanvas
        </Box>
        <Box
          sx={{
            fontSize: size * 0.12,
            fontWeight: 600,
            color: 'text.secondary',
            letterSpacing: '0.1em',
            mt: 0.5,
          }}
        >
          AI AGENTIC SYSTEM DESIGN
        </Box>
      </Box>
    </Box>
  );
};

export default Logo;
