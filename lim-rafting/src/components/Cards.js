import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards()
{
	return (
		<div className="cards">
			<h1>Pogledaj šta te sve čeka kod nas!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="../images/jungle.png"
							text="Istrazi skrivene brzake Lima"
							label="Avantura"
							path="/"
						/>
						<CardItem
							src="../images/rafting1.jpg"
							text="Osvoji Crni Vrh i doživi pravo planinarsko iskustvo"
							label="Planinarenje"
							path="/"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="../images/rafting1.jpg"
							text="Ako si planinar početnik, Lisja stena je prilika da se oprobaš"
							label="Planinarenje"
							path="/"
						/>
						<CardItem
							src="../images/rafting1.jpg"
							text="Zaplovi meandrima Uvca - iskusi pravu prirodu"
							label="Avantura"
							path="/"
						/>
						<CardItem
							src="../images/rafting1.jpg"
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