import React, { useState } from 'react';
import { CommunityPost } from '../types';
import { addPost } from '../services/storageService';

interface AdminDashboardProps {
  onReturn: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onReturn }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Upload State
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');
  const [mediaUrl, setMediaUrl] = useState('');
  const [preview, setPreview] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'Harry' && password === 'bohanzeng') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check file size (limit to ~3MB for localStorage safety in this demo)
      if (file.size > 3000000) {
        alert("File is too large for this demo storage. Please use a file under 3MB or a URL.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setMediaUrl(result);
        setPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !mediaUrl) {
      alert("Please provide a title and an image/video.");
      return;
    }

    const newPost: CommunityPost = {
      id: Date.now().toString(),
      title,
      description: desc,
      type: mediaType,
      url: mediaUrl,
      date: new Date().toISOString()
    };

    addPost(newPost);
    alert('Post published successfully!');
    
    // Reset Form
    setTitle('');
    setDesc('');
    setMediaUrl('');
    setPreview(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-feed-cream flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-feed-green/20">
          <div className="text-center mb-8">
            <span className="text-4xl">🔐</span>
            <h2 className="text-2xl font-bold text-feed-dark mt-4">Admin Access</h2>
            <p className="text-gray-500">Please verify your identity.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center font-bold">{error}</p>}
            <button type="submit" className="w-full bg-feed-dark text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
              Login
            </button>
            <button type="button" onClick={onReturn} className="w-full text-gray-500 text-sm hover:underline mt-2">
              Return to Website
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-feed-dark">Dashboard <span className="text-sm font-normal text-gray-500 ml-2">Welcome, Harry</span></h1>
          <button onClick={onReturn} className="text-feed-orange font-bold hover:underline">
            &larr; Return to Website
          </button>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">Post New Update</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none"
                  placeholder="e.g. Weekend Distribution"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
                <select 
                  value={mediaType}
                  onChange={e => setMediaType(e.target.value as 'image' | 'video')}
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Description</label>
              <textarea 
                value={desc}
                onChange={e => setDesc(e.target.value)}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none h-24"
                placeholder="What happened today?"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Media Upload</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-feed-green transition-colors bg-gray-50">
                 <input 
                   type="file" 
                   accept="image/*,video/*"
                   onChange={handleFileChange}
                   className="hidden"
                   id="file-upload"
                 />
                 <label htmlFor="file-upload" className="cursor-pointer block w-full h-full">
                   {preview ? (
                     <div className="relative h-48 w-full">
                       {mediaType === 'video' ? (
                         <video src={preview} className="h-full w-full object-contain" controls />
                       ) : (
                         <img src={preview} className="h-full w-full object-contain" alt="Preview" />
                       )}
                       <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-white font-bold rounded-lg">
                         Click to Change
                       </div>
                     </div>
                   ) : (
                     <div className="py-8">
                       <span className="text-4xl block mb-2">📁</span>
                       <span className="text-feed-orange font-bold">Click to Upload File</span>
                       <p className="text-xs text-gray-400 mt-1">or drag and drop here (Max 3MB)</p>
                     </div>
                   )}
                 </label>
              </div>
              
              <div className="relative flex py-5 items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink-0 mx-4 text-gray-400 text-sm">OR PASTE URL</span>
                  <div className="flex-grow border-t border-gray-300"></div>
              </div>

              <input 
                  type="text" 
                  value={mediaUrl}
                  onChange={e => {
                    setMediaUrl(e.target.value);
                    setPreview(e.target.value);
                  }}
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-feed-green outline-none"
                  placeholder="https://example.com/image.jpg"
                />
            </div>

            <button type="submit" className="w-full bg-feed-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-lg transform active:scale-95">
              Publish Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;