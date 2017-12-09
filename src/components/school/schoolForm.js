var React = require('react');

var SchoolForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <h1>School Address</h1>
          <div className='pure-control-group'>
            <label htmlFor="School address">School Address</label>
            <input type="text" name="schoolAddress" placeholder="0x0" ref="schoolAddress" onChange={this.props.onChange} value={this.props.school.schoolAddress}/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit}>Set School</button>
          <button type="submit" className="pure-button" onClick={this.props.onSubmitThunk}>Set School Thunk</button>
        </fieldset>
      </form>

    )
  }
})

module.exports = SchoolForm;
