import React, { useState } from 'react';
import { Star, MessageSquare, Send, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

export default function ReviewSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingClick = (rating) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in production, this would send to backend
    toast.success('Thank you for your feedback! Your review has been submitted successfully.');
    setFormData({ name: '', email: '', rating: 5, comment: '' });
    setShowForm(false);
  };

  return (
    <section className="pad-xl bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <MessageSquare className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="heading-2 mb-4">Customer Reviews & Feedback</h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            We value your feedback! Share your experience with Green Power Solar Energy 
            and help others make informed decisions.
          </p>
        </div>

        {!showForm ? (
          <div className="text-center">
            <Button 
              onClick={() => setShowForm(true)}
              className="btn-primary"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Write a Review / Give Feedback
            </Button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="product-card">
              <h3 className="heading-3 mb-6">Share Your Experience</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="h-5 w-5 text-gray-400 absolute left-3 top-3" />
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your name"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating *
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingClick(rating)}
                        className={`p-2 rounded transition-colors ${
                          formData.rating >= rating
                            ? 'text-yellow-400'
                            : 'text-gray-300 hover:text-yellow-300'
                        }`}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            formData.rating >= rating ? 'fill-current' : ''
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review / Feedback *
                  </label>
                  <Textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    required
                    placeholder="Share your experience with our products and services..."
                    rows="6"
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="btn-primary flex-1">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ name: '', email: '', rating: 5, comment: '' });
                    }}
                    className="btn-secondary"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

