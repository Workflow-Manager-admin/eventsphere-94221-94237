import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faClock,
  faUser,
  faTicketAlt,
  faHeart,
  faShare,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import { getEventById } from '../data/dummyEvents';
import { formatDisplayDate } from '../utils/dateUtils';
import Button from '../components/ui/Button';

/**
 * EventDetail page component for displaying details of a single event
 * @returns {React.Component} - EventDetail component
 */
const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorite, setFavorite] = useState(false);
  
  useEffect(() => {
    // Simulate API fetch with timeout
    const fetchEvent = () => {
      setTimeout(() => {
        try {
          const foundEvent = getEventById(id);
          if (foundEvent) {
            setEvent(foundEvent);
            setLoading(false);
          } else {
            setError('Event not found');
            setLoading(false);
          }
        } catch (err) {
          setError('Error fetching event data');
          setLoading(false);
        }
      }, 500);
    };
    
    fetchEvent();
  }, [id]);
  
  const toggleFavorite = () => {
    setFavorite(!favorite);
  };
  
  const shareEvent = () => {
    // In a real app, this would use the Web Share API or fallback to a custom share dialog
    alert('Sharing functionality would be implemented here');
  };
  
  if (loading) {
    return (
      <div className="container">
        <div className="loading-indicator">Loading event details...</div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Error</h2>
          <p>{error}</p>
          <Link to="/events">
            <Button variant="primary">Back to Events</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="event-detail-page">
      <div className="event-detail-header">
        <div className="container">
          <Link to="/events" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to events
          </Link>
        </div>
      </div>
      
      <div className="container">
        <div className="event-detail-content">
          <div className="event-image-container">
            <img 
              src={event.image} 
              alt={event.title} 
              className="event-detail-image"
            />
            <span className="event-category-badge">{event.category}</span>
          </div>
          
          <div className="event-info-container">
            <div className="event-header">
              <h1 className="event-title">{event.title}</h1>
              
              <div className="event-actions">
                <button 
                  className={`action-button ${favorite ? 'favorite-active' : ''}`}
                  onClick={toggleFavorite}
                  aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                
                <button 
                  className="action-button"
                  onClick={shareEvent}
                  aria-label="Share event"
                >
                  <FontAwesomeIcon icon={faShare} />
                </button>
              </div>
            </div>
            
            <div className="event-meta">
              <div className="meta-item">
                <FontAwesomeIcon icon={faCalendarAlt} />
                <span>{formatDisplayDate(event.date)}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faClock} />
                <span>{event.time}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{event.location}</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faUser} />
                <span>{event.organizer}</span>
              </div>
            </div>
            
            <div className="event-description">
              <h3>About this event</h3>
              <p>{event.description}</p>
            </div>
            
            <div className="event-attendance">
              <div className="attendees">
                <div className="attendee-count">
                  <FontAwesomeIcon icon={faUser} />
                  <span>{event.attendees} people attending</span>
                </div>
              </div>
              
              <div className="event-ticket">
                <span className="ticket-price">{event.price}</span>
                <Button 
                  variant="primary" 
                  size="large" 
                  icon={<FontAwesomeIcon icon={faTicketAlt} />}
                  fullWidth
                >
                  Get Tickets
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
