import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// NOTE: Import Screens
// import AdminRoute from './AdminRoute';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
// import TransparentHeaderRoute from './TransparentHeaderRoute';
import Home from '../pages/Home';
// import '../assets/css/App.css';

class Routes extends React.Component {
	render() {
		return (
			<Switch>
				{/* <Route exact path="/product/:id" component={MockComponent} />
				<Redirect from="/product/:id/reload" to="/product/:id" /> */}

				<Route path="/" component={Home} />
				{/* <Route path="/admin/sign-in" component={AdminSignIn} /> */}
				{/* <Route component={Error404} /> */}
			</Switch>
		);
	}
}

// NOTE: Connecting to Store
const mapSToP = (s) => ({ user: s.user });
export default connect(mapSToP)(Routes);
