var React = require('react');

var AddSchoolForm = React.createClass({
  render: function() {
    return (

      <form className="pure-form pure-form-aligned">
        <fieldset>
          <div className='pure-control-group'>
            <input  type="text" name="schoolName" placeholder="School name..." onChange={this.props.onChange} value={this.props.school.schoolName} required/>
          </div>
          <button type="submit" className="pure-button" onClick={this.props.onSubmit}>ADD</button>
        </fieldset>
      </form>

    )
  }
})

module.exports = AddSchoolForm;
