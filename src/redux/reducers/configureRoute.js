import { combineReducers } from 'redux';
import auth from './authen';
import teachers from './teachersReducer';
import reservations from './reservationsReducer';

const reducer = combineReducers({ auth, teachers, reservations });

export default reducer;
