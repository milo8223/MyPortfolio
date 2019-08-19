import React, { Component } from 'react';
import LearnSlick from './LearnSlick';

export default class Language extends Component {
	render() {
		return (
			<section className="learn-wrap" id="learn">
				<div className="container">
					<div className="learn-content">
						<div className="heading">
							<h2 className="title">What I Know ?</h2>
						</div>
						<LearnSlick />
					</div>
				</div>
			</section>
		);
	}
}
