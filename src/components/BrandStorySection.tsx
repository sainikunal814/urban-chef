import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Check, Flame, Zap, Layers } from 'lucide-react';

export const BrandStorySection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: 0,
      title: 'Layer 1: Inner SS 304 Surgical Steel (18/8)',
      tag: 'FOOD GRADE & TOXIN FREE',
      color: '#1F3F99',
      desc: 'Surgical grade 18/8 Food Grade Stainless Steel. 100% non-reactive with acidic ingredients like tamarind, tomato, or curd. Safe for health, zero leaching, and easy to clean.',
      features: ['Zero Toxin Leaching', 'Surgical Steel Cleanliness', 'Stain & Pit Resistant', 'Mirror Gloss Polish']
    },
    {
      id: 1,
      title: 'Layer 2: Pure Aluminium Core (Heavy Gauge)',
      tag: 'FAST 360° HEAT SPREAD',
      color: '#FFD600',
      desc: 'Encapsulated high thermal conductivity pure aluminium core extending from bottom to top rim. Eliminates hotspots so food never burns or sticks at the center.',
      features: ['30% Faster Cooking Time', 'Zero Hotspots Guaranteed', 'Saves Gas & Power', 'Heat Retention Up To 45 Mins']
    },
    {
      id: 2,
      title: 'Layer 3: Outer SS 430 Magnetic Steel',
      tag: '100% INDUCTION COMPATIBLE',
      color: '#3A3A3A',
      desc: 'Magnetic 430 grade outer steel designed specifically for rapid induction coil heating as well as gas stoves, halogen tops, and ceramic cooktops.',
      features: ['Universal Hob Compatible', 'High Scratch Resistance', 'Heavy Duty Base Stability', 'Mirror Sheen Outer Finish']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a] border-b border-white/10 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD600]/10 text-[#FFD600] font-bold text-xs uppercase tracking-wider mb-3 border border-[#FFD600]/20">
            <Layers className="w-4 h-4 text-[#FFD600]" /> Engineering Excellence
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            The Science Behind <span className="text-[#FFD600]">Tri-Ply Cookware</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Traditional steel has poor heat distribution. Urban Chef seals three distinct metal layers to create the ultimate indestructible cooking surface.
          </p>
        </div>

        {/* Interactive 3-Layer Sandwich Explainer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#242424] rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10">
          
          {/* Left Diagram Visualizer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl bg-zinc-900 p-6 flex flex-col justify-center items-center text-white overflow-hidden shadow-inner border border-white/10">
              
              {/* Animated Sandwich Layer Graphic */}
              <div className="w-full max-w-md space-y-3 relative z-10">
                {layers.map((layer, idx) => (
                  <motion.button
                    key={layer.id}
                    onClick={() => setActiveLayer(idx)}
                    whileHover={{ scale: 1.02 }}
                    className={`w-full p-4 rounded-xl border transition-all text-left flex items-center justify-between ${
                      activeLayer === idx 
                        ? 'bg-[#FFD600] text-[#3A3A3A] border-[#FFD600] shadow-lg font-extrabold' 
                        : 'bg-zinc-800/80 text-zinc-300 border-white/10 hover:bg-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full border border-black/20" 
                        style={{ backgroundColor: idx === 1 ? '#FFD600' : idx === 0 ? '#1F3F99' : '#3A3A3A' }} 
                      />
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider">{layer.tag}</div>
                        <div className="text-sm font-extrabold">{layer.title.split(':')[1]}</div>
                      </div>
                    </div>
                    {activeLayer === idx && (
                      <span className="text-xs font-black text-[#3A3A3A] bg-black/10 px-2 py-1 rounded">Active Layer</span>
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Heat flow lines */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-6 text-[#FFD600] opacity-80 animate-pulse text-xs font-mono">
                <span>🔥 EVEN HEAT FLOW</span>
                <span>⚡ ZERO HOTSPOTS</span>
              </div>
            </div>
          </div>

          {/* Right Explanation Panel */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block px-3 py-1 rounded-md bg-[#FFD600] text-[#3A3A3A] font-extrabold text-xs uppercase">
              {layers[activeLayer].tag}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {layers[activeLayer].title}
            </h3>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              {layers[activeLayer].desc}
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {layers[activeLayer].features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom summary stats */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-xl font-black text-[#FFD600]">2.5mm</div>
                <div className="text-[11px] text-zinc-400 font-medium">Body Thickness</div>
              </div>
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-xl font-black text-[#FFD600]">30%</div>
                <div className="text-[11px] text-zinc-400 font-medium">Fuel Saved</div>
              </div>
              <div className="p-3 bg-zinc-900 rounded-xl border border-white/5">
                <div className="text-xl font-black text-[#FFD600]">10 Yrs</div>
                <div className="text-[11px] text-zinc-400 font-medium">Guarantee</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
