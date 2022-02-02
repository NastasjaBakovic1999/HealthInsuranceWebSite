import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import lisjaStena from '../images/lisjaStena.jfif';
import uvac from '../images/uvac.jfif';
import zlatibor from '../images/zlatibor.jpg';
import crniVrh from '../images/crniVrh.jpg';
import lim from '../images/lim.jfif';

function Cards()
{
	return (
		<div className="cards">
			<h1>Pogledaj šta te sve čeka kod nas!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src={lim}
							text="Istrazi skrivene brzake Lima"
							label="Avantura"
							path="/"
						/>
						<CardItem
							src={crniVrh}
							text="Osvoji Crni Vrh i doživi pravo planinarsko iskustvo"
							label="Planinarenje"
							path="/"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src={lisjaStena}
							text="Ako si planinar početnik, Lisja stena je prilika da se oprobaš"
							label="Planinarenje"
							path="/"
						/>
						<CardItem
							src={uvac}
							text="Zaplovi meandrima Uvca - iskusi pravu prirodu"
							label="Avantura"
							path="/"
						/>
						<CardItem
							src={zlatibor}
							text="Oseti svežinu čistog vazduha Zlatibora"
							label="Avantura"
							path="/"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;