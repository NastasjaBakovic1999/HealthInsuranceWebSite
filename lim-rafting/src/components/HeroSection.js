import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection()
{
	return (
		<div className='hero-container'>
			<h1>AVANTURA JE PRED TOBOM</h1>
			<p>Ti samo ponesi dobro raspoloženje,</p>
			<p>sportski duh i malo hrabrosti, ostalo prepusti nama!</p>
			<div className='hero-btns'>
				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
				>
					PRIJAVI SE
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;