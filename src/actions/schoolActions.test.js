import expect from 'expect';
import * as schoolActions from './schoolActions';
//import * as types from './actionTypes';

import thunk from 'redux-thunk';
//import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
// describe('School Actions', () => {
//   describe('setSchoolSuccess', () => {
//     it('should set schoolName', () => {
//       //arrange
//       const schoolName = 'Bay Park';
//       const expectedAction = {
//         type: 'SCHOOL_LOAD_SUCCESS_THUNK',
//         schoolName: 'Bay Park'
//       };
//
//       //act
//       const action = schoolActions.setSchoolSuccess(schoolName);
//
//       //assert
//       expect(action).toEqual(expectedAction);
//     });
//   });
// });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  // afterEach(() => {
  //   nock.cleanAll();
  // });

  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    // Here's an example call to nock.
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200, { body: { course: [{ id: 1, firstName: 'Cory', lastName: 'House'}] }});

    const expectedActions =
      [{type: 'SCHOOL_LOAD_SUCCESS_THUNK', schoolName: 'Bay Park'}]


    const store = mockStore( {schoolName: 'Test School'} , expectedActions);

    const temp = schoolActions.setSchoolThunk('0x1cdcc5f8215d7417d24a83fcaecd021b399a4ad2', () => console.log('hi') );
    console.log('temp': temp);
    store.dispatch(schoolActions.setSchoolThunk('0x1cdcc5f8215d7417d24a83fcaecd021b399a4ad2', () => console.log('hi') )).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('SCHOOL_LOAD_SUCCESS_THUNK');
      done();
    });
  });
});
