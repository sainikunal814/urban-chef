import React, { useState } from 'react';
import { RECIPES, PRODUCTS } from '../data/products';
import { RecipeArticle, Product } from '../types';
import { BookOpen, Clock, User, ChefHat, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface RecipeBlogSectionProps {
  onSelectProductById: (productId: string) => void;
}

export const RecipeBlogSection: React.FC<RecipeBlogSectionProps> = ({ onSelectProductById }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeArticle | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4 text-[#FFD600]" /> Culinary Journal & Tips
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Recipe Hacks & Care Guides
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Master authentic Indian cooking with expert tips from leading culinary directors.
            </p>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {RECIPES.map((recipe) => (
            <div 
              key={recipe.id}
              className="bg-[#242424] rounded-3xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#FFD600]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-zinc-900">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#FFD600] text-[#3A3A3A] font-extrabold text-[11px] px-3 py-1 rounded-full uppercase shadow">
                  {recipe.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-4 text-xs text-zinc-400 font-medium">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-zinc-400" /> {recipe.readTime}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-zinc-400" /> {recipe.author}</span>
                </div>

                <h3 className="text-xl font-extrabold text-white leading-snug">
                  {recipe.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                  {recipe.excerpt}
                </p>

                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-zinc-200 flex items-center justify-between">
                  <span className="font-semibold text-zinc-200">Cookware: <strong className="text-[#FFD600]">{recipe.utensilUsed}</strong></span>
                  <button 
                    onClick={() => onSelectProductById(recipe.utensilProductId)}
                    className="text-[11px] font-bold text-[#FFD600] underline hover:text-yellow-300"
                  >
                    View Utensil &rarr;
                  </button>
                </div>

                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3 rounded-2xl text-xs transition-colors flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <span>Read Full Recipe & Guide</span>
                  <ArrowRight className="w-4 h-4 text-[#3A3A3A]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Recipe Full Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#242424] text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left shadow-2xl relative border border-white/10">
            <button 
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 p-2 rounded-full text-sm font-bold border border-white/10"
            >
              ✕
            </button>

            <span className="text-xs font-bold text-[#FFD600] uppercase tracking-wider bg-[#FFD600]/10 px-3 py-1 rounded-full border border-[#FFD600]/20">
              {selectedRecipe.category}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-2">
              {selectedRecipe.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-zinc-400 mb-6">
              <span>By {selectedRecipe.author} ({selectedRecipe.authorRole})</span>
              <span>•</span>
              <span>Prep Time: {selectedRecipe.prepTime}</span>
            </div>

            <img 
              src={selectedRecipe.image} 
              alt={selectedRecipe.title}
              className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md border border-white/10"
            />

            {/* Ingredients */}
            {selectedRecipe.ingredients.length > 0 && (
              <div className="mb-6 space-y-2">
                <h4 className="text-sm font-bold text-[#FFD600] uppercase tracking-wider">Key Ingredients</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2 bg-zinc-800/80 p-2 rounded-lg border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preparation Steps */}
            <div className="mb-6 space-y-3">
              <h4 className="text-sm font-bold text-[#FFD600] uppercase tracking-wider">Step-by-Step Instructions</h4>
              <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                {selectedRecipe.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 bg-zinc-800/80 p-3 rounded-xl border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#FFD600] text-[#3A3A3A] text-xs font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Chef Tips */}
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs text-zinc-200 space-y-1">
              <div className="font-bold text-[#FFD600] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FFD600]" /> Pro Chef Tip
              </div>
              {selectedRecipe.tips.map((tip, i) => (
                <p key={i} className="text-zinc-300">{tip}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-bold text-zinc-400">Cookware: {selectedRecipe.utensilUsed}</span>
              <button
                onClick={() => {
                  const id = selectedRecipe.utensilProductId;
                  setSelectedRecipe(null);
                  onSelectProductById(id);
                }}
                className="bg-[#FFD600] text-[#3A3A3A] font-extrabold px-5 py-2.5 rounded-xl text-xs shadow hover:bg-yellow-400"
              >
                Shop This Cookware &rarr;
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
