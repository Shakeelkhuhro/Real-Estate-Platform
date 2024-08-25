import React from 'react';
import './Testimonials.css';

const Testimonials = ({ data = [] }) => {
  // If data array is empty, use default testimonials
  const defaultTestimonials = data.length ? data : [
    {
      quote: "This real estate platform helped me find my dream home effortlessly. Highly recommended!",
      author: "John Doe",
    },
    {
      quote: "The agents were very professional and guided me throughout the process. Great experience!",
      author: "Jane Smith",
    },
    {
      quote: "I sold my house within a week of listing it here. The process was smooth and hassle-free.",
      author: "Michael Johnson",
    },
    {
      quote: "A reliable and trustworthy platform. I found the perfect investment property through them.",
      author: "Emily Davis",
    },
    {
      quote: "Excellent service and a wide range of properties to choose from. Will use again!",
      author: "William Brown",
    },
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {defaultTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p>"{testimonial.quote}"</p>
            <h3>- {testimonial.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
