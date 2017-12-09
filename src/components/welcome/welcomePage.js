var React = require('react');

var Welcome = React.createClass({
	render: function () {
		return (
			<main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Report Card Smart Contract</h1>
            <ul>
              <li>Create a report card</li>
              <li>Create a school</li>
							<li>Enroll students</li>
							<li>Set goals</li>
							<li>Fund reward</li>
							<li>Enter grades</li>
							<li>Collect reward</li>
            </ul>
          </div>
        </div>
      </main>
		);
	}
});

module.exports = Welcome;
