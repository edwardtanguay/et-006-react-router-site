import { NavLink, Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { PageFrance } from './components/PageFrance';
import { PageGermany } from './components/PageGermany';
import { PageSpain } from './components/PageSpain';
import { PageStart } from './components/PageStart';

function App() {
	return (
		<div className="App">
			<h1><NavLink to="/">Travel Info Site</NavLink></h1>

			<nav>
				<NavLink to="germany">Germany</NavLink>
				<NavLink to="france">France</NavLink>
				<NavLink to="spain">Spain</NavLink>
			</nav>

			<Routes>
				<Route path="germany/*" element={<PageGermany />} />
				<Route path="france/*" element={<PageFrance />} />
				<Route path="spain" element={<PageSpain />} />
				<Route path="/" element={<PageStart />} />
			</Routes>
		</div>
	);
}

export default App;
