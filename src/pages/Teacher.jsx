import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import PropTypes from 'prop-types';
import { loginUserSuccess } from '../redux/actions/actionCreators';
import { loadTeachersAsync } from '../redux/thunk/teachersThunk';
import Teacher from '../pages/Teacher';
import Navbar from './Navbar';
import Nav from './Navbar2';

const HomeTeacher = ({
  history, loginUser, loadTeachers, teachers,
}) => {
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) history.replace('/');
    if (authToken) {
      const user = jwtDecode(JSON.parse(authToken));
      loginUser(user);
    }
    loadTeachers();
  }, []);
  return (
    <section className="card-section">
      <>
        <Nav />
        <Navbar />
        {teachers.map((teacher) => (
          <Teacher teacher={teacher} key={teacher.id} />
        ))}
      </>
    </section>
  );
};

HomeTeacher.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadTeachers: PropTypes.func.isRequired,
  teachers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.teachers.loading,
  teachers: state.teachers.list,
});

const mapDispatchToProps = {
  loginUser: (user) => loginUserSuccess(user),
  loadTeachers: () => loadTeachersAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTeacher);
