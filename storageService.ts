import { CommunityPost } from '../types';

const STORAGE_KEY = 'feedofund_updates_v8';

const INITIAL_POSTS: CommunityPost[] = [
  {
    id: 'north-york-harvest-jan2',
    title: 'North York Harvest Grocery Run',
    date: '2025-01-02T12:00:00Z',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'We went grocery shopping for the North York Harvest on January 2nd, but unfortunately they were closed. We streamed the attempt live on the Pump.fun website to keep our community updated in real-time.'
  },
  {
    id: 'start-me-up',
    title: 'Supporting Start Me Up Niagara',
    date: '2024-12-13T12:00:00Z',
    type: 'image',
    // Using a new kitchen/chef related image. 
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'We went to Start Me Up Niagara to make meals for the homeless with the help of Chef Mi. Together, we prepared 150 warm servings of meatballs and pastas for the community.'
  }
];

export const getPosts = (): CommunityPost[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_POSTS));
      return INITIAL_POSTS;
    }
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to load posts", e);
    return INITIAL_POSTS;
  }
};

export const addPost = (post: CommunityPost): CommunityPost[] => {
  try {
    const current = getPosts();
    const updated = [post, ...current];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error("Failed to save post", e);
    return [];
  }
};