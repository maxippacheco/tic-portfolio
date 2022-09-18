import React, { useState } from 'react'
import './Navbar.css'

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const Navbar = () => {
	
	const [isVisible, setIsVisible] = useState(true);

	const handleToggle = () => setIsVisible(!isVisible);

	
	return (
			<header className='header'>

				<nav className='nav'>
					<div className='nav-logo'>
							<DarkModeOutlinedIcon fontSize='medium' />
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
									<a href="#" className='nav-menu-link'>
										Sobre mí
									</a>
								</li>
								<li className="nav-menu-item">	
									<a href="#" className='nav-menu-link'>
										Autoaprendizaje
									</a>
								</li>
								<li className="nav-menu-item">
									<a href="#" className='nav-menu-link'>
										Hobbies
									</a>
								</li>
								<li className="nav-menu-item">
									<a href="#" className='nav-menu-link'>
										Escuela Secundaria
									</a>
								</li>
								<li className="nav-menu-item">
									<a href="#" className='nav-menu-link'>
										Deporte
									</a>
								</li>
							</ul>
					
				</nav>
			
			</header>
	)
}
