import React, {PropTypes} from 'react';
//import web3Api from '../../api/web3Api.js'
import StudentList from '../common/StudentList.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as studentActions from '../../actions/studentActions';

class classRoomPage extends React.Component {
  //  constructor(props, context) {
  //    super(props, context);
  // //
  // //
  // //   this.state = {
  // //     Name: '',
  // //     SchoolAddress: '',
  // //     ReportCardAddress: '',
  // //     ReportCardAddress2: '',
  // //     students: [],
  // //     accounts: []
  // //   }
  //  }

  // enroll() {
  //   return web3Api.enrollStudent(this.state.SchoolAddress, this.state.ReportCardAddress2, 'Skylar').then(function(result) {
  //     console.log('result', result);
  //   });
  // }

  // componentDidMount() {
  //   console.log(this.props);
  //
  //   this.props.actions.loadStudentsSuccess();
  //
  // }


  render() {
    const {students} = this.props;

    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <button className="pure-button">Setup Test Data</button>
            <p>Your ClassRoom is installed and ready.</p>
            <h2>ClassRoom Contract Example</h2>
            <p>The below will show a school name by default if your contracts compiled and migrated successfully.</p>
            {/* <p>Schoolname: {this.state.Name}</p>
            <p>Classroom address: {this.state.SchoolAddress}</p>
            <p>ReportCard address: {this.state.ReportCardAddress}</p>
            <p>ReportCard address2: {this.state.ReportCardAddress2}</p> */}
            <button onClick={this.enroll}>Enroll student</button>
            <StudentList students={students}/>
          </div>
        </div>
      </main>
    );
  }
}

classRoomPage.propTypes = {
  students: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    students: state.students,
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(classRoomPage);
