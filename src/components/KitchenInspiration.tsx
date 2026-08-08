import React from 'react';
import { Instagram, ShoppingBag, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { KADAI_IMG_1, DINNERSET_IMG_1, BOTTLE_IMG_1 } from '../data/productImages';

interface KitchenInspirationProps {
  onSelectProduct: (product: Product) => void;
}

export const KitchenInspiration: React.FC<KitchenInspirationProps> = ({ onSelectProduct }) => {
  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      tag: '#UrbanChefHome',
      title: 'Modern Modular Kitchen Setup',
      product: PRODUCTS[0]
    },
    {
      image: KADAI_IMG_1,
      tag: '#TriPlyMastery',
      title: 'Royal Tri-Ply Stainless Steel Heavy Kadai',
      product: PRODUCTS[0]
    },
    {
      image: DINNERSET_IMG_1,
      tag: '#FestiveThali',
      title: '51-Piece Laser Engraved Dinner Set',
      product: PRODUCTS[4]
    },
    {
      image: BOTTLE_IMG_1,
      tag: '#WorkFromHome',
      title: 'Hydro-Shield Flask on Desk',
      product: PRODUCTS[6]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a] border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] uppercase tracking-wider mb-2">
            <Instagram className="w-4 h-4 text-pink-400" /> @urbanchefindia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Kitchen Inspiration Gallery
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Tag us in your food photos <strong className="text-[#FFD600]">#UrbanChefKitchen</strong> to be featured on our official store!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onSelectProduct(item.product)}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-white/10"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex flex-col justify-end text-left">
                <span className="text-[10px] font-bold text-[#FFD600] uppercase tracking-wider mb-1">
                  {item.tag}
                </span>
                <h4 className="font-bold text-sm text-white mb-2">{item.title}</h4>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FFD600] text-[#3A3A3A] px-3 py-1.5 rounded-full self-start shadow-md group-hover:bg-yellow-400 transition-colors">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Shop This Look</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
