
import React from 'react';
import { Star, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Review {
  id: number;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  helpful: number;
  unhelpful: number;
  verified: boolean;
}

interface CustomerReviewsProps {
  overallRating: number;
  totalReviews: number;
  ratingBreakdown: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  reviews: Review[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  overallRating,
  totalReviews,
  ratingBreakdown,
  reviews,
}) => {
  // Calculate percentages for rating breakdown
  const calculatePercentage = (count: number) => {
    return (count / totalReviews) * 100;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rating Summary */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900">{overallRating.toFixed(1)}</div>
              <div className="flex justify-center my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(overallRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">{totalReviews} reviews</div>
            </div>

            <div className="space-y-3">
              {Object.entries(ratingBreakdown)
                .sort((a, b) => Number(b[0]) - Number(a[0]))
                .map(([rating, count]) => (
                  <div key={rating} className="flex items-center space-x-3">
                    <div className="w-8 text-sm text-gray-600">{rating} star</div>
                    <Progress value={calculatePercentage(count)} className="h-2 flex-1" />
                    <div className="w-10 text-right text-sm text-gray-600">{count}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{review.title}</h3>
                    </div>
                    {review.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>

                  <div className="text-sm text-gray-500 mt-1">
                    By {review.author} on {review.date}
                  </div>

                  <div className="mt-3 text-gray-700">{review.content}</div>

                  <div className="mt-4 flex items-center space-x-4">
                    <span className="text-sm text-gray-500">Was this review helpful?</span>
                    <Button variant="outline" size="sm" className="text-xs h-8">
                      <ThumbsUp className="h-3 w-3 mr-1" /> Yes ({review.helpful})
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs h-8">
                      <ThumbsDown className="h-3 w-3 mr-1" /> No ({review.unhelpful})
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More Reviews</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
