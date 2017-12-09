var React = require('react');

var CreateReportCardForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <h1>Create Report Card</h1>
          <div className='pure-control-group'>
            <label htmlFor="student address">Student Address</label>
            <input type="text" name="studentAddress" placeholder="0x0" ref="studentAddress" onChange={this.props.onChange} value={this.props.reportcard.studentAddress}/>
          </div>
          <div className='pure-control-group'>
            <label htmlFor="Student name">Student Name</label>
            <input type="text" name="studentName" placeholder="0x0" ref="studentName" onChange={this.props.onChange} value={this.props.reportcard.studentName}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit}>Create</button>
        </fieldset>
      </form>

    )
  }
})

module.exports = CreateReportCardForm;
