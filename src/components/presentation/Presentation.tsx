import './Presentation.css'
import person from '../../assets/person.png'
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const findMeList = [
	0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
	205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
	211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
	133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
	259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
	260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
	144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
	24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
	270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
	316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
	156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
	79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
	283, 284, 285, 323, 324, 325, 326,
];



export const Presentation = () => {
  
	const saluteTextContainer = useRef<any>()
	const saluteImgContainer = useRef<any>()
	
	const nameRefContainer = useRef<any>()
	
	const sportRef = useRef<any>()
	const portfolioRef = useRef<any>()
	const schoolRef = useRef<any>()
	
	const sportTitleRef = useRef<any>()
	const schoolTitleRef = useRef<any>()
	

	useEffect(() => {
    const handleScroll = (event: Event ) => {
			let offsetY = window.scrollY;
			
			saluteTextContainer.current.style.transform = `translateY(${offsetY * 0.8 }px)`
			saluteImgContainer.current.style.transform = `translate(${ offsetY * 0.4 }px, ${ offsetY * 0.5 }px)`
		
			nameRefContainer.current.style.transform = `translateX(${offsetY * 0.1 }px)`
			
			schoolRef.current.style.backgroundPositionY = `${offsetY * 0.5 }px`
			sportRef.current.style.backgroundPositionY = `${-offsetY * 0.5 }px`
			portfolioRef.current.style.backgroundPositionY = `${offsetY * 0.5 }px`
			
			schoolTitleRef.current.style.transform = `translateX(calc(200vh - ${ offsetY}px))`
			sportTitleRef.current.style.transform = `translateX(calc(-300vh + ${ offsetY}px))`
			
		};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	return (
		<div className='presentation__container'>
			<div className='presentation__intro'>
				
				<div className='presentation__salute'>
				
					<div className="presentation__saluteTextContainer" ref={ saluteTextContainer }>
						<h1 className="presentation__saluteText">Hola</h1>
					</div>
					<div className="presentation__saluteImgContainer" ref={ saluteImgContainer }>
						<img src={ person } alt="Imagen" />
					</div>
				</div>

				<div className="presentation__nameContainer">
					<h2 ref={ nameRefContainer }>Soy Maxi</h2>
				</div>

				<div className="presentation__hobbieTitleContainer dark" ref={ schoolRef }>
					<h2 ref={ schoolTitleRef }>Estudiante</h2>
				</div>

				<div className="presentation__hobbieTitleContainer purple" ref={ sportRef }>
					<h2 ref={ sportTitleRef }>Y deportista</h2>
				</div>
			</div>

			<div className='presentation__hobbieTitleContainer dark' ref={portfolioRef}>
				<h3 className="presentation__navigate">
					Ir al <Link to="/home" style={{ color: 'var(--main-color)'}}>portafolio</Link>
				</h3>
			</div>

			<div className='presentation__githubContainer'>
				<h2 className='presentation__githubTitle'>¿Querés ver todos mis proyectos?</h2>
				<div className="presentation__githubChart">
					<div className="dates">
						<span>Ene</span>
						<span>Feb</span>
						<span>Mar</span>
						<span>Abr</span>
						<span>May</span>
						<span>Jun</span>
						<span>Jul</span>
						<span>Ago</span>
						<span>Sep</span>
						<span>Oct</span>
						<span>Nov</span>
						<span>Dec</span>
					</div>

					<div className="presentation__boxContainer">
						{
							[...Array(365)].map( (_, index) => (
								<div className={`presentation__githubBox ${ findMeList.includes(index) && 'box_active' }`} key={ index}></div>
							))
						}
					</div>
					
				</div>
				<h2 className="presentation__githubTitle">EN GITHUB</h2>
			</div>
{/* 
			<div className='presentation__socialNetwork'>
				CONTACTAME
			</div> */}

		</div>
	)
}
