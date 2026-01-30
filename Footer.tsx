import React from 'react';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-feed-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <span className="text-2xl">🥣</span>
               <span className="font-display font-bold text-xl">Feedofund</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              We believe in the power of blockchain to solve real-world hunger. By redirecting passive yields, we create active change.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-feed-yellow">Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#mission" className="hover:text-white transition-colors">Mission</a></li>
              <li><a href="#transparency" className="hover:text-white transition-colors">Smart Contracts</a></li>
              <li><a href="#updates" className="hover:text-white transition-colors">On The Ground</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-feed-yellow">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li>
                <button 
                  onClick={onAdminClick} 
                  className="text-gray-400 hover:text-feed-orange transition-colors text-left"
                >
                  Admin Access
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Feedofund. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;