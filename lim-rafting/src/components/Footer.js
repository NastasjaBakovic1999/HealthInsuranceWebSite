import React from 'react';
import './Footer.css';
import {Button} from './Button';
import {Link} from 'react-router-dom';

function Footer()
{
	return (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Sve informacije o našim avanturama i ponudi možete pratiti i pretplatom na naš Lim-Rafting newsletter!
				</p>
				<p className='footer-subscription-text'>
					Naravno, sa newsletter-a se možeš odjaviti kad god poželiš.
				</p>
				<div className='input-areas'>
					<form>
						<input
							className='footer-input'
							name='email'
							type='email'
							placeholder='Tvoj email'
						/>
						<Button buttonStyle='btn--outline'>Prijava za newsletter</Button>
					</form>
				</div>
			</section>
			<div class='footer-links'>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<div class='footer-link-items'>
							<h2>Naše društvene mreže</h2>
							<Link to='/'>Instagram</Link>
							<Link to='/'>Facebook</Link>
							<Link to='/'>Youtube</Link>
							<Link to='/'>Twitter</Link>
						</div>
					</div>
				</div>
				<section class='social-media'>
					<div class='social-media-wrap'>
						<div class='footer-logo'>
							<Link to='/' className='social-logo'>
								TRVL
								<i class='fab fa-typo3' />
							</Link>
						</div>
						<small class='website-rights'>LIM RAFTING © 2022</small>
						<div class='social-icons'>
							<Link
								class='social-icon-link facebook'
								to='/'
								target='_blank'
								aria-label='Facebook'
							>
								<i class='fab fa-facebook-f' />
							</Link>
							<Link
								class='social-icon-link instagram'
								to='/'
								target='_blank'
								aria-label='Instagram'
							>
								<i class='fab fa-instagram' />
							</Link>
							<Link
								class='social-icon-link youtube'
								to='/'
								target='_blank'
								aria-label='Youtube'
							>
								<i class='fab fa-youtube' />
							</Link>
							<Link
								class='social-icon-link twitter'
								to='/'
								target='_blank'
								aria-label='Twitter'
							>
								<i class='fab fa-twitter' />
							</Link>
							<Link
								class='social-icon-link twitter'
								to='/'
								target='_blank'
								aria-label='LinkedIn'
							>
								<i class='fab fa-linkedin' />
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
export default Footer;