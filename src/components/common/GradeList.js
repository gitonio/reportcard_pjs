import React from 'react';

const GradeList = ({reportcard, grades}) => {

  var createGradeRow = function(student) {
    return (
      <tr key={student.id}>
        <td>{student.subject}</td>
        <td>{student.grade}
        </td>
      </tr>
    );
  }
  console.log(reportcard);
  console.log(grades);

  return (
    <div>
      <h1>Grades</h1>
      <p>Report Card Address: {reportcard.reportcardAddress}</p>
      <p>Student Name: {reportcard.reportcardName}</p>

      <table className="pure-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {grades.map(createGradeRow, this)}
        </tbody>
      </table>
    </div>
  );
}

GradeList.propTypes = {
  //grades: PropTypes.array.isRequired
};

export default GradeList;
