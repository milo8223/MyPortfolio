import React, { Component } from 'react';
import Slider from 'react-slick';

import { slickdata } from './data';

import css3 from '../../assets/icons/css3.png';
import js from '../../assets/icons/js.png';
import react from '../../assets/icons/react.png';
import sass from '../../assets/icons/sass.png';
import sketch from '../../assets/icons/sketch.png';
import vue from '../../assets/icons/vue.png';
import xd from '../../assets/icons/xd.png';
import html5 from '../../assets/icons/html5.svg';
import jquery from '../../assets/icons/jquery.svg';
import next from '../../assets/icons/nextjs.svg';

export default class LearnSlick extends Component {
	renderSwitch = (param) => {
		switch (param) {
			case 'html5':
				return <img className={param} src={html5} alt="Html5" />;
			case 'css3':
				return <img className={param} src={css3} alt="css3" />;
			case 'js':
				return <img className={param} src={js} alt="js" />;
			case 'react':
				return <img className={param} src={react} alt="react" />;
			case 'vue':
				return <img className={param} src={vue} alt="icon" />;
			case 'next':
				return <img className={param} src={next} alt="next" />;
			case 'jquery':
				return <img className={param} src={jquery} alt="jquery" />;
			case 'sass':
				return <img className={param} src={sass} alt="sass" />;
			case 'xd':
				return <img className={param} src={xd} alt="xd" />;
			default:
				return <img className={param} src={sketch} alt="sketch" />;
		}
	};
	render() {
		var settings = {
			dots: false,
			infinite: true,
			autoplaySpeed: 0,
			speed: 8000,
			cssEase: 'linear',
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			pauseOnHover: true
		};
		return (
			<div className="learn-slick">
				<Slider {...settings}>
					{slickdata.map((val, i) => {
						return (
							<div key={i}>
								<div className="slick-content">
									<a href={val.link} target="_blank">
										<div className="icon-wrap img-wrap">{this.renderSwitch(val.img)}</div>
										<div className="title">{val.title}</div>
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
