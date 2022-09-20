import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage, HomePage, KnowledgePage } from '../pages';

export const AppRouter = () => {
	return (
	  <BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/knowledge" element={<KnowledgePage />} />

				<Route path="/*" element={ <Navigate to="/home" /> } />
			</Routes>
		</BrowserRouter>
	)
}
