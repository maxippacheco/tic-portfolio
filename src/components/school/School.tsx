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
				/>
				<SchoolCard 
					title='Energía Hidráulica'
					description='Trabajo en grupo para la materia Educación Tecnológica, donde se presentan sus usos y los dispositivos que este lleva en su interior.'
				/>
				<SchoolCard 
					title='Presentación TIC'
					description='En este trabajo me tocó presentar a mi compañero, contar de sus intereses, deportes y datos como su fecha de nacimiento o gustos musicales.'
				/>
			</div>
		</div>

		<div className="school__card_container">
			<h2 className='school__card_title' style={{ color: 'black'}}>Trabajos 2do año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Modelos Atómicos'
					description='Trabajo de química en el que se muestran los diversos modelos atómicos que hubo en la historia, sus cambios y descubrimientos a partir de experiencias.'
				/>
				<SchoolCard 
					title='Leyes de Newton'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
				/>
				<SchoolCard 
					title='Engaños virtuales'
					description='En este trabajo de Informática se busco dar a conocer los tipos de engaños virtuales, como identificarlos y como prevenirlos.'
				/>
			</div>
		</div>

		<div className="school__card_container bg__main">
			<h2 className='school__card_title'>Trabajos 3er año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Modelos Atómicos'
					description='Trabajo de química en el que se muestran los diversos modelos atómicos que hubo en la historia, sus cambios y descubrimientos a partir de experiencias.'
				/>
				<SchoolCard 
					title='Leyes de Newton'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
				/>
				<SchoolCard 
					title='Engaños virtuales'
					description='En este trabajo de Informática se busco dar a conocer los tipos de engaños virtuales, como identificarlos y como prevenirlos.'
				/>
			</div>
		</div>

		<div className="school__card_container">
			<h2 className='school__card_title' style={{ color: 'black'}}>Trabajos 4to año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Modelos Atómicos'
					description='Trabajo de química en el que se muestran los diversos modelos atómicos que hubo en la historia, sus cambios y descubrimientos a partir de experiencias.'
				/>
				<SchoolCard 
					title='Leyes de Newton'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
				/>
				<SchoolCard 
					title='Engaños virtuales'
					description='En este trabajo de Informática se busco dar a conocer los tipos de engaños virtuales, como identificarlos y como prevenirlos.'
				/>
			</div>
		</div>

		<div className="school__card_container bg__main">
			<h2 className='school__card_title'>Trabajos 5to año</h2>
		
			<div className="school__card_alignment">
				<SchoolCard 
					title='Modelos Atómicos'
					description='Trabajo de química en el que se muestran los diversos modelos atómicos que hubo en la historia, sus cambios y descubrimientos a partir de experiencias.'
				/>
				<SchoolCard 
					title='Leyes de Newton'
					description='Trabajo de física en el que a partir de situaciones problemáticas se trata de poner en evidencia las diversas leyes de Newton.'
				/>
				<SchoolCard 
					title='Engaños virtuales'
					description='En este trabajo de Informática se busco dar a conocer los tipos de engaños virtuales, como identificarlos y como prevenirlos.'
				/>
			</div>
		</div>

		</div>
	)
}
