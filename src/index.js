/*
 *  Project: react1
 *  File: index.js
 *  Created: 10:19 SA, 18/07/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import React    from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
	{
		name       : 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price      : 6,
		photoName  : 'pizzas/focaccia.jpg',
		soldOut    : false,
	},
	{
		name       : 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price      : 10,
		photoName  : 'pizzas/margherita.jpg',
		soldOut    : false,
	},
	{
		name       : 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price      : 12,
		photoName  : 'pizzas/spinaci.jpg',
		soldOut    : false,
	},
	{
		name       : 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price      : 12,
		photoName  : 'pizzas/funghi.jpg',
		soldOut    : false,
	},
	{
		name       : 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price      : 15,
		photoName  : 'pizzas/salamino.jpg',
		soldOut    : true,
	},
	{
		name       : 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price      : 18,
		photoName  : 'pizzas/prosciutto.jpg',
		soldOut    : false,
	},
];

function App() {
	return <div className="container">
		<Header />
		<Menu />
		<Footer />
	</div>;
}

function Header() {
	return <div className="header">
		<h1>Pizza Menu</h1>
	</div>;
}

function Menu() {
	const pizzas = pizzaData
	const numPizzas = pizzas.length
	
	return <main className="menu">
		<h2>Menu</h2>
		{
			numPizzas ?
			<ul className="pizzas">
				{
					pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.name} />)
				}
			</ul> : <p>We're working on our menu. Please come back later!</p>
		}
		{/*<Pizza*/}
		{/*		name="Pizza Funghi" ingredients="Tomato, mozarella, mushrooms, and onion"*/}
		{/*		price={12} photoName="pizzas/funghi.jpg" />*/}
		{/*<Pizza*/}
		{/*		name="Pizza Funghi" ingredients="Tomato, mozarella, mushrooms, and onion"*/}
		{/*		price={12} photoName="pizzas/funghi.jpg" />*/}
	</main>;
}

function Footer() {
	// return React.createElement('footer', null, "Currently open!")
	const openHour = 8;
	const closeHour = 22;
	const hour = new Date().getHours();
	const isOpen = hour >= openHour && hour <= closeHour;
	
	return <footer className="footer">
		{
			isOpen ?
		  <div className='order'>
				<p>{new Date().toLocaleTimeString()}. Currently open - Come visit us or order
			                                                    online!</p>
				<button className="btn">Order now</button>
			</div> : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
		}
	</footer>;
}

function Pizza(props) {
	const { pizza } = props;
	
	return <li className="pizza">
		<img src={pizza.photoName} alt={pizza.name} />
		<div>
			<h3>{pizza.name}</h3>
			<p>{pizza.ingredients}</p>
			<span>{pizza.price}</span>
		</div>
	</li>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<React.StrictMode>
	<App />
</React.StrictMode>);
