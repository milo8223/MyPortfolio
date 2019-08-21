import React, { Component } from 'react';

import { Drawer } from 'antd';

import Menu from '../../assets/images/menu.svg';
import MenuBlack from '../../assets/images/menu-black.svg';
import Logo from '../../assets/icons/MYLOO.png';
import MenuContent from './MenuContent';

export default class Head extends Component {
	state = { visible: false, isTop: true };

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY < this.props.height;
			if (isTop !== this.state.isTop) {
				this.onScroll(isTop);
			}
		});
	}

	onScroll = (isTop) => {
		this.setState({ isTop });
	};

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
				<div className={`menu-wrap ${this.state.isTop ? '' : 'not-top'}`}>
					<div className="logo-wrap img-wrap">
						<img src={Logo} alt="logo" />
					</div>
					<div className="img-wrap" onClick={this.showDrawer}>
						{this.state.isTop ? <img src={Menu} alt="menu" /> : <img src={MenuBlack} alt="menu" />}
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
