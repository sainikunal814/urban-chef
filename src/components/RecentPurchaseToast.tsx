import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface RecentPurchaseToastProps {
  onSelectProduct: (product: Product) => void;
}

export const RecentPurchaseToast: React.FC<RecentPurchaseToastProps> = ({ onSelectProduct }) => {
  const [visible, setVisible] = useState(false);
  const [purchaseIndex, setPurchaseIndex] = useState(0);

  const purchases = [
    { name: 'Meera K.', city: 'Mumbai', product: PRODUCTS[0], time: '2 mins ago' },
    { name: 'Rohan Sharma', city: 'Bengaluru', product: PRODUCTS[1], time: '5 mins ago' },
    { name: 'Ankita Verma', city: 'Delhi NCR', product: PRODUCTS[2], time: '8 mins ago' },
    { name: 'Dr. Subramanian', city: 'Chennai', product: PRODUCTS[4], time: '12 mins ago' },
    { name: 'Sanjay Deshmukh', city: 'Pune', product: PRODUCTS[3], time: '15 mins ago' },
  ];

  useEffect(() => {
    // Show toast periodically every 12 seconds
    const interval = setInterval(() => {
      setPurchaseIndex((prev) => (prev + 1) % purchases.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }, 14000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const current = purchases[purchaseIndex];

  return (
    <div 
      onClick={() => onSelectProduct(current.product)}
      className="fixed bottom-16 sm:bottom-6 left-4 z-40 max-w-xs sm:max-w-sm bg-[#242424] text-white border border-white/10 shadow-2xl rounded-2xl p-3 flex items-center gap-3 cursor-pointer hover:border-[#FFD600] transition-all duration-300 animate-in slide-in-from-bottom-5 font-sans"
    >
      <img 
        src={current.product.images[0]} 
        alt={current.product.name}
        className="w-12 h-12 object-cover rounded-xl border border-white/10 shrink-0 bg-zinc-900"
      />

      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center justify-between text-[10px] text-zinc-400">
          <span className="font-bold text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Just Purchased
          </span>
          <span>{current.time}</span>
        </div>
        <p className="text-xs font-extrabold text-white truncate mt-0.5">
          {current.name} in <span className="text-[#FFD600]">{current.city}</span>
        </p>
        <p className="text-[11px] text-zinc-300 truncate">{current.product.name}</p>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          setVisible(false);
        }}
        className="text-zinc-400 hover:text-white p-1 shrink-0"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
