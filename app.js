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
