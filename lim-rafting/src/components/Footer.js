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
			<section class='social-media'>
				<div class='social-media-wrap'>
					<div class='footer-logo'>
						<Link to='/' className='social-logo'>
							LIM ADVENTURE
							<i className="fas fa-compass"></i>
						</Link>
					</div>
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
	);
}
export default Footer;