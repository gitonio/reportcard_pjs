import initialState from './initialState';

export default function schoolReducer(state = initialState.school, action) {
  switch (action.type) {

    case 'SCHOOL_LOAD_SUCCESS_THUNK':
      return {...state,  schoolAddress: action.payload.schoolAddress, schoolName: action.payload.schoolName };

    case 'SCHOOL_LOAD_SUCCES':
      return action.payload;

    case 'SCHOOL_ADD_SUCCESS':
      return action.payload;



    default:
      return state;
  }
}
