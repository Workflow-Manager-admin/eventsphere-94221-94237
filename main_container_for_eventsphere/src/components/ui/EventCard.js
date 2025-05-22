import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { formatDisplayDate, getRelativeTimeDescription } from '../../utils/dateUtils';

/**
 * EventCard component for displaying event information
 * @param {Object} props - Component props
 * @returns {React.Component} - EventCard component
 */
const EventCard = ({ event, className = '' }) => {
  const { id, title, date, location, image, category, attendees, price, featured } = event;
  
  return (
    <Link to={`/event/${id}`} className={`event-card ${featured ? 'event-card-featured' : ''} ${className}`}>
      <div className="event-image">
        <img src={image} alt={title} />
        {featured && <span className="featured-badge">Featured</span>}
        <span className="category-badge">{category}</span>
      </div>
      
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        
        <div className="event-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span>{formatDisplayDate(date)}</span>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{location.split(',')[0]}</span>
          </div>
        </div>
        
        <div className="event-footer">
          <div className="event-attendees">
            <FontAwesomeIcon icon={faUser} />
            <span>{attendees} attending</span>
          </div>
          
          <div className="event-details">
            <span className="event-price">{price}</span>
            <span className="event-time-left">{getRelativeTimeDescription(date)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    organizer: PropTypes.string.isRequired,
    attendees: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    featured: PropTypes.bool
  }).isRequired,
  className: PropTypes.string
};

export default EventCard;
