var React = require('react');
import { Link } from 'react-router-dom'

var Parent = React.createClass({
	render: function () {
		return (
			<main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Hello parent!</h1>
						<p><Link to='/parentdo' className="pure-button xlarge">Get Student Info</Link></p>
							<p><Link to='/enroll' className="pure-button xlarge">Enroll Student  </Link></p>
							<p><Link to='/createreportcard' className="pure-button xlarge">Create a new report card  </Link></p>
							<p>Check grades</p>
          </div>
        </div>
      </main>
		);
	}
});

module.exports = Parent;
