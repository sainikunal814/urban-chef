import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, Search, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter(
    f => f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
         f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-24 bg-[#1a1a1a] border-b border-white/10 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD600]/10 text-[#FFD600] font-bold text-xs uppercase tracking-wider mb-2 border border-[#FFD600]/20">
            <HelpCircle className="w-4 h-4 text-[#FFD600]" /> Instant Help Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400 mt-2">
            Have questions about stainless steel care, warranty claims, or induction compatibility?
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-lg mx-auto mb-8">
          <input 
            type="text" 
            placeholder="Search questions (e.g., warranty, cleaning, induction)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[#242424] border border-white/10 rounded-2xl text-xs sm:text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
          />
          <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3 text-left">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#242424] rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-white flex items-center justify-between gap-4 hover:bg-white/5"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-[#FFD600]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/10 mt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="py-8 text-center text-sm text-zinc-400">
              No matching FAQs found. Call our toll-free hotline <strong className="text-[#FFD600]">1800-200-8722</strong> for instant help.
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
