import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw, Sparkles, Shield, CheckCircle2, Layers, Info } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface Interactive360ShowcaseProps {
  onSelectProduct: (product: Product) => void;
}

export const Interactive360Showcase: React.FC<Interactive360ShowcaseProps> = ({ onSelectProduct }) => {
  const showcaseProduct = PRODUCTS[0]; // Royal Tri-Ply Kadai
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('layer304');

  const hotspots = [
    {
      id: 'layer304',
      name: '304 Surgical Grade Steel Interior',
      desc: '100% Food Safe, Lead Free & Chemical Free. Non-reactive with acidic foods like tamarind & curd.',
      x: '30%',
      y: '45%'
    },
    {
      id: 'handle',
      name: 'Riveted Die-Cast Stay-Cool Handles',
      desc: 'Double riveted stainless steel handles engineered with heat barrier gaps to remain comfortable on high gas flame.',
      x: '82%',
      y: '35%'
    },
    {
      id: 'base',
      name: 'Induction Compatible Sandwich Base',
      desc: 'Magnetic SS430 outer base layer works seamlessly on Gas Stoves, Induction, Electric Coils, and Halogen hobs.',
      x: '50%',
      y: '80%'
    },
    {
      id: 'lid',
      name: 'Toughened Steam Vented Glass Lid',
      desc: '4mm heavy borosilicate glass lid with stainless rim and steam escape hole prevents boiling overflow.',
      x: '50%',
      y: '20%'
    }
  ];

  // Rotate images simulation using array index modulo
  const images = showcaseProduct.threeSixtyImages || showcaseProduct.images;
  const currentImageIndex = Math.floor((rotationAngle / 360) * images.length) % images.length;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-zinc-900 to-[#1A1A1A] text-white border-b border-zinc-800 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD600] text-xs font-bold uppercase tracking-wider mb-3">
            <RotateCw className="w-3.5 h-3.5 animate-spin" /> Interactive 360° Inspection
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Inspect Every Angle of <span className="text-[#FFD600]">Urban Chef Craft</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Rotate and click the hotspots below to inspect the precision craftsmanship of our flagship Tri-Ply Stainless Steel Kadai.
          </p>
        </div>

        {/* Interactive 360 Viewer Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-800/80 rounded-3xl p-6 sm:p-10 border border-zinc-700 shadow-2xl backdrop-blur-md">
          
          {/* Left 360 Viewer Box */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center relative">
            
            {/* Viewer Stage */}
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-700/80 p-6 flex items-center justify-center overflow-hidden shadow-inner select-none">
              
              {/* Product Image */}
              <img 
                src={images[currentImageIndex]} 
                alt="360 Cookware View" 
                className="w-full h-full object-cover rounded-xl transition-all duration-300 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
              />

              {/* Hotspots overlay */}
              {hotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setActiveHotspot(hs.id)}
                  style={{ left: hs.x, top: hs.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md border transition-all duration-300 flex items-center justify-center group ${
                    activeHotspot === hs.id 
                      ? 'bg-[#FFD600] text-[#3A3A3A] border-white scale-125 z-30 shadow-[0_0_20px_#FFD600]' 
                      : 'bg-white/20 text-white border-white/40 hover:bg-white hover:text-black z-20'
                  }`}
                  title={hs.name}
                >
                  <span className="w-3 h-3 rounded-full bg-current animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-current relative z-10" />
                </button>
              ))}

              {/* Rotation Badge overlay */}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-zinc-300 border border-white/10 flex items-center gap-1.5">
                <RotateCw className="w-3 h-3 text-[#FFD600]" /> 
                <span>Angle: {rotationAngle}°</span>
              </div>
            </div>

            {/* Rotation Slider Control */}
            <div className="w-full max-w-md mt-6 space-y-2">
              <div className="flex justify-between text-xs text-zinc-400 font-semibold">
                <span>0° Front</span>
                <span className="text-[#FFD600]">Drag slider to rotate cookware</span>
                <span>360° Full View</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="360" 
                value={rotationAngle}
                onChange={(e) => setRotationAngle(Number(e.target.value))}
                className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-[#FFD600]"
              />
            </div>

          </div>

          {/* Right Hotspot Detail Explanation */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="text-xs font-bold text-[#FFD600] uppercase tracking-wider flex items-center gap-1.5">
              <Info className="w-4 h-4" /> Feature Inspection
            </div>

            {activeHotspot ? (
              <div className="space-y-4 p-6 bg-zinc-900 rounded-2xl border border-zinc-700 shadow-xl">
                <h3 className="text-xl font-bold text-white">
                  {hotspots.find(h => h.id === activeHotspot)?.name}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {hotspots.find(h => h.id === activeHotspot)?.desc}
                </p>
                <div className="pt-3 border-t border-zinc-800 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Passed ISO 9001 Metallurgy Quality Test
                </div>
              </div>
            ) : (
              <p className="text-sm text-zinc-400">Click any hotspot on the cookware image to inspect features.</p>
            )}

            {/* Quick Specs summary list */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                Full Specification Highlights
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
                <div className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                  <span className="text-zinc-500 block">Grade</span>
                  <span className="font-bold text-white">SS 304 Surgical</span>
                </div>
                <div className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                  <span className="text-zinc-500 block">Thickness</span>
                  <span className="font-bold text-white">2.5mm Tri-Ply</span>
                </div>
                <div className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                  <span className="text-zinc-500 block">Gas & Induction</span>
                  <span className="font-bold text-emerald-400">100% Compatible</span>
                </div>
                <div className="p-2.5 bg-zinc-900/60 rounded-xl border border-zinc-800">
                  <span className="text-zinc-500 block">Warranty</span>
                  <span className="font-bold text-[#FFD600]">10 Years</span>
                </div>
              </div>
            </div>

            {/* CTA to Product */}
            <button
              onClick={() => onSelectProduct(showcaseProduct)}
              className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-lg active:scale-95"
            >
              Configure & Buy This Kadai &rarr;
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
