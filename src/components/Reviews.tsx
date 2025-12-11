import { useState } from "react";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { reviews as initialReviews } from "@/data/products";
import { Review } from "@/types/store";
import { toast } from "@/hooks/use-toast";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newReview: Review = {
      id: `r${Date.now()}`,
      productId: "azure-vase-01",
      userName: name,
      rating,
      comment,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([newReview, ...reviews]);
    setName("");
    setComment("");
    setRating(5);
    setShowForm(false);

    toast({
      title: "Review Submitted",
      description: "Thank you for sharing your experience!",
    });
  };

  const renderStars = (rating: number, interactive = false) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : undefined}
            disabled={!interactive}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
            className={interactive ? "cursor-pointer" : "cursor-default"}
          >
            <Star
              className={`h-5 w-5 transition-colors ${
                star <= (interactive ? hoverRating || rating : rating)
                  ? "fill-gold text-gold"
                  : "text-muted-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            What Collectors Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our distinguished collectors about their experience with Azure Porcelain.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.slice(0, 6).map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-6 shadow-card hover-lift"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <div className="mb-4">{renderStars(review.rating)}</div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full gradient-azure flex items-center justify-center">
                  <span className="text-primary-foreground font-medium">
                    {review.userName.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-sm">{review.userName}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review */}
        <div className="max-w-2xl mx-auto">
          {!showForm ? (
            <div className="text-center">
              <Button variant="outline" size="lg" onClick={() => setShowForm(true)}>
                Write a Review
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card animate-fade-up"
            >
              <h3 className="font-serif text-xl font-semibold mb-6">Share Your Experience</h3>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Your Rating</label>
                {renderStars(rating, true)}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Your Review</label>
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your thoughts about our products..."
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="hero">
                  Submit Review
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
