import { format, parseISO } from 'date-fns';

/**
 * Format date string to display format
 * @param {string} dateStr - Date string in ISO format (YYYY-MM-DD)
 * @returns {string} - Formatted date (e.g., "September 15, 2023")
 */
export const formatDisplayDate = (dateStr) => {
  try {
    const date = parseISO(dateStr);
    return format(date, 'MMMM d, yyyy');
  } catch (error) {
    console.error('Date formatting error:', error);
    return dateStr; // Return original if formatting fails
  }
};

/**
 * Get relative time description
 * @param {string} dateStr - Date string in ISO format (YYYY-MM-DD)
 * @returns {string} - Relative time description
 */
export const getRelativeTimeDescription = (dateStr) => {
  try {
    const eventDate = parseISO(dateStr);
    const today = new Date();
    
    // Calculate difference in days
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return 'Past event';
    } else if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Tomorrow';
    } else if (diffDays <= 7) {
      return `In ${diffDays} days`;
    } else if (diffDays <= 30) {
      const weeks = Math.ceil(diffDays / 7);
      return `In ${weeks} ${weeks === 1 ? 'week' : 'weeks'}`;
    } else {
      const months = Math.ceil(diffDays / 30);
      return `In ${months} ${months === 1 ? 'month' : 'months'}`;
    }
  } catch (error) {
    console.error('Date calculation error:', error);
    return 'Upcoming event';
  }
};
