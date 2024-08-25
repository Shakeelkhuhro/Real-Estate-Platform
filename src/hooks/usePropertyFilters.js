import { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const usePropertyFilters = () => {
  const { filters, updateFilters } = useContext(PropertyContext);

  const setPriceRange = (priceRange) => {
    updateFilters({ priceRange });
  };

  const setBedrooms = (bedrooms) => {
    updateFilters({ bedrooms });
  };

  const setLocation = (location) => {
    updateFilters({ location });
  };

  return {
    filters,
    setPriceRange,
    setBedrooms,
    setLocation,
  };
};

export default usePropertyFilters;
