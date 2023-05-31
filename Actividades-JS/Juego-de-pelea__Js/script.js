class Player {
  constructor(nombre) {
    this.nombre = nombre;
    this.vida = 100;
    this.normal = 10;
    this.addDaño = false;
    this.especial = 40;
    this.contadorBendicion = 0;
    this.contadorGrito = 0;
    this.contadorDeAtaqueEspecial = 0;
    this.turno = true;
  }

  ayuda = () => {
    console.log("Bienvenido te mostrare como jugar...");
    console.log(
      "El juego es una batalla por turnos, golpea uno luego el otro. NO PUEDES GOLPEAR DOS VECES SEGUIDAS"
    );
    console.log("Los jugadores son: player1 y player2");
    console.log(
      "Los jugadores tienen 2 ataques disponibles, 2 ayudas y 100pts de vida en total: "
    );
    console.log("LOS ATAQUES SON:");
    console.log(
      "ataqueNormal(nombre del jugador a quien atacas) : atacas con 10pts de daño al oponente"
    );
    console.log(
      "ataqueEspecial(nombre del jugador a quien atacas) : atacas por 40pts de daño al oponente, SOLO PUEDES USARLO UNA SOLA VEZ"
    );
    console.log("LAS AYUDAS SON:");
    console.log(
      "bendicionDivina() : acudes a la bendicion de los dioses y restauras 20pts de vida, SOLO PUEDES USARLO UNA SOLA VEZ"
    );
    console.log(
      "gritoDeBatalla() : Lanzas un grito primal  de batalla que te otorga un aumento de 10pts de daño en tu proximo ataque, SOLO PUEDE USARSE UNA SOLA VEZ"
    );
    console.log("El caballero que pierda toda su vida, pierde la batalla");
    console.log("A LA BATALLA!");
  };

  mensajesEnPartida = (Player) => {
    switch (Player.vida) {
      case 90:
        console.log(
          "Levantas tu espada y golpeas a " +
            Player.nombre +
            " SU SALUD aun es de " +
            Player.vida +
            " Esto recien empieza te responde golpeandose el pecho"
        );
        break;
      case 80:
        console.log(
          "Atacas rapidamente luego de un finta, tu oponente tiene " +
            Player.vida +
            " DE SALUD!"
        );
        break;
      case 70:
        console.log(
          "Vuelves a atacar, esta vez contrarestas un ataque directo con tu espada y lo golpeas con el mamgo de tu espada! bien hecho!... tu oponente tiene " +
            Player.vida +
            " DE SALUD"
        );
        break;
      case 60:
        console.log(
          "La batalla a sido muy pareja, el es un gran contrincante, ese que ansiaste siempre... pero aun tienen fuerzas y atacas...tu oponente tiene " +
            Player.vida +
            " DE SALUD"
        );
        break;
      case 50:
        console.log(
          "Logras evadir un ataque de tu oponente y contratacas con tu espada, tu oponente tiene " +
            Player.vida +
            " DE SALUD, ambos comienzan a sentir el peso de la batalla..."
        );
        break;
      case 40:
        console.log(
          "Logras bloquear un ataque con tu escudo y arremetes con un golpe de puño fenomenal!, tu oponente esta con " +
            Player.vida +
            " DE SALUD, es un momento cruzial en la batalla y piensas tus proximos movimientos con mucha mas frialdad..."
        );
        break;
      case 30:
        console.log(
          "La batalla es agotadora, los golpes son devastadores para ambos, pero aun asi golpeas otra vez... tu oponente tiene " +
            Player.vida +
            " DE SALUD restante...no te rindes!..y el tampoco!"
        );
        break;
      case 20:
        console.log(
          "Estas a solo 2 golpes de la victoria, tus manos casi entumecidas por el peso de tu espada, ves borroso, el aire congela tus pulmones, pero aun asi lo vulves a herir..tu oponente tiene " +
            Player.vida +
            " DE SALUD..."
        );
        break;
      case 10:
        console.log(
          "Solo un golpe mas!! Tu oponente esta casi de rodillas, la sangre le tapa la vista, esta con una rodilla en el suelo, pero aun no suelta su espada, sabes que hacer!..tu oponente tiene " +
            Player.vida +
            " DE SALUD..."
        );
        break;
      case 0:
        console.log(
          "Lo venciste!! caes de rodillas en el fango del campo de batalla, suspiras y miras al cielo, contemplas la victoria, ENHORABUENA CABALLERO!!"
        );
        console.log(
          "EL JUGADOR GANADOR FUE: " +
            this.nombre +
            " tus hombres te aclaman, gritan tu nombre, la victoria es suya...TUYA... vuelves a tu tienda, te quitas tu armadura rasgada y cubierta de sangre, pero dejas tu espada cerca tuyo, sabes que habran mas batallas.... "
        );
        break;
    }
  };

  ataqueNormal = (Player) => {
    if (this.vida > 0) {
      if (this.turno) {
        if (Player.vida > 0) {
          if (this.addDaño) {
            Player.vida = Player.vida - this.normal * 2;
            this.mensajesEnPartida(Player);
            this.addDaño = false;
            this.turno = false;
            Player.turno = true;
          } else {
            Player.vida = Player.vida - this.normal;
            this.mensajesEnPartida(Player);
            this.turno = false;
            Player.turno = true;
          }
        } else {
          console.log(
            "No puedes seguir atacando, el caballero ya esta muerto..."
          );
        }
      } else {
        console.log(
          "No puedes atacar, no es tu turno...Concentrate en la batalla caballero!"
        );
      }
    } else {
      console.log(
        "Estas muerto caballero, tus soldados te rendiran el apropiado sepulcro..."
      );
    }
  };

  ataqueEspecial = (Player) => {
    if (this.vida > 0) {
      if (this.turno) {
        if (this.contadorDeAtaqueEspecial == 0) {
          Player.vida = Player.vida - this.especial;
          console.log(
            "Usaste tu ataque especial!! Cargas contra tu oponente con tu escudo, lo aturdes y lo atacas con un ataque potente!Que batalla!!"
          );
          this.mensajesEnPartida(Player);
          this.contadorDeAtaqueEspecial++;
          this.turno = false;
          Player.turno = true;
        } else {
          console.log("Ya utilizaste este ataque, no puedes volver a hacerlo");
        }
      } else {
        console.log(
          "No puedes atacar, no es tu turno...Concentrate en la batalla caballero!"
        );
      }
    } else {
      console.log(
        "Estas muerto caballero, tus soldados te rendiran el apropiado sepulcro..."
      );
    }
  };

  bendicionDivina = () => {
    if (this.contadorBendicion == 0) {
      this.vida += 20;
      console.log(
        "Utilizaste la bendicion divina, TU SALUD AHORA ES DE: " + this.vida
      );
    } else {
      console.log("No puedes usarla, tiene un solo uso...");
    }
  };

  gritoDeBatalla = () => {
    if (this.contadorGrito == 0) {
      this.addDaño = true;
      console.log(
        "Realizas un grito de batalla que te llena de fuerza para tu proximo ataque..."
      );
    } else {
      console.log("No puedes usarlo, tiene un solo uso...");
    }
  };
}

let player1 = new Player("player1");
let player2 = new Player("player2");

console.log("Bienvenido al juego de pelea de JavaScrpit...");
console.log(
  "En esta batalla epica, sere yo (La consola) quien relate las proesas en el campo de batalla"
);
console.log("Comenzara atacando el player uno...");
console.log(
  "Si necesitas mas detalles acerca del juego por favor, escribe: .ayuda() luego del nombre de tu player"
);
console.log(
  "Dicho esto por el poder que me otorgan los dioses y el emperador..."
);
console.log("AL CAMPO DE BATALLA!");
