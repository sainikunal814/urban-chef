import React from 'react';
import { ShieldCheck, Award, Truck, RotateCcw, Lock, CheckCircle2 } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    { icon: ShieldCheck, title: '100% Genuine Steel', desc: 'Surgical 304 Grade Certified' },
    { icon: Award, title: 'ISO 9001:2015', desc: 'International Quality Standards' },
    { icon: Truck, title: 'Free Shipping', desc: 'On all orders above ₹499' },
    { icon: RotateCcw, title: '10-Yr Replacement', desc: 'Doorstep pickup & swap' },
    { icon: Lock, title: '256-Bit SSL Secure', desc: 'UPI, COD & Card Payments' },
  ];

  return (
    <section className="py-12 bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 p-2">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#FFD600] flex items-center justify-center shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-xs sm:text-sm text-white">{b.title}</div>
                <div className="text-[11px] text-zinc-400">{b.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
