import axios from 'axios';

/**
 * App service making http requests 
 */
export default class SearchService {
  constructor() {
    this.baseURL = 'https://api.tvmaze.com';
  }
  /**
   * Make an http get request to a third provider
   * @param {string} category category selected from select
   * @param {string} text user's input
   */
  async getNewSearch(category, text) {
    let data;
    try {
      const response = await axios.get(`${this.baseURL}/search/${category}?q=${text}`);
      data = response.data;
    } catch (error) {
      console.log('Error fetching: ', error);
      data = [];
    }

    return data;
  }
}
