
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import { Loader } from '../loader';
import './About.css'

export const About = () => {

  const [animationData, setAnimationData] = useState<any>();

  useEffect(() => {
    import('./lottieJson.json').then(setAnimationData);
  }, []);

  if (!animationData) return <Loader />

	return (
		<div className={ 'about__container fadeIn' }>
			<div className={ 'about__gif'} >
				<Lottie
					loop
					animationData={animationData}
					play
					className={ 'about__gif_element' }
				/>
			</div>

			<div className={ 'about__info'}>
				<h2 className='about__info_title'>Sobre mí</h2>
				<p className='about__info_paragraph'>
					Mi nombre es Máximo Pacheco, tengo 17 años y estoy terminando mi último año de escuela secundaria en la ESUNL.
					A lo largo de estos 5 años conocí mucha gente nueva de la cual aprendí un montón y pude compartir lindos momentos.
					De cara al siguiente año, tengo pensado estudiar ingeniería informática en la FICH-UNL. Soy una persona la cual le encanta aprender cosas nuevas
					en el día a día y entre ellas están la programación y el inglés. También disfruto mucho de hacer futbol y entrenar en el gimnasio, ya que me gusta 
					tener una vida balanceada. 
				</p>

				<div className='about__tags_container'>
					<span className='about__tags'>Futbol</span>
					<span className='about__tags'>Programación</span>
					<span className='about__tags'>Inglés</span>
					<span className='about__tags'>Matemáticas</span>
					<span className='about__tags'>Gym</span>
				</div>
		
			</div>
		</div>
	)
}
