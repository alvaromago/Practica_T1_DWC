"use strict";

document.write(`<h3>Ejecicio 4</h3>`);

document.write(`<p>El resultado del ejercicio se muestra en la consola</p>`);

let puntuaciones = [
	{ nombre: "Pablo", puntuacion: 180 },
	{ nombre: "Javier", puntuacion: 270 },
	{ nombre: "Raquel", puntuacion: 70 },
	{ nombre: "Mario", puntuacion: 310 },
	{ nombre: "Miriam", puntuacion: 90 },
	{ nombre: "Fernando", puntuacion: 105 },
	{ nombre: "Laura", puntuacion: 210 },
	{ nombre: "Julian", puntuacion: 520 },
];

console.log(puntuaciones);

function jugadoresTop(array) {
	let jugadoresTopArray = array.filter((jugador) => jugador.puntuacion > 100);
	return jugadoresTopArray;
}

console.log(jugadoresTop(puntuaciones));
