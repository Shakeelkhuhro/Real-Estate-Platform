import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ListingsPage from './Pages/ListingsPage';
import PropertyPage from './Pages/PropertyPage';
import AgentsPage from './Pages/AgentsPage';
import AuthPage from './Pages/AuthPage'; // Import the new AuthPage
import SearchResultsPage from './Pages/SearchResultsPage';
import ContactPage from './Pages/ContactPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/listings" element={<ListingsPage />} />
      <Route path="/property/:id" element={<PropertyPage />} />
      <Route path="/agents" element={<AgentsPage />} />
      <Route path="/auth" element={<AuthPage />} />  {/* Add the AuthPage route */}
      <Route path="/search-results" element={<SearchResultsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
