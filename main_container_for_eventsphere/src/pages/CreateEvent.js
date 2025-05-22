import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faClock,
  faImage,
  faTags,
  faDollarSign,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import { eventCategories } from '../data/dummyEvents';
import Button from '../components/ui/Button';

/**
 * CreateEvent page component for creating new events
 * @returns {React.Component} - CreateEvent component
 */
const CreateEvent = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    category: '',
    price: '',
    image: '',
    organizer: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  
  const validateForm = () => {
    const errors = {};
    const requiredFields = ['title', 'description', 'date', 'time', 'location', 'category'];
    
    requiredFields.forEach(field => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });
    
    if (formValues.description && formValues.description.length < 50) {
      errors.description = 'Description must be at least 50 characters';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API request with timeout
      setTimeout(() => {
        // Here would be the actual API call to create the event
        console.log('Event created:', formValues);
        setIsSubmitting(false);
        alert('Event created successfully!');
        navigate('/events');
      }, 1000);
    } else {
      alert('Please fix the errors in the form before submitting');
    }
  };
  
  return (
    <div className="create-event-page">
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Create New Event</h1>
          <p className="page-description">
            Fill out the form below to create your event
          </p>
        </div>
      </section>
      
      <section className="form-section">
        <div className="container">
          <form className="create-event-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Event Title <span className="required">*</span>
              </label>
              <div className="form-input-group">
                <FontAwesomeIcon icon={faInfoCircle} className="input-icon" />
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`form-input ${formErrors.title ? 'input-error' : ''}`}
                  value={formValues.title}
                  onChange={handleChange}
                  placeholder="Enter a clear title for your event"
                />
              </div>
              {formErrors.title && <p className="error-message">{formErrors.title}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Event Description <span className="required">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                className={`form-textarea ${formErrors.description ? 'input-error' : ''}`}
                value={formValues.description}
                onChange={handleChange}
                placeholder="Provide details about your event (minimum 50 characters)"
                rows={5}
              />
              {formErrors.description && <p className="error-message">{formErrors.description}</p>}
            </div>
            
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="date" className="form-label">
                  Date <span className="required">*</span>
                </label>
                <div className="form-input-group">
                  <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className={`form-input ${formErrors.date ? 'input-error' : ''}`}
                    value={formValues.date}
                    onChange={handleChange}
                  />
                </div>
                {formErrors.date && <p className="error-message">{formErrors.date}</p>}
              </div>
              
              <div className="form-group half-width">
                <label htmlFor="time" className="form-label">
                  Time <span className="required">*</span>
                </label>
                <div className="form-input-group">
                  <FontAwesomeIcon icon={faClock} className="input-icon" />
                  <input
                    type="text"
                    id="time"
                    name="time"
                    className={`form-input ${formErrors.time ? 'input-error' : ''}`}
                    value={formValues.time}
                    onChange={handleChange}
                    placeholder="e.g., 6:00 PM - 9:00 PM"
                  />
                </div>
                {formErrors.time && <p className="error-message">{formErrors.time}</p>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Location <span className="required">*</span>
              </label>
              <div className="form-input-group">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
                <input
                  type="text"
                  id="location"
                  name="location"
                  className={`form-input ${formErrors.location ? 'input-error' : ''}`}
                  value={formValues.location}
                  onChange={handleChange}
                  placeholder="Enter the venue and address"
                />
              </div>
              {formErrors.location && <p className="error-message">{formErrors.location}</p>}
            </div>
            
            <div className="form-row">
              <div className="form-group half-width">
                <label htmlFor="category" className="form-label">
                  Category <span className="required">*</span>
                </label>
                <div className="form-input-group">
                  <FontAwesomeIcon icon={faTags} className="input-icon" />
                  <select
                    id="category"
                    name="category"
                    className={`form-select ${formErrors.category ? 'input-error' : ''}`}
                    value={formValues.category}
                    onChange={handleChange}
                  >
                    <option value="">Select a category</option>
                    {eventCategories.slice(1).map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                {formErrors.category && <p className="error-message">{formErrors.category}</p>}
              </div>
              
              <div className="form-group half-width">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <div className="form-input-group">
                  <FontAwesomeIcon icon={faDollarSign} className="input-icon" />
                  <input
                    type="text"
                    id="price"
                    name="price"
                    className={`form-input ${formErrors.price ? 'input-error' : ''}`}
                    value={formValues.price}
                    onChange={handleChange}
                    placeholder="Enter ticket price or 'Free'"
                  />
                </div>
                {formErrors.price && <p className="error-message">{formErrors.price}</p>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="image" className="form-label">
                Event Image URL
              </label>
              <div className="form-input-group">
                <FontAwesomeIcon icon={faImage} className="input-icon" />
                <input
                  type="text"
                  id="image"
                  name="image"
                  className="form-input"
                  value={formValues.image}
                  onChange={handleChange}
                  placeholder="Enter URL for event image"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="organizer" className="form-label">
                Organizer
              </label>
              <div className="form-input-group">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="text"
                  id="organizer"
                  name="organizer"
                  className="form-input"
                  value={formValues.organizer}
                  onChange={handleChange}
                  placeholder="Enter organizer name or organization"
                />
              </div>
            </div>
            
            <div className="form-footer">
              <Button 
                type="submit" 
                variant="primary" 
                size="large" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Event...' : 'Create Event'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/events')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CreateEvent;
