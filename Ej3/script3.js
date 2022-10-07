//l
const resenas = [
    {
      id: 1,
      nombre: "Kim So Hyun",
      trabajo: "Actriz, modelo y presentadora",
      img:
        "https://www.themoviedb.org/t/p/w500/4rmnKUGykuYKBDPsmypYKrklw64.jpg",
      text:
        "Conocida por sus interpretaciones en Who Are You: School 2015, Page Turner, Moon Embracing the Sun, The Emperor: Owner of the Mask, The Last Princess, Pure Love, Love Alarm, The Tale of Nokdu y River Where the Moon Rises",
    },
    {
      id: 2,
      nombre: "Kim Ji-Soo",
      trabajo: "cantante, actriz, modelo y presentadora",
      img:
        "https://www.soundpark.news/__export/1640124937943/sites/debate/img/2021/12/21/jisoo-de-blackpink_x1x.jpg_423682103.jpg",
      text:
        "Miembro del grupo Blackpink. Se unió a YG Entertainment en 2011 y se convirtió en aprendiz durante cinco años antes de debutar con Blackpink en agosto de 2016. ",
    },
    {
      id: 3,
      nombre: "Lee Jong Suk",
      trabajo: "Modelo y actor",
      img:
        "https://akamai.sscdn.co/letras/338x298/fotos/e/a/7/6/ea76e83f5ba5d48f5d685d6270f0c71e.jpg",
      text:
        "Debutó en 2005 con 15 años como modelo de ropa masculina, donde fue conocido por ser el modelo más joven del programa de colecciones para la semana de la moda de Seúl.",
    },
    {
      id: 4,
      nombre: "Arturo Maltos",
      trabajo: "diseñador y bailarin",
      img:
        "https://www.arumals.com/images/avatar.png",
      text:
        "Planeación y desarrollo de proyectos del área de la simulación medica y la salud, basados en ambientes LAMP y Meteor.",
    },
  ];
  // Seleccionar articulos
  const img = document.getElementById("img-persona");
  const autor = document.getElementById("autor");
  const trabajo = document.getElementById("trabajo");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // establece elemento inicial
  let currentItem = 0;
  
  // carga elemento inicial
  window.addEventListener("DOMContentLoaded", function () {
    const item = resenas[currentItem];
    img.src = item.img;
    autor.textContent = item.nombre;
    trabajo.textContent = item.trabajo;
    info.textContent = item.text;
  });
  
  // muestra las personas de la reseña
  function showPerson(person) {
    const item = resenas[person];
    img.src = item.img;
    autor.textContent = item.nombre;
    trabajo.textContent = item.trabajo;
    info.textContent = item.text;
  }
  // boton siguiente
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > resenas.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // boton anterior
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = resenas.length - 1;
    }
    showPerson(currentItem);
  });
  // muestra persona al azar
  randomBtn.addEventListener("click", function () {
    console.log("hello");
  
    currentItem = Math.floor(Math.random() * resenas.length);
    showPerson(currentItem);
  });
  