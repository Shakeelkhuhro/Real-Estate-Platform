import React, { createContext, useState, useContext } from 'react';

// Create a context for property state management
const PropertyContext = createContext();

// PropertyProvider component to wrap around the app and provide property state
export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: '',
    bedrooms: '',
    location: '',
  });

  // Function to update properties
  const updateProperties = (newProperties) => {
    setProperties(newProperties);
  };

  // Function to update filters
  const updateFilters = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  return (
    <PropertyContext.Provider value={{ properties, filters, updateProperties, updateFilters }}>
      {children}
    </PropertyContext.Provider>
  );
};

// Custom hook to use the PropertyContext
export const useProperty = () => {
  return useContext(PropertyContext);
};
