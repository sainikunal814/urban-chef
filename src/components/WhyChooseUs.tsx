import React from 'react';
import { ShieldCheck, Flame, Zap, Award, Sparkles, RefreshCw, ThumbsUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Flame,
      title: 'Tri-Ply Sandwich Base',
      desc: 'Encapsulated aluminium core eliminates hotspots. Food cooks evenly without sticking or scorching.'
    },
    {
      icon: ShieldCheck,
      title: '304 Surgical Food-Grade Steel',
      desc: '100% Toxin, Lead, & PFOA free. Zero chemical reaction with acidic curries, tomatoes, or curd.'
    },
    {
      icon: Zap,
      title: 'Saves 30% Gas & Power',
      desc: 'Rapid heat absorption and 45-minute heat retention keeps meals warm longer and lowers energy bills.'
    },
    {
      icon: ThumbsUp,
      title: 'Cool-Touch Cast Handles',
      desc: 'Ergonomic die-cast handles double-riveted to the body so they never wobble or burn your fingers.'
    },
    {
      icon: Sparkles,
      title: 'Mirror Sheen Finish',
      desc: 'High gloss stain-resistant exterior that cleans in seconds and resists pit corrosion forever.'
    },
    {
      icon: RefreshCw,
      title: '10-Year Doorstep Guarantee',
      desc: 'Hassle-free replacement guarantee. If anything degrades structurally, we swap it at your doorstep.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-zinc-900 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD600]/10 text-[#FFD600] font-bold text-xs uppercase tracking-wider mb-3 border border-[#FFD600]/20">
            <Award className="w-4 h-4 text-[#FFD600]" /> The Urban Chef Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
            Why Indian Kitchens Trust <span className="text-[#FFD600]">URBAN CHEF</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-base sm:text-lg">
            Engineered to outperform traditional non-stick pans and cheap single-ply steel utensils.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="group p-8 rounded-3xl bg-[#242424] border border-white/10 hover:border-[#FFD600]/50 hover:shadow-2xl transition-all duration-300 text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#FFD600] text-[#3A3A3A] group-hover:bg-yellow-400 flex items-center justify-center mb-6 shadow-md transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white group-hover:text-[#FFD600] transition-colors mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs font-bold text-[#FFD600]">
                  <span>Certified Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
