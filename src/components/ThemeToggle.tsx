import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  showLabel = false
}) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer ${
        isDark
          ? 'bg-neutral-800/90 border-neutral-700 text-amber-300 hover:bg-neutral-800 hover:text-amber-200'
          : 'bg-neutral-100/90 border-neutral-300 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900'
      } ${className}`}
      aria-label={isDark ? 'Activate light reading mode' : 'Activate dark reading mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="w-4 h-4 text-neutral-700 transition-transform duration-300 rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="capitalize font-sans text-xs">
          {isDark ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  );
};
