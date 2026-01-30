import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CommunityUpdates from './components/CommunityUpdates';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'admin'>('home');

  if (currentView === 'admin') {
    return <AdminDashboard onReturn={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-feed-cream font-sans text-gray-800 selection:bg-feed-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Community Updates Section */}
        <CommunityUpdates />

        {/* Mission Statement Section */}
        <section id="mission" className="py-24 bg-feed-green/10">
           <div className="max-w-4xl mx-auto px-4 text-center">
              {/* Core Mission Statement */}
              <span className="text-feed-orange font-bold tracking-wider uppercase text-sm mb-3 block">Our Purpose</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-feed-dark mb-8">Our Core Mission</h2>
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-feed-green/20 mb-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-feed-green to-feed-yellow"></div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  At Feedofund, we are redefining value. Our mission is to transform the volatility of the crypto market into the stability of a warm meal. 
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mt-6">
                  We believe that <strong>decentralized finance (DeFi)</strong> has the power to solve centralized problems like hunger. 
                  By building a self-sustaining protocol where every transaction contributes to social good, we ensure that wealth generation goes hand-in-hand with compassion. 
                  We aren't just trading tokens; we are trading hope.
                </p>
              </div>

              {/* Mechanism Section */}
              <span className="text-feed-green font-bold tracking-wider uppercase text-sm mb-2 block">The Mechanism</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-feed-dark mb-6">Automated Compassion</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Feedofund runs on transparent logic. We integrate with <span className="font-bold text-feed-dark">Pump.fun</span> and Solana protocols to automate donations.
                By converting idle token yields into real-world impact, we bridge DeFi and philanthropy.
              </p>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                 <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-feed-cream rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🗓️</div>
                    <h3 className="font-bold text-lg">1. The 5% Commitment</h3>
                    <p className="text-gray-500 mt-2 text-sm">Every month, 5% of our wallet holdings are liquidated and donated directly.</p>
                 </div>
                 <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-feed-cream rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">🥣</div>
                    <h3 className="font-bold text-lg">2. Direct Impact</h3>
                    <p className="text-gray-500 mt-2 text-sm">No complex thresholds to hit. Just consistent, monthly support for those in need.</p>
                 </div>
                 <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-feed-cream rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">⚡</div>
                    <h3 className="font-bold text-lg">3. Auto-Swap</h3>
                    <p className="text-gray-500 mt-2 text-sm">We monitor Pump.fun tokens and auto-convert them to ensure stable donation value.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer onAdminClick={() => setCurrentView('admin')} />
    </div>
  );
}

export default App;