import React, { useState } from 'react';
import { Play, Sparkles, Utensils, Star, Quote } from 'lucide-react';

export const CookingExperience: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-zinc-900 via-[#1F3F99] to-zinc-900 text-white relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#FFD600]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Chef Quote */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFD600] text-xs font-bold uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5" /> Endorsed by Executive Masterchefs
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans leading-tight">
              Cook Like a Master Chef in <br />
              <span className="text-[#FFD600]">Your Own Home Kitchen</span>
            </h2>

            <div className="p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 space-y-3 relative">
              <Quote className="w-10 h-10 text-[#FFD600]/30 absolute top-4 right-4" />
              <div className="flex text-amber-400 gap-1">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <p className="text-base text-zinc-100 italic leading-relaxed">
                "As a chef, temperature control is everything. Cheap utensils create hot spots that scorch milk and ruin curry gravies. Urban Chef Tri-Ply cookware holds heat so steadily that my gravies simmer to perfection without burning."
              </p>
              <div className="pt-2">
                <div className="font-bold text-white text-sm">Chef Ranveer M.</div>
                <div className="text-xs text-zinc-300">Celebrity Culinary Director & Author</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="font-bold text-[#FFD600] text-lg">0% Oil Burning</div>
                <div className="text-zinc-300">Uniform 360° heat</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                <div className="font-bold text-[#FFD600] text-lg">100% Non-Reactive</div>
                <div className="text-zinc-300">Safe for tamarind & citrus</div>
              </div>
              <div className="p-3 bg-white/5 rounded-2xl border border-white/10 col-span-2 sm:col-span-1">
                <div className="font-bold text-[#FFD600] text-lg">Zero Toxins</div>
                <div className="text-zinc-300">Lead & PFOA free</div>
              </div>
            </div>

          </div>

          {/* Right Video Thumbnail Card */}
          <div className="lg:col-span-5">
            <div 
              onClick={() => setIsVideoOpen(true)}
              className="relative group cursor-pointer aspect-video sm:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-zinc-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80" 
                alt="Chef Cooking with Urban Chef"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#FFD600] text-[#3A3A3A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-white border border-white/20">
                  Watch Masterclass Recipe Video
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-700 rounded-3xl max-w-3xl w-full p-6 text-white relative shadow-2xl">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2 text-[#FFD600]">Masterclass: Cooking with Tri-Ply Stainless Steel</h3>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Masterclass Cooking Video"
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
