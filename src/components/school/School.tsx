import escUNL from '../../assets/esc-unl.jpg';
import escMoreno from '../../assets/esc-moreno.png';

import './School.css'
import { SchoolCard } from '../card';

export const School = () => {


	return (
		<div className="fadeIn">

		
		<h1 className="school__title">Mi trayecto📚</h1>

		<div className='school__info'>
			<h2>Escuela primaria</h2>
			<p>
				En la escuela primaria pude conocer personas con las cuales pasé una buena etapa de mi vida.
				Considero que como estudiante me desempeñaba mucho mejor en la primaria, ya que leía mucho y me gustaba participar de proyectos que
				proponía la escuela como eran las ferias de ciencias. Tuve la oportunidad de participar en un proyecto de educación vial en el que tuve la suerte
				de ir a Buenos Aires a exponer con uno de mis compañeros. A su vez era una etapa en la cual no tenía muchas preocupaciones y siento que por eso también
				pude disfrutarla más esta etapa. Además fui abanderado en el último año de primaria y fue algo muy significativo para mí en aquel entonces.
			</p>

			{/* <div> */}
				<img src={ escMoreno } alt="ESC_MORENO" />
			{/* </div> */}

			{/* <p>Foto de ab	anderado</p> */}
		</div>

		<div className="school__info">
				<h2>Escuela secundaria de la UNL</h2>
				<p>
					A lo largo de estos 5 años conocí un montón de gente y aprendí un montón de cosas en esta etapa. 
					Aunque los horarios no son los mejores, incorporé un montón de herramientas en mí que me ayudarán en mi futuro. Algo que me encanta de esta escuela es 
					la autonomía que se le da al estudiante y la flexibilidad para organizarse en cuanto a los trabajos. 
					También las intertribus son algo que le da un toque de diversión mas a la escuela. Tuvimos campamentos, viajes de estudio, estudiantinas y 
					un montón de experiencias más que llevaré conmigo. A veces me pongo a pensar en si estoy preparado para cerrar este ciclo pero creo que es algo que 
					a todos nos toca enfrentar y estoy muy emocionado por enfrentar nuevos desafios.
				</p>

				{/* <div> */}
					<img src={ escUNL } alt="ESUNL" />
				{/* </div> */}
		
		</div>

		<div className="school__card_container bg__main">
			<h2 className='school__card_title'>Trabajos 1er año</h2>
			
			<div className="school__card_alignment">
				<SchoolCard 
					title='Coloriencia'
					description='Trabajo en grupo dedicado al estudio del color, utilizando Matemáticas, Física, Química y el método científico.'
					link="https://drive.google.com/file/d/1yWmMYgxy9vIwq-HPB2eqPKTBBKh1NxrK/view"
				/>
				<SchoolCard 
					title='Energía Hidráulica'
					description='Trabajo en grupo para la materia Educación Tecnológica, donde se presentan sus usos y los dispositivos que este lleva en su interior.'
					link="https://drive.google.com/file/d/1fkYCnBxAbmFEeA4xxuoiseDQWLHe0sp6/view"
				/>
				<SchoolCard 
					title='Presentación TIC'
					description='En este trabajo me tocó presentar a mi compañero, contar de sus intereses, deportes y datos como su fecha de nacimiento o gustos musicales.'
					link="https://drive.google.com/file/d/1k2LZ5IhPfDH2J8bZlaoNop9XjuymAlKw/view"
				/>
			</div>
		</div>

		<div className="school__card_container">
			<h2 className='school__card_title' style={{ color: 'black'}}>Trabajos 2do año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Modelos Atómicos'
					description='Trabajo de química en el que se muestran los diversos modelos atómicos que hubo en la historia, sus cambios y descubrimientos a partir de experiencias.'
					link="https://drive.google.com/file/d/1qt7vsAKdYMny0vZkr42DTCUWbZl6mamX/view"
				/>
				<SchoolCard 
					title='Leyes de Newton'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
					link="https://drive.google.com/file/d/1WUQA-nwYST2BtEwbMOO0z72XlS6uoUtt/view"
				/>
				<SchoolCard 
					title='Engaños virtuales'
					description='En este trabajo de Informática se busco dar a conocer los tipos de engaños virtuales, como identificarlos y como prevenirlos.'
					link="https://drive.google.com/file/d/1XBwQcRbMYmusHkQ3PMkioIIW_HHPZz_a/view"
				/>
			</div>
		</div>

		<div className="school__card_container bg__main">
			<h2 className='school__card_title'>Trabajos 3er año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Surrealismo'
					description='Trabajo individual de investigación y producción visual analógica sobre vanguardias, en la cuál yo elegí surrealismo.'
					link="https://drive.google.com/file/d/1RGn0xM3gNxMwk_gZujdJBb9IF9IpCpRx/view"
				/>
				<SchoolCard 
					title='Estrellas y grullas'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
					link="https://drive.google.com/file/d/1Zc-7dDeR3G_5DKM93hmyCU2FZE2Ei4Yx/view"
				/>
				<SchoolCard 
					title='Inspiraciones'
					description='En este trabajo de artes visuales tuve que dejar volar mi inspiración y en mi bitácora creativa anote cosas que me inspiraban y gustaba de hacer.'
					link="https://drive.google.com/file/d/1M3LhKMaqY71KtM9b6tYITHNbQ1vTpTMz/view"
				/>
			</div>
		</div>

		<div className="school__card_container">
			<h2 className='school__card_title' style={{ color: 'black'}}>Trabajos 4to año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Estado e Imaginario Social'
					description='Trabajo de Ciencias Políticas en el que se comparan dos posturas políticas frente al estado y se responden a preguntas acerca de los mismos.'
					link="https://drive.google.com/file/d/1JxF1qgOhiYuHl8R6-M24rAn-agY9qA9P/view"
				/>
				<SchoolCard 
					title='Experiencias Lengua'
					description='Un trabajo de volver atrás en el tiempo, en el cuál cuento mi experiencia en la materia y todo lo que aprendí en 4 años de cursado.'
					link="https://drive.google.com/file/d/1KEMIoN79kPPshH-WkngbmSp1Wx7xaZ8P/view"
				/>
				<SchoolCard 
					title='Mundo Hiperconectado'
					description='En este trabajo de TIC se muerstra el velo oculto de las redes sociales, su influencia en nuestra vida, nuestras relaciones y emociones.'
					link="https://drive.google.com/file/d/1DtCGbS0NCdir03jUo6yAyJGcJSsgI_QV/view"
				/>
			</div>
		</div>

		<div className="school__card_container bg__main">
			<h2 className='school__card_title'>Trabajos 5to año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Futbol sin género'
					description='En esta infografía se muestra la desigualdad que hay en el fútbol fémenino y masculino, en tanto salarios como oportunidades.'
					link="https://drive.google.com/file/d/1mgKxr1A5-itIWiOGTZ8rk-Iw7re_ct0w/view"
				/>
				<SchoolCard 
					title='Carta de presentación'
					description='En este trabajo de OCL me tenía que presentar para una entrevista laboral, un ejercicio muy didáctico para mostrar quién soy.'
					link="https://drive.google.com/file/d/1Ph1lNUxlWPThOeXscSIX255Usgm5A-AT/view"
				/>
				<SchoolCard 
					title='Carta de recomendación'
					description='En este trabajo de OCL tengo que recomendar a un compañero, dando cuenta de sus habilidades blandas y desempeño laboral en una empresa(ficticia).'
					link="https://drive.google.com/file/d/1PpA9Md2bWF7KSopaDAWPIuO4BIqKxYwR/view"
				/>
			</div>
		</div>

		<div className="school__card_container" style={{ display: 'flex', justifyContent: 'center'}}>
			<h2 className='school__card_title' style={{ color: 'black'}}>Otras experiencias: </h2>
			<div className="school__card_alignment">

				<iframe width="560" height="315" src="https://www.youtube.com/embed/97vOO1pJKy0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/RJPAO2Zv714" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/3ux44bJNU_g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		</div>
		</div>



		</div>
	)
}
