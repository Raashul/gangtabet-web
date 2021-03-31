import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import GlobalStyle from './globalStyle';

import Home from './pages/Home';
import Token from './pages/Token';
import Wallet from './pages/Wallet';
import Gallery from './pages/Gallery';
import Gangster from './pages/Gangster';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/token" exact component={Token} />
				<Route path="/wallet" exact component={Wallet} />
				<Route path="/gallery" exact component={Gallery} />
				<Route path="/gangter/:id" exact component={Gangster} />
			</Switch>{' '}
			<Footer />
		</Router>
	);
}

export default App;
