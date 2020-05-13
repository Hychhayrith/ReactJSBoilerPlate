// import React, { Fragment } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { Header, Footer } from '../components';

// function PrivateRoute({ component: Component, isAuth = false, ...rest }) {
// 	return (
// 		<Route
// 			{...rest}
// 			render={(props) =>
// 				isAuth ? (
// 					<Fragment>
// 						<Header />
// 						<Component {...props} />
// 						<Footer />
// 					</Fragment>
// 				) : (
// 					<Redirect to="/sign-in" />
// 				)}
// 		/>
// 	);
// }

// export default PrivateRoute;
