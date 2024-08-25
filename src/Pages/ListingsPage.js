import React from 'react';
import PropertyListings from '../components/PropertyListings';
import './ListingsPage.css';

const ListingsPage = ({ listings }) => {
  return (
    <div className="listings-page">
      <h1>Available Properties</h1>
      <PropertyListings properties={listings} />
    </div>
  );
};

export default ListingsPage;
