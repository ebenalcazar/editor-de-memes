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
////////////////////////TEXTO///////////////////////////////
//CAMBIAR TEXTOS 
//TEXTO ARRIBA
const inpTextSup = document.getElementById("inpTextSup");
const textoArriba = document.getElementById("textoArriba");

inpTextSup.addEventListener("input", () =>{
  textoArriba.innerText = inpTextSup.value;
});

const sinTextoArriba = document.getElementById("sinTextoArriba");
sinTextoArriba.addEventListener("click", () =>{
  if (sinTextoArriba.checked){
    inpTextSup.disabled = true;
    textoArriba.textContent = "";
    textoArriba.classList.add("ocultar");
  } else {
    inpTextSup.disabled = false;
    textoArriba.classList.remove("ocultar");
    textoArriba.textContent = inpTextSup.value;
  }
});
//TEXTO ABAJO
const inpTextAba = document.getElementById("inpTexAba");
const textoAbajo = document.getElementById("textoAbajo");

inpTextAba.addEventListener("input", () =>{
  textoAbajo.innerText = inpTextAba.value;
});

const sinTextoAbajo = document.getElementById("sinTextoAbajo");
sinTextoAbajo.addEventListener("click", () =>{
  if (sinTextoAbajo.checked){
    inpTextAba.disabled = true;
    textoAbajo.textContent = "",
    textoAbajo.classList.add("ocultar");
  } else {
    inpTextAba.disabled = false;
    textoAbajo.classList.remove("ocultar");
    textoAbajo.textContent = inpTextAba.value;
  }
});

 // FUENTES
 const fuente = document.getElementById("fuente");
 fuente.addEventListener("input", () => {
   textoArriba.style.fontFamily = fuente.value;
   textoAbajo.style.fontFamily = fuente.value;
 });
 //TAMAÑO FUENTE
 const tamanioFuente = document.getElementById("tamanioFuente");
 tamanioFuente.addEventListener("input", () => {
   textoArriba.style.fontSize = `${tamanioFuente.value}px`;
   textoAbajo.style.fontSize = `${tamanioFuente.value}px`;
 });
//ALINEACION
const alineacionIzq = document.getElementById("alineacionIzq");
alineacionIzq.addEventListener("click", () =>{
  textoArriba.style.textAlign = "left";
  textoAbajo.style.textAlign = "left";
});
const alineacionCen = document.getElementById("alineacionCen");
alineacionCen.addEventListener("click", () =>{
  textoArriba.style.textAlign = "center";
  textoAbajo.style.textAlign = "center";
});
const alineacionDer = document.getElementById("alineacionDer");
alineacionDer.addEventListener("click", () =>{
  textoArriba.style.textAlign = "right";
  textoAbajo.style.textAlign = "right";
});
//COLOR
const inpColorTxt = document.getElementById("inpColorTxt");
const spanColorTxt = document.getElementById("spanColorTxt");
inpColorTxt.addEventListener("change", () =>{
  textoArriba.style.color = inpColorTxt.value;
  textoAbajo.style.color = inpColorTxt.value;
  spanColorTxt.textContent = inpColorTxt.value;
});
//FONDO
const inputFondoTexto = document.getElementById("inputFondoTexto");
const spanFondoTexto = document.getElementById("spanFondoTexto");

inputFondoTexto.addEventListener("change", () =>{
  textoArriba.style.backgroundColor = inputFondoTexto.value;
  textoAbajo.style.backgroundColor = inputFondoTexto.value;
  spanFondoTexto.textContent = inputFondoTexto.value
});

const fondoTransparente = document.getElementById("fondoTransparente");
fondoTransparente.addEventListener("click", () =>{
  if (fondoTransparente.checked){
    textoArriba.style.backgroundColor = "transparent";
    textoAbajo.style.backgroundColor = "transparent";
    textoArriba.style.position = "absolute"
    textoAbajo.style.position = "absolute"
    textoArriba.style.top = 0;
    textoAbajo.style.bottom = 0;
  } else {
    textoArriba.style.backgroundColor = inputFondoTexto.value;
    textoAbajo.style.backgroundColor = inputFondoTexto.value;
    textoArriba.style.position = "static"
    textoAbajo.style.position = "static"
  }
});

//CONTORNO TEXTOS
//sin contorno
const sinContorno = document.getElementById("sinContorno");
sinContorno.addEventListener("click", ()=>{
  textoArriba.classList.remove("contornoTextoClaro");
  textoAbajo.classList.remove("contornoTextoClaro");
  textoArriba.classList.remove("contornoTextoOscuro");
  textoAbajo.classList.remove("contornoTextoOscuro");
});
//contorno claro
const contClaro = document.getElementById("contClaro");
contClaro.addEventListener("click", () =>{
  textoArriba.classList.add("contornoTextoClaro");
  textoAbajo.classList.add("contornoTextoClaro");
});
//contorno oscuro
const contOscuro = document.getElementById("contOscuro");
contOscuro.addEventListener("click", () =>{
  textoArriba.classList.add("contornoTextoOscuro");
  textoAbajo.classList.add("contornoTextoOscuro");
});

//ESPACIADO
const espaciado = document.getElementById("espaciado");
espaciado.addEventListener("input", () =>{
  textoArriba.style.padding = `${espaciado.value}px`;
  textoAbajo.style.padding = `${espaciado.value}px`;
});
//INTERLINEADO
const interlineado = document.getElementById("interlineado");
interlineado.addEventListener("input", ()=>{
  textoArriba.style.lineHeight = interlineado.value;
  textoAbajo.style.lineHeight = interlineado.value;
});

//BOTON DE DESCARGA
const descargarMeme = document.getElementById("descargarMeme");
const memeContainer = document.getElementsByClassName("meme-container");
descargarMeme.addEventListener("click", () =>{
  domtoimage.toBlob(document.querySelector(".meme-container")).then(function(blob){
    window.saveAs(blob, "miMeme.png");
  });
});

