const nombrePokemon = document.getElementById("nombre");
const imagePokemon = document.getElementById("pokemon__image");
const vidaPokemon = document.getElementById("vida");
const numeroPokemon = document.getElementById("nro");
const tipoPokemon = document.getElementById("tipo")
const alturaPokemon = document.getElementById("altura");
const pesoPokemon = document.getElementById("peso");
const ataquePokemon = document.getElementById("atq");
const defensaPokemon = document.getElementById("dfs");
const habilidadPokemon = document.getElementById("habilidad");
const habilidad_info = document.getElementById("habilidad__info");
const cartaDePokemon = document.getElementById("card__container")
const tipoIcon = document.getElementById("tipo_de_pokemon")
const main__container = document.getElementById("body")

const queryParams = new URLSearchParams(document.location.search);

console.log(queryParams);

nombrePokemon.innerText = queryParams.get("name");

function mostratDetallePokemon() {
  const respuesta = fetch(
    "https://pokeapi.co/api/v2/pokemon/" + queryParams.get("name")
  );
  respuesta
    .then((respuesta) => {
      if (respuesta.ok) {
        return respuesta.json();
      }
    })
    .then((respuestaJson) => {
      const pokemonImagen = respuestaJson.sprites.other["official-artwork"].front_default
      numeroPokemon.innerText += ": " + respuestaJson.id
      vidaPokemon.innerText += ": " + respuestaJson.stats[0].base_stat;
      alturaPokemon.innerText += ": " + respuestaJson.height + "'";
      pesoPokemon.innerText += ": " + respuestaJson.weight;
      ataquePokemon.innerText += " " + respuestaJson.stats[1].base_stat;
      defensaPokemon.innerText += " " + respuestaJson.stats[2].base_stat;
      habilidadPokemon.innerText = respuestaJson.abilities[0].ability.name;
      tipoPokemon.innerText +=" " + respuestaJson.types[0].type.name
      if(pokemonImagen != null){
        imagePokemon.style.backgroundImage = `url(${pokemonImagen})`
      }else{
        imagePokemon.style.backgroundImage = `url(${respuestaJson.sprites.front_default})`
      }
      console.log(respuestaJson.sprites.front_default)
      console.log(pokemonImagen)
      cambiarBackPorTipo(respuestaJson)
      /* console.log(Object.entries(respuestaJson.sprites.other)[0][1]); */

      /* image.setAttribute("src", respuestaJson.sprites.front_default);
      contenido.append(image); */
    });
}

mostratDetallePokemon();

function devolverImagen(respuesta){

/* for(let item in respuesta.sprites.other){
  if(item == "official-artwork"){
    return item
  }
} */
Object.entries(respuesta.sprites.other).forEach(([key,value])=>{
  console.log(value)
})
}

function cambiarBackPorTipo(respuesta){
  const tipoDePokemon = respuesta.types[0].type.name
  switch(tipoDePokemon){
    case "normal":
      main__container.style.backgroundImage = "url(./templates/resources/pokemon-espada-y-escudo.-1.webp)"
      cartaDePokemon.style.backgroundColor = "#998e71" /* Normal type: color */
      tipoIcon.style.backgroundColor = "#998e71"
    break
    case "fire":
      main__container.style.backgroundImage = "url(./templates/resources/Volcano_by_susiron-d63klah.webp)"
      cartaDePokemon.style.backgroundColor =  "#e04d0d" /* Fire type: color */
      tipoIcon.style.backgroundColor = "#e04d0d"
      break
    case "water":
      main__container.style.backgroundImage = "url(./templates/resources/fondo-agua.jpeg)"
      cartaDePokemon.style.backgroundColor = "#0d9ae0" /* Water type: color */
      tipoIcon.style.backgroundColor = "#0d9ae0" 
      break
    case "grass":
      main__container.style.backgroundImage = "url(./templates/resources/grass_image.jpg)"
      cartaDePokemon.style.backgroundColor = "#28d15b" /* Grass type: color */
      tipoIcon.style.backgroundColor = "#28d15b"
      break
    case "electric":
      main__container.style.backgroundImage = "url(./templates/resources/electric_fondo.jpg)"
      cartaDePokemon.style.backgroundColor = "#d8db1a" /* Electric type: color */
      tipoIcon.style.backgroundColor = "#d8db1a"
      break
    case "ice":
      main__container.style.backgroundImage = "url(./templates/resources/ice_image.jpg)"
      cartaDePokemon.style.backgroundColor = "#38e6f2" /* Ice type: color */
      tipoIcon.style.backgroundColor = "#38e6f2"
      break
    case "fighting":
      main__container.style.backgroundImage = "url(./templates/resources/Dojo-image.webp)"
      cartaDePokemon.style.backgroundColor = "#c71e18" /* Fighting type: color */
      tipoIcon.style.backgroundColor = "#c71e18"
      break
    case "poison":
      main__container.style.backgroundImage = "url( ./templates/resources/poison-pokemon.jpg)"
      cartaDePokemon.style.backgroundColor = "#741dd1"  /* Poison type: color */
      tipoIcon.style.backgroundColor = "#741dd1"
      break
    case "ground":
      main__container.style.backgroundImage = "url(./templates/resources/ground_image.jpg)"
      cartaDePokemon.style.backgroundColor = "#c7ad6f" /* Ground type: color */
      tipoIcon.style.backgroundColor = "#c7ad6f"
      break
    case "flying":
      main__container.style.backgroundImage = "url(./templates/resources/flying_image.jpg)"
      cartaDePokemon.style.backgroundColor = "#99a3bf" /* Flying type: color */
      tipoIcon.style.backgroundColor = "#99a3bf"
      break
    case "psychic":
      main__
  }

}