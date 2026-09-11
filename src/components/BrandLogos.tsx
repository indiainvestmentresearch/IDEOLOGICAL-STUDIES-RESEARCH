import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export const ISRLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto', variant = 'dark' }) => {
  const isLightText = variant === 'light';
  const logoSrc = isLightText ? '/assets/isr-logo-light.png' : '/assets/isr-logo.png';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="ISR - Ideological Studies Research"
        className="h-full w-auto max-h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const GateLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', variant = 'dark' }) => {
  const isLightText = variant === 'light';
  const logoSrc = isLightText ? '/assets/gate-logo-light.png' : '/assets/gate-logo.png';

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt=".Gate Logo"
        className="h-full w-auto max-h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const ZaydSignature: React.FC<{ className?: string; color?: string }> = ({
  className = 'h-16 w-auto',
  color = '#171716',
}) => {
  return (
    <div className={`inline-block select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-label="Signature of Zayd AlHaji"
      >
        <path
          d="M15 48 C35 15, 62 8, 76 28 C84 40, 68 72, 48 78 C35 82, 28 64, 42 48 C58 32, 82 25, 106 34 C124 40, 118 64, 110 72 C104 78, 95 70, 100 56 C105 40, 128 24, 152 32 C170 38, 182 58, 175 76 C166 100, 136 96, 126 74 C120 60, 138 40, 158 38 C182 34, 208 48, 220 66 C230 80, 252 64, 264 48 C278 30, 298 25, 310 40 C316 48, 312 64, 300 72 C286 82, 262 84, 250 68 C244 56, 256 40, 272 34 C292 26, 314 38, 318 54"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 82 C65 72, 138 68, 210 74 C255 78, 295 68, 315 58"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <circle cx="312" cy="46" r="3.2" fill={color} />
      </svg>
    </div>
  );
};
