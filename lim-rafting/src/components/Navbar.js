import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

const Navbar = () =>
{
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () =>
	{
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() =>
	{
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						LIM ADVENTURE
						<i className="fas fa-compass"></i>
					</Link>
					<div className="menu-icon" onCLick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to='/' className="nav-links" onCLick={closeMobileMenu}>
								Početna
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/ponuda' className="nav-links" onCLick={closeMobileMenu}>
								Ponuda
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/kontakt' className="nav-links" onCLick={closeMobileMenu}>
								Kontakt
							</Link>
						</li>
						<li className="nav-item">
							<Link to='/prijava' className="nav-links-mobile" onCLick={closeMobileMenu}>
								Prijavi se
							</Link>
						</li>
					</ul>

					{button && <Button buttonStyle='btn--outline'>PRIJAVI SE</Button>}
				</div>
			</nav>
		</>
	);
};

export default Navbar;
