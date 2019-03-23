import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from './Navbar';
import Main from './Main';
import jwtDecode from 'jwt-decode';
import {logout, setAuthorizationToken, setCurrentUser} from "../store/actions/auth";

const store = configureStore();

if (localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	//important code to stop someone from tampering with the token in the localstorage
	try {
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
	} catch (e) {
		// see if logout works if not revert to this
		store.dispatch(setCurrentUser({}));
		logout();
	}
}

const App = () => (
	<Provider store={store}>
		<Router>
			<div className='onboarding'>
				<Navbar/>
				<Main/>
			</div>
		</Router>
	</Provider>
);

export default App;
