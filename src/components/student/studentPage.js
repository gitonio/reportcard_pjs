var React = require('react');

var Student = React.createClass({
	render: function () {
		return (
			<main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Good to Go!</h1>
            <ul>
              <li>Check grades</li>
              <li>Check balance</li>
              <li>Get reward</li>
            </ul>
          </div>
        </div>
      </main>
		);
	}
});

module.exports = Student;
