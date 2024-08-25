import React from 'react';
import { useParams } from 'react-router-dom';
import PropertyDetails from '../components/PropertyDetails';
import './PropertyPage.css';

const PropertyPage = ({ properties }) => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div className="property-page">
      <PropertyDetails property={property} />
    </div>
  );
};

export default PropertyPage;
