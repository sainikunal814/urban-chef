import React, { useState } from 'react';
import { UrbanChefLogo } from './UrbanChefLogo';
import { Phone, Mail, MapPin, Send, ShieldCheck, Heart, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { ViewMode } from '../types';

interface FooterProps {
  setCurrentView: (view: ViewMode) => void;
  onSelectCategory: (catId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#1A1A1A] text-zinc-300 font-sans border-t border-zinc-800">
      
      {/* Top Newsletter Bar */}
      <div className="bg-[#3A3A3A] py-10 px-4 sm:px-6 lg:px-8 border-b border-zinc-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">Join the Urban Chef Culinary Club</h3>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1">Get ₹500 voucher on your first order + secret chef recipes every month.</p>
          </div>

          {subscribed ? (
            <div className="bg-emerald-500/20 text-emerald-300 font-bold px-6 py-3 rounded-full text-xs border border-emerald-500/30">
              ✓ Subscribed! Check your email for code URBAN200.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-2">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-full text-xs text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
              />
              <button 
                type="submit"
                className="bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold px-6 py-3 rounded-full text-xs transition-all shrink-0 shadow"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
        
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <UrbanChefLogo size="md" />
          <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
            URBAN CHEF is India's leading brand of surgical grade 304 tri-ply stainless steel cookware, pressure cookers, and laser engraved dinnerware designed for modern Indian homes.
          </p>

          <div className="space-y-2 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FFD600]" />
              <span>Urban Chef Industrial Complex, MIDC, Mumbai, MH - 400093</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FFD600]" />
              <span>1800-200-8722 (Toll-Free Mon-Sat 9am to 7pm)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFD600]" />
              <span>support@urbanchef.in</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#FFD600] hover:text-[#3A3A3A] flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#FFD600] hover:text-[#3A3A3A] flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#FFD600] hover:text-[#3A3A3A] flex items-center justify-center transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Explore Store</h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li>
              <button onClick={() => { setCurrentView('shop'); onSelectCategory('all'); }} className="hover:text-[#FFD600]">
                All Cookware Range
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('shop'); onSelectCategory('pressure-cookers'); }} className="hover:text-[#FFD600]">
                Pressure Cookers
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('shop'); onSelectCategory('kadai'); }} className="hover:text-[#FFD600]">
                Tri-Ply Kadai
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('shop'); onSelectCategory('dinner-sets'); }} className="hover:text-[#FFD600]">
                Laser Dinner Sets
              </button>
            </li>
            <li>
              <button onClick={() => { setCurrentView('recipes'); }} className="hover:text-[#FFD600]">
                Recipes & Cooking Guides
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Customer Care */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Customer Care</h4>
          <ul className="space-y-2.5 text-xs text-zinc-400">
            <li>
              <button onClick={() => setCurrentView('track-order')} className="hover:text-[#FFD600]">
                Track Your Order
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('contact')} className="hover:text-[#FFD600]">
                Warranty Claim Registration
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('bulk-orders')} className="hover:text-[#FFD600]">
                Hotel & Bulk Inquiries
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('about')} className="hover:text-[#FFD600]">
                About Manufacturing
              </button>
            </li>
            <li>
              <button onClick={() => setCurrentView('contact')} className="hover:text-[#FFD600]">
                Store Locator
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Guarantee & Trust */}
        <div>
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quality Standards</h4>
          <div className="space-y-3 text-xs text-zinc-400">
            <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
              <div className="font-bold text-white text-xs mb-0.5">🇮🇳 Made In India</div>
              <p className="text-[10px] text-zinc-400">Crafted under Atmanirbhar Bharat Manufacturing Initiative.</p>
            </div>
            <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
              <div className="font-bold text-[#FFD600] text-xs mb-0.5">10-Year Guarantee</div>
              <p className="text-[10px] text-zinc-400">Complete replacement guarantee on all Tri-Ply products.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar & Copyright */}
      <div className="bg-black py-6 px-4 sm:px-6 lg:px-8 border-t border-zinc-800 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} URBAN CHEF India Ltd. All Rights Reserved. Crafted with pride for modern kitchens.</p>
          <div className="flex items-center gap-4 text-zinc-400 font-mono text-[10px]">
            <span>UPI • VISA • MASTERCARD • NETBANKING • COD</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
