import React, {PropTypes, Component} from 'react';
import { Link } from 'react-router-dom'

class StudentList  extends Component {


    createStudentRow (student) {
      console.log(student);
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name} :</td>
          <td><Link to={`/listGrades/${student.reportcardAddress}/${student.name}`}>{student.reportcardAddress}</Link></td>
        </tr>
      );
    };

    render() {
      console.log(this.props.students);
      return (
        <div>
          <table className="pure-table">
            <thead>
              <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
            </tr>
            </thead>
            <tbody>
              {this.props.students.map(this.createStudentRow)}
            </tbody>
          </table>
        </div>
      );

    }

}


StudentList.propTypes = {
  students: PropTypes.array.isRequired
}




export default StudentList;
