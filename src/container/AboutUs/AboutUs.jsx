import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
	<div className="app__about app__bg flex__center section__padding" id="about">
		<div className="app__about-overlay flex__center">
			<img src={images.G} alt="G letter" />
		</div>

		<div className="app__about-content flex__center">
			<div className="app__about-content_about">
				<h1 className="headtext__cormorant">About Us</h1>
				<img src={images.spoon} alt="" className="spoon__img" />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea eum, consequuntur iste nemo
					explicabo.
				</p>
				<button type="button" className="custom__button">
					Know more
				</button>
			</div>
      
      <div className='app__about-content_knife flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      
      <div className="app__about-content_history">
				<h1 className="headtext__cormorant">Our History</h1>
				<img src={images.spoon} alt="" className="spoon__img" />
				<p className="p__opensans">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ea eum, consequuntur iste nemo
					explicabo.
				</p>
				<button type="button" className="custom__button">
					Know more
				</button>
			</div>

		</div>
	</div>
);

export default AboutUs;
