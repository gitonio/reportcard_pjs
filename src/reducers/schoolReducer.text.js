import  schoolReducer  from './schoolReducer'
import * as actions from '../../src/actions/schoolActions'
import C from '../../src/actions/constants'
import expect from 'expect';

import promise from 'redux-promise';
import configureMockStore from 'redux-mock-store';

describe("school Reducer", () => {
  it("SCHOOL_ADD_SUCCESS1", () => {
      const state = {}
      const action = {
          type: C.SCHOOL_ADD_SUCCESS,
          schoolName: 'Bay Park'
      }
      const result = schoolReducer(state, action)
          expect(result).toEqual(action.payload)


  })

  it("SCHOOL_LOAD_SUCCESS", () => {
      const state = '';
      const action = actions.setSchoolSuccess('Bay Park');

      const result = schoolReducer(state, action)
          expect(result.schoolName).toEqual(action.schoolName)


  })



})

const middleware = [promise];
const mockStore = configureMockStore(middleware);
describe('Async Actions', () => {
  it('should SCHOOL_ADD_SUCCESS', (done) =>{
    const expectedActions = [
        {
            type: C.SCHOOL_ADD_SUCCESS,
            schoolName: 'Bay Park'
        }
    ];
    const store = mockStore({
      students: []
    }, expectedActions);

    store.dispatch(actions.addSchool("Bay Park")).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('SCHOOL_ADD_SUCCESS');
      done();
    });

  })
});
