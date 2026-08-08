import React from 'react';
import { Sparkles, ShieldCheck, Flame, Award, Truck, HeartHandshake } from 'lucide-react';

export const InfiniteMarquee: React.FC = () => {
  const marqueeItems = [
    { icon: ShieldCheck, text: '100% FOOD-GRADE 304 STAINLESS STEEL' },
    { icon: Flame, text: 'TRI-PLY HEAVY BOTTOM - ZERO HOTSPOTS' },
    { icon: Award, text: '10-YEAR DOORSTEP REPLACEMENT GUARANTEE' },
    { icon: Truck, text: 'FREE EXPRESS SHIPPING ACROSS 19,000+ PINCODES' },
    { icon: HeartHandshake, text: 'LOVED BY 500,000+ INDIAN HOMES' },
    { icon: Sparkles, text: 'DISHWASHER SAFE & RUST PROOF' },
  ];

  return (
    <div className="w-full bg-[#3A3A3A] text-white py-3.5 border-y border-zinc-700 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 mx-8 text-xs sm:text-sm font-bold tracking-wider uppercase">
              <Icon className="w-4 h-4 text-[#FFD600] shrink-0" />
              <span className="text-zinc-100">{item.text}</span>
              <span className="text-[#FFD600] ml-6">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
