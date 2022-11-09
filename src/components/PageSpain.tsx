import { NavLink, useParams } from 'react-router-dom';
import cities from '../data/cities.json';

export const PageSpain = () => {
	const { id } = useParams();

	return (
		<>
			<p>Welcome to the Spain page.</p>

			<p>displaying city {id}</p>

			<p className="cityChoices">
				There are {cities.length} cities to visit:{' '}
				{cities.map((city, index) => {
					return (
						<>
							<span className="cityLink" key={city.id}>
								<NavLink to={String(city.id)}>{city.name}</NavLink>
							</span>
							{cities.length - 1 > index && <span>, </span>}
						</>
					);
				})}
			</p>
		</>
	);
};
