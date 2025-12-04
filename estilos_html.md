# Documentacion: Logica JavaScript de la Interfaz

## Que es este archivo?

Este archivo contiene el codigo JavaScript que hace que la pagina web sea interactiva. Mientras CSS define como se ve y HTML define la estructura, JavaScript define como FUNCIONA.

## Que es JavaScript?

JavaScript es un lenguaje de programacion que se ejecuta en el navegador y permite:
- Responder a acciones del usuario (clicks, teclas, etc.)
- Modificar el contenido de la pagina dinamicamente
- Crear efectos interactivos
- Comunicarse con servidores

## Estructura del Codigo

### Base de Datos de Ejercicios
```javascript
const ejercicios = {
    1: {
        titulo: "Ejercicio 1: Validacion de Asistencia",
        descripcion: "Valida si un estudiante esta registrado en la lista de asistencia..."
    },
    2: {
        titulo: "Ejercicio 2: Actualizacion de Inventario",
        descripcion: "Calcula el inventario final de un producto..."
    },
    // ... hasta el ejercicio 17
};
```

#### Que es const?

Es una palabra clave para declarar una variable que NO puede cambiar su valor.

Diferencias:
- const: No se puede reasignar (constante)
- let: Se puede reasignar (variable)
- var: Version antigua, evitar usar

#### Que es un objeto?

Es una coleccion de pares clave-valor, como un diccionario:
```javascript
{
    clave: valor,
    otraClave: otroValor
}
```

En nuestro caso:
- Clave: numero del ejercicio (1, 2, 3...)
- Valor: objeto con titulo y descripcion

#### Como acceder a los datos?
```javascript
ejercicios[1]  // Devuelve todo el objeto del ejercicio 1
ejercicios[1].titulo  // Devuelve solo el titulo
ejercicios[1].descripcion  // Devuelve solo la descripcion
```

#### Por que usar un objeto en lugar de un array?

Ventajas del objeto:
- Acceso directo por numero: ejercicios[5]
- Mas legible y descriptivo
- Facil agregar o quitar ejercicios

Con array seria:
```javascript
ejercicios[4]  // Para obtener el ejercicio 5 (indices empiezan en 0)
```

#### Estructura completa del objeto ejercicios

Cada ejercicio tiene exactamente dos propiedades:
1. titulo: String con el nombre del ejercicio
2. descripcion: String con una explicacion breve

Ejemplo completo:
```javascript
const ejercicios = {
    1: {
        titulo: "Ejercicio 1: Validacion de Asistencia",
        descripcion: "Valida si un estudiante esta registrado en la lista de asistencia. Utiliza el metodo includes() para verificar la existencia del nombre en el array de estudiantes inscritos."
    }
};
```

### Variable de Estado
```javascript
let ejercicioActual = 0;
```

#### Que es una variable de estado?

Es una variable que "recuerda" informacion sobre el estado actual de la aplicacion.

En este caso:
- Guarda que ejercicio esta viendo el usuario
- Empieza en 0 (ningun ejercicio seleccionado)
- Cambia cuando el usuario hace click en una tarjeta

#### Por que let y no const?

Porque su valor DEBE cambiar cuando el usuario selecciona diferentes ejercicios.

Ejemplo de como cambia:
```javascript
// Al inicio
ejercicioActual = 0;

// Usuario hace click en ejercicio 3
ejercicioActual = 3;

// Usuario hace click en ejercicio 7
ejercicioActual = 7;
```

#### Por que empezar en 0?

Es una convencion de programacion que indica "ningun ejercicio seleccionado aun".

Los ejercicios validos van del 1 al 17, entonces 0 significa que no hay seleccion.

### Funcion showExercise
```javascript
function showExercise(numero) {
    ejercicioActual = numero;
    const ejercicio = ejercicios[numero];
    
    document.getElementById('modalTitle').textContent = ejercicio.titulo;
    document.getElementById('modalDescription').textContent = ejercicio.descripcion;
    document.getElementById('exerciseModal').style.display = 'block';
}
```

#### Que es una funcion?

Es un bloque de codigo que:
- Tiene un nombre (showExercise)
- Recibe parametros (numero)
- Ejecuta acciones
- Puede retornar un valor (opcional)

Analogia: Es como una receta de cocina que puedes usar multiples veces.

#### Parametros vs Argumentos
```javascript
function showExercise(numero) { }  // numero es un PARAMETRO
showExercise(5);  // 5 es un ARGUMENTO
```

- Parametro: Variable en la definicion de la funcion
- Argumento: Valor que pasas cuando llamas la funcion

#### Como se llama esta funcion?

Desde el HTML, cuando el usuario hace click en una tarjeta:
```html
<div onclick="showExercise(1)">Ejercicio 1</div>
<div onclick="showExercise(2)">Ejercicio 2</div>
<div onclick="showExercise(3)">Ejercicio 3</div>
```

#### Linea por linea explicada

##### Linea 1: ejercicioActual = numero

Que hace?
Actualiza la variable global para recordar que ejercicio se esta mostrando.

Por que?
Otras funciones (como executeExercise) necesitan saber que ejercicio esta activo.

Ejemplo:
```javascript
// Usuario hace click en ejercicio 5
showExercise(5);
// Ahora ejercicioActual = 5
```

##### Linea 2: const ejercicio = ejercicios[numero]

Que hace?
Obtiene el objeto completo del ejercicio desde nuestra base de datos.

Ejemplo paso a paso:
```javascript
// Si numero = 3
// ejercicios[3] busca en el objeto ejercicios la clave 3
ejercicio = {
    titulo: "Ejercicio 3: Analisis de Calificaciones",
    descripcion: "Calcula el promedio de notas..."
}
```

Por que guardarlo en una variable?
Para no escribir ejercicios[numero] varias veces. Es mas limpio y legible.

##### Linea 4: document.getElementById('modalTitle')

Que es document?
Es un objeto especial que representa toda la pagina HTML (DOM - Document Object Model).

Que hace getElementById?
Busca un elemento HTML por su atributo ID.

En nuestro HTML tenemos:
```html
<h2 id="modalTitle">Titulo por defecto</h2>
```

Esta funcion encuentra ese elemento especifico.

Por que getElementById y no otra cosa?
- Es la forma mas rapida de encontrar un elemento
- Los IDs son unicos en una pagina
- Es mas eficiente que buscar por clase o etiqueta

##### .textContent = ejercicio.titulo

Que es textContent?
Es una propiedad que contiene el texto dentro de un elemento HTML.

Diferencia con innerHTML:
- textContent: Solo texto plano (mas seguro)
- innerHTML: Puede contener HTML (menos seguro)

Que hace esta linea?
Cambia el texto del titulo del modal por el titulo del ejercicio seleccionado.

Antes:
```html
<h2 id="modalTitle">Titulo por defecto</h2>
```

Despues (si numero = 5):
```html
<h2 id="modalTitle">Ejercicio 5: Validacion de Usuario y Permisos</h2>
```

##### Linea 5: document.getElementById('modalDescription').textContent = ejercicio.descripcion

Similar a la linea 4, pero para la descripcion.

Busca el elemento con id="modalDescription" y cambia su texto por la descripcion del ejercicio.

##### Linea 6: document.getElementById('exerciseModal').style.display = 'block'

Que hace?
Muestra el modal cambiando su propiedad CSS display.

Que es .style?
Es un objeto que contiene todas las propiedades CSS del elemento.

Que es .display?
Es una propiedad CSS que controla si un elemento es visible o no.

Valores comunes:
- 'none': Elemento invisible (no ocupa espacio)
- 'block': Elemento visible como bloque
- 'flex': Elemento visible como contenedor flex
- 'grid': Elemento visible como contenedor grid

Por que funciona?
En el CSS inicial, el modal tiene:
```css
.modal {
    display: none;  /* Invisible por defecto */
}
```

JavaScript lo cambia a:
```css
.modal {
    display: block;  /* Ahora es visible */
}
```

### Funcion closeModal
```javascript
function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}
```

#### Que hace esta funcion?

Oculta el modal haciendo exactamente lo contrario de showExercise.

Cambia display de 'block' a 'none'.

#### Cuando se ejecuta?

Se ejecuta cuando:
1. El usuario hace click en la X de cerrar
2. El usuario hace click en el boton "Cerrar"
3. El usuario hace click fuera del modal (ver window.onclick mas abajo)

Ejemplo en HTML:
```html
<span class="close" onclick="closeModal()">&times;</span>
<button class="btn-close" onclick="closeModal()">Cerrar</button>
```

#### Por que es una funcion separada?

Porque se usa en multiples lugares (boton X, boton Cerrar, click fuera del modal).

Mejor practica: Si algo se repite, conviertelo en una funcion.

### Funcion executeExercise
```javascript
function executeExercise() {
    alert('Para ejecutar este ejercicio:\n\n1. Abre tu terminal\n2. Navega a la carpeta del proyecto\n3. Ejecuta: node app.js\n4. El programa te pedira los datos necesarios\n\nEl ejercicio ' + ejercicioActual + ' se ejecutara en la consola.');
}
```

#### Que es alert()?

Es una funcion nativa de JavaScript que muestra una ventana emergente con un mensaje.

Caracteristicas:
- Bloquea la pagina hasta que el usuario cierre la alerta
- Solo tiene un boton "Aceptar"
- Es simple pero poco elegante

#### Que es \n?

Es un caracter especial que representa un salto de linea (Enter).

Ejemplo:
```javascript
"Linea 1\nLinea 2"
```

Se muestra como:
```
Linea 1
Linea 2
```

#### Concatenacion de strings

El operador + une (concatena) textos:
```javascript
'Hola ' + 'Mundo'  // Resultado: "Hola Mundo"
'Ejercicio ' + 5   // Resultado: "Ejercicio 5"
```

En nuestra funcion:
```javascript
'El ejercicio ' + ejercicioActual + ' se ejecutara...'
```

Si ejercicioActual = 7:
```
'El ejercicio 7 se ejecutara en la consola.'
```

#### Por que usar ejercicioActual?

Para que el mensaje sea especifico al ejercicio que el usuario esta viendo.

Ejemplo:
- Usuario abre ejercicio 3 y hace click en "Ejecutar"
- Ve: "El ejercicio 3 se ejecutara en la consola."

#### Cuando se ejecuta?

Cuando el usuario hace click en el boton "Ejecutar Ejercicio" en el modal.

En HTML:
```html
<button class="btn-execute" onclick="executeExercise()">
    Ejecutar Ejercicio
</button>
```

### Event Listener para cerrar modal
```javascript
window.onclick = function(event) {
    const modal = document.getElementById('exerciseModal');
    if (event.target == modal) {
        closeModal();
    }
}
```

#### Que es window?

Es un objeto global que representa la ventana del navegador.

Todo en JavaScript del navegador esta dentro de window:
- document esta en window.document
- alert esta en window.alert
- etc.

#### Que es onclick?

Es un evento que se dispara cuando el usuario hace click en cualquier parte de la ventana.

Diferencia con onclick en HTML:
- HTML: onclick="funcionNombre()" - para un elemento especifico
- JavaScript: window.onclick - para toda la ventana

#### Que es function(event)?

Es una funcion anonima (sin nombre) que recibe un parametro llamado event.

Formas equivalentes:
```javascript
// Forma tradicional (la que usamos)
window.onclick = function(event) { }

// Forma moderna con arrow function
window.onclick = (event) => { }
```

#### Que es event?

Es un objeto que contiene informacion sobre el evento que ocurrio.

Propiedades utiles:
- event.target: El elemento en el que se hizo click
- event.type: Tipo de evento ('click', 'keypress', etc.)
- event.clientX / clientY: Posicion del cursor

#### Linea 2: const modal = document.getElementById('exerciseModal')

Obtiene una referencia al elemento modal.

Por que?
Para compararlo con event.target.

#### Linea 3: if (event.target == modal)

Que hace esta condicion?

Verifica si el click fue directamente en el fondo del modal (no en el contenido).

Explicacion visual:
```
┌─────────────────────────────────┐
│ FONDO DEL MODAL (modal)         │  ← Click aqui cierra
│  ┌───────────────────────────┐  │
│  │ CONTENIDO DEL MODAL       │  │  ← Click aqui NO cierra
│  │ (modal-content)           │  │
│  │                           │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

Como funciona:
1. Usuario hace click en cualquier parte de la pagina
2. event.target es el elemento exacto donde hizo click
3. Si event.target es igual al fondo del modal, cierra
4. Si event.target es el contenido u otro elemento, no hace nada

#### Por que == y no ===?

En este caso especifico ambos funcionan igual, pero:
- ==: Comparacion con conversion de tipo
- ===: Comparacion estricta (mismo tipo y valor)

Mejor practica: Usar === siempre, pero aqui == funciona bien.

#### Linea 4: closeModal()

Si la condicion es verdadera, llama a la funcion closeModal() que ya conocemos.

#### Por que es importante esta funcionalidad?

Es una convencion de UX (experiencia de usuario):
- Los usuarios esperan que hacer click fuera de un modal lo cierre
- Es mas intuitivo que solo tener el boton X
- Mejora la usabilidad

## Flujo Completo de Ejecucion

### Escenario: Usuario hace click en Ejercicio 5

#### Paso 1: Click en la tarjeta
```html
<div class="exercise-card" onclick="showExercise(5)">
```

El navegador detecta el click y ejecuta showExercise(5).

#### Paso 2: showExercise(5) se ejecuta
```javascript
function showExercise(5) {
    ejercicioActual = 5;  // Guarda que ejercicio esta activo
    const ejercicio = ejercicios[5];  // Obtiene datos del ejercicio 5
    
    // Actualiza el titulo del modal
    document.getElementById('modalTitle').textContent = ejercicio.titulo;
    
    // Actualiza la descripcion del modal
    document.getElementById('modalDescription').textContent = ejercicio.descripcion;
    
    // Muestra el modal
    document.getElementById('exerciseModal').style.display = 'block';
}
```

#### Paso 3: El modal aparece

El usuario ahora ve:
- Titulo: "Ejercicio 5: Validacion de Usuario y Permisos"
- Descripcion: "Valida credenciales de usuario..."
- Botones: "Ejecutar Ejercicio" y "Cerrar"

#### Paso 4: Usuario hace click en "Ejecutar Ejercicio"
```html
<button onclick="executeExercise()">
```

Se ejecuta executeExercise():
```javascript
function executeExercise() {
    alert('... El ejercicio ' + ejercicioActual + ' ...');
    // Como ejercicioActual = 5, el mensaje menciona "ejercicio 5"
}
```

#### Paso 5: Usuario cierra la alerta y el modal

Puede cerrar el modal de tres formas:

Forma 1: Click en X
```html
<span onclick="closeModal()">
```

Forma 2: Click en boton Cerrar
```html
<button onclick="closeModal()">
```

Forma 3: Click fuera del modal
```javascript
window.onclick detecta el click y cierra si fue en el fondo
```

Cualquiera ejecuta:
```javascript
function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}
```

## Conceptos Clave de JavaScript

### DOM (Document Object Model)

Que es?
Es una representacion de la estructura HTML como un arbol de objetos que JavaScript puede manipular.

Ejemplo:
```html
<div id="contenedor">
    <p>Hola</p>
</div>
```

En el DOM:
```
document
  └── div (id="contenedor")
       └── p
            └── "Hola" (texto)
```

JavaScript puede:
- Leer: document.getElementById('contenedor').textContent
- Modificar: document.getElementById('contenedor').textContent = "Adios"
- Crear: document.createElement('div')
- Eliminar: elemento.remove()

### Eventos

Que son?
Acciones que ocurren en la pagina web que JavaScript puede detectar y responder.

Tipos de eventos:
- click: Usuario hace click
- mouseover: Usuario pasa el mouse sobre un elemento
- keypress: Usuario presiona una tecla
- submit: Usuario envia un formulario
- load: La pagina termina de cargar

Como escuchar eventos:

Forma 1: En HTML (la que usamos)
```html
<button onclick="miFuncion()">Click</button>
```

Forma 2: En JavaScript (mas moderna)
```javascript
elemento.addEventListener('click', function() {
    // codigo aqui
});
```

### Variables: const vs let vs var

const:
- No se puede reasignar
- Debe inicializarse al declararla
- Usar para valores que no cambian
```javascript
const PI = 3.14159;
PI = 3.14;  // ERROR
```

let:
- Se puede reasignar
- Ambito de bloque
- Usar para valores que cambian
```javascript
let edad = 25;
edad = 26;  // OK
```

var:
- Version antigua (evitar)
- Ambito de funcion (problemas de scope)
- Solo usar en codigo legacy

### Funciones

Declaracion de funcion:
```javascript
function nombre(parametro1, parametro2) {
    // codigo
    return resultado;
}
```

Llamar una funcion:
```javascript
nombre(argumento1, argumento2);
```

Funciones sin return:
```javascript
function saludar() {
    console.log("Hola");
    // No retorna nada (undefined implicitamente)
}
```

### Objetos

Crear un objeto:
```javascript
const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola");
    }
};
```

Acceder a propiedades:
```javascript
persona.nombre  // "Juan"
persona['edad']  // 30
persona.saludar()  // Ejecuta la funcion
```

### Manipulacion del DOM

Seleccionar elementos:
```javascript
// Por ID (mas rapido)
document.getElementById('miId')

// Por clase (retorna array)
document.getElementsByClassName('miClase')

// Por selector CSS (mas flexible)
document.querySelector('.miClase')
document.querySelectorAll('.miClase')
```

Modificar contenido:
```javascript
elemento.textContent = "Nuevo texto"  // Solo texto
elemento.innerHTML = "<b>HTML</b>"    // Puede incluir HTML
```

Modificar estilos:
```javascript
elemento.style.color = "red"
elemento.style.display = "none"
elemento.style.backgroundColor = "blue"  // Nota: camelCase
```

Modificar atributos:
```javascript
elemento.setAttribute('class', 'nueva-clase')
elemento.getAttribute('class')
elemento.classList.add('clase')
elemento.classList.remove('clase')
```

## Mejores Practicas Aplicadas

### Nombres Descriptivos

Usamos nombres que describen claramente el proposito:
- showExercise (muestra ejercicio)
- closeModal (cierra modal)
- ejercicioActual (ejercicio que esta activo)

NO usamos:
- x, y, z
- func1, func2
- temp, data

### Separacion de Responsabilidades

Cada funcion hace UNA cosa:
- showExercise: Solo muestra el modal
- closeModal: Solo cierra el modal
- executeExercise: Solo muestra instrucciones

### Reutilizacion de Codigo

closeModal() se usa en multiples lugares en lugar de repetir el codigo.

### Comentarios Cuando es Necesario

El codigo debe ser autoexplicativo, pero comentarios ayudan con logica compleja.

### Manejo de Estado

ejercicioActual mantiene el estado de la aplicacion de forma centralizada.

## Posibles Mejoras Futuras

### Validacion de Datos

Verificar que el numero de ejercicio existe:
```javascript
function showExercise(numero) {
    if (!ejercicios[numero]) {
        console.error("Ejercicio no encontrado");
        return;
    }
    // resto del codigo
}
```

### Event Delegation

En lugar de onclick en cada tarjeta, usar un solo listener:
```javascript
document.querySelector('.exercise-grid').addEventListener('click', function(e) {
    if (e.target.classList.contains('exercise-card')) {
        const numero = e.target.dataset.ejercicio;
        showExercise(numero);
    }
});
```

### Modulos

Separar el codigo en archivos:
- ejercicios.js: Solo los datos
- modal.js: Solo funciones del modal
- main.js: Orquesta todo

### LocalStorage

Guardar el ultimo ejercicio visto:
```javascript
function showExercise(numero) {
    localStorage.setItem('ultimoEjercicio', numero);
    // resto del codigo
}

// Al cargar la pagina
window.onload = function() {
    const ultimo = localStorage.getItem('ultimoEjercicio');
    if (ultimo) {
        // Hacer algo con el ultimo ejercicio
    }
}
```

### Animaciones Programaticas

Usar JavaScript para animar el modal:
```javascript
function showModal() {
    modal.style.display = 'block';
    modal.style.opacity = '0';
    
    let opacity = 0;
    const intervalo = setInterval(() => {
        opacity += 0.1;
        modal.style.opacity = opacity;
        if (opacity >= 1) clearInterval(intervalo);
    }, 30);
}
```

## Conexion con HTML y CSS

### Como trabajan juntos

HTML:
- Estructura de la pagina
- Define los elementos (div, button, etc.)
- Asigna IDs y clases

CSS:
- Apariencia visual
- Colores, tamanos, posiciones
- Animaciones visuales

JavaScript:
- Comportamiento interactivo
- Responde a eventos
- Modifica HTML y CSS dinamicamente

### Ejemplo completo de interaccion

HTML:
```html
<button id="miBoton" class="btn">Click</button>
```

CSS:
```css
.btn {
    background: blue;
    color: white;
}

.btn-activo {
    background: green;
}
```

JavaScript:
```javascript
document.getElementById('miBoton').onclick = function() {
    this.classList.toggle('btn-activo');
}
```

Resultado:
1. HTML crea el boton
2. CSS lo pinta de azul
3. JavaScript detecta el click y cambia la clase
4. CSS pinta el boton de verde (por la nueva clase)

## Resumen

Este archivo JavaScript es el "cerebro" de nuestra pagina web de ejercicios.

Funciones principales:
1. Almacena informacion de los 17 ejercicios
2. Muestra detalles cuando el usuario hace click en una tarjeta
3. Cierra el modal de varias formas
4. Proporciona instrucciones para ejecutar ejercicios

Todo esto permite que una pagina estatica HTML se convierta en una aplicacion web interactiva y dinamica.