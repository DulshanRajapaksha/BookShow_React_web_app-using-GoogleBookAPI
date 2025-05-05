import React, { useEffect, useState } from 'react';
import { BookOpenIcon, MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import FloatingParticle from './FloatingParticle';

const Navbar = ({ handleSearch }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce input (300ms delay)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchTerm]);

  // Trigger search when debounced input updates
  useEffect(() => {
    if (debouncedSearch.trim() !== '') {
      handleSearch(debouncedSearch);
    }
  }, [debouncedSearch, handleSearch]);

  // dynamic hover gradient
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.dynamic-gradient');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-2xl border-b border-gray-800 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3 )]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4rem] mid:min-h-[5rem] items-center justify-between flex-wrap gap-y-3 gap-x-4 py-2">

          {/* Logo section */}
          <div
            className="dynamic-gradient relative overflow-hidden rounded-2xl p-1 hover:scale-105 transition-transform duration-300 order-1 md:order-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              '--mouse-x': '0px',
              '--mouse-y': '0px',
              background: isHovered
                ? 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)'
                : 'transparent',
            }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-2">
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine">
                <BookOpenIcon className="w-5 h-5 md:h-6 md:w-6 inline-block animate-float text-cyan-400 mr-1 md:mr-2 stroke-[2.5]" />
                <a href="/" className="ml-1 md:ml-2 text-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                  Bookshow
                </a>
              </h1>
            </div>
          </div>

          {/* Live Search Bar */}
          <div className="w-full md:flex md:max-w-2xl order-2 lg:ml-6 md:mx-4">
            <div className="w-full group relative">
              {/* Glowing background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500 animate-pulse-slow pointer-events-none"></div>

              {/* Input field with icon */}
              <div className="relative z-10">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <MagnifyingGlassCircleIcon className="h-6 w-6 text-white stroke-cyan-300 stroke-[1.5] drop-shadow-glow" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Discover your next read..."
                  className="block w-full rounded-3xl bg-gray-900/60 border border-cyan-400/20 py-2 md:py-3 pl-12 pr-4 text-sm md:text-base text-cyan-100 placeholder-cyan-400 focus:outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-500/30 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-gray-900/80"
                />
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex items-center space-x-4 order-1 md:order-3 ml-auto md:ml-0">
            <button className="relative p-1 group hover:scale-105 transition-transform">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-gray-900/80 border border-cyan-300/20 group-hover:border-cyan-300/40 backdrop-blur-sm overflow-hidden">
                <span className="text-lg md:text-xl animate-holo">👽</span>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-500/20"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <FloatingParticle />
    </nav>
  );
};

export default Navbar;
