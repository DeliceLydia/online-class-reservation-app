import {
  API_CALL_SUCCESS,
  ADD_TO_RESERVATIONS_SUCCESS,
  ADD_TO_RESERVATIONS_FAIL,
  REMOVE_TO_RESERVATIONS_SUCCESS,
  REMOVE_TO_RESERVATIONS_FAIL,
  LOAD_RESERVATIONS_SUCCESS,
  LOAD_RESERVATIONS_FAIL,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  list: [],
  error: null,
};

const reservations = (state = initialstate, action) => {
  switch (action.type) {
    case API_CALL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ADD_TO_RESERVATIONS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        error: null,
      };

    case ADD_TO_RESERVATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case REMOVE_TO_RESERVATIONS_SUCCESS:
      return {
        ...state,
        list: state.list.filter(
          (reservation) => reservation.id !== action.payload.id,
        ),
        loading: false,
        error: null,
      };

    case REMOVE_TO_RESERVATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case LOAD_RESERVATIONS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };

    case LOAD_RESERVATIONS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reservations;
