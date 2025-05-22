import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * SearchBar component for filtering events
 * @param {Object} props - Component props
 * @returns {React.Component} - SearchBar component
 */
const SearchBar = ({ 
  onSearch, 
  placeholder = 'Search events...', 
  initialValue = '',
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  
  const clearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };
  
  return (
    <div className={`search-bar ${className}`}>
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="search-input"
      />
      {searchTerm && (
        <button
          type="button"
          className="search-clear"
          onClick={clearSearch}
          aria-label="Clear search"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  className: PropTypes.string
};

export default SearchBar;
