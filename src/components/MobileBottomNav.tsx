import React from 'react';
import { Home, Grid, Heart, ShoppingBag, User } from 'lucide-react';
import { ViewMode } from '../types';

interface MobileBottomNavProps {
  currentView: ViewMode;
  setCurrentView: (view: ViewMode) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  setCurrentView,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-zinc-200 py-2 px-4 shadow-lg">
      <div className="flex items-center justify-around">
        <button
          onClick={() => { setCurrentView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className={`flex flex-col items-center gap-1 ${
            currentView === 'home' ? 'text-[#1F3F99] font-bold' : 'text-zinc-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Home</span>
        </button>

        <button
          onClick={() => setCurrentView('shop')}
          className={`flex flex-col items-center gap-1 ${
            currentView === 'shop' ? 'text-[#1F3F99] font-bold' : 'text-zinc-500'
          }`}
        >
          <Grid className="w-5 h-5" />
          <span className="text-[10px]">Shop</span>
        </button>

        <button
          onClick={onOpenWishlist}
          className="flex flex-col items-center gap-1 text-zinc-500 relative"
        >
          <Heart className="w-5 h-5" />
          <span className="text-[10px]">Wishlist</span>
          {wishlistCount > 0 && (
            <span className="absolute -top-1 right-2 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>

        <button
          onClick={onOpenCart}
          className="flex flex-col items-center gap-1 text-zinc-800 relative font-bold"
        >
          <div className="p-1.5 bg-[#3A3A3A] text-[#FFD600] rounded-full shadow-md">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span className="text-[10px]">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-2 bg-[#FFD600] text-[#3A3A3A] text-[9px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center border border-[#3A3A3A]">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
