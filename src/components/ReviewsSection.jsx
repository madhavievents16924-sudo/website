import React, { useState } from 'react';
import { Star, Quote, Award, CheckCircle, MessageSquarePlus, X } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/eventData';

export default function ReviewsSection() {
  const [userReviews, setUserReviews] = useState(REVIEWS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newAuthor || !newComment) return;
    const review = {
      id: Date.now(),
      author: newAuthor,
      rating: newRating,
      date: 'Just now',
      verified: true,
      comment: newComment
    };
    setUserReviews([review, ...userReviews]);
    setNewAuthor('');
    setNewComment('');
    setShowAddReview(false);
  };

  return (
    <section id="reviews" className="py-20 bg-[#0b0f0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
              <Award className="w-4 h-4" /> Customer Testimonials
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              What Our Clients Say on <span className="gold-gradient-text">Justdial (4.8★)</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAddReview(true)}
              className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold px-5 py-3 rounded-2xl border border-amber-500/40 text-xs flex items-center gap-2 transition"
            >
              <MessageSquarePlus className="w-4 h-4 text-amber-400" />
              <span>Write a Review</span>
            </button>
            <a
              href={BUSINESS_INFO.justdialUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900/80 hover:bg-slate-800 text-amber-200 text-xs font-semibold px-4 py-3 rounded-2xl border border-amber-500/20 flex items-center gap-2"
            >
              <span>View Justdial Profile</span>
              <Award className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userReviews.map((rev) => (
            <div
              key={rev.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-amber-500/20 flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-amber-100/50">{rev.date}</span>
                </div>

                <Quote className="w-8 h-8 text-amber-500/20 mb-3" />

                <p className="text-amber-100/80 text-xs leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/10 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-amber-200">{rev.author}</div>
                  <div className="text-[10px] text-amber-100/60">Verified Client</div>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle className="w-3 h-3" /> Justdial
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {showAddReview && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 max-w-md w-full border border-amber-500/30 relative">
            <button
              onClick={() => setShowAddReview(false)}
              className="absolute top-4 right-4 text-amber-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-heading font-bold text-xl text-white mb-2">Write a Client Review</h3>
            <p className="text-xs text-amber-100/70 mb-6">Share your experience with Madhavi Events & Caterers</p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Siva, Palakkad"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Rating</label>
                <div className="flex gap-2 text-amber-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewRating(star)}
                      className="p-1 text-lg"
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Your Review</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Describe the food, presentation, fruit statues, or staff hospitality..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs shadow-lg"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
