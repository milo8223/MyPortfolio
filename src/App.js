import React from 'react';
import './styles/styles.scss';
import Header from './pageComponents/Header/Header';
import About from './pageComponents/About/About';
import Services from './pageComponents/Services/Services';
import Language from './pageComponents/Language/Language';
import Portfolio from './pageComponents/Portfolio/Portfolio';
import FindMe from './pageComponents/FindMe/FindMe';
import SocialContact from './pageComponents/SocialContact/SocialContact';
import Footer from './pageComponents/Footer/Footer';
// import Contact from './pageComponents/Contact/Contact';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Services />
			<Language />
			<Portfolio />
			<div id="contact">
				<FindMe />
				<SocialContact />
			</div>
			<Footer />
			{/* <Contact /> */}
		</div>
	);
}

export default App;
