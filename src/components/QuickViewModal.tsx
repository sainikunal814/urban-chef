import React, { useState } from 'react';
import { 
  X, 
  Star, 
  ShoppingBag, 
  ShieldCheck, 
  Flame, 
  RotateCw, 
  Check, 
  Heart, 
  Scale 
} from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { PincodeChecker } from './PincodeChecker';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, selectedVariant?: ProductVariant) => void;
  onToggleWishlist: (product: Product) => void;
  onToggleCompare: (product: Product) => void;
  isWishlisted: boolean;
  isCompared: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  onToggleCompare,
  isWishlisted,
  isCompared,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants[0]
  );

  const displayPrice = selectedVariant ? selectedVariant.price : product.price;
  const displayOrigPrice = selectedVariant ? selectedVariant.originalPrice : product.originalPrice;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-sans">
      <div className="bg-[#242424] text-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 text-left shadow-2xl relative border border-white/10 overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white p-2 rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Gallery */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden">
              <img 
                src={product.images[activeImage] || product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.discountPercentage > 0 && (
                <span className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-16 h-16 rounded-xl border-2 overflow-hidden shrink-0 ${
                      activeImage === idx ? 'border-[#FFD600]' : 'border-white/10'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Details */}
          <div className="md:col-span-6 space-y-4">
            
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#FFD600] text-[#3A3A3A] font-extrabold text-[10px] px-2 py-0.5 rounded">
                  {product.category}
                </span>
                <span className="text-xs text-zinc-500">•</span>
                <span className="text-xs text-zinc-400 font-semibold">{product.material}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {product.name}
              </h2>
              <p className="text-xs text-zinc-400 mt-1">{product.subtitle}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2 text-xs">
                <div className="flex text-[#FFD600]">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-white">{product.rating}</span>
                <span className="text-zinc-400">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="p-3 bg-zinc-900 rounded-2xl border border-white/10 flex items-baseline gap-3">
              <span className="text-2xl font-black text-[#FFD600]">
                ₹{displayPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-sm line-through text-zinc-500">
                ₹{displayOrigPrice.toLocaleString('en-IN')}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                Inclusive of all taxes & Free Shipping
              </span>
            </div>

            {/* Variants Picker */}
            {product.variants.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-bold text-zinc-300">
                  Select Size / Capacity: <span className="text-[#FFD600]">{selectedVariant?.name}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
                        selectedVariant?.id === v.id
                          ? 'bg-[#FFD600] text-[#3A3A3A] border-[#FFD600] shadow font-extrabold'
                          : 'bg-zinc-900 text-zinc-300 border-white/10 hover:border-white/30'
                      }`}
                    >
                      {v.capacityOrSize}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pincode Checker */}
            <PincodeChecker />

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  onAddToCart(product, selectedVariant);
                  onClose();
                }}
                className="flex-1 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3.5 px-6 rounded-2xl text-sm transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add To Cart</span>
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`p-3.5 rounded-2xl border transition-colors ${
                  isWishlisted 
                    ? 'bg-red-500 text-white border-red-500' 
                    : 'bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800'
                }`}
                title="Wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => onToggleCompare(product)}
                className={`p-3.5 rounded-2xl border transition-colors ${
                  isCompared 
                    ? 'bg-[#FFD600] text-[#3A3A3A] border-[#FFD600]' 
                    : 'bg-zinc-900 text-zinc-300 border-white/10 hover:bg-zinc-800'
                }`}
                title="Compare"
              >
                <Scale className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-zinc-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{product.warranty} • 100% Food Grade Surgical Steel</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
