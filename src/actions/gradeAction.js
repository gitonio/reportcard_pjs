import web3Api from '../api/web3Api';

export function enterGrades(reportcardAddress, subject, grade, callback) {
  const request = web3Api.enterGrades( reportcardAddress, subject, grade).then( () => callback()
  );
    console.log(request);
    return { type: 'ENTER_GRADES', payload: request }
}

// Using thunks:
// export function loadGradesSuccess(grades) {
//   console.log(grades);
//   return {type: 'LOAD_GRADES_SUCCESS', grades};
// }
//
//
// export function loadGrades(rca) {
//   return function (dispatch) {
//     return web3Api.getGrades(rca).then( grades => {
//       console.log('dispatch', grades);
//       dispatch(loadGradesSuccess(grades));
//     }).catch(error => {
//       throw(error);
//     });
//   }
// }

export function loadGradesSuccess(rca) {
  const grades = web3Api.getGrades(rca);
  console.log(grades);
  return {type: 'LOAD_GRADES_SUCCESS', payload: grades };
}
