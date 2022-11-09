import { NavLink } from 'react-router-dom';

import './App.scss';

function App() {
	return (
		<div className="App">
			<h1>Travel Info Site</h1>

			<nav>
				<NavLink to="germany">Germany</NavLink>
				<NavLink to="france">France</NavLink>
				<NavLink to="spain">Spain</NavLink>
			</nav>
		</div>
	);
}

export default App;
