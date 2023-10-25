"use strict";

document.write(`<h3>Ejecicio 2</h3>`);

class Zombi {
	constructor(nombre, puntosVida, potencia) {
		this.nombre = nombre;
		this.puntosVida = puntosVida;
		this.potencia = potencia;
	}
	atacar(objetivo) {
		document.write(`<p>${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño</p>`);
	}
}

class Jugador {
	constructor(nombre, ocupacion, puntosVida, faccion) {
		this.nombre = nombre;
		this.ocupacion = ocupacion;
		this.puntosVida = puntosVida > 100 ? 100 : puntosVida;
		this.faccion = faccion;
	}
}

let jugador1 = new Jugador("Julio", "Cazador", 80, "Humanos");
let jugador2 = new Jugador("Sara", "Médico", 110, "Aliados");

class Abominacion extends Zombi {
	constructor(nombre, puntosVida, potencia) {
		super(nombre, puntosVida, potencia);
	}

	ataqueMultiple(objetivo) {
		for (let i = 0; i < 3; i++) {
			super.atacar(objetivo);
		}
	}
}

let abominacion = new Abominacion("Abominación", 150, 20);

abominacion.ataqueMultiple(jugador1.nombre);
