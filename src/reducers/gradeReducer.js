import initialState from './initialState';

export default function gradeReducer(state = initialState.grades, action) {
  switch(action.type) {

    // case 'ENTER_GRADES':
    //   return Object.assign([], action.subjects);

    case 'LOAD_GRADES_SUCCESS':
      console.log(action);
        return action.payload;

    // case 'ENTER_GRADES':
    //   return Object.assign({}, state, action.payload);

    default:
      console.log(action);
      return state;
  }
}
