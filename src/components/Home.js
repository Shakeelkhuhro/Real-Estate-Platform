import React from 'react';
import HeroBanner from '../components/HeroBanner';
import PropertyListings from '../components/PropertyListings';
import Testimonials from '../components/Testimonials';
import './HomePage.css';

const HomePage = ({ heroImage, heroTitle, heroSubtitle, listings, testimonials }) => (
  <div className="home-page">
    <HeroBanner image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
    <section className="listings-section">
      <h2>Featured Properties</h2>
      <PropertyListings properties={listings} />
    </section>
    <section className="testimonials-section">
      <Testimonials data={testimonials} />
    </section>
  </div>
);

export default HomePage;

// comment..