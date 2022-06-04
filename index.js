const imagenes = [
    {
      src: './Assets/Lemon.jpg',
      alt: 'Lemon',
      nombre: 'Limones',
      descripcion: 'Limones secuestrados de tafi viejo'
    },
    {
      src: './Assets/Coffe.jpg',
      alt: 'Coffe',
      nombre: 'Cafe',
      descripcion: 'Cafe cosechado por niños esclavos colombianos'
    },
    {
      src: './Assets/Green-Coffe.jpg',
      alt: 'Green_coffe',
      nombre: 'Cafe Verde',
      descripcion: 'Cafe extraido de las entrañas de hulk'
    },
  ];
  var html = '';
  function renderizarGaleria(imagenes) {
    imagenes.forEach(function(imagen){
      html += `
        <div class="galeria-item">
          <img src="${imagen.src}" alt="${imagen.alt}" width="200px" />
          <h3>${imagen.nombre}</h3>
          <p>${imagen.descripcion}</p>
        </div>
      `;
    });
  };
  renderizarGaleria(imagenes);
  

//   let container = document.getElementById("Product_container");
//   var htmlobject = document.createElement("div");
//   htmlobject.innerHTML = html;
//   console.log(htmlobject);
//   container.appendChild(htmlobject);

document.getElementById("Productcontainer").innerHTML = html;

 