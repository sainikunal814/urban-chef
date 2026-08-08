import React from 'react';
import { X, Check, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  comparedProducts: Product[];
  onRemoveFromCompare: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  isOpen,
  onClose,
  comparedProducts,
  onRemoveFromCompare,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-sans">
      <div className="bg-[#242424] text-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left shadow-2xl relative border border-white/10">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <h2 className="text-xl font-extrabold text-white">Compare Cookware Specifications</h2>
            <p className="text-xs text-zinc-400">Side-by-side feature comparison for informed purchasing.</p>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {comparedProducts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-3 w-44 font-bold text-zinc-400 uppercase bg-zinc-900">Feature</th>
                  {comparedProducts.map((p) => (
                    <th key={p.id} className="p-3 min-w-52 max-w-64 align-top">
                      <div className="space-y-2">
                        <div className="flex justify-end">
                          <button 
                            onClick={() => onRemoveFromCompare(p.id)}
                            className="text-zinc-400 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <img src={p.images[0]} alt={p.name} className="w-24 h-24 object-cover rounded-xl border border-white/10 mx-auto bg-zinc-900" />
                        <h4 className="font-extrabold text-white text-xs line-clamp-2">{p.name}</h4>
                        <div className="text-sm font-black text-[#FFD600]">₹{p.price.toLocaleString('en-IN')}</div>
                        <button
                          onClick={() => onAddToCart(p)}
                          className="w-full bg-[#FFD600] text-[#3A3A3A] font-extrabold py-2 rounded-xl text-xs flex items-center justify-center gap-1 shadow hover:bg-yellow-400"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" /> Add
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-zinc-300">
                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Material Grade</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-semibold">{p.material}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Finish / Polish</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3">{p.finish}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Induction Hob Compatible</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-emerald-400">
                      {p.inductionCompatible ? '✓ 100% Yes' : '✕ Gas/Stove Only'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Dishwasher Safe</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-emerald-400">
                      {p.dishwasherSafe ? '✓ Yes' : '✕ Handwash'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Warranty</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-[#FFD600]">{p.warranty}</td>
                  ))}
                </tr>

                <tr>
                  <td className="p-3 font-bold bg-zinc-900 text-zinc-200">Rating</td>
                  {comparedProducts.map((p) => (
                    <td key={p.id} className="p-3 font-bold text-[#FFD600]">
                      ⭐ {p.rating} ({p.reviewCount} reviews)
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="py-12 text-center text-zinc-400">
            No products selected for comparison. Click the compare scale icon on product cards to add.
          </div>
        )}

      </div>
    </div>
  );
};
