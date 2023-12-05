const span_txt = document.getElementById("span-txt");
const btn_add_tareas = document.getElementById("btn-lista-tareas");
const btn_add_libros = document.getElementById("btn-lista-libros");
const btn_add_peliculas = document.getElementById("btn-lista-peliculas");
const edit_tareas = document.getElementById("btn-tareas");
const edit_peliculas = document.getElementById("btn-peliculas");
const edit_libros = document.getElementById("btn-libros");
const form = document.getElementById("form");
let form_buttons = document.querySelectorAll(".submit");

let listaElegida = "";

let lista = [];
let listaParseada = JSON.stringify(lista);

if (sessionStorage.getItem("listaElegida")) {
  if (sessionStorage.getItem("listaDeTareas")) {
    listaElegida = "listaDeTareas";
    span_txt.innerHTML =
      `Se encontro una Lista De Tareas ` +
      ` <button id="btn-tareas" onclick="editarTareas()" >Ir</button>`;
  } else {
    span_txt.innerHTML = "<br> No se encontraron listas de tareas";
  }
  if (sessionStorage.getItem("listaDePeliculas")) {
    listaElegida = "listaDePeliculas";
    span_txt.innerHTML += `<br> Se encontro una Lista de Peliculas <button id="btn-peliculas" onclick="editarPeliculas()">Ir</button>  `;
  } else {
    span_txt.innerHTML += "<br>  No se encontraron listas de peliculas";
  }
  if (sessionStorage.getItem("listaDeLibros")) {
    listaElegida = "listaDeLibros";
    span_txt.innerHTML += `<br> Se encontro una Lista de Libros <button id="btn-libros" onclick="editarLibros()">Ir</button>`;
  } else {
    span_txt.innerHTML += "<br>  No se encontro una lista de libros";
  }
} else {
  span_txt.innerHTML = "No hay ninguna lista disponible, cree una";
}

function editarPeliculas() {
  listaElegida = "listaDePeliculas";
  sessionStorage.setItem("listaElegida", listaElegida);
  document.location = "lista-de-tareas.html";
}

function editarTareas() {
  listaElegida = "listaDeTareas";
  sessionStorage.setItem("listaElegida", listaElegida);
  document.location = "lista-de-tareas.html";
}

function editarLibros() {
  listaElegida = "listaDeLibros";
  sessionStorage.setItem("listaElegida", listaElegida);
  document.location = "lista-de-tareas.html";
}

btn_add_tareas.addEventListener("click", (e) => {
  sessionStorage.setItem("listaDeTareas", listaParseada);
  listaElegida = "listaDeTareas";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  location.reload();
});

btn_add_libros.addEventListener("click", (e) => {
  sessionStorage.setItem("listaDeLibros", listaParseada);
  listaElegida = "listaDeLibros";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  location.reload();
});

btn_add_peliculas.addEventListener("click", (e) => {
  sessionStorage.setItem("listaDePeliculas", listaParseada);
  listaElegida = "listaDePeliculas";
  sessionStorage.setItem("listaElegida", listaElegida);
  console.log("se creo la lista");
  location.reload();
});

/* form_buttons = document.querySelectorAll(".submit");
form_buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    document.location = "#";
  });
}); */
