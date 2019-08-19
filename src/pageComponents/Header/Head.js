import React, { Component } from 'react';

import { Drawer } from 'antd';

import Menu from '../../assets/images/menu.svg';
import Logo from '../../assets/images/logo.jpeg';
import MenuContent from './MenuContent';

export default class Head extends Component {
	state = { visible: false };

	showDrawer = () => {
		this.setState({
			visible: true
		});
	};

	onClose = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		return (
			<React.Fragment>
				<div class="menu-wrap">
					<div class="logo-wrap img-wrap">
						<img src={Logo} alt="logo" />
					</div>
					<div className="img-wrap" onClick={this.showDrawer}>
						<img src={Menu} alt="menu" />
					</div>
				</div>
				<Drawer
					placement="right"
					width={450}
					closable={false}
					onClose={this.onClose}
					visible={this.state.visible}
					className="sidemenu"
				>
					<MenuContent onClose={this.onClose} />
				</Drawer>
			</React.Fragment>
		);
	}
}
