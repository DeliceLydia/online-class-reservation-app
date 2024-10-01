import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {jwtDecode} from 'jwt-decode';
import { loginUserSuccess } from '../redux/actions/actionCreators';
import { loadTeachersAsync } from '../redux/thunk/teachersThunk';
import Teacher from '../pages/Teacher';
import Navbar from './Navbar1';

const TeachersDetails = ({
  teachers, loadTeachers, match, history, loginUser,
}) => {
  const [teacher, setTeacher] = useState(null);
  useEffect(() => {
    const { params } = match;
    const { id } = params;
    const token = localStorage.getItem('authToken');
    if (!token) history.replace('/');
    if (token) {
      const user = jwtDecode(JSON.parse(token));
      loginUser(user);
    }
    loadTeachers();
    const findTeacher = teachers.find((teacher) => teacher.id.toString() === id);
    if (!findTeacher) history.replace('/');
    setTeacher(findTeacher);
  }, []);
  return (
    <>
      <Navbar />
      {teacher && <Teacher teacher={teacher} />}
    </>
  );
};

TeachersDetails.propTypes = {
  loginUser: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(TeachersDetails);
