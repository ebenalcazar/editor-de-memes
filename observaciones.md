# Observaciones

Ele, felicitaciones por su trabajo. Tu TP se ve muy lindo, y se nota muchísimo el esfuerzo puesto en el código. Seguís a la perfección el diseño propuesto y se nota que hay mucho tiempo invertido en hacer que se vea lo mejor posible y que siga lo mas fielmente las pautas de diseño dadas. 

## Estructura correcta de documento HTML

El `lang` del documento debe coincidir con el lenguaje que usan los usuarios de esta pagina.


## Respeta el diseño dado

Cumplido en general, salvo por la tipografia. Trata de evitar Times New Roman y usar la que te da el diseño. Tambien algunos detalles del form que impactan en la nota final. 

## Respeta el funcionamiento

Cumplido. 

## Responsive funciona correctamente

A la perfección. 

## Buena estructura de proyecto

Falta un favicon. Tu readme deberia llamarse README.md, las mayusculas van por convencion. Fijate que no se ven bien los titulos en tu readme: deja un espacio despues de los tres ### 

Si tenes mas de un archivo de css, deben ir en una carpeta aparte. 

## Código bien indentado

No cumplido ni para JS ni para CSS. Acostumbrate a tabular bien. Tambien hay herramientas para ayudarte en eso: te recomiendo instalar prettier en vscode. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

Cumplido, con comentarios. 

Usás como títulos cosas que no lo son, como los h3 en lugar de label. Aquí creo que hay una confusión: un texto **importante** no es lo mismo que un **título**. Un título encabeza secciones o subsecciones. Un texto importante, como el que sirve para cambiar el texto del meme, no tiene necesariamente que tener una etiqueta h1, h2 o h3, que está reservada para los titulos. Pensá en los títulos desde una perspectiva de diseño: cuáles son las secciones y subsecciones de mi web? Cuales son los títulos de esas secciones? En esta web creo yo hay tres secciones principales: la de editar meme, el panel aside de imagen, y el panel aside de texto. La sección de editar meme no tiene título, pero las otras dos sí: La palabra "texto" y la palabra "imagen". Ahí están tus h2. El h1 es el título de toda la página: lo que resume qué es está pagina y qué hace. A veces va a ser la marca, como en Despegar o Mercado Libre, otras veces va a ser tu nombre como en el portfolio, pero en este caso esta web es un generador de memes, y "Generador de Memes" es el título principal que debe tener un h1. El resto de los textos, aunque sean importantes, **no** son títulos, y no deberían tener etiquetas como h2 o h3. 

## Buenos nombres de clases

En HTML por convención **no** escribimos mayúsculas en los nombres de clases, ids y datas (porque originalmente HTML no distinguía minúsculas de mayúsculas). Cuando necesitamos separar una palabra, usamos guiones. Esta convención es muy, muy importante y te animo a que comiences a aplicarla lo antes posible en tus trabajos. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido. 

## Funciones pequeñas

Cumplido

## Accesibilidad

- Falta aria-label en algunos elementos. Te dejo como ejemplo los botones para alinear texto:

```html
<button id="alineacionIzq" class="boton botonAlineacion"><i class="fas fa-align-left"></i></button>
<button id="alineacionCen" class="boton botonAlineacion"><i class="fas fa-align-center"></i></button>
<button id="alineacionDer" class="boton botonAlineacion"><i class="fas fa-align-right"></i></button>
         
```

¿Como puede saber un usuario que depende del lector de pantalla qué son estos elementos? El ícono se ignora, y además tiene el aria-hidden. Ni el id ni el nombre de clase se leen. El usuario que depende del lector de pantalla no tiene idea para qué sirven estos botones. 

- La pagina esta en español, pero el lenguaje del documento es ingles. Un lector de pantalla trataria de leerla en ingles (va a leer "yiniradour di mims") y buscadores como google van a recomendar esta web a angloparlantes. El `lang` del documento debe coincidir con el lenguaje que usan los usuarios de esta pagina.

- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo.
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina.
  Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento.
  En muchisimas ocasiones esto no se cumple en tu trabajo y eso impacta en la accesibilidad.

- Los titulos no son label, ni viceversa. Un titulo es el encabezado de una seccion. Un elemento de formulario es descripto por un label. El lector de pantalla separa los titulos de los elementos de formulario - como puede saber el usuario del lector de pantalla para que sirve el input de tipo color si no tiene ni label, ni aria-label?


## Commits con mensajes adecuados

Hay relativamente pocos commits pero todosd tienen mensajes adecuados. 

# Nota final: 9
