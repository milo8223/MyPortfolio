import React, { Component } from 'react';
import { Icon } from 'antd';

import FB from '../../assets/icons/facebook.svg';

export default class SocialContact extends Component {
	render() {
		return (
			<section className="social-wrap" id="socialContact">
				<div className="container">
					<div className="social-content">
						<div className="heading">
							<h2 className="title">Or Socialize With Me</h2>
						</div>
						<div className="social-list">
							<div className="list-content fb">
								<a href="https://www.facebook.com/milan.thapa.3726" target="_blank">
									<div className="icon-wrap img-wrap">
										<img src={FB} alt="fb" />
									</div>
								</a>
							</div>
							<div className="list-content twitter">
								<a href="https://twitter.com/MilanMalla23" target="_blank">
									<Icon type="twitter" />
								</a>
							</div>
							<div className="list-content instagram">
								<a href="https://www.instagram.com/milan_malla07" target="_blank">
									<Icon type="instagram" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
