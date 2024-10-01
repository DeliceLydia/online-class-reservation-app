import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUserAsync } from '../redux/thunk/authThunk';
import Navbar from '../pages/Navbar2';

const Signin = ({ loginUser, isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/teachers');
    }
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }

    return () => {
      console.log("Cleaning up Signin component...");
      // Any cleanup logic can be added here
    };
  }, [isAuthenticated, navigate]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1 className="login-h1">Sign In</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="signup-field">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="signup-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div className="signup-field">
            <button type="submit">Sign In</button>
          </div>
          <div className="down-signin">
            Do not have an account?
            <Link to="/signup" className="">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

Signin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  loginUser: (user) => loginUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
