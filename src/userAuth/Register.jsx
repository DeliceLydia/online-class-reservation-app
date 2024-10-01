import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppForm from '../components/AppForm';
import { registerUserAsync } from '../redux/thunk/authThunk';
import validationSchema from '../validations/userValidation';
import SubmitBtn from '../components/SubmitButton';
import InputForm from '../components/InputForm';
import Navbar from '../pages/Navbar2';

const SignUp = (props) => {
  const { currentUser } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/');
    }
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = (values) => {
    const { signupUser } = props;
    const { email, password } = values;
    const user = {
      email,
      password,
      name: values.name,
    };
    signupUser(user);
  };

  return (
    <>
      <Navbar />
      <div className="signup-container">
        <AppForm
          initialValues={{
            email: '',
            password: '',
            name: '',
          }}
          onSubmit={handleSubmit}
          validate={validationSchema}
        >
          <div className="signup-heading">
            <h1 className="signup-h1">Sign up</h1>
          </div>
          <form className="signup-form">
            <div className="field-container">
              <div className="signup-field">
                <InputForm name="name" placeholder="Name" type="name" className="form-control" />
              </div>
              <div className="signup-field">
                <InputForm name="email" placeholder="Email" type="email" className="form-control" />
              </div>
              <div className="signup-field">
                <InputForm name="password" placeholder="Password" type="password" className="form-control" />
              </div>
              <div className="signup-field">
                <SubmitBtn title="Sign Up" />
              </div>
            </div>
          </form>
          <div className="down-par">
            Already have an account?
            <Link to="/" className="">
              Sign in
            </Link>
          </div>
        </AppForm>
      </div>
    </>
  );
};

SignUp.defaultProps = {
  currentUser: null,
};

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  signupUser: (user) => registerUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
