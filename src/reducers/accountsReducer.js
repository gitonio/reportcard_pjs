import initialState from './initialState';

export default function accountsReducer(state = initialState.accounts, action) {
  switch (action.type) {

    case 'LOAD_ACCOUNTS_SUCCESS':
      console.log(action);
      return action.accounts;

    default:
      return state;
  }
}
