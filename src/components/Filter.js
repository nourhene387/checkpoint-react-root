import React, { useState } from 'react';

function Filter({ onFilter }) {
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRatingFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(titleFilter, ratingFilter ? parseFloat(ratingFilter) : '');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={ratingFilter}
        onChange={handleRatingChange}
        min="0"
        step="0.1"
      />
      <button type="submit">Apply Filters</button>
    </form>
  );
}

export default Filter;