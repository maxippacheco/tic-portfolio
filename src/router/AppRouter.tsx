import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, KnowledgePage } from '../pages';
import { SportsPage } from '../pages/SportsPage';

export const AppRouter = () => {
	return (
	  <BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/knowledge" element={<KnowledgePage />} />
				<Route path="/sports" element={<SportsPage />} />

				<Route path="/*" element={ <Navigate to="/home" /> } />
			</Routes>
		</BrowserRouter>
	)
}
