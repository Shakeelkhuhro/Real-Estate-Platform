import React, { useState } from 'react';
import './PropertyDetails.css';

const PropertyDetails = ({ property }) => {
  const [selectedImage, setSelectedImage] = useState(property.images[0]);

  return (
    <div className="property-details">
      <div className="image-gallery">
        <img src={selectedImage} alt={property.title} />
        <div className="thumbnails">
          {property.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? 'active' : ''}
            />
          ))}
        </div>
      </div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      {/* Additional property details */}
    </div>
  );
};

export default PropertyDetails;
