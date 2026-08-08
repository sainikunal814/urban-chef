import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Flame, 
  Star, 
  Play, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown,
  Clock,
  Truck
} from 'lucide-react';
import { Product } from '../types';

interface HeroSectionProps {
  onShopNow: () => void;
  onExploreCollection: () => void;
  onSelectProduct: (product: Product) => void;
  heroProduct: Product;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopNow,
  onExploreCollection,
  onSelectProduct,
  heroProduct,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] bg-gradient-to-br from-zinc-900 via-[#1A1A1A] to-[#2B2B2B] text-white overflow-hidden flex flex-col justify-between py-12 lg:py-16">
      {/* Background Animated Steel Texture Sheen and Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_30%_20%,#FFD600_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(circle_at_80%_80%,#1F3F99_0%,transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD600] text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#FFD600] animate-ping" />
              <span>INDIAN CRAFTSMANSHIP • 100% FOOD-GRADE 304 STEEL</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-sans leading-[1.08]">
                Cook with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] via-yellow-200 to-amber-400">
                  Confidence
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 font-normal max-w-2xl leading-relaxed">
                Premium Stainless Steel Kitchenware Crafted For Every Modern Kitchen. Engineered with 3-Ply Sandwich Tech for zero hotspot cooking.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onShopNow}
                className="group relative inline-flex items-center gap-3 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-[0_0_25px_rgba(255,214,0,0.35)] hover:shadow-[0_0_35px_rgba(255,214,0,0.5)] active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollection}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-full text-base backdrop-blur-md border border-white/20 transition-all duration-300 hover:border-white/40 active:scale-95"
              >
                <span>Explore Collection</span>
              </button>

              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 text-zinc-300 hover:text-[#FFD600] font-semibold px-4 py-3 text-sm transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#FFD600] group-hover:text-[#3A3A3A] flex items-center justify-center transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <span>Watch Story</span>
              </button>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FFD600]" />
                <div>
                  <div className="font-bold text-white">10 Years</div>
                  <div className="text-[11px] text-zinc-400">Guarantee</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-[#FFD600]" />
                <div>
                  <div className="font-bold text-white">304 Grade</div>
                  <div className="text-[11px] text-zinc-400">Surgical Steel</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-lg">🇮🇳</span>
                <div>
                  <div className="font-bold text-white">Made in India</div>
                  <div className="text-[11px] text-zinc-400">At-Manirbhar</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <div>
                  <div className="font-bold text-white">4.9/5 Rating</div>
                  <div className="text-[11px] text-zinc-400">500,000+ Homes</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Interactive 3D Utensil Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Mirror Steel Glass halo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#1F3F99]/40 via-white/10 to-[#FFD600]/30 blur-2xl animate-pulse"></div>

            {/* Main Interactive Floating Showcase Product Card */}
            <div 
              onClick={() => onSelectProduct(heroProduct)}
              className="relative group cursor-pointer w-full max-w-md bg-gradient-to-b from-white/15 to-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl hover:border-[#FFD600]/60 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Product Badge Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#FFD600] text-[#3A3A3A] font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow">
                  <Flame className="w-3.5 h-3.5" /> Flagship Tri-Ply
                </span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> In Stock & Free Delivery
                </span>
              </div>

              {/* Cookware Image with Glass reflections & slow floating effect */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center p-4">
                <motion.img 
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  src={heroProduct.images[0]} 
                  alt={heroProduct.name}
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
                
                {/* Mirror Sheen Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[11px] text-zinc-200 border border-white/10">
                  ✨ Touch to view 360° Specs
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFD600] transition-colors line-clamp-1">
                    {heroProduct.name}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 line-clamp-1">{heroProduct.subtitle}</p>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-[#FFD600]">₹{heroProduct.price.toLocaleString('en-IN')}</span>
                    <span className="text-xs line-through text-zinc-500">₹{heroProduct.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="bg-red-500/20 text-red-300 text-[10px] font-bold px-1.5 py-0.5 rounded">
                      {heroProduct.discountPercentage}% OFF
                    </span>
                  </div>
                  <span className="text-xs text-zinc-300 font-semibold group-hover:underline flex items-center gap-1">
                    Buy Now &rarr;
                  </span>
                </div>
              </div>

              {/* Floating Social Proof Badge */}
              <div className="absolute -bottom-5 -left-4 bg-[#3A3A3A] text-white p-3 rounded-2xl border border-white/20 shadow-xl flex items-center gap-3 text-xs hidden sm:flex">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-zinc-100">Verified Buyer Review</div>
                  <div className="text-[10px] text-zinc-400">"Zero food burning, easy to clean!"</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Mouse Scroll Indicator */}
      <div className="text-center pt-8 relative z-10 hidden md:block">
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}
          className="inline-flex flex-col items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors animate-bounce"
        >
          <span>Scroll to Explore Range</span>
          <ChevronDown className="w-4 h-4 text-[#FFD600]" />
        </button>
      </div>

      {/* Craftsmanship Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-3xl w-full p-6 text-white relative shadow-2xl">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2 text-[#FFD600]">The Story of URBAN CHEF Craftsmanship</h3>
            <p className="text-xs text-zinc-400 mb-4">
              Watch how we engineer 304 Surgical Stainless Steel into heavy-gauge tri-ply cookware.
            </p>
            <div className="aspect-video bg-zinc-950 rounded-2xl flex items-center justify-center overflow-hidden relative border border-zinc-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Urban Chef Manufacturing Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
