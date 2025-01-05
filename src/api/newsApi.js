// src/api/newsApi.js
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY'; // Replace with your News API key

const fetchNews = async () => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
            params: {
                apiKey: API_KEY,
                country: 'us', 
            },
        });
        return response.data.articles; // Return the list of articles
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};

export default fetchNews;
