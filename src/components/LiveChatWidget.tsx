import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Namaste! Welcome to URBAN CHEF Support. How can we assist you with cookware selection or warranty claims today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInput('');

    setTimeout(() => {
      let reply = 'Thank you for reaching out! For instant order tracking or custom sizes, call our toll-free line 1800-200-8722 or WhatsApp our chef team at +91 98200 12345.';
      if (userText.toLowerCase().includes('warranty')) {
        reply = 'All Urban Chef Tri-Ply products carry a 10-Year Replacement Guarantee. You can register your QR code warranty online or email support@urbanchef.in.';
      } else if (userText.toLowerCase().includes('induction')) {
        reply = 'Yes! All Urban Chef Tri-Ply cookware is 100% compatible with Induction Hobs, Gas Stoves, Halogen, and Electric Cooktops.';
      }
      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 800);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 z-40 font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#3A3A3A] hover:bg-black text-[#FFD600] p-3.5 rounded-full shadow-2xl flex items-center gap-2 border-2 border-[#FFD600] transition-all duration-300 hover:scale-105 active:scale-95 group"
        >
          <MessageSquare className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline font-extrabold text-xs text-white">Need Help? Chat Live</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-[#242424] rounded-3xl shadow-2xl border border-white/10 w-80 sm:w-96 overflow-hidden flex flex-col h-96 text-left animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="p-4 bg-zinc-900 text-white border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FFD600] text-[#3A3A3A] font-black flex items-center justify-center text-xs shadow">
                UC
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">Urban Chef Support</h4>
                <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online • Mon-Sat 9am-7pm</span>
                </div>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-zinc-900 text-xs">
            {messages.map((m, idx) => (
              <div 
                key={idx}
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user' 
                    ? 'bg-[#FFD600] text-[#3A3A3A] font-extrabold ml-auto' 
                    : 'bg-[#242424] text-zinc-200 border border-white/10 shadow-sm'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* WhatsApp Direct Link & Input */}
          <div className="p-3 bg-[#242424] border-t border-white/10 space-y-2">
            <a 
              href="https://wa.me/919820012345?text=Hi%20Urban%20Chef,%20I%20have%20a%20query%20regarding%20cookware" 
              target="_blank" 
              rel="noreferrer"
              className="block w-full text-center py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-xl shadow transition-colors"
            >
              💬 WhatsApp Direct Connect (+91 98200 12345)
            </a>

            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 bg-zinc-900 border border-white/10 rounded-xl text-xs text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#FFD600]"
              />
              <button 
                type="submit"
                className="p-2 bg-[#FFD600] text-[#3A3A3A] rounded-xl hover:bg-yellow-400 font-extrabold transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
