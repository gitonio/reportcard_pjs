import React from 'react';
import GradeList from './GradeList';
import {connect} from 'react-redux';
import * as gradeActions from '../../actions/gradeAction';
import * as rcActions from '../../actions/reportCardActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class ManageListGrades extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reportcard: {
        reportcardAddress: '',
        reportcardName:''
      },
      grades: []
    };
    this.redirectToAddGradePage = this.redirectToAddGradePage.bind(this);

  }



  componentWillMount() {


    console.log(this.props.match.params.address);
    var rc = {reportcardAddress: this.props.match.params.address, reportcardName: this.props.match.params.reportcardName};
    var rca = this.props.match.params.address;
    //var rco = {reportcard: rc};
    console.log(rc);
    //console.log(store.getState());
    //let grades = [];
    this.setState({reportcard: rc, grades: []});
    this.props.rcactions.setReportCardAddress(rc);
    var self = this;
    console.log(this.props.reportcard);
        this.props.actions.loadGradesSuccess(rca).then(function(xyz ) {
          console.log('got grades');
          console.log(xyz);
          //return;
          //console.log(self.props.path);
          //this.props.history.push(self.props.path);
          //return;
          return self.setState({updated: 'yes', grades: self.props.grades });
      })
          .catch(error => {
            console.log('loadgrades error');
            toastr.error(error);
            //this.setState({saving: false});
          });

}

redirectToAddGradePage() {
  this.props.history.push(`/enterGrades/${this.props.match.params.address}/${this.props.match.params.reportcardName}`);
}

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            {/* <Link to={`/enterGrades/${this.props.match.params.address}/${this.props.match.params.reportcardName}`}>{this.props.match.params.address}</Link> */}
            <GradeList reportcard={this.state.reportcard} grades={this.props.grades}/>
            <button type="submit" className="pure-button" onClick={this.redirectToAddGradePage}>Add Grade</button>
          </div>
        </div>
      </main>
    );
  }

}



function mapStateToProps(state) {
  return {
    reportcard : state.reportcard,
    grades: state.grades
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gradeActions, dispatch),
    rcactions: bindActionCreators(rcActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageListGrades);
