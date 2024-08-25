import React from 'react';
import SearchResults from '../components/SearchResults';
import './SearchResultsPage.css';

const SearchResultsPage = ({ searchResults, filters }) => (
  <div className="search-results-page">
    <h1>Search Results</h1>
    <SearchResults results={searchResults} filters={filters} />
  </div>
);

export default SearchResultsPage;
