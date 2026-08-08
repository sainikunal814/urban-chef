import React, { useState } from 'react';
import { Building2, Send, CheckCircle2, ShieldCheck, PhoneCall, Mail } from 'lucide-react';

export const BulkInquiry: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    quantity: '50-100 Pieces',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#3A3A3A] text-white relative overflow-hidden border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD600] text-[#3A3A3A] font-extrabold text-xs uppercase">
              <Building2 className="w-3.5 h-3.5" /> Commercial & Corporate B2B
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-white">
              Bulk Orders & <span className="text-[#FFD600]">Institutional Supply</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              We supply heavy-duty 304 surgical stainless steel utensils, cookware sets, and custom laser-engraved dinnerware to 5-Star Hotels, Restaurants, Caterers, and Corporate Gift Givers across India & exports.
            </p>

            <div className="space-y-3 pt-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                <span>Custom Brand Laser Engraving & Logo Printing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                <span>Direct Factory Wholesale Pricing (Up to 45% OFF)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFD600]" />
                <span>GST Tax Invoice & Doorstep Transport Logistics</span>
              </div>
            </div>

            <div className="p-4 bg-zinc-800/80 rounded-2xl border border-zinc-700 flex flex-wrap gap-4 text-xs">
              <a href="tel:18002008722" className="flex items-center gap-2 text-zinc-200 hover:text-[#FFD600]">
                <PhoneCall className="w-4 h-4 text-[#FFD600]" /> 1800-200-8722
              </a>
              <a href="mailto:b2b@urbanchef.in" className="flex items-center gap-2 text-zinc-200 hover:text-[#FFD600]">
                <Mail className="w-4 h-4 text-[#FFD600]" /> b2b@urbanchef.in
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-6 bg-[#242424] text-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-white/10 text-left">
            <h3 className="text-xl font-extrabold text-white mb-1">Request B2B Wholesale Quote</h3>
            <p className="text-xs text-zinc-400 mb-6">Our corporate team responds within 2 business hours.</p>

            {submitted ? (
              <div className="py-12 text-center text-emerald-400 space-y-3">
                <CheckCircle2 className="w-16 h-16 mx-auto text-emerald-400" />
                <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you, <strong className="text-[#FFD600]">{form.contactPerson}</strong>. Our B2B Account Manager will call you shortly at <strong className="text-[#FFD600]">{form.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300 mb-1">Business / Hotel Name</label>
                    <input 
                      type="text" 
                      required
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Royal Orchid Hotel"
                      className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300 mb-1">Contact Person</label>
                    <input 
                      type="text" 
                      required
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      placeholder="e.g. Vikram Mehta"
                      className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-zinc-300 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-zinc-300 mb-1">Approximate Quantity</label>
                    <select 
                      value={form.quantity}
                      onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                      className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl font-medium text-white"
                    >
                      <option value="50-100 Pieces">50 - 100 Pieces</option>
                      <option value="100-500 Pieces">100 - 500 Pieces</option>
                      <option value="500+ Pieces">500+ Pieces (Full Container)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-zinc-300 mb-1">Requirements & Products Needed</label>
                  <textarea 
                    rows={3}
                    value={form.requirements}
                    onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                    placeholder="Describe needed items (e.g., 200 Tri-Ply Kadais 5L, 50 Dinner Sets with company logo engraving)..."
                    className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3.5 rounded-xl text-sm transition-all shadow flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale Request &rarr;</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
