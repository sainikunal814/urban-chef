import React, { useState } from 'react';
import { 
  Heart, 
  Eye, 
  Scale, 
  ShoppingBag, 
  Star, 
  Flame, 
  CheckCircle2, 
  Clock,
  Sparkles
} from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isWishlisted: boolean;
  isCompared: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted,
  isCompared,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="group relative bg-[#242424] rounded-2xl border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#FFD600]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden text-white">
      
      {/* Upper Badges & Quick Action Buttons */}
      <div className="relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {product.discountPercentage > 0 && (
            <span className="bg-red-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
              {product.discountPercentage}% OFF
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-[#FFD600] text-[#3A3A3A] font-extrabold text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Flame className="w-3 h-3 fill-current" /> Best Seller
            </span>
          )}
          {product.isDealOfDay && (
            <span className="bg-[#1F3F99] text-white font-bold text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#FFD600]" /> Deal of the Day
            </span>
          )}
        </div>

        {/* Quick Action Floating Buttons (Wishlist, Compare, Quick View) */}
        <div className="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md shadow-md transition-all ${
              isWishlisted 
                ? 'bg-red-500 text-white' 
                : 'bg-black/60 text-zinc-200 hover:text-red-400 hover:bg-black/80 border border-white/20'
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(product);
            }}
            className={`p-2 rounded-full backdrop-blur-md shadow-md transition-all ${
              isCompared 
                ? 'bg-[#1F3F99] text-white' 
                : 'bg-black/60 text-zinc-200 hover:text-[#FFD600] hover:bg-black/80 border border-white/20'
            }`}
            title="Compare Product"
          >
            <Scale className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 bg-black/60 hover:bg-black/90 text-zinc-200 hover:text-white rounded-full backdrop-blur-md shadow-md border border-white/20 transition-all"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.images[activeImageIndex] || product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Thumbnail Dots on Hover */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeImageIndex === idx ? 'bg-[#FFD600] w-4' : 'bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Info & Actions */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 gap-3 text-left">
        
        <div>
          {/* Material & Rating */}
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider line-clamp-1">
              {product.material.split(' ')[0]} {product.material.split(' ')[1]}
            </span>
            <div className="flex items-center gap-1 text-amber-400 font-bold bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating}</span>
              <span className="text-[10px] text-zinc-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="text-sm sm:text-base font-extrabold text-white group-hover:text-[#FFD600] transition-colors cursor-pointer line-clamp-2 leading-snug"
          >
            {product.name}
          </h3>

          <p className="text-xs text-zinc-400 mt-1 line-clamp-1">{product.subtitle}</p>
        </div>

        {/* Capacity / Size Variants pill list */}
        {product.variants.length > 0 && (
          <div className="flex flex-wrap gap-1 text-[10px]">
            {product.variants.map((v) => (
              <span key={v.id} className="bg-white/5 text-zinc-300 px-2 py-0.5 rounded font-medium border border-white/10">
                {v.capacityOrSize}
              </span>
            ))}
          </div>
        )}

        {/* Price & Add To Cart Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-lg font-black text-[#FFD600]">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs line-through text-zinc-500">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            </div>
            {product.stockCount < 10 && (
              <div className="text-[10px] text-amber-400 font-bold">
                Only {product.stockCount} left in stock
              </div>
            )}
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] p-2.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-black transition-all duration-300 flex items-center gap-1.5 shadow-md active:scale-95 shrink-0"
          >
            <ShoppingBag className="w-4 h-4 text-[#3A3A3A]" />
            <span className="hidden sm:inline">Add To Cart</span>
          </button>
        </div>

      </div>

    </div>
  );
};
