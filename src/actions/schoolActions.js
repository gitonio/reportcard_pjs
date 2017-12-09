import web3Api from '../api/web3Api';

export function setSchool(schoolAddress, callback) {
  const school = web3Api.getSchoolNameByAddress(schoolAddress).then(function(res){
    callback();
    return  {schoolAddress: schoolAddress, schoolName: res ? res : 'No school Found'}
  }).catch(function(e){
    return { type: 'SCHOOL_LOAD_ERROR', payload: e }
  });

  return { type: 'SCHOOL_LOAD_SUCCESS', payload: school }
}


export function setSchoolSuccess(schoolAddress, schoolName) {
  const school = {schoolAddress: schoolAddress, schoolName: schoolName};
  return { type: 'SCHOOL_LOAD_SUCCESS_THUNK', payload: school}
}

export function setSchoolThunk(schoolAddress, callback ) {
  return function(dispatch) {
    web3Api.getSchoolNameByAddress(schoolAddress).then(schoolName => {
      dispatch(setSchoolSuccess(schoolAddress, schoolName));
      callback();
    }).catch(error => {
      throw(error);
    });
  };
}





export function addSchool(schoolName) {

  const school = web3Api.addSchool(schoolName).then(function(schoolAddress){
    return {schoolAddress: schoolAddress, schoolName: schoolName}
  })

  return { type: 'SCHOOL_ADD_SUCCESS', payload: school }

}
