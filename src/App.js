import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import Token from './pages/Token';
import Wallet from './pages/Wallet';

import GlobalStyle from './globalStyle';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/token" exact component={Token} />
				<Route path="/wallet" exact component={Wallet} />
			</Switch>{' '}
			<Footer />
		</Router>
	);
}

export default App;
