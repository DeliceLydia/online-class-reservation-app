import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/thunk/authThunk';

const Logout = ({ logoutUser, history }) => {
  useEffect(() => {
    logoutUser();
    history.replace('/');
  }, []);
  return <h1>Logging out...</h1>;
};

Logout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logoutUser: () => logoutUser(),
};

export default connect(null, mapDispatchToProps)(Logout);
