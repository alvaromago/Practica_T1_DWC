"use strict";

document.write(`<h3>Ejecicio 1</h3>`);

// Creación clase Zombi
class Zombi {
	constructor(nombre, puntosVida, potencia) {
		this.nombre = nombre;
		this.puntosVida = puntosVida;
		this.potencia = potencia;
	}
	atacar(objetivo) {
		document.write(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
	}
}

// Creación clase Jugador
class Jugador {
	constructor(nombre, ocupacion, puntosVida, faccion) {
		this.nombre = nombre;
		this.ocupacion = ocupacion;
		this.puntosVida = puntosVida > 100 ? 100 : puntosVida;
		this.faccion = faccion;
	}

	toString() {
		document.write(`<p>${this.nombre} - Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}</p>`);
	}
}

// Creación jugadores
let jugador1 = new Jugador("Julio", "Cazador", 80, "Humanos");
let jugador2 = new Jugador("Sara", "Médico", 110, "Aliados");

// Imprimimos por pantalla
jugador1.toString();
jugador2.toString();
