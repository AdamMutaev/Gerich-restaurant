import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => {
	return (
		<div className="app__header app__wrapper section__padding" id="home">
			<div className="app__wrapper-info">
				<SubHeading title="Chase the new flavour" />
				<h1 className="app__header-h1">The key to Fine Dining</h1>
				<p className="p__opensans" style={{ margin: '2rem 0' }}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, nihil Lorem, ipsum dolor sit
					amet consectetur adipisicing elit. Sed, voluptatum!
				</p>
        <button type='button' className='custom__button'>Explore menu</button>
			</div>
			<div className="app__wrapper-img">
        <img src={images.welcome} alt="" />
      </div>
		</div>
	);
};

export default Header;
