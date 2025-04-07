import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { backgrounds, textColors, typography, shadows, borders } from '~/styling';
import Button from '~/components/basic/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Initialize dark mode based on user preference or localStorage
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || 
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };
  
  // Icons for dark/light mode
  const sunIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
    </svg>
  );
  
  const moonIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
  
  return (
    <nav className={`${backgrounds.surface} border-b ${borders.surface} ${shadows.elevation1} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className={`${typography.heading3} ${textColors.brand} hover:opacity-80 transition-opacity`}>
                🐢 Turtle Soup
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/play">Play Game</NavLink>
              <NavLink to="/how-to-play">How to Play</NavLink>
              <NavLink to="/about">About</NavLink>
              {/* Keep design system links if needed */}
              <NavLink to="/designSystem">Design System</NavLink>
              <NavLink to="/basicComponents">Components</NavLink>
            </div>
          </div>
          
          {/* Dark mode toggle and mobile menu button */}
          <div className="flex items-center">
            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="sm"
              icon={isDarkMode ? sunIcon : moonIcon}
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="mr-4 rounded-full"
              showFocusRing={false}
            >
              {''}
            </Button>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md ${textColors.onSurfaceMuted} hover:${textColors.primary} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/play">Play Game</MobileNavLink>
          <MobileNavLink to="/how-to-play">How to Play</MobileNavLink>
          <MobileNavLink to="/about">About</MobileNavLink>
          <MobileNavLink to="/designSystem">Design System</MobileNavLink>
          <MobileNavLink to="/basicComponents">Components</MobileNavLink>
          
          {/* Dark mode toggle in mobile menu */}
          <div className="pl-3 pr-4 py-2">
            <Button
              variant="ghost"
              size="sm"
              icon={isDarkMode ? sunIcon : moonIcon}
              iconPosition="left"
              onClick={toggleDarkMode}
              width="full"
              className={`${typography.body1} justify-start rounded-full`}
              showFocusRing={false}
            >
              {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop navigation link
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className={`inline-flex items-center px-1 pt-1 border-b-2 border-transparent ${typography.body1} ${textColors.onSurface} hover:${textColors.primary} hover:border-blue-500 transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}

// Mobile navigation link
function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`block pl-3 pr-4 py-2 ${typography.body1} ${textColors.onSurface} hover:${backgrounds.surfaceAlt} hover:${textColors.primary} transition-colors duration-200`}
    >
      {children}
    </Link>
  );
} 