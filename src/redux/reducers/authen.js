import {
  API_CALL_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNOUT_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  isAuthenticated: false,
  error: null,
  currentUser: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        error: null,
        loading: false,
        currentUser: action.payload,
      };

    case REGISTER_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: action.payload,
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

    case SIGNOUT_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default auth;
