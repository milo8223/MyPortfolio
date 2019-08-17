import React from 'react';

import { Anchor } from 'antd';

import Cross from '../../assets/images/multiply.svg';

const { Link } = Anchor;

const MenuContent = (props) => {
	return (
		<div className="menu-content">
			<div class="cross">
				<div class="img-wrap" onClick={props.onClose}>
					<img src={Cross} alt="close" />
				</div>
			</div>
			<div className="menu-list" onClick={props.onClose}>
				<Anchor>
					<Link href="#introduction" title="Introduction" />
					<Link href="#aboutme" title="About Me" />
					<Link href="#services" title="Service" />
					<Link href="#portfolio" title="Portfolio" />
				</Anchor>
			</div>
		</div>
	);
};

export default MenuContent;
