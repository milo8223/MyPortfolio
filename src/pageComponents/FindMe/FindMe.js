import React, { Component } from 'react';
import { Icon } from 'antd';

export default class FindMe extends Component {
	render() {
		return (
			<section className="find-wrap" id="findMe">
				<div className="container">
					<div className="find-content">
						<div className="heading">
							<h2 className="title">Interested to Collaborate ?</h2>
						</div>
						<div className="find-info">
							<div className="find-info-content">
								<div className="icon-wrap img-wrap">
									<Icon type="mobile" />
								</div>
								<div className="text-content">
									<div className="title">Call Me</div>
									<div className="caption">+977-9803905297</div>
								</div>
							</div>
							<div className="find-info-content">
								<div className="icon-wrap img-wrap">
									<Icon type="pushpin" />
								</div>
								<div className="text-content">
									<div className="title">Find Me</div>
									<div className="caption">
										Imadol, Lalitpur <br />
										44700 <br />
										kathmandu, Nepal
									</div>
								</div>
							</div>
							<div className="find-info-content">
								<div className="icon-wrap img-wrap">
									<Icon type="mail" />
								</div>
								<div className="text-content">
									<div className="title">Mail Me</div>
									<div className="caption">milanshinji07@gmail.com</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
