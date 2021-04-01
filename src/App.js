import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer, ReleaseBanner } from './components';
import GlobalStyle from './globalStyle';

import Home from './pages/Home';
import Token from './pages/Token';
import Wallet from './pages/Wallet';
import Gallery from './pages/Gallery';
import Gangster from './pages/Gangster';
import Register from './pages/Register';

function App() {
	return (
		<Router>
			<ReleaseBanner />
			<GlobalStyle />
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/token" exact component={Token} />
				<Route path="/wallet" exact component={Wallet} />
				<Route path="/gallery" exact component={Gallery} />
				<Route path="/gangter/:id" exact component={Gangster} />
				<Route path="/register" exact component={Register} />
			</Switch>{' '}
			<Footer />
		</Router>
	);
}

export default App;
