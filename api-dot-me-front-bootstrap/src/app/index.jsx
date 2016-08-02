import React from 'react';
import {render} from 'react-dom';

// import components
import NavBar from './nav-bar.jsx';
import Header from './header.jsx';
import Portfolio from './portfolio.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import Footer from './footer.jsx';
import Modal from './modal.jsx';

class App extends React.Component {
	render () {
		return (
			<div>
				<NavBar/>
				<Header/>
				<Portfolio/>
				<About/>
				<Contact/>
				<Footer/>
				<Modal/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));
