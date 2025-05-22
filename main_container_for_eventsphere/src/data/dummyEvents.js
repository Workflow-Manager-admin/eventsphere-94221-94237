/**
 * Dummy event data for development and testing
 */
export const dummyEvents = [
  {
    id: '1',
    title: 'Tech Conference 2023',
    description: 'Annual technology conference featuring the latest advancements in AI, blockchain, and cloud computing.',
    date: '2023-09-15',
    time: '09:00 AM - 05:00 PM',
    location: 'Tech Hub Convention Center, San Francisco',
    image: 'https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80&w=500',
    category: 'Technology',
    organizer: 'Tech Innovations Inc.',
    attendees: 250,
    price: '$299',
    featured: true
  },
  {
    id: '2',
    title: 'Music Festival Weekend',
    description: 'Three days of non-stop music from top artists across multiple genres. Food, camping, and unforgettable experiences included.',
    date: '2023-07-28',
    time: 'All Weekend',
    location: 'Sunset Valley Park, Austin',
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=500',
    category: 'Music',
    organizer: 'Harmony Productions',
    attendees: 5000,
    price: '$150',
    featured: true
  },
  {
    id: '3',
    title: 'Startup Networking Mixer',
    description: 'Connect with fellow entrepreneurs, investors, and industry experts in a casual setting. Perfect for growing your professional network.',
    date: '2023-06-10',
    time: '06:30 PM - 09:30 PM',
    location: 'Elevation Lounge, New York',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=500',
    category: 'Business',
    organizer: 'Startup Connect',
    attendees: 75,
    price: '$25',
    featured: false
  },
  {
    id: '4',
    title: 'Wellness Retreat',
    description: 'A weekend focused on mental and physical wellbeing with yoga, meditation, healthy eating, and wellness workshops.',
    date: '2023-08-05',
    time: 'Fri 3PM - Sun 12PM',
    location: 'Serenity Resort, Sedona',
    image: 'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=500',
    category: 'Health & Wellness',
    organizer: 'Mindful Living Co.',
    attendees: 60,
    price: '$450',
    featured: false
  },
  {
    id: '5',
    title: 'Digital Marketing Workshop',
    description: 'Learn practical digital marketing strategies from industry experts. Topics include SEO, content marketing, and social media advertising.',
    date: '2023-06-22',
    time: '10:00 AM - 04:00 PM',
    location: 'Creative Hub, Chicago',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=500',
    category: 'Education',
    organizer: 'Marketing Mastery',
    attendees: 120,
    price: '$175',
    featured: true
  },
  {
    id: '6',
    title: 'Community Volunteer Day',
    description: 'Join fellow community members for a day of service. Activities include park clean-up, food drive sorting, and habitat restoration.',
    date: '2023-07-08',
    time: '08:00 AM - 02:00 PM',
    location: 'Community Center, Portland',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=500',
    category: 'Community',
    organizer: 'Portland Gives Back',
    attendees: 200,
    price: 'Free',
    featured: false
  },
  {
    id: '7',
    title: 'Film Festival',
    description: 'Showcasing independent films from around the world. Includes screenings, director Q&As, and networking events.',
    date: '2023-09-22',
    time: 'Various Times',
    location: 'City Cinema, Los Angeles',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=500',
    category: 'Arts & Culture',
    organizer: 'Independent Film Foundation',
    attendees: 800,
    price: '$85',
    featured: true
  },
  {
    id: '8',
    title: 'Food & Wine Expo',
    description: 'Sample delicious cuisine and fine wines from top chefs and wineries. A food lover's paradise with tastings, demos, and more.',
    date: '2023-08-12',
    time: '12:00 PM - 08:00 PM',
    location: 'Grand Hall, Napa Valley',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=500',
    category: 'Food & Drink',
    organizer: 'Culinary Collective',
    attendees: 350,
    price: '$120',
    featured: false
  }
];

/**
 * Get events by category
 * @param {string} category - Category to filter by
 * @returns {Array} - Filtered events
 */
export const getEventsByCategory = (category) => {
  if (!category || category === 'All') {
    return dummyEvents;
  }
  return dummyEvents.filter(event => event.category === category);
};

/**
 * Get event by ID
 * @param {string} id - Event ID to find
 * @returns {Object|undefined} - Found event or undefined
 */
export const getEventById = (id) => {
  return dummyEvents.find(event => event.id === id);
};

/**
 * Get featured events
 * @returns {Array} - Featured events
 */
export const getFeaturedEvents = () => {
  return dummyEvents.filter(event => event.featured);
};

/**
 * List of event categories
 */
export const eventCategories = [
  'All',
  'Technology',
  'Music',
  'Business',
  'Health & Wellness',
  'Education',
  'Community',
  'Arts & Culture',
  'Food & Drink'
];
