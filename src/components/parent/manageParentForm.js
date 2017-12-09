var React = require('react');
var ParentForm = require('./parentForm');
import { connect } from 'react-redux';
import * as actions from '../../actions/reportCardActions';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

var ManageParentForm = React.createClass({
  getInitialState: function() {
    return {
      reportcard: {
        reportcardAddress: '',
        studentAddress: '',
        studentName: '',
        gpaGoal: '',
        balance: ''
      }
    };
  },

  componentWillMount() {
   this.setState(this.props.reportcard );
 
  },

  setParentFormState: function(event) {
    const field = event.target.name;
    let reportcard = this.state.reportcard;
    reportcard[field] = event.target.value;
    return this.setState({reportcard: reportcard});
  },

  searchStudent: function(event) {
    event.preventDefault();
    this.props.actions.searchReportCard(this.state.reportcard.reportcardAddress);
  },

  somethingelse: function(event) {
    event.preventDefault();
    alert('whoops here it is');
  },

  componentWillReceiveProps(nextProps) {
  if (this.props.reportcard.studentName !== nextProps.reportcard.studentName) {
    let newReportcard = Object.assign({},this.state.reportcard);
    newReportcard.studentName = nextProps.reportcard.studentName;
    newReportcard.studentAddress = nextProps.reportcard.studentAddress;
    this.setState({reportcard: newReportcard} );
    toastr.success("Report card found");
  }
},


  render: function() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <ParentForm reportcard={this.state.reportcard} onChange={this.setParentFormState} onSubmit1={this.searchStudent} onSubmit2={this.somethingelse}/>
          </div>
        </div>
      </main>
    );
  }
});

function mapStateToProps(state) {
  return { reportcard: state.reportcard }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageParentForm);
