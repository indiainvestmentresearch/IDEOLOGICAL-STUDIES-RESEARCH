import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export const ISRLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto', variant = 'dark' }) => {
  const logoSrc = '/src/assets/images/Slide3.png';

  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}>
      <img
        src={logoSrc}
        alt="ISR - Ideological Studies Research"
        className="h-full w-auto max-h-full object-contain rounded-2xl sm:rounded-3xl"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export const GateLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto', variant = 'dark' }) => {
  const logoSrc = '/src/assets/images/Slide6.png';

  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}>
      <img
        src={logoSrc}
        alt="Gate Logo"
        className="h-full w-auto max-h-full object-contain rounded-2xl sm:rounded-3xl"
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
      <img
        src="/src/assets/images/ZAYD AL HAJI SIGNATURE PNG-Photoroom.png"
        alt="Signature of Zayd AlHaji"
        className="w-full h-full object-contain max-h-full"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
