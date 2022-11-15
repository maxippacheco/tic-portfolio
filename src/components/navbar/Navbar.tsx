import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HomeIcon from '@mui/icons-material/Home';

import './Navbar.css'

export const Navbar = () => {
	
	const [isVisible, setIsVisible] = useState(false);

	const handleToggle = () => setIsVisible(!isVisible);
	

	return (
			<header className='header'>

				<nav className='nav'>
					<div className='nav-logo'>

							<Link to="/" style={{ color: 'white', padding: '10px' }}>
								<HomeIcon fontSize='medium' />
							</Link>
					</div>
					<div className='nav-toggle-icon' onClick={ handleToggle }>
					{
						isVisible
						? <CloseOutlinedIcon />
						: <MenuOutlinedIcon />
					}
					</div>

							<ul className={`nav-menu ${ isVisible ? 'nav-menu_visible' : '	'}`}>
								<li className="nav-menu-item">
									<Link to="/home" className='nav-menu-link'>
										Inicio
									</Link>
								</li>								
								<li className="nav-menu-item">
									<Link to="/about" className='nav-menu-link'>
										Sobre mí
									</Link>
								</li>
								<li className="nav-menu-item">	
									<Link to="/knowledge" className='nav-menu-link'>
										Autoaprendizaje
									</Link>
								</li>
								{/* <li className="nav-menu-item">
									<Link to="/hobbies" className='nav-menu-link'>
										Hobbies
									</Link>
								</li> */}
								<li className="nav-menu-item">
									<Link to="/school" className='nav-menu-link'>
										Escuela Secundaria
									</Link>
								</li>
								<li className="nav-menu-item">
									<Link to="/sports" className='nav-menu-link'>
										Deporte
									</Link>
								</li>
							</ul>
					
				</nav>
			
			</header>
	)
}
