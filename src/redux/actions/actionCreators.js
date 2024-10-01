import {
  API_CALL_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNOUT_USER_SUCCESS,
  LOAD_TEACHERS_SUCCESS,
  LOAD_TEACHERS_FAIL,
  LOAD_RESERVATIONS_SUCCESS,
  LOAD_RESERVATIONS_FAIL,
  ADD_TO_RESERVATIONS_SUCCESS,
  ADD_TO_RESERVATIONS_FAIL,
  REMOVE_TO_RESERVATIONS_SUCCESS,
  REMOVE_TO_RESERVATIONS_FAIL,
} from './actionTypes';

export const apiCallStart = () => ({
  type: API_CALL_SUCCESS,
});

export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserFail = (error) => ({
  type: REGISTER_USER_FAIL,
  payload: error,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserFail = (user) => ({
  type: LOGIN_USER_FAIL,
  payload: user,
});

export const signoutUserSuccess = () => ({
  type: SIGNOUT_USER_SUCCESS,
});

export const loadTeachersSuccess = (teachers) => ({
  type: LOAD_TEACHERS_SUCCESS,
  payload: teachers,
});

export const loadTeachersFail = (error) => ({
  type: LOAD_TEACHERS_FAIL,
  payload: error,
});

export const addToReservationsSuccess = (teacher) => ({
  type: ADD_TO_RESERVATIONS_SUCCESS,
  payload: teacher,
});

export const addToReservationsFail = (error) => ({
  type: ADD_TO_RESERVATIONS_FAIL,
  payload: error,
});

export const removeToReservationsSuccess = (teacher) => ({
  type: REMOVE_TO_RESERVATIONS_SUCCESS,
  payload: teacher,
});

export const removeToReservationsFail = (error) => ({
  type: REMOVE_TO_RESERVATIONS_FAIL,
  payload: error,
});

export const loadReservationsSuccess = (reservations) => ({
  type: LOAD_RESERVATIONS_SUCCESS,
  payload: reservations,
});

export const loadReservationsFail = (error) => ({
  type: LOAD_RESERVATIONS_FAIL,
  payload: error,
});
