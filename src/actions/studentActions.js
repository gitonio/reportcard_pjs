import web3Api from '../api/web3Api';
import C from "./constants";

// export function loadStudentsSuccess(students) {
//   //const request = web3Api.getStudentList();
//   console.log(students);
//   return {type: 'LOAD_STUDENTS_SUCCESS', students};
// }

export function loadStudentsSuccess(schoolAddress) {
  let request = web3Api.getStudentList(schoolAddress);
  //console.log(request);
  return {type: C.LOAD_STUDENTS_SUCCESS, payload: request};
}

//   export function loadStudents() {
//     return function (dispatch) {
//       return web3Api.getStudentList().then( students => {
//         console.log(students);
//         dispatch(loadStudentsSuccess(students));
//       }).catch(error => {
//         throw(error);
//       });
//     }
// }
