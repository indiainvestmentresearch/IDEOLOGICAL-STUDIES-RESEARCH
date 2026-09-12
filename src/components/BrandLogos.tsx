import React from 'react';
import isrLogoImg from '../assets/images/Slide3.png';
import gateLogoImg from '../assets/images/Slide6.png';
import signatureImg from '../assets/images/ZAYD AL HAJI SIGNATURE PNG-Photoroom.png';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'gold';
}

export const ISRLogo: React.FC<LogoProps> = ({ className = 'h-12 w-auto' }) => {
  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}>
      <img
        src={isrLogoImg}
        alt="ISR - Ideological Studies Research"
        className="h-full w-auto max-h-full object-contain rounded-2xl sm:rounded-3xl"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/images/Slide3.png';
        }}
      />
    </div>
  );
};

export const GateLogo: React.FC<LogoProps> = ({ className = 'h-10 w-auto' }) => {
  return (
    <div className={`inline-flex items-center justify-center select-none overflow-hidden rounded-2xl sm:rounded-3xl ${className}`}>
      <img
        src={gateLogoImg}
        alt="Gate Logo"
        className="h-full w-auto max-h-full object-contain rounded-2xl sm:rounded-3xl"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/images/Slide6.png';
        }}
      />
    </div>
  );
};

export const ZaydSignature: React.FC<{ className?: string; color?: string }> = ({
  className = 'h-16 w-auto',
}) => {
  return (
    <div className={`inline-block select-none ${className}`}>
      <img
        src={signatureImg}
        alt="Signature of Zayd AlHaji"
        className="w-full h-full object-contain max-h-full"
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/assets/images/ZAYD AL HAJI SIGNATURE PNG-Photoroom.png';
        }}
      />
    </div>
  );
};
