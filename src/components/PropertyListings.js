import React from 'react';
import PropertyCard from './PropertyCard';
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";
import p5 from "../assets/images/p5.png";
import p6 from "../assets/images/p6.png";
import './PropertyListings.css';

const PropertyListings = ({ properties = [] }) => {
  // If properties array is empty, use the default properties
  const defaultProperties = properties.length ? properties : [
    {
      id: 1,
      title: "Modern Family Home",
      price: "$1,200,000",
      image: p1,
      description: "A beautiful modern family home located in the heart of the city, featuring 4 bedrooms, 3 bathrooms, and a spacious garden.",
    },
    {
      id: 2,
      title: "Luxury Villa with Sea View",
      price: "$3,500,000",
      image: p2,
      description: "This luxurious villa offers breathtaking sea views, 5 bedrooms, 4 bathrooms, and a private swimming pool.",
    },
    {
      id: 3,
      title: "Cozy Cottage in the Countryside",
      price: "$850,000",
      image: p3,
      description: "A cozy cottage nestled in the countryside, perfect for a peaceful retreat. Includes 3 bedrooms, 2 bathrooms, and a fireplace.",
    },
    {
      id: 4,
      title: "Urban Apartment with City Views",
      price: "$950,000",
      image: p4,
      description: "A sleek urban apartment located downtown with stunning city views, 2 bedrooms, 2 bathrooms, and a modern kitchen.",
    },
    {
      id: 5,
      title: "Spacious Suburban Home",
      price: "$1,450,000",
      image: p5,
      description: "A spacious suburban home ideal for families, featuring 5 bedrooms, 3 bathrooms, a large backyard, and a two-car garage.",
    },{
      id: 6,
      title: "Modern Family Home 2",
      price: "$1,200,000",
      image: p6,
      description: "A beautiful modern family home located in the heart of the city, featuring 4 bedrooms, 3 bathrooms, and a spacious garden.",
    },
  ];

  return (
    <div className="property-listings">
      {defaultProperties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyListings;
