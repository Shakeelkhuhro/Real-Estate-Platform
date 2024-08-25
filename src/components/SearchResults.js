import React from 'react';
import PropertyListings from './PropertyListings';
import './SearchResults.css';

const SearchResults = ({ results, filters }) => (
  <div className="search-results">
    {results.length > 0 ? (
      <PropertyListings properties={results} />
    ) : (
      <p>No results found for the selected criteria.</p>
    )}
  </div>
);

export default SearchResults;
