import React, { useState } from 'react';
import ApiService from '../services/api';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    rating: '5',
    review: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await ApiService.reviewSubmit(formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        company: '',
        rating: '5',
        review: ''
      });
    } catch (err) {
      console.error('Error submitting review:', err);
      setIsSubmitting(false);
      setError('Erreur lors de l\'envoi de l\'avis. Veuillez réessayer.');
    }
  };

  if (isSuccess) {
    return (
      <div className="review-success">
        <div className="success-icon">✓</div>
        <h3>Avis envoyé avec succès !</h3>
        <p>Votre avis sera visible après validation par notre équipe.</p>
        <button onClick={() => setIsSuccess(false)} className="btn-secondary">
          Ajouter un autre avis
        </button>
      </div>
    );
  }

  return (
    <div className="review-form-container">
      <h3>Laissez votre avis</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="review-form">
        <div className="form-group">
          <label>Nom *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Votre nom"
          />
        </div>
        <div className="form-group">
          <label>Entreprise</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            placeholder="Nom de votre entreprise (optionnel)"
          />
        </div>
        <div className="form-group">
          <label>Note *</label>
          <select
            required
            value={formData.rating}
            onChange={(e) => setFormData({...formData, rating: e.target.value})}
          >
            <option value="5">⭐⭐⭐⭐⭐ - Excellent</option>
            <option value="4">⭐⭐⭐⭐ - Très bon</option>
            <option value="3">⭐⭐⭐ - Bon</option>
            <option value="2">⭐⭐ - Moyen</option>
            <option value="1">⭐ - Décevant</option>
          </select>
        </div>
        <div className="form-group">
          <label>Votre avis *</label>
          <textarea
            required
            value={formData.review}
            onChange={(e) => setFormData({...formData, review: e.target.value})}
            placeholder="Partagez votre expérience avec GivenX..."
            rows="4"
          />
        </div>
        <button type="submit" className="btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon avis'}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;