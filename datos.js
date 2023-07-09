const todosProyectos = [
    {
        id: 0,
        nombre: "Como construir una letra de reggaeton",
        descripcion: "Esta aplicacion nos permite construir una letra de reggaeton en base a numeros aleatorios y divertidas opciones que elegimos para la construccion de una bonita letra ",
        link: "https://takeasteregg.github.io/Reggaetonton/"
    },
    {
        id:1,
        nombre: "La resolvente",
        descripcion: "Sirve para resolver y hallar las soluciones a una ecuacion cuadratica. los X1 y X2 que cortan al eje X, si es que lo cortan. Si las raices son imaginarias no te lo dice porque ni idea de como trabajar con imaginarios aca. Fin",
        link: "https://takeasteregg.github.io/Resolvente/"
    },
    {
        id:2,
        nombre: "enlace hacia prototipo de curriculum",
        descripcion: "Es un bosquejo de lo que querria tener como un CV online actualizado para mostrar en vez de usar un linkedin, pero es bastante mas trabajoso de mantener actualizado ",
        link: "https://takeasteregg.github.io/BorrarPruebaCV/"
    },
    {
        id: 3,
        nombre: "Enlace al menu o carta de resto",
        descripcion: "Enlace a como hacer un menu en vanillaJS con mapeos y cosas locas",
        link: "https://takeasteregg.github.io/MenuVainilla/"
    },
    {
        id: 4,
        nombre: "Frases filosoficas",
        descripcion: "Generador de frases profundas para pensar... o quizas no tanto",
        link: "https://takeasteregg.github.io/Filosofeador/"
    },
    {
        id: 5,
        nombre: "Calculador de edad GAP",
        descripcion: "En base a la regla esa que anda dando vueltas en internet, calcula si la diferencia de edad es permitida o no",
        link: "https://takeasteregg.github.io/EdadesLegales/"
    },
    {
        id: 6,
        nombre: "enlace a google",
        descripcion: "Vas a google",
        link: "https://www.google.com"
    }
];

window.addEventListener("DOMContentLoaded", function () {
    mostrarItems(todosProyectos)
  });


function mostrarItems(argumento) {
    let todaslasopciones = argumento.map(function(pagina){
        return ` <div class="row align-items-start">
        <div class="col">
          <a href="${pagina.link}"> ${pagina.nombre}</a>
        </div>
        <div class="col">
          <p> ${pagina.descripcion} 
          </p>
        </div>
      </div>`
    }
    )
    todaslasopciones = todaslasopciones.join("")
    console.log(todaslasopciones)
    sectionCenter.innerHTML = todaslasopciones;
}


