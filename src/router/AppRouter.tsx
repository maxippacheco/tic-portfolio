import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, KnowledgePage, HobbiesPage, SportsPage, SchoolPage } from '../pages';
import { routes } from './routes';


export const AppRouter = () => {
	return (
	  <BrowserRouter>
			<Routes>
				{
					routes.map( ({ path, Component }) => (
						<Route path={ path } element={ <Component /> } />
					))
				}
				<Route path="/*" element={ <Navigate to="/home" /> } />
			</Routes>
		</BrowserRouter>
	)
}
