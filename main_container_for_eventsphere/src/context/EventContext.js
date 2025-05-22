import React, { createContext, useContext, useState, useEffect } from 'react';
import { dummyEvents, eventCategories } from '../data/dummyEvents';

// Create the event context
const EventContext = createContext();

/**
 * Event context provider component
 * @param {Object} props - Component props
 * @returns {React.Component} - Context provider component
 */
export const EventProvider = ({ children }) => {
  // State for events and filters
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize events when component mounts
  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchEvents = () => {
      setTimeout(() => {
        setEvents(dummyEvents);
        setFilteredEvents(dummyEvents);
        setLoading(false);
      }, 500); // Simulate network delay
    };

    fetchEvents();
  }, []);

  // Filter events when category or search term changes
  useEffect(() => {
    let result = [...events];
    
    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(event => event.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(event => 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term) ||
        event.organizer.toLowerCase().includes(term)
      );
    }
    
    setFilteredEvents(result);
  }, [selectedCategory, searchTerm, events]);

  // Value object to be provided to consumers
  const value = {
    events,
    filteredEvents,
    loading,
    categories: eventCategories,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

/**
 * Custom hook for using event context
 * @returns {Object} - Event context value
 */
export const useEvents = () => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};
