import {
  API_CALL_SUCCESS,
  LOAD_TEACHERS_SUCCESS,
  LOAD_TEACHERS_FAIL,
} from '../actions/actionTypes';

const initialstate = {
  loading: false,
  list: [],
  error: null,
};

const teachers = (state = initialstate, action) => {
  switch (action.type) {
    case API_CALL_SUCCESS:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_TEACHERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };

    case LOAD_TEACHERS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default teachers;
