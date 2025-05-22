import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSort, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import SearchBar from '../components/ui/SearchBar';
import CategoryFilter from '../components/ui/CategoryFilter';
import Button from '../components/ui/Button';

/**
 * EventsList page component for displaying all events
 * @returns {React.Component} - EventsList component
 */
const EventsList = () => {
  const { 
    filteredEvents, 
    loading, 
    categories, 
    selectedCategory, 
    setSelectedCategory,
    searchTerm,
    setSearchTerm 
  } = useEvents();
  
  const [sortBy, setSortBy] = useState('date');
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Sort events based on the selected sort option
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date) - new Date(b.date);
      case 'price':
        const priceA = a.price === 'Free' ? 0 : parseInt(a.price.replace(/[^\d]/g, ''));
        const priceB = b.price === 'Free' ? 0 : parseInt(b.price.replace(/[^\d]/g, ''));
        return priceA - priceB;
      case 'popularity':
        return b.attendees - a.attendees;
      default:
        return 0;
    }
  });
  
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  
  return (
    <div className="events-list-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Explore Events</h1>
          <p className="page-description">
            Discover upcoming events that match your interests
          </p>
        </div>
      </section>
      
      <section className="filter-section">
        <div className="container">
          <div className="filter-actions">
            <SearchBar 
              onSearch={setSearchTerm}
              initialValue={searchTerm}
              placeholder="Search events by name, location, or organizer"
              className="event-search"
            />
            
            <div className="filter-buttons">
              <Button 
                variant="outline" 
                size="small" 
                onClick={toggleFilter}
                icon={<FontAwesomeIcon icon={faFilter} />}
              >
                Filters
              </Button>
              
              <select 
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort events"
              >
                <option value="date">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
            </div>
          </div>
          
          {filterOpen && (
            <div className="expanded-filters">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          )}
        </div>
      </section>
      
      <section className="events-section">
        <div className="container">
          {loading ? (
            <div className="loading-indicator">Loading events...</div>
          ) : sortedEvents.length > 0 ? (
            <>
              <div className="results-info">
                <p>Showing {sortedEvents.length} {sortedEvents.length === 1 ? 'event' : 'events'}</p>
              </div>
              
              <div className="events-grid">
                {sortedEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </>
          ) : (
            <div className="no-events-message">
              No events found matching your criteria. Try adjusting your filters or search terms.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsList;
