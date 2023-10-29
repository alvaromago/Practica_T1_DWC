"use strict";

document.write(`<h3>Ejecicio 3</h3>`);

class Consumible {
	constructor(nombre) {
		this.nombre = nombre;
	}
	consumir(jugador) {
		document.write(`<p>${jugador.nombre} consume ${this.nombre} y no tiene ningún efecto</p>`);
	}
}
let manzana = new Consumible("manzana");
let ricardo = {
	nombre: "Ricardo",
	potencia: 1,
	puntosVida: 6,
	maxPuntosVida: 10,
	consumir: function (consumible) {
		consumible.consumir(this);
	},
};
ricardo.consumir(manzana);

// Clase Planta Curativa
class PlantaCurativa extends Consumible {
	constructor(nombre, poder) {
		super(nombre);
		this.poder = poder;
	}

	consumir(jugador) {
		if (this.poder + jugador.puntosVida > jugador.maxPuntosVida) {
			jugador.puntosVida = jugador.maxPuntosVida;
		} else {
			jugador.puntosVida += this.poder;
		}

		document.write(`<p>${jugador.nombre} consume ${this.nombre} y ahora tiene ${jugador.puntosVida} puntos de vida</p>`);
	}
}

let jengibre = new PlantaCurativa("jengibre", 5);

ricardo.consumir(jengibre);
