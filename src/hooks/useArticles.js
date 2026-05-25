
import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient.js';

export function useArticles(options = {}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    category = null,
    featured = null,
    searchQuery = '',
    startDate = null,
    endDate = null,
    sortBy = '-publish_date'
  } = options;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        let filter = '';
        const filters = [];

        if (category) {
          filters.push(`category = "${category}"`);
        }

        if (featured !== null) {
          filters.push(`featured = ${featured}`);
        }

        if (searchQuery) {
          filters.push(`(title ~ "${searchQuery}" || excerpt ~ "${searchQuery}" || content ~ "${searchQuery}")`);
        }

        if (startDate) {
          filters.push(`publish_date >= "${startDate}"`);
        }

        if (endDate) {
          const nextDay = new Date(endDate);
          nextDay.setDate(nextDay.getDate() + 1);
          const nextDayStr = nextDay.toISOString().split('T')[0];
          filters.push(`publish_date < "${nextDayStr}"`);
        }

        if (filters.length > 0) {
          filter = filters.join(' && ');
        }

        const records = await pb.collection('news_articles').getFullList({
          filter: filter || undefined,
          sort: sortBy,
          $autoCancel: false
        });

        setArticles(records);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError(err.message || 'Failed to fetch articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, featured, searchQuery, startDate, endDate, sortBy]);

  return { articles, loading, error };
}
