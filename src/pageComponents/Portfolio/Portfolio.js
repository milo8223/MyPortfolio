import React, { Component } from 'react';
import PortContent from './PortContent';

export default class Portfolio extends Component {
	render() {
		return (
			<section className="portfolio-wrap" id="portfolio">
				<div className="learn-content">
					<div className="container">
						<div className="heading">
							<h2 className="title">Portfolio</h2>
							<p className="caption">
								I have been involved in many projects, here are some of them.
							</p>
						</div>
					</div>
					<PortContent />
				</div>
			</section>
		);
	}
}
