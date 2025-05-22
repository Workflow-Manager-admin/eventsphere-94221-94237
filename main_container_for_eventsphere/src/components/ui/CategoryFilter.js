import React from 'react';
import PropTypes from 'prop-types';

/**
 * CategoryFilter component for filtering events by category
 * @param {Object} props - Component props
 * @returns {React.Component} - CategoryFilter component
 */
const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  className = '' 
}) => {
  return (
    <div className={`category-filter ${className}`}>
      <h3 className="filter-title">Event Categories</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'category-btn-active' : ''}`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CategoryFilter;
