const pokemon_img = document.getElementById("pokemon_img");
const pokemon_name = document.getElementById("name");
const pokemon_weight = document.getElementById("weight");
const pokemon_height = document.getElementById("height");
const contenido = document.getElementById("main_container");
const pagSiguiente = document.getElementById("after_pag");

let pagina = 0;
let limiteDelListado;
let cantidadDePaginas;

function traerData(offset = 0, limit = 5) {
  const respuesta = fetch(
    ` https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  respuesta
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
    })
    .then((respuestaComoJson) => {
      console.log(respuestaComoJson.results);
      limiteDelListado = respuestaComoJson.count;
      cantidadDePaginas = Math.round(limiteDelListado / 5);

      contenido.innerHTML = "";
      respuestaComoJson.results.forEach((pokemon) => {
        let pokeCard = document.createElement("div");

        pokeCard.innerHTML = ` <div id="pokemon_card" class="pokemon_card">
        <div id="img_container" class="img_container">
          <img src="" alt="pokemon image" id="pokemon_img" />
        </div>
        <div id="poke_info" class="poke_info">
          <p id="name">${pokemon.name.toUpperCase()}</p>
          <p id="weight">Weight</p>
          <p id="height">Height</p>
        </div>
      </div>`;
        contenido.append(pokeCard);
      });
    });
}
traerData();

function nextPag() {
  if (pagina < cantidadDePaginas) {
    pagina++;
    traerData(pagina * 5, 5);
    console.log("click");
  }
}

function beforePag() {
  if (pagina < cantidadDePaginas) {
    pagina--;
    traerData(pagina * 5, 5);
    console.log("click");
  }
}
