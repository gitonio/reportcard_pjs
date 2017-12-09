import React, {PropTypes} from 'react';
import StudentList from '../common/StudentList.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentActions from '../../actions/studentActions';

class Teacher extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      students: []
    };
  };

	componentDidMount() {
		console.log(this.props.school.schoolAddress);
    this.props.actions.loadStudentsSuccess(this.props.school.schoolAddress);
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Hello Teacher!</h1>
            <StudentList students={this.props.students}/>
          </div>
        </div>
      </main>
    );
  }
}

Teacher.propTypes = {
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
		students: state.students,
		school: state.school
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);
