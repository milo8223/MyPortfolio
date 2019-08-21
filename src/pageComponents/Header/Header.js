import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Head from './Head';
import { Affix } from 'antd';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0
		};
	}

	componentDidMount() {
		const height = this.divElement.clientHeight;
		this.setState({ height });
	}
	render() {
		return (
			<div
				className="home-banner"
				id="introduction"
				ref={(divElement) => (this.divElement = divElement)}
			>
				<Affix>
					<Head height={this.state.height} />
				</Affix>
				<div className="banner-content">
					<div className="text-content">
						<div className="title">Hello, I'm Milan Thapa</div>

						<div className="caption">
							A{' '}
							<ReactTypingEffect speed={200} eraseDelay={2500} text={[ 'Web Developer', 'Web Designer', 'Tech Enthusiast' ]} />
						</div>
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
