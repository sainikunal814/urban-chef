import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { Product } from '../types';
import { Flame, Clock, Sparkles, ArrowRight } from 'lucide-react';

interface BestSellersProps {
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  wishlistIds: string[];
  compareIds: string[];
  onViewAll: () => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  wishlistIds,
  compareIds,
  onViewAll,
}) => {
  const [activeTab, setActiveTab] = useState<'bestsellers' | 'deals' | 'new'>('bestsellers');
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 45 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  let filteredProducts = PRODUCTS;
  if (activeTab === 'bestsellers') filteredProducts = PRODUCTS.filter((p) => p.isBestSeller);
  if (activeTab === 'deals') filteredProducts = PRODUCTS.filter((p) => p.isDealOfDay || p.discountPercentage >= 35);
  if (activeTab === 'new') filteredProducts = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <section className="py-16 lg:py-24 bg-zinc-900/90 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] uppercase tracking-wider mb-2">
              <Flame className="w-4 h-4 text-[#FFD600] fill-current" /> High Demand Cookware
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Best Sellers & Trending Deals
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#242424] rounded-2xl border border-white/10 shadow-md self-start">
            <button
              onClick={() => setActiveTab('bestsellers')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'bestsellers' 
                  ? 'bg-[#FFD600] text-[#3A3A3A] shadow-md font-extrabold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              🔥 Best Sellers
            </button>

            <button
              onClick={() => setActiveTab('deals')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'deals' 
                  ? 'bg-[#1F3F99] text-white shadow-md' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-[#FFD600]" /> Deal of the Day
            </button>

            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'new' 
                  ? 'bg-[#FFD600] text-[#3A3A3A] shadow-md font-extrabold' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              ✨ New Arrivals
            </button>
          </div>
        </div>

        {/* Live Deal Timer Banner if Deals tab active */}
        {activeTab === 'deals' && (
          <div className="mb-8 p-4 bg-gradient-to-r from-[#1F3F99] to-[#242424] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
            <div className="flex items-center gap-3">
              <span className="p-2 bg-[#FFD600] text-[#3A3A3A] rounded-xl font-extrabold">⚡</span>
              <div>
                <div className="text-sm font-bold">Limited Time Flash Sale - Extra 35% OFF</div>
                <div className="text-xs text-zinc-300">Offers end once stock expires or timer reaches zero.</div>
              </div>
            </div>

            <div className="flex items-center gap-2 font-mono text-sm font-bold">
              <span className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-black/60 px-3 py-1.5 rounded-lg border border-white/20">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-[#FFD600] text-[#3A3A3A] px-3 py-1.5 rounded-lg font-extrabold shadow">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              onToggleWishlist={onToggleWishlist}
              onToggleCompare={onToggleCompare}
              isWishlisted={wishlistIds.includes(product.id)}
              isCompared={compareIds.includes(product.id)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center gap-2 bg-[#242424] hover:bg-zinc-800 text-white border border-white/20 hover:border-[#FFD600] font-extrabold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg active:scale-95"
          >
            <span>Explore All 15+ Premium Items</span>
            <ArrowRight className="w-4 h-4 text-[#FFD600]" />
          </button>
        </div>

      </div>
    </section>
  );
};
