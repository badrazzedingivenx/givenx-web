// Configuration API pour le backend PHP
const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost/givenx-backend/public/api',
  endpoints: {
    contact: '/contact_submit.php',
    reviewSubmit: '/review_submit.php',
    reviewsList: '/reviews_list.php'
  }
};

export default API_CONFIG;