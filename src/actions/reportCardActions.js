import web3Api from '../api/web3Api';

export function setReportCardAddress(reportcard) {
  return {type: 'SET_REPORTCARDADDRESS', reportcard};
}

export function createReportCard(studentName, studentAddress) {
  const reportcard = web3Api.createReportCard(studentName, studentAddress).then(function(reportcardAddress){
    return {reportcardAddress: reportcardAddress, reportcardName: studentName}
  });
  return {type: 'CREATE_REPORTCARD_SUCCESS', payload: reportcard}
}

export function searchReportCard(reportcardAddress) {
  const reportcard = web3Api.searchReportCard(reportcardAddress).then(function(promiseArray){
    return {reportcardAddress: reportcardAddress, studentAddress: promiseArray[1],  studentName: promiseArray[0]}
  });
      // web3Api.getStudentName(this.state.reportcard.reportcardAddress).then(function(result) {
    //   self.state.reportcard['studentName'] = result;
    //   return self.setState({reportcard: self.state.reportcard});
    // });

    // web3Api.getStudentAddress(this.state.reportcard.reportcardAddress).then(function(result) {
    //   self.state.reportcard['studentAddress'] = result;
    //   return self.setState({reportcard: self.state.reportcard});
    // });

    // web3Api.getReportCardBalance( this.state.reportcard.reportcardAddress).then(function(result) {
    //   self.state.reportcard['balance'] = result;
    //   console.log('balance!', result.valueOf());
    // });
    // web3Api.getGPAGoal( this.state.reportcard.reportcardAddress).then(function(result) {
    //   self.state.reportcard['gpaGoal'] = result;
    //   console.log('gpaGoal!', result.valueOf());
    // });

  return {type: 'SEARCH_REPORTCARD_SUCCESS', payload: reportcard}
}