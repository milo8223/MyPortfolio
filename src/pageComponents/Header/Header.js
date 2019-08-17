import React, { Component } from 'react';

import Head from './Head';

export default class Header extends Component {
	render() {
		return (
			<div className="home-banner" id="introduction">
				<Head />
				<div className="banner-content">
					<div className="text-content">
						<div className="title">Hello, I'm Milan Thapa</div>
						<div className="caption">A Web Developer</div>
					</div>
				</div>
				<div className="move-down">
					<div className="banner-mouse">
						<div className="mouse-bar animated infinite bounce" />
					</div>
				</div>
			</div>
		);
	}
}
