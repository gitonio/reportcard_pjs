import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

var Header = React.createClass({

  render: function() {
		const someText = `${this.props.school.schoolName ? this.props.school.schoolName : 'Set School'}`;
      return (
      <nav className="navbar pure-menu pure-menu-horizontal">
        <Link to="/" className="pure-menu-heading pure-menu-link">Welcome</Link>
        <ul className="pure-menu-list">
          <li className="pure-menu-item">
            <Link to="/admin" className="pure-menu-link">Administrator</Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/teacher" className="pure-menu-link">Teacher</Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/parent" className="pure-menu-link">Parents</Link>
          </li>
          <li className="pure-menu-item">
            <Link to="/student" className="pure-menu-link">Students</Link>
          </li>
					<li className="pure-menu-item" style={{float:'right'}}>
            <Link to="/school" className="pure-menu-link">{someText}</Link>
          </li>
        </ul>
      </nav>
    );
  }
});

function mapStateToProps(state, ownProps) {
  return {school: state.school};
}

export default connect(mapStateToProps)(Header);
