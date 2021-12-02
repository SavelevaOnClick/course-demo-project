import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {navConfig} from './constants'
import createStore from './redux/store'
import './App.css';
import {StyledNavLink} from './styled'
import {Provider} from "react-redux";
import {Users} from "./pages";

const { store } = createStore()

console.log('getState result ', store.getState());

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<header className="App-header">
						<Routes>
							<Route path={navConfig.home.path} exect element={<Users/>}/>
							<Route path={navConfig.landing.path} exect element={<>Landing</> } />
						</Routes>
						<StyledNavLink to={navConfig.landing.path}>
							{navConfig.landing.label}
						</StyledNavLink>
						<StyledNavLink to={navConfig.home.path}>
							{navConfig.home.label}
						</StyledNavLink>
					</header>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
