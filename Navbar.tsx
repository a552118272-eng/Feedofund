import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const CA = "EFWFBR4E2BY6YTYLK4giQrcJy5eifZEun9BH7RCvpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <nav className="fixed w-full z-50 bg-feed-cream/90 backdrop-blur-sm border-b border-feed-green/20">
      
      {/* Construction Banner */}
      <div className="bg-feed-dark text-feed-yellow py-2 overflow-hidden border-b border-feed-yellow/20 relative">
        <div className="animate-marquee whitespace-nowrap font-mono text-xs md:text-sm font-bold tracking-wider flex items-center">
          <span className="mx-4">🚧 DEMONSTRATION INTERFACE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">DATA MAY NOT BE UP TO DATE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FOLLOW US ON X</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🚧 DEMONSTRATION INTERFACE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">DATA MAY NOT BE UP TO DATE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FOLLOW US ON X</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🚧 DEMONSTRATION INTERFACE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">DATA MAY NOT BE UP TO DATE</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FOLLOW US ON X</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
             {/* 
                REPLACE THE SRC BELOW WITH YOUR ACTUAL LOGO URL 
                Using a placeholder based on your description: Sun, Leaves, Bowl Smile
             */}
            <div className="h-12 w-12 relative flex items-center justify-center bg-feed-yellow rounded-full shadow-lg overflow-hidden">
               <span className="text-2xl">🥣</span>
            </div>
            <span className="font-display font-bold text-2xl text-feed-dark tracking-wide">
              Feedofund
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#mission" className="text-feed-dark hover:text-feed-orange transition-colors font-semibold">Our Mission</a>
            <a href="#transparency" className="text-feed-dark hover:text-feed-orange transition-colors font-semibold">Transparency</a>
            <button 
              onClick={handleCopy}
              className="bg-feed-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-500 transition-all transform hover:scale-105 shadow-md flex items-center gap-2 min-w-[190px] justify-center"
              title="Click to copy Contract Address"
            >
              {copied ? (
                 <>
                   <span>Copied!</span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                 </>
              ) : (
                 <>
                   <span className="font-mono text-sm">CA: {CA.slice(0, 4)}...{CA.slice(-4)}</span>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                   </svg>
                 </>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-feed-dark hover:text-feed-orange focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-feed-green/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#mission" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-feed-orange hover:bg-feed-cream">Our Mission</a>
            <a href="#transparency" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-feed-orange hover:bg-feed-cream">Transparency</a>
            <button 
              onClick={handleCopy}
              className="block w-full text-left px-3 py-2 text-feed-orange font-bold hover:bg-feed-cream rounded-md truncate font-mono text-xs"
            >
              {copied ? "Address Copied!" : `CA: ${CA}`}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;