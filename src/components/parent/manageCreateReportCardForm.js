var React = require('react');
var CreateReportCardForm = require('./createReportCardForm');
import { connect } from 'react-redux';
import * as reportCardActions from '../../actions/reportCardActions';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';

var ManageCreateReportCardForm = React.createClass({
  getInitialState: function () {
    return {
      reportcard: {
        reportcardAddress: '',
        studentAddress: '',
        studentName: ''
      }
    };
  },

  setParentFormState: function (event) {
    const field = event.target.name;
    let reportcard = this.state.reportcard;
    reportcard[field] = event.target.value;
    return this.setState({ reportcard: reportcard });
  },

  createReportCard: function (event) {
    event.preventDefault();
    this.props.actions.createReportCard(this.state.reportcard.studentName, this.state.reportcard.studentAddress);
  },

  render: function () {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <CreateReportCardForm reportcard={this.state.reportcard} onChange={this.setParentFormState} onSubmit={this.createReportCard} />
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
    actions: bindActionCreators(reportCardActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCreateReportCardForm);
