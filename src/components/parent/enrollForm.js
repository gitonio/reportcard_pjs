var React = require('react');

var EnrollForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <h1>Enroll Student</h1>
          <div className='pure-control-group'>
            <label htmlFor="School address">School Address</label>
            <input type="text" name="schoolAddress" placeholder="0x0" ref="schoolAddress" onChange={this.props.onChange} value={this.props.reportcard.schoolAddress}/>
          </div>
          <div className='pure-control-group'>
            <label htmlFor="reportcard address">Report Card Address</label>
            <input type="text" name="reportcardAddress" placeholder="0x0" ref="reportcardAddress" onChange={this.props.onChange} value={this.props.reportcard.reportcardAddress}/>
          </div>
          <div className='pure-control-group'>
            <label htmlFor="Student name">Student Name</label>
            <input type="text" name="studentName" placeholder="0x0" ref="studentName" onChange={this.props.onChange} value={this.props.reportcard.studentName}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit}>Enroll</button>
        </fieldset>
      </form>

    )
  }
})

module.exports = EnrollForm;
