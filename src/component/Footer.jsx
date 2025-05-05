import React from 'react';
import FloatingParticle from './FloatingParticle';
import {
  BookOpenIcon,
  CommandLineIcon,
  GlobeAltIcon,
} from '@heroicons/react/16/solid';
import { Github, Instagram, MessageSquare, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className='relative bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800 text-gray-400'>
      <FloatingParticle />

      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

          {/* Column 1: Brand */}
          <div className='space-y-3 text-center md:text-left'>
            <div className='flex justify-center md:justify-start items-center gap-2'>
              <BookOpenIcon className='h-8 w-8 text-cyan-400' />
              <span className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
                BOOKSHOW
              </span>
            </div>
            <p className='text-sm'>
              Your gateway to infinite worlds. Discover, read, and escape into stories that matter.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className='space-y-3 text-center md:text-left'>
            <h3 className='text-lg font-semibold text-purple-400'>Explore</h3>
            <ul className='space-y-1'>
              {['Trending', 'New Releases', 'Genres', 'Authors'].map((item) => (
                <li key={item}>
                  <a href="#" className='hover:text-cyan-300 text-sm'>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Powered By */}
          <div className='space-y-3 text-center md:text-left'>
            <h3 className='text-lg font-semibold text-purple-400'>Powered By</h3>
            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
              {['React', 'Tailwind', 'Vite', 'GoogleAPI'].map((tech) => (
                <span key={tech} className='text-sm bg-gray-800/50 px-3 py-1.5 rounded-full'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='space-y-1 pt-2 text-sm'>
              <div className='flex items-center justify-center md:justify-start gap-2'>
                <CommandLineIcon className='h-4 w-4' />
                <span>Developer Friendly API</span>
              </div>
              <div className='flex items-center justify-center md:justify-start gap-2'>
                <GlobeAltIcon className='h-4 w-4' />
                <span>Global Book Database</span>
              </div>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className='space-y-3 text-center md:text-left'>
            <h3 className='text-lg font-semibold text-purple-400'>Connect</h3>
            <div className='flex justify-center md:justify-start gap-4'>
              {[
                ['Github', 'hover:text-purple-300', Github],
                ['Twitter', 'hover:text-cyan-300', Twitter],
                ['Discord', 'hover:text-indigo-300', MessageSquare],
                ['Instagram', 'hover:text-pink-300', Instagram],
              ].map(([platform, className, Icon]) => (
                <a key={platform} href="#" className={`transition-all ${className}`}>
                  <Icon className='h-5 w-5 md:h-6 md:w-6' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className='mt-10 border-t border-gray-800 pt-6 text-center text-sm'>
          <p>
            &copy; {new Date().getFullYear()} <span className='text-white font-semibold'>BOOKSHOW</span>. All stories belong to their respective authors.
          </p>
          <p className='mt-1'>
            Powered By{' '}
            <a
              href="https://dulshan-r.netlify.app/"
              target='_blank'
              rel='noopener noreferrer'
              className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 hover:text-purple-400 transition-colors'
            >
              Dulshan-R
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
