import React from 'react'
import { Navbar } from '../components/navbar'

interface Props{
	children: JSX.Element | JSX.Element[];
}

export const AppLayout = ({ children }: Props) => {
	return (
		<>
			<Navbar />

			<main>
				{ children }
			</main>
		</>
	)
}
