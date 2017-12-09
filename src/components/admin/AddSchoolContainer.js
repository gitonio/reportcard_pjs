import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/schoolActions';
import AddSchoolForm from './AddSchoolForm';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';


export class AdminPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      school: {
        schoolAddress: '',
        schoolName:''
      },
    };
    this.redirectPage = this.redirectPage.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.setParentFormState = this.setParentFormState.bind(this);

  }


  setParentFormState(event) {
    const field = event.target.name;
    let school = this.state.school;
    school[field] = event.target.value;
    return this.setState({school: school});
  }

addSchool(event) {
  event.preventDefault();
  this.props.actions.addSchool(this.state.school.schoolName, () => {
    toastr.success('School entered' + this.props.school.schoolAddress);
  });
}
redirectPage() {
  //this.props.history.push(`/enterGrades/${this.props.match.params.address}/${this.props.match.params.reportcardName}`);
}
componentWillReceiveProps(nextProps) {
  if (this.props.school.schoolName !== nextProps.school.schoolName) {
    // Necessary to populate form when existing course is loaded directly.
    this.setState({school: Object.assign({}, nextProps.school)});
  }
}

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">

            <AddSchoolForm school={this.state.school} onChange={this.setParentFormState} onSubmit={this.addSchool}/>
            School address:             {this.props.school.schoolAddress}
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
