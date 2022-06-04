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
function renderizarGaleria(imagenes) {
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
}
renderizarGaleria(imagenes);
document.getElementById("Product_container").innerHTML = html;

{/* <div class="galeria-item">
          <div class="Div_prod">
          <img src="${imagen.src}" alt="${imagen.alt}" width="350em" height="300em" />
          </div>
          <div class="Div_info">
          <h3 class="centrar">${imagen.nombre}</h3>
          <p class="centrar">${imagen.descripcion}</p>
          <a class="detalles" href="${imagen.ref}"><p class="centrar"><a href="#openModal" class="detalles">Lanzar el modal</a>
          <div id="openModal" class="modalDialog">
	    <div>
		<a href="#close" title="Close" class="close">X</a>
		<h2>Mi modal</h2>
		<p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p>
		<p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>
	</div>
</div></p></a>
          </div>
        </div> */}
