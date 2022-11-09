import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageBerlin } from './PageBerlin';
import { PageHamburg } from './PageHamburg';
import { PageHannover } from './PageHannover';

export const PageGermany = () => {
	return (
		<>
			<p>Welcome to the Germany page.</p>

			<nav>
				<NavLink to="hamburg">Hamburg</NavLink>
				<NavLink to="hannover">Hannover</NavLink>
				<NavLink to="berlin">Berlin</NavLink>
			</nav>

			<Routes>
				<Route path="hamburg" element={<PageHamburg />} />
				<Route path="hannover" element={<PageHannover />} />
				<Route path="berlin" element={<PageBerlin />} />
			</Routes>
		</>
	);
};
