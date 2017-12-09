var React = require('react');

var ParentForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <h1>Search Student</h1>
          <div className='pure-control-group'>
            <label htmlFor="reportcard address">Report Card Address</label>
            <input type="text" name="reportcardAddress" placeholder="0x0" ref="reportcardAddress" onChange={this.props.onChange} value={this.props.reportcard.reportcardAddress}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit1}>Search</button>
          <p>Student Address:   {this.props.reportcard.studentAddress}  </p>
          <p>Student Name:      {this.props.reportcard.studentName}     </p>
          <p>Balance:           {this.props.reportcard.balance}         </p>
          <div className='pure-control-group'>
            <label htmlFor="gpaGoal">GPA Goal</label>
            <input type="text" name="gpaGoal" placeholder="4.0" ref="gpaGoal" onChange={this.props.onChange} value={this.props.reportcard.gpaGoal}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit2}>Update</button>
        </fieldset>
      </form>

    )
  }
});

module.exports = ParentForm;
