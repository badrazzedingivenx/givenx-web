import React, { useState, useEffect } from 'react';
import ApiService from '../services/api';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await ApiService.getReviews();
        setReviews(data.reviews || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Impossible de charger les avis');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return <div className="reviews-loading">Chargement des avis...</div>;
  }

  if (error) {
    return <div className="reviews-error">{error}</div>;
  }

  if (reviews.length === 0) {
    return <div className="reviews-empty">Aucun avis disponible pour le moment.</div>;
  }

  return (
    <div className="reviews-section">
      <h2 className="reviews-title">Avis de nos clients</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-author">
                <strong>{review.name}</strong>
                {review.company && <span className="review-company">{review.company}</span>}
              </div>
              <div className="review-rating">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
            </div>
            <p className="review-text">{review.review}</p>
            <div className="review-date">
              {new Date(review.created_at).toLocaleDateString('fr-FR')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;