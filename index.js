const imagenes = [
  {
    src: "./Assets/Lemon.jpg",
    alt: "Green_coffe",
    nombre: "Limon fresco",
    descripcion: "Limones secuestrados de tafi viejo",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Green-coffe.jpg",
    alt: "Green_coffe",
    nombre: "Cafe Verde",
    descripcion: "Cafe extraido de las entrañas de hulk",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
  {
    src: "./Assets/Coffe.jpg",
    alt: "coffe",
    nombre: "Cafe negro",
    descripcion: "Cafe cosechado por niños esclavos colombianos",
    ref: "./limon.html",
  },
];

var html = "";
(function renderizarGaleria(imagenes) {
  imagenes.forEach(function (imagen) {
    html += `
        <div class="galeria-item">
          <div class="Div_prod">
          <img src="${imagen.src}" alt="${imagen.alt}" width="350em" height="300em" />
          </div>
          <div class="Div_info">
          <h3 class="centrar">${imagen.nombre}</h3>
          <p class="centrar">${imagen.descripcion}</p>
          <a class="detalles" href="${imagen.ref}"><p>Detalles</p></a>
          </div>
        </div>
      `;
  });
})(imagenes);
document.getElementById("Product_container").innerHTML = html;

const scrollNav = [
  { inicio: "nosotros_nav", target: "nosotros" },
  { inicio: "productos_nav", target: "Product_container" },
  { inicio: "contacto_nav", target: "contacto" },
  { inicio: "localidad_nav", target: "localidad" },
];

(function addEventNavBar() {
  scrollNav.forEach(function (element) {
    document.getElementById(element.inicio).addEventListener("click", () => {
      document
        .getElementById(element.target)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
})();
