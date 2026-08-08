import React, { useState } from 'react';
import { REVIEWS } from '../data/products';
import { Star, CheckCircle2, ThumbsUp, MessageSquarePlus, User, Sparkles } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number>(0);
  const [showWriteModal, setShowWriteModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', city: '', rating: 5, comment: '' });
  const [submitted, setSubmitted] = useState(false);

  const displayedReviews = filterRating === 0 
    ? REVIEWS 
    : REVIEWS.filter(r => r.rating === filterRating);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setSubmitted(true);
    setTimeout(() => {
      setShowWriteModal(false);
      setSubmitted(false);
      setNewReview({ name: '', city: '', rating: 5, comment: '' });
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-zinc-900 border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD600] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#FFD600]" /> Verified Buyers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Loved in 500,000+ Indian Homes
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Read authentic feedback from home chefs, mothers, and culinary professionals across India.
            </p>
          </div>

          <button
            onClick={() => setShowWriteModal(true)}
            className="inline-flex items-center gap-2 bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] px-6 py-3 rounded-full text-xs font-black transition-all shadow-lg active:scale-95 self-start"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#3A3A3A]" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Rating Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 bg-[#242424] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-6 lg:pb-0 lg:pr-8">
            <div className="text-5xl font-black text-white font-sans">4.9</div>
            <div className="flex justify-center lg:justify-start text-amber-400 gap-1 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-xs font-bold text-zinc-400">Based on 1,840+ Verified Purchase Reviews</p>
            <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine Buyer Feedback
            </div>
          </div>

          {/* Rating Filters */}
          <div className="lg:col-span-8 flex flex-wrap gap-2 justify-center lg:justify-start">
            <button
              onClick={() => setFilterRating(0)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterRating === 0 ? 'bg-[#FFD600] text-[#3A3A3A] font-extrabold' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              All Reviews
            </button>
            {[5, 4, 3].map((star) => (
              <button
                key={star}
                onClick={() => setFilterRating(star)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  filterRating === star ? 'bg-[#FFD600] text-[#3A3A3A] font-extrabold' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                <span>{star} Stars</span>
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              </button>
            ))}
          </div>

        </div>

        {/* Reviews Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {displayedReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-[#242424] p-6 rounded-3xl border border-white/10 shadow-lg hover:border-[#FFD600]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400">{review.date}</span>
                </div>

                <h4 className="font-bold text-white text-sm mb-2">{review.title}</h4>
                <p className="text-xs text-zinc-300 leading-relaxed mb-4">"{review.comment}"</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img 
                  src={review.userAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'} 
                  alt={review.userName}
                  className="w-10 h-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{review.userName}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-zinc-400">{review.location} • <span className="text-[#FFD600] font-medium">{review.productName}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {showWriteModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#242424] text-white rounded-3xl max-w-lg w-full p-6 text-left shadow-2xl border border-white/10 relative">
            <button 
              onClick={() => setShowWriteModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg bg-zinc-800 rounded-full p-1 border border-white/10"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-white mb-1">Write a Product Review</h3>
            <p className="text-xs text-zinc-400 mb-4">Share your cooking experience with the Urban Chef community.</p>

            {submitted ? (
              <div className="py-8 text-center text-emerald-400 space-y-2">
                <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400" />
                <div className="text-base font-bold text-white">Thank you for your review!</div>
                <div className="text-xs text-zinc-400">Your review will be published after verification.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-zinc-300 mb-1">Your Full Name</label>
                  <input 
                    type="text" 
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Radhika Sen"
                    className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-zinc-300 mb-1">City / State</label>
                  <input 
                    type="text"
                    required 
                    value={newReview.city}
                    onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-zinc-300 mb-1">Star Rating</label>
                  <select 
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl font-bold text-amber-400"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ 5 Stars (Excellent)</option>
                    <option value={4}>⭐⭐⭐⭐ 4 Stars (Very Good)</option>
                    <option value={3}>⭐⭐⭐ 3 Stars (Average)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-zinc-300 mb-1">Your Cooking Experience</label>
                  <textarea 
                    rows={3}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Describe how the cookware performs, heat distribution, ease of cleaning..."
                    className="w-full p-2.5 bg-zinc-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD600]"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FFD600] hover:bg-yellow-400 text-[#3A3A3A] font-extrabold py-3 rounded-xl text-sm transition-all shadow"
                >
                  Submit Verified Review &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
