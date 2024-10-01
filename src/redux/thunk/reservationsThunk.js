import axios from 'axios';
import { toast } from 'react-toastify';
import {jwtDecode} from 'jwt-decode';
import {
  apiCallStart,
  loadReservationsSuccess,
  loadReservationsFail,
  removeToReservationsSuccess,
  removeToReservationsFail,
  addToReservationsSuccess,
} from '../actions/actionCreators';

const api = 'https://online-class-reservation-apis.onrender.com/api/v1';
const authToken = JSON.parse(localStorage.getItem('authToken'));
axios.defaults.headers.common.Authorization = authToken;

export const addToReservationsAsync = (teacher) => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    axios.defaults.headers.common.Authorization = authToken;
    const { user_id: userId } = jwtDecode(authToken);
    const response = await axios.post(`${api}/reservations/`, {
      user_id: userId,
      teacher_id: teacher.id,
    });
    dispatch(addToReservationsSuccess(response.data));
    toast.success('Add To Reservations succesffuly');
  } catch (error) {
    dispatch(
      loadReservationsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
    toast.error(
      error.response ? error.response.data.errors : 'Something went wrong',
    );
  }
};

export const removeToReservationsAsync = (reservationId) => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    const response = await axios.delete(
      `${api}/reservations/${reservationId}`,
      {
        headers: {
          Authorization: authToken,
        },
      },
    );
    dispatch(removeToReservationsSuccess(response.data));
    toast.success('Remove To Reservations succesffuly');
  } catch (error) {
    dispatch(
      removeToReservationsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
    toast.error(
      error.response ? error.response.data.errors : 'Something went wrong',
    );
  }
};

export const loadReservationsAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const authToken = JSON.parse(localStorage.getItem('authToken'));
    const { user_id: userId } = jwtDecode(authToken);
    const response = await axios.get(`${api}/reservations/${userId}`, {
      headers: {
        Authorization: authToken,
      },
    });
    dispatch(loadReservationsSuccess(response.data));
  } catch (error) {
    dispatch(
      loadReservationsFail(
        error.response ? error.response.data.errors : 'Something went wrong',
      ),
    );
  }
};
