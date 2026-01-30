import React, { useEffect, useState } from 'react';
import { TokenConversion } from '../types';

const INITIAL_DATA: TokenConversion[] = [
  { id: '1', token: 'SOL', amount: 12.5, mealEquivalent: 150, timestamp: new Date() },
  { id: '2', token: 'PUMP', amount: 45000, mealEquivalent: 45, timestamp: new Date() },
];

const TokenStream: React.FC = () => {
  const [conversions, setConversions] = useState<TokenConversion[]>(INITIAL_DATA);
  const [treasuryBalance, setTreasuryBalance] = useState(2150); // Starting simulated balance
  const THRESHOLD = 3570;

  useEffect(() => {
    const interval = setInterval(() => {
      const actions = [
        { type: 'DEPOSIT', token: 'SOL', label: 'Monthly 5% Transfer', amt: 0.5 },
        { type: 'SWAP', token: 'USDC', label: 'Pump.fun Auto-Swap', amt: 25 },
        { type: 'DEPOSIT', token: 'BONK', label: 'Community Drop', amt: 100000 },
      ];
      
      const action = actions[Math.floor(Math.random() * actions.length)];
      const valueChange = Math.random() * 50 + 10;
      
      const newConversion: TokenConversion = {
        id: Math.random().toString(36).substr(2, 9),
        token: action.token,
        amount: action.amt,
        mealEquivalent: Math.floor(valueChange / 5), // Rough meal calc
        timestamp: new Date()
      };

      setConversions(prev => [newConversion, ...prev].slice(0, 4));
      
      setTreasuryBalance(prev => {
        const next = prev + valueChange;
        return next > THRESHOLD ? 0 : next; // Reset if threshold hit (simulating donation)
      });

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const percentage = Math.min((treasuryBalance / THRESHOLD) * 100, 100);

  return (
    <section id="transparency" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-feed-orange font-bold tracking-wider uppercase text-sm">Live Treasury Monitor</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-feed-dark mt-2">Treasury Watch</h2>
          <p className="text-gray-500 mt-2">Real-time tracking of the $3,570 donation trigger.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Progress Section */}
          <div className="bg-feed-cream p-8 rounded-3xl shadow-lg border border-feed-yellow/50">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Current Treasury</p>
                <p className="text-4xl font-bold text-feed-dark">${treasuryBalance.toFixed(2)}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-gray-500 uppercase">Trigger Goal</p>
                <p className="text-xl font-bold text-gray-400">${THRESHOLD.toLocaleString()}</p>
              </div>
            </div>

            <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-feed-green to-feed-yellow transition-all duration-1000 ease-in-out"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            
            <div className="mt-4 flex justify-between text-xs text-gray-500 font-mono">
              <span>0%</span>
              <span>50%</span>
              <span>100% (Auto-Donate)</span>
            </div>

            <div className="mt-8 bg-white p-4 rounded-xl border border-gray-100 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm text-gray-600">
                <span className="font-bold">System Status:</span> Monitoring Pump.fun & Dev Wallets
              </p>
            </div>
          </div>

          {/* Activity Stream */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-700 mb-4 px-2">Recent On-Chain Activity</h3>
            {conversions.map((item, index) => (
              <div 
                key={item.id}
                className={`flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-all duration-500 ease-out ${index === 0 ? 'border-l-4 border-feed-green' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-feed-green/10 flex items-center justify-center text-feed-dark font-bold text-xs">
                    {item.token}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">
                      {item.token === 'SOL' ? 'Dev Wallet Transfer' : 'Token Swap'}
                    </p>
                    <p className="text-xs text-gray-500">
                       {item.amount.toLocaleString()} {item.token} processed
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-feed-green text-sm">Verified</p>
                  <p className="text-xs text-gray-400">Solana Network</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TokenStream;