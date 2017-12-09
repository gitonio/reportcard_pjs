import web3Api from '../api/web3Api';

// export function loadAccountsSuccess(accounts) {
//   console.log(accounts);
//   return {type: 'LOAD_ACCOUNTS_SUCCESS', accounts};
// }
//
// export function loadAccounts() {
//   return function(dispatch) {
//     return web3Api.getAccounts().then(accounts => {
//       console.log(accounts);
//       dispatch(loadAccountsSuccess(accounts));
//     }).catch(error => {
//       throw(error);
//     });
//   }
// }

export function loadAccountsSuccess() {
  const accounts = web3Api.getAccounts();
  return {type: 'LOAD_ACCOUNTS_SUCCESS', payload: accounts };
}
