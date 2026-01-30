import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mealsCount, setMealsCount] = useState(0);
  
  // Simulated animation for the counter
  useEffect(() => {
    const target = 150;
    const duration = 2000; 
    const step = target / (duration / 16); 

    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setMealsCount(target);
        clearInterval(timer);
      } else {
        setMealsCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-center pt-32">
      
      {/* --- BACKGROUND ANIMATION LAYER --- */}
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-sky-100 to-feed-cream overflow-hidden">
        
        {/* Moving Clouds - Full Width */}
        <div className="absolute top-10 left-0 w-full animate-cloud-drift z-0 pointer-events-none">
            <div className="absolute top-4 left-[10%] text-8xl text-white">☁️</div>
            <div className="absolute top-24 left-[40%] text-6xl text-white">☁️</div>
            <div className="absolute top-8 left-[80%] text-9xl text-white">☁️</div>
        </div>

        {/* Floating/Wiggling Meals - Scattered across full screen */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
            {/* Top Left */}
            <div className="absolute left-[5%] top-[15%] animate-hover-sway text-7xl" style={{ animationDelay: '0s' }}>
              <div className="animate-waddle" style={{ animationDelay: '0.5s' }}>🥣</div>
            </div>

            {/* Top Right */}
            <div className="absolute right-[8%] top-[12%] animate-hover-sway text-6xl" style={{ animationDelay: '1s' }}>
              <div className="animate-waddle" style={{ animationDelay: '1.5s' }}>🍲</div>
            </div>

            {/* Bottom Left */}
            <div className="absolute left-[8%] bottom-[20%] animate-hover-sway text-8xl" style={{ animationDelay: '2s' }}>
                <div className="animate-waddle" style={{ animationDelay: '2.5s' }}>🍞</div>
            </div>

            {/* Bottom Right */}
            <div className="absolute right-[10%] bottom-[25%] animate-hover-sway text-6xl" style={{ animationDelay: '1.2s' }}>
                <div className="animate-waddle" style={{ animationDelay: '0.2s' }}>🥯</div>
            </div>

            {/* Mid Left */}
            <div className="absolute left-[15%] top-[50%] animate-hover-sway text-5xl" style={{ animationDelay: '0.5s' }}>
                <div className="animate-waddle" style={{ animationDelay: '3s' }}>🍎</div>
            </div>

            {/* Mid Right */}
            <div className="absolute right-[18%] top-[55%] animate-hover-sway text-7xl" style={{ animationDelay: '2.5s' }}>
                <div className="animate-waddle" style={{ animationDelay: '1s' }}>🥣</div>
            </div>
        </div>

        {/* The Character Animation - Centered in Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <div className="animate-hover-sway relative z-10 transform scale-125 lg:scale-150">
              <div className="animate-waddle origin-bottom">
                 <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                   {/* Sun Rays (Behind) */}
                   <g className="animate-sun-spin origin-center" style={{ transformBox: 'fill-box', transformOrigin: 'center' }}>
                      <circle cx="100" cy="80" r="55" stroke="#FCD863" strokeWidth="2" strokeDasharray="10 10" opacity="0.6"/>
                   </g>

                   {/* Sun Body */}
                   <circle cx="100" cy="80" r="40" fill="#FCD863" />

                   {/* Leaves */}
                   <path d="M70 90 Q50 60 75 40 Q85 60 70 90" fill="#96C67F" stroke="#84B06F" strokeWidth="2"/>
                   <path d="M130 90 Q150 60 125 40 Q115 60 130 90" fill="#96C67F" stroke="#84B06F" strokeWidth="2"/>
                   
                   {/* Bowl Body */}
                   <path d="M40 100 Q40 170 100 170 Q160 170 160 100 L40 100 Z" fill="#F4A261" stroke="#E76F51" strokeWidth="3"/>
                   
                   {/* Face */}
                   <circle cx="85" cy="135" r="5" fill="#2D3748"/>
                   <circle cx="115" cy="135" r="5" fill="#2D3748"/>
                   <path d="M90 145 Q100 155 110 145" stroke="#2D3748" strokeWidth="3" strokeLinecap="round"/>

                   {/* Legs */}
                   <line x1="80" y1="170" x2="80" y2="190" stroke="#2D3748" strokeWidth="4" className="animate-bounce-leg"/>
                   <line x1="120" y1="170" x2="120" y2="190" stroke="#2D3748" strokeWidth="4" className="animate-bounce-leg" style={{ animationDelay: '0.3s'}}/>
                   
                   {/* Feet */}
                   <path d="M70 190 L90 190" stroke="#2D3748" strokeWidth="4" strokeLinecap="round" className="animate-bounce-leg"/>
                   <path d="M110 190 L130 190" stroke="#2D3748" strokeWidth="4" strokeLinecap="round" className="animate-bounce-leg" style={{ animationDelay: '0.3s'}}/>
                 </svg>
              </div>
           </div>
        </div>

        {/* Path/Ground Gradient */}
        <div className="absolute bottom-0 w-full h-1/4 z-0 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-t from-feed-green/20 to-transparent"></div>
        </div>
      </div>

      {/* --- FOREGROUND CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10 mb-20">
        
        {/* Removed glass container box to allow transparency */}
        <div className="inline-block max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-display font-bold text-feed-dark mb-6 leading-tight drop-shadow-xl">
            Turning <span className="text-feed-orange drop-shadow-sm">Crypto Yields</span><br />
            into <span className="text-feed-green drop-shadow-sm">Warm Meals</span>
            </h1>
            
            <p className="mt-6 text-xl md:text-2xl text-gray-800 font-bold mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md bg-white/10 backdrop-blur-[2px] rounded-xl p-2">
            Feedofund harnesses the power of decentralized finance. We hold tokens, collect the fees, and convert 100% of proceeds into food for the homeless.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center flex-wrap">
              <a 
                  href="https://www.givewise.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-feed-green text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all transform hover:-translate-y-1 inline-block"
              >
                  Start Contributing
              </a>
              <a 
                  href="https://pump.fun/coin/EFWFBR4E2BY6YTYLK4giQrcJy5eifZEun9BH7RCvpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-white/90 backdrop-blur text-feed-dark border-2 border-feed-dark/10 rounded-full font-bold text-xl hover:bg-white transition-all shadow-md inline-block"
              >
                  Buy on Pump.fun
              </a>
              
              <div className="flex gap-3">
                <a 
                    href="https://x.com/FeedoFund"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-[68px] flex items-center justify-center bg-black text-white rounded-full font-bold text-xl hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-1"
                    aria-label="X (Twitter)"
                >
                     <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                     </svg>
                </a>
                <a 
                    href="https://www.instagram.com/feedo_fund/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-[68px] flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white rounded-full font-bold text-xl hover:opacity-90 transition-all shadow-md transform hover:-translate-y-1"
                    aria-label="Instagram"
                >
                     <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h.167zM16.714 11a5.952 5.952 0 010 2.434l-.005.024c-.015.396-.06.772-.132 1.134-.132.65-.366 1.25-.688 1.796a5.98 5.98 0 01-1.464 1.62c-.672.484-1.432.812-2.253.945-.375.06-.768.093-1.168.093h-.024c-.396-.015-.772-.06-1.134-.132a5.975 5.975 0 01-3.416-2.565 5.968 5.968 0 01-.274-2.887c.06-.375.093-.768.093-1.168v-.024c.015-.396.06-.772.132-1.134.132-.65.366-1.25.688-1.796a5.98 5.98 0 011.464-1.62c.672-.484 1.432-.812 2.253-.945.375-.06.768-.093 1.168-.093h.024c.396.015.772.06 1.134.132.65.132 1.25.366 1.796.688a5.98 5.98 0 011.62 1.464c.484.672.812 1.432.945 2.253.06.375.093.768.093 1.168v.024zm-4.714-3.56a3.56 3.56 0 100 7.12 3.56 3.56 0 000-7.12zm5.388-.562a1.265 1.265 0 110 2.53 1.265 1.265 0 010-2.53z" clipRule="evenodd" />
                     </svg>
                </a>
             </div>
            </div>
        </div>

      </div>

      {/* Stats Cards (Floating at bottom) - Z-Index 20 to overlap next section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 w-full -mb-10 lg:-mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border-b-4 border-feed-yellow transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-2">🥣</div>
            <div className="text-3xl font-bold text-feed-dark">{mealsCount.toLocaleString()}</div>
            <div className="text-gray-500 font-semibold">Meals Served</div>
          </div>
          <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border-b-4 border-feed-green transform hover:scale-105 transition-transform duration-300 delay-100">
            <div className="text-4xl mb-2">🪙</div>
            <div className="text-3xl font-bold text-feed-dark">$470</div>
            <div className="text-gray-500 font-semibold">Fees Generated</div>
          </div>
          <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl border-b-4 border-feed-orange transform hover:scale-105 transition-transform duration-300 delay-200">
            <div className="text-4xl mb-2">🤝</div>
            <div className="text-3xl font-bold text-feed-dark">27</div>
            <div className="text-gray-500 font-semibold">Unique Holders</div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;