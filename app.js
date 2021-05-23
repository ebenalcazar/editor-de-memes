//Modo Claro - Oscuro
const body = document.querySelector("body");
const botonCambioModos = document.querySelector("#botonCambioModos");
const nombreBoton = document.querySelector("#nombreBoton")

botonCambioModos.addEventListener("click", ()=>{

  if (body.className == `modoOscuro`){
    body.className = `modoClaro`;
    nombreBoton.textContent = "Modo Claro"
  } else if (body.className == `modoClaro`){
    body.className = `modoOscuro`
    nombreBoton.textContent = "Modo Oscuro";
  }
});

//Botones Imagen y Texto

const panel = document.querySelector(".panel");
const panelImg = document.querySelector(".panel-img");
const panelText = document.querySelector(".panel-text");

const botonCerrarPanel = document.querySelector(".botonCerrarPanel");
const botonImg = document.querySelector(".botonImg");
const botonText = document.querySelector(".botonText");

      
      botonCerrarPanel.addEventListener("click", ()=>{
        panel.classList.add("ocultar");
      });


      botonText.addEventListener("click",()=>{
        panel.classList.remove("ocultar");
        panelImg.classList.add("ocultar");
        panelText.classList.remove("ocultar");
      });

      botonImg.addEventListener("click",()=>{
        panel.classList.remove("ocultar");
        panelText.classList.add("ocultar");
        panelImg.classList.remove("ocultar");
      })

//IMAGEN - INGRESAR IMG ELEGIDA
let urlMeme = document.getElementById("urlMeme"); //input
let imgMeme = document.getElementById("imgMeme"); //div de la img

urlMeme.addEventListener("input",() => {
  const url = urlMeme.value;
  imgMeme.style.backgroundImage = `url(${url})`;
});

//CAMBIAR FONDO DE IMG
const inputFondo = document.getElementById("inputFondo");
const spanInpuntFondo = document.getElementById("spanInputFondo");

inputFondo.addEventListener("change", ()=>{
  imgMeme.style.backgroundColor = inputFondo.value;
  spanInpuntFondo.textContent = inputFondo.value;
});

//MODO MEZCLA
const inputMezcla = document.getElementById("inputMezcla");
inputMezcla.addEventListener("change", ()=>{
  imgMeme.style.backgroundBlendMode = inputMezcla.value;
});

//FILTROS
const actualizarFiltros = () => {
  imgMeme.style.filter = `brightness(${brillo.value}) 
  opacity(${opacidad.value}) 
  contrast(${contraste.value}%) 
  blur(${desenfoque.value}px) 
  grayscale(${grises.value}%) 
  sepia(${sepia.value}%) 
  hue-rotate(${hue.value}deg) 
  saturate(${saturado.value}%) 
  invert(${negativo.value})`
};

const brillo = document.querySelector("#brillo");
brillo.addEventListener("change", actualizarFiltros);
const opacidad = document.querySelector("#opacidad");
opacidad.addEventListener("change", actualizarFiltros);
const contraste = document.querySelector("#contraste");
contraste.addEventListener("change", actualizarFiltros);
const desenfoque = document.querySelector("#desenfoque");
desenfoque.addEventListener("change", actualizarFiltros);
const grises = document.querySelector("#grises");
grises.addEventListener("change", actualizarFiltros);
const sepia = document.querySelector("#sepia");
sepia.addEventListener("change", actualizarFiltros);
const hue = document.querySelector("#hue");
hue.addEventListener("change", actualizarFiltros);
const saturado = document.querySelector("#saturado");
saturado.addEventListener("change", actualizarFiltros);
const negativo = document.querySelector("#negativo");
negativo.addEventListener("change", actualizarFiltros);

//RESTABLECER FILTROS
const botonRestablecer = document.getElementById("botonRestablecer");
const resetFiltros = () => {
  brillo.value = 1;
  opacidad.value = 1;
  contraste.value = 100;
  desenfoque.value = 0;
  grises.value = 0;
  sepia.value = 0;
  hue.value = 0;
  saturado.value = 100;
  negativo.value = 0;
  actualizarFiltros();
};
botonRestablecer.addEventListener("click", resetFiltros);

//TEXTO - CAMBIAR TEXTOS 
//TEXTO ARRIBA
const inpTextSup = document.getElementById("inpTextSup");
const textoArriba = document.getElementById("textoArriba");

inpTextSup.addEventListener("input", () =>{
  textoArriba.innerText = inpTextSup.value;
});
//TEXTO ABAJO
const inpTextAba = document.getElementById("inpTexAba");
const textoAbajo = document.getElementById("textoAbajo");

inpTextAba.addEventListener("input", () =>{
  textoAbajo.innerText = inpTextAba.value;
});