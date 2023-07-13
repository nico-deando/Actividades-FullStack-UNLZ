const contenido = document.getElementById("container");
const btn__pag__siguiente = document.getElementById("pag__siguiente");
const btn__pag__anterior = document.getElementById("pag__anterior");
const contenedor__de__paginas = document.getElementById(
  "cantidad__de__paginas"
);
const pokemonBuscado = document.getElementById("pokemon_buscado")
let arrayDePokemones = []
let bandera = true;

let pagina = 0;
let limiteDelListado;
let cantidadDePaginas;

function traerPokemones(limite = 10, offset = 0) {
  /* setTimeout((contenido.innerText = "Cargando..."), 2000); */
  const respuesta = fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limite}&offset=${offset}`
  );
  respuesta
    .then((respuesta) => {
      console.log(respuesta);
      if (respuesta.ok) {
        return respuesta.json();
      }
    })
    .then((respuestaComoJson) => {
      limiteDelListado = respuestaComoJson.count;
      cantidadDePaginas = Math.round(limiteDelListado / 10);

      console.log(respuestaComoJson);
      contenido.innerText = "";
      respuestaComoJson.results.forEach((element) => {
        let parrafo = document.createElement("p");
        parrafo.classList.add("item");
        parrafo.innerHTML = `<a href="pokemon__detalle.html?name=${element.name}">${element.name}</a>`;
        contenido.append(parrafo);

        console.log(element.name);
        /* generardorDePaginas(); */
        bandera = true
      });
    });
    /* buscarPokemon() */
}

function irAPaginaSiguiente() {
  if (pagina < cantidadDePaginas-1) {
    pagina++;
    if(bandera){
      traerPokemones(10, pagina * 10);
    }else{
      imprimirPokemones(arrayDePokemones)
    }
  }
  console.log(pagina);
}

function irAPaginaAnterior() {
  if (pagina > 0) {
    pagina--;
    if(bandera){
      traerPokemones(10, pagina * 10);
    }else{
      imprimirPokemones(arrayDePokemones)
    }
  }
  console.log(pagina);
}

function generardorDePaginas() {
  for (let i = 0; i < cantidadDePaginas; i++) {
    const link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerText = i;
    link.classList.add("boton");
    link.dataset["indice"] = i;
    contenedor__de__paginas.append(link);
  }
  const contenedorDeLinks = document.getElementsByClassName("boton");
  console.log(contenedorDeLinks);

  for (let element of contenedorDeLinks) {
    element.onclick = () => traerPokemones(10, element.dataset["indice"] * 10);
  }
  for (let element of contenedorDeLinks) {
    if (element < numPag()) {
      element.visibility = "hidden";
    } else {
      element.visibility = "visible";
    }
  }
}

function numPag() {
  return Math.ceil(limiteDelListado / cantidadDePaginas);
}

function delayTraerPokemones() {
  let parrafo = "Conectando a base de datos de PokeDex...";
  contenido.innerText = parrafo;
/*   setTimeout((contenido.innerText = parrafo), 2000); */
  setTimeout(traerPokemones, 2000);
}

function buscarPokemon(){
  const respuesta = fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
  respuesta.then((respuesta)=>{
    if(respuesta.ok){
      return respuesta.json()
    }
  }).then((respuestaJson)=>{
   contenido.innerHTML = ""

  /*   for(let i = 0; i<1280;i++){
     if(respuestaJson.results[i].name.includes(pokemonBuscado.value)){
      let parrafo = document.createElement("p")
      contenido.innerHTML += `<p><a href="pokemon__detalle.html?name=${respuestaJson.results[i].name}">${respuestaJson.results[i].name}</a></p>`;
     } 
    } */
    /* Se necesita un array de objetos que contenga el nombre del pokemon,{name:zubat} */
    arrayDePokemones =  respuestaJson.results.filter((pokemon)=>{
      return pokemon.name.includes(pokemonBuscado.value)
    }
    ).map((pokemon)=>{
      return {name:pokemon.name}
    })

    limiteDelListado = arrayDePokemones.length
    cantidadDePaginas = Math.round(limiteDelListado / 10)
    console.log(arrayDePokemones)
    pagina = 0
    imprimirPokemones(arrayDePokemones)
    bandera = false
})
}

function imprimirPokemones(array){
  contenido.innerHTML = ""
array.slice(pagina * 10,pagina * 10 +10).forEach((element)=>{
  let parrafo = document.createElement("p");
        parrafo.classList.add("item");
        parrafo.innerHTML = `<a href="pokemon__detalle.html?name=${element.name}">${element.name}</a>`;
        contenido.append(parrafo);
})
}