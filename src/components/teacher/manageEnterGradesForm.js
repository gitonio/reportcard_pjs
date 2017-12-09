import React from 'react';
import EnterGradesForm from './enterGradesForm';
import {connect} from 'react-redux';
import * as gradeActions from '../../actions/gradeAction';
import * as reportCardActions from '../../actions/reportCardActions';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';

class ManageEnterGradesForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportcard: {
        reportcardAddress: '',
        reportcardName: '',
        subject: '',
        grade: 0
      }
    };

    this.enterGrades = this.enterGrades.bind(this);
    this.setParentFormState = this.setParentFormState.bind(this);
  }

  componentWillMount() {
     const rc = {
      reportcardAddress: this.props.match.params.address,
      reportcardName: this.props.match.params.reportcardName
     };
   this.setState({reportcard: rc});
   }

  setParentFormState(event) {
    const field = event.target.name;
    let reportcard = this.state.reportcard;
    reportcard[field] = event.target.value;
    return this.setState({reportcard: reportcard});
  }

  enterGrades(event) {
    event.preventDefault();
    console.log(this.state.reportcard.reportcardAddress);
    this.props.actions.enterGrades(this.props.match.params.address, this.state.reportcard.subject, this.state.reportcard.grade, () => {
      //this.props.history.push('/');
      toastr.success('Grade Entered');
      this.props.history.push(`/listGrades/${this.props.match.params.address}/${this.props.match.params.reportcardName}`);
    });
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            {/* <GradeList reportcard={this.state.reportcard} grades={this.props.grades}/> */}
            <EnterGradesForm reportcard={this.state.reportcard} subject={this.state.subject} grade={this.state.grade} onChange={this.setParentFormState} onSubmit2={this.enterGrades}/>
          </div>
        </div>
      </main>
    );
  }

}

function mapStateToProps(state) {
  return {reportcard: state.reportcard, grades: state.grades}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(gradeActions, dispatch),
    rcactions: bindActionCreators(reportCardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEnterGradesForm);
