import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';

// NOTE: Internal Modules
import { store, persistor } from './redux/store';
import App from './AppWithoutContainer';

const AppContainer = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App title="Hello world" />
		</PersistGate>
	</Provider>
);

export default AppContainer;
