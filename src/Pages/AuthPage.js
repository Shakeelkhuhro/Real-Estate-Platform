import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import './AuthPage.css';

const AuthPage = () => {
  const [isRegistered, setIsRegistered] = useState(true); // Assuming the user is registered by default

  const toggleForm = () => {
    setIsRegistered(!isRegistered); // Toggle between login and register
  };

  return (
    <div className="auth-page">
      <div className="form-container">
        <h1>{isRegistered ? 'Login' : 'Register'}</h1>
        {isRegistered ? <LoginForm /> : <RegisterForm />}
        <div className="toggle-link">
          <p>
            {isRegistered ? "Don't have an account?" : 'Already have an account?'}
          </p>
          <button onClick={toggleForm}>
            {isRegistered ? 'Register here' : 'Login here'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
