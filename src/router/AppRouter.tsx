import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';

export const AppRouter = () => {
	return (
	  <BrowserRouter>
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />

				<Route path="/*" element={ <Navigate to="/home" /> } />
			</Routes>
		</BrowserRouter>
	)
}
