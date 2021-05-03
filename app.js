const body = document.querySelector("body");
const botonCambioModos = document.querySelector("#botonCambioModos");

botonCambioModos.addEventListener("click", ()=>{

  if (body.className == `ModoOscuro`){
    body.className = `ModoClaro`;
    botonCambioModos.textContent = "Modo Claro"
  } else if (body.className = `ModoClaro`){
    body.className = `ModoOscuro`
    botonCambioModos.innerText = `ModoOscuro`;
  }
});

/*const botonCambioModos = document.querySelector(`#botonCambioModos`);

const cambiarAModoClaro = () =>{
  document.body.classList.remove(`modoOscuro`);
  document.body.classList.add(`modoClaro`);
}
const cambiarAModoOscuro = () =>{
  document.body.classList.remove(`modoClaro`);
  document.body.classList.add(`modoOscuro`);
}

const cambiarTemas = () =>{
  $(`botonOscuro`).addEventListener(`click`, cambiarAModoClaro)
  $(`botonClaro`).addEventListener(`click`, cambiarAModoOscuro)
}*/



const panel = document.querySelector("#panel");
      const panelImg = document.querySelector("#panel-img");
      const panelText = document.querySelector("#panel-text");

      const buttonClose = document.querySelector("#button-close");
      const buttonImg = document.querySelector("#button-img");
      const buttonText = document.querySelector("#button-text");


      //cuando hago click en boton de cerrar se cierra el panel(aside completo)
      //agregar la clase ocular
      
      buttonClose.addEventListener("click",()=>{
        panel.classList.add("ocultar");
      });

      // cuando hago click en el boton de imagen o en el boton texto debe verse el panel
      // quitar la clase ocular
      buttonText.addEventListener("click",()=>{
        panel.classList.remove("ocultar");
        panelImg.classList.add("ocultar");
        panelText.classList.remove("ocultar");
      });

      buttonImg.addEventListener("click",()=>{
        panel.classList.remove("ocultar");
        panelText.classList.add("ocultar");
        panelImg.classList.remove("ocultar");
      })
