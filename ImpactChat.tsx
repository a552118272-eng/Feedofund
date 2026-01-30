import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const ImpactChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the Feedofund Impact Assistant. Ask me how we convert crypto to meals!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  return (
    <section id="impact" className="py-20 bg-feed-cream relative overflow-hidden">
      <div className="absolute -left-20 top-40 w-64 h-64 bg-feed-orange opacity-10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-feed-dark mb-6">
            Transparent Giving,<br/>
            <span className="text-feed-green">Verified by AI</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our wallet addresses, how we calculate meal costs, or our latest donation run? Ask our AI assistant. It has access to our public ledger data structure.
          </p>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-feed-green/20">
                <h4 className="font-bold text-feed-dark mb-1">0% Admin Fees</h4>
                <p className="text-sm text-gray-500">Smart contracts handle the routing.</p>
             </div>
             <div className="bg-white p-4 rounded-xl shadow-sm border border-feed-green/20">
                <h4 className="font-bold text-feed-dark mb-1">Weekly Payouts</h4>
                <p className="text-sm text-gray-500">Fiat conversion happens every Friday.</p>
             </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-[500px]">
            <div className="bg-feed-dark p-4 flex items-center gap-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="ml-2 text-white font-mono text-sm opacity-80">Feedofund_Assistant.exe</span>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-4 ${
                    msg.role === 'user' 
                      ? 'bg-feed-orange text-white rounded-br-none' 
                      : 'bg-white text-gray-800 shadow-md border border-gray-100 rounded-bl-none'
                  }`}>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                  <div className="bg-white rounded-2xl p-4 shadow-md rounded-bl-none flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about our impact..."
                className="flex-1 bg-gray-100 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-feed-green focus:outline-none transition-all"
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-feed-green text-white px-6 py-2 rounded-xl font-bold hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactChat;