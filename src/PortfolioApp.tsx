import React from 'react'
import Lottie from 'react-lottie-player'

import { Navbar } from './components/navbar'
import lottieJson from './components/home/lottieJson.json'

import './main.css'

import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

export const PortfolioApp = () => {

	return (
		<div>
			<Navbar />

			<div className='home-container'>
				<div className='home-info'>
					<h1 className='home-title'>Hola!👋,<span>Soy Maxi,</span> y te invito a conocerme un poco más</h1>
					<span className='home-extra'>Estudiante, autodidacta y deportista</span>
				</div>
				<div className='home-gif'>
					<Lottie
						loop
						animationData={lottieJson}
						play
						className='home-gif_element'
					/>
				</div>

				<div className='home-navigate'>
					<SouthOutlinedIcon />
				</div>
			</div>

		</div>
	)
}
