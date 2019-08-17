import React, { Component } from 'react';
import { Row, Col } from 'antd';

import Profile from '../../assets/images/profile.jpg';

export default class About extends Component {
	render() {
		return (
			<section className="about-wrap" id="aboutme">
				<div className="container">
					<Row gutter={16} type="flex" justify="space-around" align="middle">
						<Col className="gutter-row" span={12}>
							<div className="gutter-box flex">
								<div className="img-wrap">
									<img src={Profile} alt="profile" />
								</div>
							</div>
						</Col>
						<Col className="gutter-row" span={12}>
							<div className="info-text">
								<div className="text-content">
									<h3 className="title">Hi! call me Milan.</h3>
									<p className="description">
										I'm a Web Developer, sometimes an Ui Designer and most of the times an
										Adventurer based in Kathmandu, Nepal.
									</p>
								</div>
								<div className="text-content">
									<h3 className="title">What i do?</h3>
									<p className="description">
										I'm responsible for implementing visual elements that users see and interact
										with in a web applications or websites. <br />
										In short, my work is to please your eyes.
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</section>
		);
	}
}
