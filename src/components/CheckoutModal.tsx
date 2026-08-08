import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  CreditCard, 
  QrCode, 
  Truck, 
  Lock, 
  ArrowRight,
  Download,
  ShoppingBag
} from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onOrderSuccess,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'card'>('upi');
  const [orderId, setOrderId] = useState('');
  
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    pincode: '',
    address: '',
    city: '',
    state: 'Maharashtra',
  });

  const subtotal = cartItems.reduce((acc, item) => {
    const itemPrice = item.selectedVariant ? item.selectedVariant.price : item.product.price;
    return acc + itemPrice * item.quantity;
  }, 0);

  const grandTotal = subtotal;

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'UC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep('success');

    // Trigger celebratory confetti burst!
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti effect');
    }

    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 font-sans">
      <div className="bg-[#242424] text-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-left shadow-2xl relative border border-white/10">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#FFD600] text-[#3A3A3A] rounded-xl font-bold">🛒</span>
            <div>
              <h2 className="text-xl font-extrabold text-white">
                {step === 'success' ? 'Order Confirmed!' : 'Express Checkout'}
              </h2>
              <p className="text-xs text-zinc-400">
                {step === 'details' && 'Step 1 of 2: Delivery Shipping Address'}
                {step === 'payment' && 'Step 2 of 2: Payment Method Selection'}
                {step === 'success' && `Order ID: ${orderId}`}
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Address Details */}
        {step === 'details' && (
          <form onSubmit={handleDetailsSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-zinc-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g. Priyesh Patel"
                  className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                />
              </div>

              <div>
                <label className="block font-bold text-zinc-300 mb-1">Mobile Number (For Delivery SMS)</label>
                <input 
                  type="tel" 
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="e.g. 9820012345"
                  className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-zinc-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. priyesh@gmail.com"
                  className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                />
              </div>

              <div>
                <label className="block font-bold text-zinc-300 mb-1">Delivery Pincode</label>
                <input 
                  type="text" 
                  required
                  maxLength={6}
                  value={form.pincode}
                  onChange={(e) => setForm({ ...form, pincode: e.target.value })}
                  placeholder="e.g. 400001"
                  className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-zinc-300 mb-1">Street Address / House No. / Landmark</label>
              <textarea 
                rows={2}
                required
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Flat 402, Lotus Heights, Park Street..."
                className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
              />
            </div>

            <div className="p-3 bg-zinc-900 rounded-xl border border-white/10 flex justify-between items-center font-bold text-white">
              <span>Order Amount to Pay:</span>
              <span className="text-[#FFD600] text-base font-black">₹{grandTotal.toLocaleString('en-IN')}</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3.5 rounded-2xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Continue to Payment &rarr;</span>
            </button>
          </form>
        )}

        {/* Step 2: Payment Selection */}
        {step === 'payment' && (
          <form onSubmit={handlePaymentSubmit} className="space-y-4 text-xs">
            <div className="space-y-2">
              <label className="block font-bold text-zinc-300">Select Payment Gateway</label>
              
              {/* UPI Option */}
              <div 
                onClick={() => setPaymentMethod('upi')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'upi' ? 'bg-[#FFD600]/10 border-[#FFD600] ring-2 ring-[#FFD600]' : 'bg-zinc-900 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <QrCode className="w-5 h-5 text-[#FFD600]" />
                  <div>
                    <div className="font-extrabold text-white">Instant UPI (GPay / PhonePe / Paytm / BHIM)</div>
                    <div className="text-[10px] text-zinc-400">Fastest checkout • Flat ₹50 instant cashback</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'upi'} readOnly />
              </div>

              {/* COD Option */}
              <div 
                onClick={() => setPaymentMethod('cod')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'cod' ? 'bg-[#FFD600]/10 border-[#FFD600] ring-2 ring-[#FFD600]' : 'bg-zinc-900 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="font-extrabold text-white">Cash on Delivery (COD)</div>
                    <div className="text-[10px] text-zinc-400">Pay cash/UPI to delivery executive at your doorstep</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'cod'} readOnly />
              </div>

              {/* Card Option */}
              <div 
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'card' ? 'bg-[#FFD600]/10 border-[#FFD600] ring-2 ring-[#FFD600]' : 'bg-zinc-900 border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-white" />
                  <div>
                    <div className="font-extrabold text-white">Credit / Debit Card / NetBanking</div>
                    <div className="text-[10px] text-zinc-400">All major Indian banks & RuPay cards accepted</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'card'} readOnly />
              </div>
            </div>

            <div className="p-4 bg-zinc-900 text-white rounded-2xl space-y-1 border border-white/10">
              <div className="flex justify-between text-xs">
                <span>Shipping to:</span>
                <span className="font-bold text-[#FFD600]">{form.fullName} ({form.pincode})</span>
              </div>
              <div className="flex justify-between text-sm font-black pt-2 border-t border-white/10">
                <span>Total Amount Payable:</span>
                <span className="text-[#FFD600]">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                type="button" 
                onClick={() => setStep('details')}
                className="px-5 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold rounded-2xl"
              >
                Back
              </button>
              <button 
                type="submit"
                className="flex-1 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-black py-3.5 rounded-2xl text-sm transition-all shadow-lg active:scale-95"
              >
                Place Order & Pay ₹{grandTotal.toLocaleString('en-IN')} &rarr;
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 'success' && (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-inner border border-emerald-500/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Thank You, {form.fullName}!</h3>
              <p className="text-xs text-zinc-400 mt-1">Your order has been placed successfully and is being packed at our MIDC warehouse.</p>
            </div>

            <div className="p-4 bg-zinc-900 rounded-2xl border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-400">Order Reference Number:</span>
                <span className="font-extrabold text-[#FFD600]">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Estimated Delivery:</span>
                <span className="font-bold text-emerald-400">2 - 3 Days (Express Air)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Delivery Address:</span>
                <span className="font-medium text-zinc-200">{form.address}, {form.pincode}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button 
                onClick={onClose}
                className="flex-1 bg-[#FFD600] text-[#3A3A3A] font-extrabold py-3 rounded-2xl text-xs shadow hover:bg-yellow-400"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
