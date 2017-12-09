//import initialState from './initialState';


export default function reportCardReducer(state = '', action) {
  switch(action.type) {

      case 'SET_REPORTCARDADDRESS':

        //return action.reportcard;
        console.log(action);
        var rc = {reportcardAddress: action.reportcard.reportcardAddress, reportcardName: action.reportcard.reportcardName};
        //var rco = {reportcard: rc};
        console.log(rc);
        return rc;

        //return Object.assign({},  action.reportcard.reportcard);

    case 'CREATE_REPORTCARD_SUCCESS':
        return action.payload;

    case 'SEARCH_REPORTCARD_SUCCESS':
      return action.payload;

    default:
      console.log(action);
      return state;
  }
}
