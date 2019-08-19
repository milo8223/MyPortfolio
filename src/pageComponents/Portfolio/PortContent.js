import React, { Component } from 'react';
import Slider from 'react-slick';

import { slickdata } from './data';

import bondor from '../../assets/images/bondor.jpg';
import haynes from '../../assets/images/haynes.jpg';
import captivation from '../../assets/images/captivation.jpg';

export default class PortContent extends Component {
	renderSwitch = (param) => {
		switch (param) {
			case 'haynes':
				return <img className={param} src={haynes} alt="haynes" />;
			case 'bondor':
				return <img className={param} src={bondor} alt="bondor" />;

			default:
				return <img className={param} src={captivation} alt="captivation" />;
		}
	};
	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplaySpeed: 0,
			speed: 800,
			cssEase: 'linear',
			slidesToShow: 3,
			slidesToScroll: 1
		};
		return (
			<div className="portfolio-slick">
				<Slider {...settings}>
					{slickdata.map((val, i) => {
						return (
							<div key={i}>
								<div className="slick-content">
									<a href={val.link} target="_blank">
										<div className="icon-wrap img-wrap">{this.renderSwitch(val.img)}</div>
										<div className="title">{val.title}</div>
										<div className="caption">{val.caption}</div>
									</a>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}