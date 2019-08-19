import React from 'react';
import './styles/styles.scss';
import Header from './pageComponents/Header/Header';
import About from './pageComponents/About/About';
import Services from './pageComponents/Services/Services';
import Language from './pageComponents/Language/Language';
import Portfolio from './pageComponents/Portfolio/Portfolio';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Services />
			<Language />
			<Portfolio />
		</div>
	);
}

export default App;
