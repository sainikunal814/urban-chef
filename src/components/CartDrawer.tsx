import React, { useState } from 'react';
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  Tag, 
  Truck, 
  ShieldCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { CartItem, Coupon } from '../types';
import { COUPONS } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string | undefined, delta: number) => void;
  onRemoveItem: (productId: string, variantId: string | undefined) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [couponError, setCouponError] = useState('');

  if (!isOpen) return null;

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => {
    const itemPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  // Discount calculation
  let discountAmount = 0;
  if (appliedCoupon) {
    const calc = Math.round((subtotal * appliedCoupon.discountPercent) / 100);
    discountAmount = Math.min(calc, appliedCoupon.maxDiscount);
  }

  // Free shipping threshold (₹999)
  const freeShippingThreshold = 999;
  const freeShippingRemaining = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const grandTotal = Math.max(0, subtotal - discountAmount);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const found = COUPONS.find(c => c.code.toUpperCase() === couponCode.trim().toUpperCase());
    if (found) {
      if (subtotal < found.minSpend) {
        setCouponError(`Minimum spend of ₹${found.minSpend} required for code ${found.code}`);
      } else {
        setAppliedCoupon(found);
        setCouponCode('');
      }
    } else {
      setCouponError('Invalid coupon code. Try URBAN200');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#242424] text-white shadow-2xl flex flex-col justify-between border-l border-white/10">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 bg-zinc-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-[#FFD600] text-[#3A3A3A] rounded-xl shadow font-bold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-white">Your Shopping Cart</h2>
                <p className="text-xs text-zinc-400">{cartItems.length} Cookware items selected</p>
              </div>
            </div>

            <button 
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-5 py-3 bg-[#3A3A3A] border-b border-white/10 text-xs">
            <div className="flex items-center justify-between font-bold text-white mb-1">
              <span className="flex items-center gap-1.5 text-white">
                <Truck className="w-4 h-4 text-[#FFD600]" />
                {freeShippingRemaining === 0 ? (
                  <span className="text-emerald-400">🎉 Congratulations! Free Express Shipping Unlocked!</span>
                ) : (
                  <span>Add ₹{freeShippingRemaining.toLocaleString('en-IN')} more for Free Delivery</span>
                )}
              </span>
              <span className="text-[#FFD600]">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#FFD600] transition-all duration-500 rounded-full" 
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-white/10">
            {cartItems.length > 0 ? (
              cartItems.map((item, idx) => {
                const currentPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
                return (
                  <div key={idx} className="pt-4 first:pt-0 flex gap-4 text-left">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name} 
                      className="w-20 h-20 object-cover rounded-xl border border-white/10 shrink-0 bg-zinc-900"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-bold text-white line-clamp-2 leading-tight">
                            {item.product.name}
                          </h4>
                          <button 
                            onClick={() => onRemoveItem(item.product.id, item.selectedVariant?.id)}
                            className="text-zinc-400 hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        {item.selectedVariant && (
                          <div className="text-[11px] text-[#FFD600] font-semibold mt-0.5">
                            Capacity: {item.selectedVariant.capacityOrSize}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity Buttons */}
                        <div className="flex items-center border border-white/20 rounded-lg overflow-hidden bg-zinc-900">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant?.id, -1)}
                            className="p-1 px-2 hover:bg-white/10 text-zinc-300 font-bold"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-extrabold text-white">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedVariant?.id, 1)}
                            className="p-1 px-2 hover:bg-white/10 text-zinc-300 font-bold"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right">
                          <div className="text-sm font-extrabold text-[#FFD600]">
                            ₹{(currentPrice * item.quantity).toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-16 text-center text-zinc-400 space-y-3">
                <ShoppingBag className="w-16 h-16 mx-auto text-zinc-600" />
                <p className="text-sm font-bold text-zinc-200">Your cart is currently empty</p>
                <p className="text-xs text-zinc-400">Discover tri-ply stainless steel cookers & kadais to start shopping!</p>
                <button 
                  onClick={onClose}
                  className="bg-[#FFD600] text-[#3A3A3A] font-extrabold px-6 py-2.5 rounded-full text-xs shadow"
                >
                  Explore Collections
                </button>
              </div>
            )}
          </div>

          {/* Coupon & Summary Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-zinc-900 space-y-4">
              
              {/* Coupon Form */}
              {appliedCoupon ? (
                <div className="p-2.5 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-xs flex items-center justify-between text-emerald-300">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-emerald-400" />
                    <span>Coupon <strong>{appliedCoupon.code}</strong> Applied (₹{discountAmount} OFF)</span>
                  </div>
                  <button 
                    onClick={() => setAppliedCoupon(null)}
                    className="text-emerald-400 hover:underline font-bold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      placeholder="Enter Coupon (e.g. URBAN200)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 bg-[#242424] border border-white/10 rounded-xl text-xs uppercase font-semibold text-white placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#FFD600]"
                    />
                    <Tag className="w-3.5 h-3.5 text-zinc-400 absolute left-2.5 top-2.5" />
                  </div>
                  <button 
                    type="submit"
                    className="bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] px-4 py-2 rounded-xl text-xs font-black transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponError && (
                <div className="text-[11px] text-red-400 font-bold">{couponError}</div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-300">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)} items)</span>
                  <span className="font-bold text-white">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Discount Code Savings</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping & Handling</span>
                  <span className="font-bold text-emerald-400">
                    {freeShippingRemaining === 0 ? 'FREE' : '₹99'}
                  </span>
                </div>

                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-white/10">
                  <span>Grand Total</span>
                  <span className="text-[#FFD600]">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-black py-3.5 rounded-2xl text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-zinc-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit Encrypted Secure Checkout • 10-Yr Warranty</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
