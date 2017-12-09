import web3Api from '../api/web3Api';

export function enrollStudent(schoolAddress, reportcardAddress, studentName) {
  const school = web3Api.enrollStudent(schoolAddress, reportcardAddress, studentName).then(function(schoolAddress){
    return {schoolAddress: schoolAddress}
  })

  return { type: 'ENROLL_STUDENT', school}
}


