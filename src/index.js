import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// NOTE: Internal Modules
import './assets/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import App from './App';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('app')
);

module.hot.accept();
