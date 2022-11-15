import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes';


export const AppRouter = () => {


	return (
	  <BrowserRouter>
			<Routes>
				{
					routes.map( ({ path, Component, name }) => (
						<Route path={ path } element={ <Component /> } key={ name } />
					))
				}
				<Route path="/*" element={ <Navigate to="/home" /> } />
			</Routes>
		</BrowserRouter>
	)
}
