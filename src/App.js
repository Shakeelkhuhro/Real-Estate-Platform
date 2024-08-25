import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes />
        </main>
        <Footer />
      </div>
      <ScrollToTopButton />
    </Router>
  );
};

export default App;
