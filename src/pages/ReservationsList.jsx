import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadReservationsAsync } from '../redux/thunk/reservationsThunk';
import Teacher from '../pages/Teacher';
import Navbar from './Navbar1';
import Nav from './Navbar2';

const Reservation = ({
  history, loadReservations, teachers,
}) => {
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) history.replace('/');
    loadReservations();
  }, []);
  return (
    <>
      <Nav />
      <Navbar />
      {teachers.length > 0 ? (
        <div>
          {teachers.map((teacher) => (
            <Teacher teacher={teacher} key={teacher.id} />
          ))}
        </div>
      ) : (
        'List is empty'
      )}
    </>
  );
};

Reservation.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  loadReservations: PropTypes.func.isRequired,
  teachers: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.reservations.loading,
  teachers: state.reservations.list.map((reservation) => reservation.teacher),
});

const mapDispatchToProps = {
  loadReservations: () => loadReservationsAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
