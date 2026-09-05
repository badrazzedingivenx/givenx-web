import API_CONFIG from '../config/api';

class ApiService {
  static async contactSubmit(formData) {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  }

  static async reviewSubmit(formData) {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.reviewSubmit}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  }

  static async getReviews() {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.reviewsList}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }
}

export default ApiService;