import React from 'react';
import { Link } from 'react-router-dom'

var EnterGradesForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <h1>Enter Grades</h1>
          <p>Report Card Address: {this.props.reportcard.reportcardAddress}</p>
          <p>Student Name: {this.props.reportcard.reportcardName}
          </p>
          <div className='pure-control-group'>
            <label htmlFor="gpaGoal">Subject Grade</label>
            <input type="text" name="subject" placeholder="Writing" ref="subject" onChange={this.props.onChange} value={this.props.subject}/>
            <input type="text" name="grade" placeholder="4.0" ref="grade" onChange={this.props.onChange} value={this.props.grade}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit2}  >Add</button>
          <Link to="/teacher" className="pure-button" style={{margin:"25px"}}>Cancel</Link>
        </fieldset>
      </form>

    )
  }
});

export default EnterGradesForm;
