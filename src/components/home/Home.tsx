import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import Lottie from 'react-lottie-player';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import './Home.css'
import { Loader } from '../loader';




export const Home = () => {

  const [animationData, setAnimationData] = useState<any>();

  useEffect(() => {
    import('./lottieJson.json').then(setAnimationData);
  }, []);

  if (!animationData) return <Loader />


	return (
		<>
			<div className='home-container fadeIn'>
				<div className='home-info'>
					<h1 className='home-title'>Hola!👋,<span>Soy Maxi,</span> y te invito a conocerme un poco más</h1>
					<span className='home-extra'>Estudiante, autodidacta y deportista</span>
				</div>
				<div className='home-gif'>
					<Lottie
						loop
						animationData={ animationData }
						play
						className='home-gif_element'
					/>
				</div>

				{/* <button className='home-navigate'> */}
					<Link to='/about' className='home-navigate'>
						<SouthOutlinedIcon />

					</Link>
				{/* </button> */}
			</div>		
		</>
	)
}
