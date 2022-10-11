// import bariloche from '../../assets/bariloche.jpeg';
import logoUNL from '../../assets/logo-unl.png';
import logoNero from '../../assets/logo-nero.jpeg';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { Loader } from '../loader';

import './School.css'

export const School = () => {

	const [animationData, setAnimationData] = useState<any>();

  useEffect(() => {
    import('./schoolJSON.json').then(setAnimationData);
  }, []);

  if (!animationData) return <Loader />

	return (
		<div className="fadeIn">

		
		<h1 className="school__title">Escuela secundaria📚</h1>
		<div className="school__wrapper">
			<div className='school__info'>
				<p>
					A lo largo de estos 5 años conocí un montón de gente y aprendí un montón de cosas en esta etapa. 
					Aunque los horarios no son los mejores, incorporé un montón de herramientas en mí que me ayudarán en mi futuro. Algo que me encanta de esta escuela es 
					la autonomía que se le da al estudiante y la flexibilidad para organizarse en cuanto a los trabajos. 
					También las intertribus son algo que le da un toque de diversión mas a la escuela. Tuvimos campamentos, viajes de estudio, estudiantinas y 
					un montón de experiencias más que llevaré conmigo. A veces me pongo a pensar en si estoy preparado para cerrar este ciclo pero creo que es algo que 
					a todos nos toca enfrentar y estoy muy emocionado por enfrentar nuevos desafios.
				</p>
				<h3 className='school__info_subtitle'>Foto de la tribu de la que formó parte, llamada Neró</h3>
				<img src={ logoNero } alt="img" className='school__info_image' />
				<h3 className='school__info_subtitle'>Foto del logo de la escuela secundaria</h3>
				<img src={ logoUNL }  alt="img" className='school__info_image' />
			</div>
			<div className='school__gif'>
				<Lottie
					loop
					animationData={ animationData }
					play
				/>
			</div>
		</div>
		</div>
	)
}
