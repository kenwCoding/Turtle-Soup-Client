import { useState } from 'react';
import { Container } from '../basic/Container';
import { Typography } from '../basic/Typography';
import { Link } from 'react-router';

interface NavbarProps {
  isDev?: boolean;
}

export function Navbar({ isDev = (import.meta.env.VITE_ENV ?? null) === 'dev' }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-primary-400 text-white py-4">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <Typography variant="h5" className="font-bold">Your App</Typography>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            
            {isDev && (
              <div className="relative">
                <button 
                  onClick={toggleDropdown}
                  className="flex items-center hover:text-gray-200"
                >
                  <span>Dev Tools</span>
                  <svg 
                    className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10">
                    <Link 
                      to="/designSystem" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Design System
                    </Link>
                    <Link 
                      to="/basicComponents" 
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Basic Components
                    </Link>
                    {/* Add more demo links as needed */}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
} 