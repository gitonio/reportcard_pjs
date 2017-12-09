var React = require('react');
var EnrollForm = require('./enrollForm');
import { connect } from 'react-redux';
import * as actions from '../../actions/enrollActions';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

var ManageEnrollForm = React.createClass({
  getInitialState: function() {
    return {
      reportcard: {
        reportcardAddress: '',
        schoolAddress: '',
        studentName: ''
      }
    };
  },
  setParentFormState: function(event) {
    const field = event.target.name;
    let reportcard = this.state.reportcard;
    reportcard[field] = event.target.value;
    return this.setState({reportcard: reportcard});
  },
  enrollStudent: function(event) {
    event.preventDefault();

    this.props.actions.enrollStudent(this.state.reportcard.schoolAddress, this.state.reportcard.reportcardAddress,this.state.reportcard.studentName);

    //return this.setState({reportcard: this.state.reportcard})
  },

  render: function() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <EnrollForm reportcard={this.state.reportcard} onChange={this.setParentFormState} onSubmit={this.enrollStudent}/>
          </div>
        </div>
      </main>
    );
  }
});

function mapStateToProps(state) {
  return { 
    reportcard: state.reportcard,
    school: state.school 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageEnrollForm);
