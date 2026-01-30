import React, { useEffect, useState } from 'react';
import { CommunityPost } from '../types';
import { getPosts } from '../services/storageService';

const CommunityUpdates: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);

  useEffect(() => {
    // Load posts whenever component mounts
    setPosts(getPosts());
    
    // Optional: Listen for storage changes if multiple tabs are open (basic sync)
    const handleStorageChange = () => setPosts(getPosts());
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <section id="updates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <span className="text-feed-green font-bold tracking-wider uppercase text-sm">Real Impact</span>
           <h2 className="text-3xl md:text-5xl font-display font-bold text-feed-dark mt-2">On The Ground</h2>
           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
             See exactly where the funds go. Live updates from our community outreach programs.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                {post.type === 'video' ? (
                  <video 
                    src={post.url} 
                    controls 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={post.url} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-feed-dark shadow-sm">
                  {new Date(post.date).toLocaleDateString()}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-feed-dark mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityUpdates;