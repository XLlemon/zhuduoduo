import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Router,Route,IndexRoute,hashHistory,Switch } from 'react-router-dom';
import App from './components/Main';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import KnowApp from './components/nav-router/knowapp';
import LoneRent from './components/nav-router/longrent';
import ShortRent from './components/nav-router/shortrent';
import RecruitLandLord from './components/nav-router/recruitlandlord';
import Entrance from './components/nav-router/entrance';




// Render the main component into the dom
ReactDOM.render(
	<HashRouter>
	<div>
		<Header />
		<Switch>
			<Route exact path="/" component={App} />
			<Route path='/KnowApp' component={KnowApp} />
			<Route path='/LoneRent' component={LoneRent} />
			<Route path='/ShortRent' component={ShortRent} />
			<Route path='/RecruitLandLord' component={RecruitLandLord} />
			<Route path='/Entrance' component={Entrance} />
		</Switch>
		<Footer />
		</div>
	</HashRouter>,
	document.getElementById('app'));
