import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Scale, 
  User, 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  ChevronDown,
  Globe,
  Flame
} from 'lucide-react';
import { UrbanChefLogo } from './UrbanChefLogo';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Product, ViewMode } from '../types';

interface NavbarProps {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  cartCount: number;
  wishlistCount: number;
  compareCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (catId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  cartCount,
  wishlistCount,
  compareCount,
  onOpenCart,
  onOpenWishlist,
  onOpenCompare,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered search results
  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.material.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    setCurrentView('shop');
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full font-sans transition-all duration-300">
      {/* Top Announcement Bar - Golden Yellow Banner */}
      <div className="bg-[#FFD600] text-[#3A3A3A] text-xs font-bold py-2 px-4 border-b border-yellow-500/20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left Announcement Marquee text */}
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="bg-[#3A3A3A] text-[#FFD600] font-black px-2 py-0.5 rounded text-[10px] tracking-wide uppercase flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-[#FFD600]" /> FESTIVE OFFER
            </span>
            <span className="text-[#2a2a2a] font-bold">
              Get Extra 10% OFF with code <strong className="underline decoration-2">URBAN200</strong> • Free Express Delivery Across India
            </span>
          </div>

          {/* Right Utility links */}
          <div className="hidden md:flex items-center gap-5 text-[#2a2a2a] text-[11px] font-semibold">
            <a href="tel:18002008722" className="flex items-center gap-1 hover:text-black transition-colors">
              <Phone className="w-3 h-3" /> 1800-200-8722 (Toll Free)
            </a>
            <button 
              onClick={() => { setCurrentView('track-order'); setMobileMenuOpen(false); }}
              className="flex items-center gap-1 hover:text-black transition-colors"
            >
              <Truck className="w-3 h-3" /> Track Order
            </button>
            <button 
              onClick={() => { setCurrentView('bulk-orders'); setMobileMenuOpen(false); }}
              className="hover:text-black transition-colors font-extrabold uppercase tracking-wide bg-[#3A3A3A]/10 px-2 py-0.5 rounded"
            >
              Bulk & Hotel Enquiries
            </button>
            <div className="flex items-center gap-1 text-[#3A3A3A] pl-2 border-l border-[#3A3A3A]/30">
              <Globe className="w-3.5 h-3.5" />
              <span>INR (₹) | EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dark Glassmorphic Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a1a1a]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10' 
            : 'bg-[#1a1a1a] py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Mobile Hamburger & Brand Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Urban Chef Official Vector Logo */}
            <button 
              onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2 group text-left"
            >
              <UrbanChefLogo size="md" />
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="hidden lg:block relative flex-1 max-w-md mx-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search pressure cookers, tri-ply kadai, dinner sets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className="w-full pl-10 pr-4 py-2.5 bg-zinc-800/90 border border-zinc-700/80 rounded-full text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600] focus:border-transparent transition-all"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Live Search Results Dropdown Popover */}
            {isSearchFocused && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#242424] rounded-2xl shadow-2xl border border-white/10 p-3 z-50 max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold tracking-wider text-zinc-400 uppercase px-2">
                      Products Found ({searchResults.length})
                    </div>
                    {searchResults.map((item) => (
                      <div
                        key={item.id}
                        onMouseDown={() => {
                          onSelectProduct(item);
                          setSearchQuery('');
                        }}
                        className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-xl cursor-pointer transition-colors"
                      >
                        <img 
                          src={item.images[0]} 
                          alt={item.name} 
                          className="w-12 h-12 object-cover rounded-lg border border-white/10"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                          <p className="text-[11px] text-zinc-400">{item.category}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-bold text-[#FFD600]">₹{item.price.toLocaleString('en-IN')}</span>
                            <span className="text-[10px] line-through text-zinc-500">₹{item.originalPrice.toLocaleString('en-IN')}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-6 text-center text-sm text-zinc-400">
                    No cookware found matching "<span className="text-white font-medium">{searchQuery}</span>"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-zinc-200">
            <button 
              onClick={() => { setCurrentView('home'); }}
              className={`hover:text-[#FFD600] transition-colors py-1 relative ${currentView === 'home' ? 'text-[#FFD600]' : ''}`}
            >
              Home
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFD600] rounded-full" />
              )}
            </button>

            {/* Category Dropdown Toggle */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('categories')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button 
                onClick={() => { onSelectCategory('all'); setCurrentView('shop'); }}
                className={`hover:text-[#FFD600] transition-colors py-1 flex items-center gap-1 ${currentView === 'shop' ? 'text-[#FFD600]' : ''}`}
              >
                Category <ChevronDown className="w-4 h-4 text-zinc-400 group-hover:rotate-180 transition-transform" />
              </button>

              {/* Mega Menu Dropdown */}
              {activeMegaMenu === 'categories' && (
                <div className="absolute top-full left-0 w-[640px] bg-[#242424] rounded-2xl shadow-2xl border border-white/10 p-6 grid grid-cols-3 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 text-white">
                  {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.id)}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all text-left group/item border border-transparent hover:border-white/10"
                    >
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        className="w-10 h-10 object-cover rounded-lg shadow-sm group-hover/item:scale-105 transition-transform"
                      />
                      <div>
                        <div className="text-xs font-bold text-white group-hover/item:text-[#FFD600]">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-zinc-400">{cat.count} items</div>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-zinc-400 font-normal">
                      Looking for restaurant grade tri-ply?
                    </span>
                    <button 
                      onClick={() => handleCategoryClick('all')}
                      className="text-xs font-bold text-[#FFD600] hover:underline flex items-center gap-1"
                    >
                      View All Cookware Range &rarr;
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setCurrentView('recipes')}
              className={`hover:text-[#FFD600] transition-colors py-1 ${currentView === 'recipes' ? 'text-[#FFD600]' : ''}`}
            >
              Recipes & Tips
            </button>

            <button 
              onClick={() => setCurrentView('about')}
              className={`hover:text-[#FFD600] transition-colors py-1 ${currentView === 'about' ? 'text-[#FFD600]' : ''}`}
            >
              About Brand
            </button>

            <button 
              onClick={() => setCurrentView('contact')}
              className={`hover:text-[#FFD600] transition-colors py-1 ${currentView === 'contact' ? 'text-[#FFD600]' : ''}`}
            >
              Contact
            </button>
          </div>

          {/* Right Action Icons (Compare, Wishlist, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Compare */}
            <button 
              onClick={onOpenCompare}
              className="relative p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden sm:flex"
              title="Compare Products"
            >
              <Scale className="w-5 h-5" />
              {compareCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1F3F99] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {compareCount}
                </span>
              )}
            </button>

            {/* Wishlist */}
            <button 
              onClick={onOpenWishlist}
              className="relative p-2 text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button 
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] px-4 py-2 rounded-full font-black text-xs transition-all shadow-lg active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-[#3A3A3A]" />
              <span className="hidden sm:inline font-black">Cart</span>
              <span className="bg-[#3A3A3A] text-[#FFD600] font-extrabold px-1.5 py-0.5 rounded-full text-[10px] min-w-5 text-center">
                {cartCount}
              </span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex">
          <div className="bg-[#242424] text-white w-4/5 max-w-sm h-full p-6 overflow-y-auto flex flex-col justify-between shadow-2xl border-r border-white/10">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <UrbanChefLogo size="sm" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Search */}
              <div className="my-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Urban Chef range..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-zinc-800 rounded-xl text-xs text-white focus:outline-none border border-zinc-700"
                  />
                  <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                </div>
              </div>

              {/* Mobile Nav Links */}
              <div className="space-y-1 text-sm font-semibold text-zinc-200 py-2">
                <button 
                  onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-white/10 flex items-center justify-between"
                >
                  Home
                </button>

                <div className="py-2">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider px-3 mb-2">
                    Cookware Categories
                  </div>
                  <div className="space-y-1 pl-2">
                    {CATEGORIES.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => handleCategoryClick(c.id)}
                        className="w-full text-left py-2 px-3 text-xs text-zinc-300 hover:text-[#FFD600] font-medium rounded-lg hover:bg-white/5 flex items-center justify-between"
                      >
                        <span>{c.name}</span>
                        <span className="text-[10px] text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">{c.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => { setCurrentView('recipes'); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-white/10"
                >
                  Recipes & Kitchen Tips
                </button>

                <button 
                  onClick={() => { setCurrentView('about'); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-white/10"
                >
                  About Urban Chef
                </button>

                <button 
                  onClick={() => { setCurrentView('track-order'); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-xl hover:bg-white/10 text-[#FFD600] font-bold"
                >
                  Track Order
                </button>

                <button 
                  onClick={() => { setCurrentView('bulk-orders'); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2.5 px-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#FFD600] font-bold flex items-center justify-between"
                >
                  <span>Bulk & Hotel Inquiry</span>
                  <span className="text-[10px] bg-[#FFD600] text-[#3A3A3A] px-2 py-0.5 rounded font-extrabold">B2B</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-zinc-400">
              <p className="font-semibold text-white mb-1">Toll-Free Support</p>
              <p className="text-zinc-400 mb-2">1800-200-8722 (Mon-Sat: 9am-7pm)</p>
              <div className="flex items-center gap-2 text-[10px] text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" /> 100% Genuine Certified Stainless Steel
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
