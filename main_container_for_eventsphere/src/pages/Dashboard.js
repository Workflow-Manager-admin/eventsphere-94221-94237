import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarPlus, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import SearchBar from '../components/ui/SearchBar';
import CategoryFilter from '../components/ui/CategoryFilter';
import Button from '../components/ui/Button';

/**
 * Dashboard page component - the main landing page
 * @returns {React.Component} - Dashboard component
 */
const Dashboard = () => {
  const { 
    filteredEvents, 
    loading, 
    categories, 
    selectedCategory, 
    setSelectedCategory,
    searchTerm,
    setSearchTerm 
  } = useEvents();

  // Get featured events (maximum 4)
  const featuredEvents = filteredEvents
    .filter(event => event.featured)
    .slice(0, 4);
    
  // Get upcoming events (not featured, maximum 8)
  const upcomingEvents = filteredEvents
    .filter(event => !event.featured)
    .slice(0, 8);
  
  return (
    <div className="dashboard-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Discover and Create Amazing Events</h1>
              <p className="hero-description">
                Join thousands of event goers and organizers on EventSphere. Find your next experience or host your own event.
              </p>
              <div className="hero-buttons">
                <Link to="/events">
                  <Button variant="primary" size="large" icon={<FontAwesomeIcon icon={faSearch} />}>
                    Browse Events
                  </Button>
                </Link>
                <Link to="/create">
                  <Button variant="outline" size="large" icon={<FontAwesomeIcon icon={faCalendarPlus} />}>
                    Create Event
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero-image">
              {/* Hero image could be added here */}
            </div>
          </div>
        </div>
      </section>
      
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <SearchBar 
              onSearch={setSearchTerm}
              initialValue={searchTerm}
              placeholder="Search events by name, location, or organizer"
            />
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>
      
      <section className="featured-events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Events</h2>
            <Link to="/events" className="view-all-link">
              View All <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          
          {loading ? (
            <div className="loading-indicator">Loading events...</div>
          ) : featuredEvents.length > 0 ? (
            <div className="events-grid">
              {featuredEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="no-events-message">
              No featured events found. Adjust your filters or check back later.
            </div>
          )}
        </div>
      </section>
      
      <section className="upcoming-events-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <Link to="/events" className="view-all-link">
              View All <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          
          {loading ? (
            <div className="loading-indicator">Loading events...</div>
          ) : upcomingEvents.length > 0 ? (
            <div className="events-grid">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="no-events-message">
              No upcoming events found. Adjust your filters or check back later.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
