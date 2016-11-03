$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function (win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;
			console.log('this.props.route = ' + this.props.route);
			switch(this.props.route) {
				case 'about': Child = About; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);
		}
	});

	function render() {
		console.log('win.location.has = ' + win.location.hash);
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app')); // go take our Homepage component and attach it to our dom element with id of app
	}

	win.addEventListener('hashchange', render);
	render();
})(window);
