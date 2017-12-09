import React from 'react';
import SchoolForm from './schoolForm';
import {connect} from 'react-redux';
import * as actions from '../../actions/schoolActions';

import {bindActionCreators} from 'redux';
import toastr from 'toastr';

export class SchoolFormContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      school: {
        schoolAddress: '',
        schoolName:''
      },
    };
    this.redirectPage = this.redirectPage.bind(this);
    this.setSchool = this.setSchool.bind(this);
    this.setSchoolThunk = this.setSchoolThunk.bind(this);
    this.setParentFormState = this.setParentFormState.bind(this);

  }


  setParentFormState(event) {
    const field = event.target.name;
    let school = this.state.school;
    school[field] = event.target.value;
    console.log("setParentFormState", school);
    return this.setState({school: school});
  }

  setSchool(event) {
    event.preventDefault();
    this.props.actions.setSchool(this.state.school.schoolAddress, () => {
      console.log(this.state);
      toastr.success('School entered' + this.props.school.schoolName);
    });
  }

  setSchoolThunk(event) {
    console.log('here',this.state.school.schoolAddress );
    event.preventDefault();
    this.props.actions.setSchoolThunk(this.state.school.schoolAddress, () => {
      console.log("this.state", this.state);
      toastr.success('School entered' + this.props.school.schoolName);
    });
  }

redirectPage() {
  //this.props.history.push(`/enterGrades/${this.props.match.params.address}/${this.props.match.params.reportcardName}`);
}

componentWillReceiveProps(nextProps) {
  if (this.props.school.schoolName !== nextProps.school.schoolName) {
    console.log(nextProps);
    // Necessary to populate form when existing course is loaded directly.
    this.setState({school: Object.assign({}, nextProps.school)});
  }
}

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">

            <SchoolForm school={this.state.school} onChange={this.setParentFormState} onSubmit={this.setSchool} onSubmitThunk={this.setSchoolThunk}/>
            School name:             {this.props.school.schoolName}
          </div>
        </div>
      </main>
    );
  }

}



function mapStateToProps(state) {
  return {
    school : state.school,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolFormContainer);
