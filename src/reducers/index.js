import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import students from './studentReducer';
import grades from './gradeReducer';
import accounts from './accountsReducer';
import reportcard from './reportCardReducer';
import school from './schoolReducer';

const rootReducer = combineReducers({
  students: students,
  grades: grades,
  accounts,
  reportcard,
  school,
  routerReducer
});

export default rootReducer;
