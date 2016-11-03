"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getInitialState: function() {
		return {
			authors: []
		};
	},

	componentWillMount: function () {
		this.setState({ authors: AuthorApi.getAllAuthors() });
	},

	render: function() {

		return (
			<div>
				<h1>Authors</h1>

			</div>
		);
	}
});

module.exports = Authors;