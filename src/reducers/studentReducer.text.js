import expect from 'expect';
import studentReducer from './studentReducer';
import * as actions from '../../src/actions/studentActions';

import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';

// describe('Student Reducer', () => {
//   it('should add students when passed', () => {
//     const students = [
//       {
//         id: 1,
//         name: 'Novak',
//         address: 0x1
//       }
//     ];
//     const students2 = [
//       {
//         id: 1,
//         name: 'Novak',
//         address: 0x1
//       }
//     ];

//     deepFreeze(students);
//     const action = actions.loadStudentsSuccess("0x8c99c9d274f4658abf1eb7a422e741433c1f982e");
//     //const action = actions.loadStudents();
//     const newState = studentReducer(students2, action);
//     expect(newState.length).toEqual(1);
//     expect(newState[0].name).toEqual('Novak');
//   });
// });

const middleware = [promise];
const mockStore = configureMockStore(middleware);
describe('Async Actions', () => {
  it('should LOAD_STUDENTS_SUCCESS', (done) =>{
    const expectedActions = [
      {
        type: 'LOAD_STUDENTS_SUCCESS',
          reportCard: {
            reportcardAddress: 0x1
          ,
          students: [
            {
              id: 1,
              name: 'Novak',
              reportcardAddress: 0x1
            }
          ]
        }
      }
    ];

    const store = mockStore({
      students: []
    }, expectedActions,done);

    store.dispatch(actions.loadStudentsSuccess("0x1cdcc5f8215d7417d24a83fcaecd021b399a4ad2")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('LOAD_STUDENTS_SUCCESS');
      done();
    });

  })
});
