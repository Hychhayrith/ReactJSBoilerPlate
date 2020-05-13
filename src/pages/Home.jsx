import React from 'react';

// import './assets/styles.css';
import MyImage from '../assets/Robot3d.png';
import { Container } from 'reactstrap';

const Home = ({ title }) => (
	<div className="mainText">
		{title}
		<i className="fa fa-trash" />
		<i className="fa fa-trash" />
		<i className="fa fa-trash" />
		<img src={MyImage} style={{ width: 200, height: 300 }} />

		<p className="font-weight-bold">Hello from bootstrap classes</p>

		<Container>
			<h1>I'm in React Strap</h1>
		</Container>
	</div>
);

export default Home;
