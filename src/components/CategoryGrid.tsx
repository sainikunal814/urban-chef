import React from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CategoryGridProps {
  onSelectCategory: (catId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const displayCategories = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD600]" /> Curated Kitchen Collections
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
              Explore Our Stainless Steel Range
            </h2>
          </div>
          <button 
            onClick={() => onSelectCategory('all')}
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#FFD600] hover:text-yellow-300 transition-colors"
          >
            <span>View All Categories ({displayCategories.reduce((acc, c) => acc + c.count, 0)}+ Items)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#242424] border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#FFD600]/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Category Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>

              {/* Category Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase bg-[#FFD600] text-[#3A3A3A] px-2 py-0.5 rounded-full shadow-sm">
                    {category.count} Products
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold group-hover:text-[#FFD600] transition-colors leading-tight">
                  {category.name}
                </h3>
                <p className="text-[11px] text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 mt-1 font-semibold">
                  <span>Shop Collection</span> &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
