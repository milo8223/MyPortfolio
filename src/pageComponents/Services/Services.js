import React, { Component } from 'react';
import { Row, Col } from 'antd';

import AppIcon from '../../assets/icons/app.svg';
import CodingIcon from '../../assets/icons/coding.svg';
import ComputerIcon from '../../assets/icons/computer.svg';
import TalkingIcon from '../../assets/icons/conversation.svg';
import SupportIcon from '../../assets/icons/support.svg';
import WebIcon from '../../assets/icons/graphic-design.svg';

import { data } from './data';

export default class Services extends Component {
	renderSwitch = (param) => {
		switch (param) {
			case 'CodingIcon':
				return <img src={CodingIcon} alt="icon" />;
			case 'AppIcon':
				return <img src={AppIcon} alt="icon" />;
			case 'ComputerIcon':
				return <img src={ComputerIcon} alt="icon" />;
			case 'SupportIcon':
				return <img src={SupportIcon} alt="icon" />;
			case 'WebIcon':
				return <img src={WebIcon} alt="icon" />;
			default:
				return <img src={TalkingIcon} alt="icon" />;
		}
	};
	render() {
		return (
			<section className="service-wrap" id="services">
				<div className="container">
					<div className="heading">
						<h2 className="title">What I Offer ?</h2>
					</div>
					<div className="service-content">
						{data.map((val, i) => {
							return (
								<div className="content-wrap">
									<div className="icon-wrap img-wrap">{this.renderSwitch(val.img)}</div>
									<div className="text-content">
										<h3 className="title">{val.title}</h3>
										<p className="description">{val.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		);
	}
}
