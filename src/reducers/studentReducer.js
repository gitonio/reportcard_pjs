//import initialState from './initialState';

export default function studentReducer(state = [{id:null, name:null, reportcardAddress: null}], action) {
  switch(action.type) {

    case 'LOAD_STUDENTS_SUCCESS':
      console.log(action);
      return action.payload;


    default:
      return state;
  }
}
