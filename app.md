# Documentacion: app.js - Programa Principal de Ejecucion

## Que es este archivo?

app.js es el archivo principal que ejecuta todos los ejercicios desde la terminal usando Node.js. Es la version de consola de nuestro proyecto, donde el usuario puede interactuar con cada ejercicio de forma secuencial.

## Que es Node.js?

Node.js es un entorno de ejecucion que permite ejecutar JavaScript fuera del navegador, en este caso desde la terminal o consola.

## Estructura General

### Importaciones
```javascript
import libreria from 'prompt-sync';
const prompt = libreria();
```

#### Que es prompt-sync?

Es una libreria (paquete de npm) que permite leer entrada del usuario desde la terminal de forma sincrona (esperando la respuesta).

Sin prompt-sync:
- JavaScript en Node.js no puede pedir datos al usuario facilmente
- Tendriamos que usar metodos asincronos mas complejos

Con prompt-sync:
- Podemos hacer preguntas y esperar respuestas
- Funciona como un input() en Python o Scanner en Java

#### Como funciona?
```javascript
const nombre = prompt("Ingrese su nombre: ");
// El programa se detiene aqui
// Espera a que el usuario escriba algo y presione Enter
// Guarda lo que escribio en la variable nombre
```

### Importacion de Funciones
```javascript
import { 
  validarAsistencia,
  calcularInventario,
  calcularPromedio,
  // ... todas las demas funciones
} from './modulos/barril.js';
```

#### Que hace esta importacion?

Trae todas las funciones de los ejercicios desde el archivo barril.js para poder usarlas en este archivo.

Es como decir: "Necesito estas herramientas para trabajar".

#### Por que desde barril.js?

Porque barril.js exporta todo desde un solo lugar, en vez de importar desde 17 archivos diferentes.

Sin barril.js:
```javascript
import { validarAsistencia } from './modulos/ejercicio1/ejercicio1.js';
import { calcularInventario } from './modulos/ejercicio2/ejercicio2.js';
// ... 17 lineas mas
```

Con barril.js:
```javascript
import { validarAsistencia, calcularInventario, ... } from './modulos/barril.js';
// Una sola linea
```

### Encabezado del Programa
```javascript
console.log("\nPRUEBAS DE EJERCICIOS - TECNICO EN PROGRAMACION\n\n");
```

#### Que es console.log()?

Es una funcion que imprime texto en la consola (terminal).

#### Que es \n?

Es un salto de linea (Enter). Cada \n crea una linea en blanco.

Ejemplo:
```javascript
console.log("\n\n");  // Dos lineas en blanco
console.log("Hola\nMundo");  // Hola (salto) Mundo
```

## Patron de Cada Ejercicio

Todos los ejercicios siguen el mismo patron de 4 pasos:

### Paso 1: Mostrar titulo
```javascript
console.log("EJERCICIO 1: VALIDACION DE ASISTENCIA\n");
```

Imprime el nombre del ejercicio para que el usuario sepa donde esta.

### Paso 2: Pedir datos al usuario
```javascript
const nombreBuscado = prompt("Ingrese el nombre del aprendiz a validar: ");
```

Usa prompt() para obtener informacion del usuario.

### Paso 3: Ejecutar la funcion
```javascript
const resultado1 = validarAsistencia(estudiantes, nombreBuscado);
```

Llama a la funcion del ejercicio con los datos proporcionados.

### Paso 4: Mostrar resultados
```javascript
console.log("\n" + resultado1);
```

Muestra el resultado en la consola.

## Ejercicio 1: Validacion de Asistencia
```javascript
console.log("EJERCICIO 1: VALIDACION DE ASISTENCIA\n");
const estudiantes = ["Luis", "Maria", "Kevin", ...];
console.log("Lista de estudiantes inscritos:", estudiantes.join(", "));
const nombreBuscado = prompt("Ingrese el nombre del aprendiz a validar: ");
const resultado1 = validarAsistencia(estudiantes, nombreBuscado);
console.log("\n" + resultado1);
```

### Array de estudiantes predefinido

Por que?
Para que el usuario vea la lista y sepa que nombres puede buscar.

### Metodo join(", ")

Que hace?
Convierte un array en un string separando elementos con el separador indicado.

Ejemplo:
```javascript
["Juan", "Maria", "Pedro"].join(", ")
// Resultado: "Juan, Maria, Pedro"
```

### Concatenacion con +
```javascript
console.log("\n" + resultado1);
```

El + une el salto de linea con el resultado en un solo string.

## Ejercicio 2: Actualizacion de Inventario
```javascript
console.log("\n\nEJERCICIO 2: ACTUALIZACION DE INVENTARIO\n");
const cantidadInicial = parseInt(prompt("Ingrese la cantidad inicial en stock: "));
const cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida: "));
const cantidadRecibida = parseInt(prompt("Ingrese la cantidad recibida en reposicion: "));
const resultado2 = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);
```

### parseInt()

Que hace?
Convierte un string (texto) en un numero entero.

Por que es necesario?
prompt() siempre retorna un string, incluso si el usuario escribe un numero.

Ejemplo:
```javascript
const texto = prompt("Edad: ");  // Usuario escribe "25"
// texto = "25" (string)
const edad = parseInt(texto);
// edad = 25 (numero)
```

Sin parseInt:
```javascript
"10" + "5" = "105"  // Concatenacion de strings
```

Con parseInt:
```javascript
parseInt("10") + parseInt("5") = 15  // Suma de numeros
```

### Manejo de Errores con if
```javascript
if (resultado2.error) {
  console.log("\n" + resultado2.mensaje);
} else {
  console.log("\nREPORTE DE INVENTARIO:");
  console.log("Inventario final: " + resultado2.inventarioFinal + " unidades");
  console.log("Estado: " + resultado2.estado);
}
```

#### Por que verificar error?

Las funciones de los ejercicios retornan un objeto con la propiedad error cuando algo sale mal.

Si error es true:
- Muestra solo el mensaje de error
- No intenta acceder a otras propiedades (inventarioFinal, estado)

Si error es false o undefined:
- Muestra todos los datos del resultado
- Accede a las propiedades del resultado

#### Que pasaria sin esta verificacion?
```javascript
// Si hay un error y no verificamos:
console.log(resultado2.inventarioFinal);  // undefined
// El programa seguiria pero mostraria "undefined"
```

## Ejercicio 3: Analisis de Calificaciones
```javascript
const cantidadNotas = parseInt(prompt("Cuantas notas desea ingresar?: "));
const notas = [];
for (let i = 0; i < cantidadNotas; i++) {
  const nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " (0-5): "));
  notas.push(nota);
}
```

### Array vacio
```javascript
const notas = [];
```

Crea un array sin elementos que luego llenaremos.

### Ciclo for
```javascript
for (let i = 0; i < cantidadNotas; i++) { }
```

Estructura:
- let i = 0: Empieza en 0
- i < cantidadNotas: Repite mientras i sea menor
- i++: Incrementa i en 1 cada vuelta

Si cantidadNotas = 3:
- Primera vuelta: i = 0
- Segunda vuelta: i = 1
- Tercera vuelta: i = 2
- Termina (i = 3, no cumple i < 3)

### parseFloat()

Similar a parseInt() pero permite decimales.

Ejemplo:
```javascript
parseInt("3.7") = 3  // Solo la parte entera
parseFloat("3.7") = 3.7  // Incluye decimales
```

### Metodo push()
```javascript
notas.push(nota);
```

Agrega un elemento al final del array.

Ejemplo paso a paso:
```javascript
const notas = [];  // []
notas.push(4.5);   // [4.5]
notas.push(3.2);   // [4.5, 3.2]
notas.push(5.0);   // [4.5, 3.2, 5.0]
```

### Concatenacion en prompt
```javascript
prompt("Ingrese la nota " + (i + 1) + " (0-5): ")
```

Por que (i + 1)?
Porque i empieza en 0, pero queremos mostrar al usuario "nota 1, nota 2, nota 3".

Si i = 0: "Ingrese la nota 1 (0-5): "
Si i = 1: "Ingrese la nota 2 (0-5): "

## Ejercicio 4: Ordenamiento de Precios

Similar al ejercicio 3, usa un ciclo para llenar un array de precios.

### Acceso a propiedades del resultado
```javascript
console.log("Precios de mayor a menor:", resultado4.preciosOrdenados.join(", "));
console.log("Precio mas alto: " + resultado4.precioMasAlto);
console.log("Precio mas bajo: " + resultado4.precioMasBajo);
```

resultado4 es un objeto con varias propiedades, accedemos a cada una con el punto.

## Ejercicio 5: Validacion de Usuario
```javascript
const nombreUsuario = prompt("Ingrese el nombre del usuario: ");
const estadoUsuario = prompt("Ingrese el estado (activo/inactivo): ");
const rolUsuario = prompt("Ingrese el rol (admin/editor/lector): ");
```

### Variables descriptivas

Usamos nombreUsuario en lugar de nombre porque ya usamos nombre en otros ejercicios.

Mejor practica: nombres de variables especificos que describen su contenido.

### Condicional anidado
```javascript
if (resultado5.error) {
  console.log("\n" + resultado5.mensaje);
} else {
  console.log("\nRESULTADO DE VALIDACION:");
  console.log("Acceso: " + resultado5.acceso);
  if (resultado5.acceso === "PERMITIDO") {
    console.log("Rol: " + resultado5.rol);
    console.log("Permisos: " + resultado5.permisos);
    console.log("Nivel de acceso: " + resultado5.nivelAcceso);
  }
}
```

#### Estructura de dos niveles

Nivel 1: Verifica si hay error
Nivel 2: Si no hay error, verifica si el acceso fue permitido

Por que?
Porque solo mostramos detalles (rol, permisos) si el acceso fue PERMITIDO.

Si el acceso fue DENEGADO, solo mostramos que fue denegado.

## Ejercicio 6: Calculo Modular de Nomina
```javascript
const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
if (salarioBase.error) {
  console.log("\n" + salarioBase.mensaje);
} else {
  const deducciones = calcularDeducciones(salarioBase);
  const salarioNeto = calcularNeto(salarioBase, deducciones);
```

### Funciones encadenadas

Cada funcion usa el resultado de la anterior:
1. calcularSalarioBase() retorna salarioBase
2. calcularDeducciones() usa salarioBase
3. calcularNeto() usa salarioBase y deducciones

Es como una cadena de montaje: cada paso usa el resultado del anterior.

## Ejercicio 7: Registro Dinamico de Productos
```javascript
const producto1 = prompt("Ingrese el nombre del producto 1: ");
const producto2 = prompt("Ingrese el nombre del producto 2: ");
const producto3 = prompt("Ingrese el nombre del producto 3: ");
const producto4 = prompt("Ingrese el nombre del producto 4: ");
const resultado7 = registrarProductos(producto1, producto2, producto3, producto4, producto2);
```

### Parametros rest en accion

La funcion registrarProductos usa parametros rest (...productos).

Aqui le pasamos 5 argumentos (producto2 esta repetido):
- Primer producto2: Se registra
- Segundo producto2: Se detecta como duplicado y se ignora

## Ejercicio 8: Busqueda Avanzada en Catalogo
```javascript
const catalogoCursos = [
  { nombre: "JavaScript Basico", categoria: "programacion", duracion: 40 },
  { nombre: "Cocina Italiana", categoria: "gastronomia", duracion: 20 },
```

### Array de objetos

Es un array donde cada elemento es un objeto.

Estructura:
```javascript
[
  { propiedad1: valor1, propiedad2: valor2 },
  { propiedad1: valor3, propiedad2: valor4 }
]
```

### Callback en linea
```javascript
const resultado8 = buscarCursos(catalogoCursos, (curso) => curso.categoria === criterioBusqueda);
```

#### Que es (curso) => ?

Es una arrow function (funcion flecha), una forma moderna y concisa de escribir funciones.

Equivalente tradicional:
```javascript
function(curso) {
  return curso.categoria === criterioBusqueda;
}
```

Version arrow function:
```javascript
(curso) => curso.categoria === criterioBusqueda
```

Si solo hay un parametro, los parentesis son opcionales:
```javascript
curso => curso.categoria === criterioBusqueda
```

#### Que hace este callback?

Para cada curso en el catalogo:
- Verifica si curso.categoria es igual a criterioBusqueda
- Retorna true o false
- La funcion buscarCursos usa esto para filtrar

## Ejercicio 9: Procesamiento de Pagos
```javascript
const cantidadPagos = parseInt(prompt("Cuantos pagos desea procesar?: "));
const pagosEjemplo = [];
for (let i = 0; i < cantidadPagos; i++) {
  console.log("\nPago " + (i + 1) + ":");
  const id = parseInt(prompt("  ID del pago: "));
  const monto = parseFloat(prompt("  Monto del pago: "));
  const cliente = prompt("  Nombre del cliente: ");
  pagosEjemplo.push({ id, monto, cliente });
}
```

### Creacion de objeto dinamico
```javascript
pagosEjemplo.push({ id, monto, cliente });
```

#### Que es { id, monto, cliente }?

Es shorthand property (sintaxis abreviada) de ES6.

Equivalente largo:
```javascript
{ id: id, monto: monto, cliente: cliente }
```

Version corta (cuando la propiedad y variable tienen el mismo nombre):
```javascript
{ id, monto, cliente }
```

### Identacion visual
```javascript
console.log("  ID del pago: ");
console.log("  Monto del pago: ");
```

Los dos espacios al inicio son puramente visuales para que se vea mas organizado en la consola.

## Ejercicio 10: Fusion de Usuarios
```javascript
const usuario = { documento, nombre };
if (edad) usuario.edad = parseInt(edad);
if (ciudad) usuario.ciudad = ciudad;
if (email) usuario.email = email;
```

### Creacion progresiva de objeto

#### Paso 1: Crear objeto base
```javascript
const usuario = { documento, nombre };
```

El objeto empieza con solo dos propiedades obligatorias.

#### Paso 2: Agregar propiedades opcionales
```javascript
if (edad) usuario.edad = parseInt(edad);
```

Si el usuario proporciono edad, la agregamos al objeto.

#### Como funciona?

Si edad tiene valor (no vacio):
```javascript
usuario = { documento: "123", nombre: "Juan" };
// El usuario ingresa edad "30"
usuario.edad = 30;
// Ahora: { documento: "123", nombre: "Juan", edad: 30 }
```

Si edad esta vacia (usuario presiono Enter sin escribir):
```javascript
// edad = "" (string vacio)
// if ("") es falso
// No se ejecuta usuario.edad = ...
// El objeto no tiene la propiedad edad
```

### Por que esto es util?

Permite crear objetos con diferentes cantidades de propiedades segun lo que el usuario proporcione.

Usuario A:
```javascript
{ documento: "123", nombre: "Juan", edad: 30, ciudad: "Bogota" }
```

Usuario B:
```javascript
{ documento: "456", nombre: "Maria" }
```

Ambos son validos.

## Ejercicio 11: Resumen de Mensajes
```javascript
const mensajeEjemplo = {
  remitente: remitenteMsg,
  contenido: contenidoMsg,
  fecha: fechaMsg
};
if (asuntoMsg) mensajeEjemplo.asunto = asuntoMsg;
```

Similar al ejercicio 10, creamos un objeto base y agregamos propiedades opcionales.

## Ejercicio 12: Gestion de Pacientes

### toLowerCase()
```javascript
const finalizado = prompt("Esta finalizado? (si/no): ").toLowerCase() === "si";
```

#### Que hace toLowerCase()?

Convierte todo el texto a minusculas.

Ejemplo:
```javascript
"HOLA".toLowerCase() = "hola"
"HoLa".toLowerCase() = "hola"
"hola".toLowerCase() = "hola"
```

#### Por que usarlo?

Para que el usuario pueda escribir "SI", "si", "Si", "sI" y todos funcionen.

Sin toLowerCase():
```javascript
"SI" === "si"  // false (no son iguales)
```

Con toLowerCase():
```javascript
"SI".toLowerCase() === "si"  // true
"Si".toLowerCase() === "si"  // true
```

#### Que es === "si"?

Compara si el texto (ya en minusculas) es exactamente "si".

Resultado: true o false

Este true/false se guarda directamente en la variable finalizado.

## Ejercicio 13: Control de Gastos

Patron similar a ejercicios anteriores: ciclo para llenar array de objetos.

## Ejercicio 14: Evaluacion de Proyectos
```javascript
const numParticipantes = parseInt(prompt("  Cantidad de participantes: "));
const participantes = [];
for (let j = 0; j < numParticipantes; j++) {
  const participante = prompt("    Nombre participante " + (j + 1) + ": ");
  participantes.push(participante);
}
```

### Ciclo dentro de ciclo (anidado)

Ciclo externo: Por cada proyecto
Ciclo interno: Por cada participante del proyecto

Estructura:
```
Para cada proyecto:
    Pedir nombre del proyecto
    Para cada participante:
        Pedir nombre del participante
```

### Variable j en lugar de i

Convencion: Usar i para el ciclo externo, j para el interno, k para el siguiente, etc.

### Identacion de 4 espacios
```javascript
console.log("    Nombre participante " + (j + 1) + ": ");
```

Cuatro espacios para indicar que esta dentro de un proyecto.

Visual en consola:
```
Proyecto 1:
  Cantidad de participantes: 2
    Nombre participante 1: Juan
    Nombre participante 2: Maria
```

## Ejercicio 15: Sistema de Recomendacion

### Callback con multiples condiciones
```javascript
const resultado15 = generarRecomendaciones(cursosCompletados, (curso) => {
  if (curso.calificacion < 3.0) return 5;
  if (curso.finalizado === false) return 3;
  if (curso.horas < 10 && curso.calificacion >= 4.0) return 2;
  return 0;
});
```

#### Como funciona?

El callback se ejecuta para cada curso y retorna un numero de prioridad:
- 5: Maxima prioridad (calificacion baja)
- 3: Prioridad media (no finalizado)
- 2: Prioridad baja (buen resultado con poco tiempo)
- 0: Sin prioridad (no recomendar)

#### Por que return detiene la ejecucion?

Cuando se ejecuta un return, la funcion termina inmediatamente.

Ejemplo:
```javascript
if (curso.calificacion < 3.0) return 5;  // Si esto es true, termina aqui
if (curso.finalizado === false) return 3;  // Solo se evalua si lo anterior fue false
```

## Ejercicio 16: Sistema de Alerta

Similar al ejercicio 15, usa un callback con logica condicional para clasificar usuarios.

## Ejercicio 17: Control de Inventarios
```javascript
const esPerecedero = prompt("  Es perecedero? (si/no): ").toLowerCase() === "si";
const producto = { id, nombre, categoria, stock, precio, perecedero: esPerecedero };

if (esPerecedero) {
  const fechaVencimiento = prompt("  Fecha de vencimiento (AAAA-MM-DD): ");
  producto.fechaVencimiento = fechaVencimiento;
}
```

### Logica condicional para propiedades

Solo si el producto es perecedero, preguntamos por fecha de vencimiento.

Por que?
No tiene sentido preguntar fecha de vencimiento para arroz o sal (no perecederos).

## Mensaje Final
```javascript
console.log("\n\n\nFIN DE LAS PRUEBAS\n");
```

Tres saltos de linea antes y uno despues para separar visualmente del resto del output.

## Conceptos Clave del Archivo

### Programacion Secuencial

El programa ejecuta los ejercicios en orden, uno tras otro, esperando input del usuario en cada paso.

### Interaccion por Consola

Todo se hace mediante:
- console.log(): Mostrar informacion
- prompt(): Pedir informacion

### Conversion de Tipos

Constante conversion entre strings y numeros:
- prompt() retorna string
- parseInt() / parseFloat() convierten a numero
- Las funciones esperan tipos especificos

### Manejo de Errores

Cada ejercicio verifica si hay errores antes de mostrar resultados.

### Estructuras de Datos

Uso intensivo de:
- Arrays: Para listas de elementos
- Objetos: Para datos estructurados
- Arrays de objetos: Para colecciones de datos complejos

### Funciones de Orden Superior

Varios ejercicios usan callbacks para definir logica personalizada.

## Flujo de Ejecucion Completo

### Inicio

1. Node.js ejecuta el archivo
2. Se importan las librerias y funciones
3. Se muestra el encabezado

### Por cada ejercicio

1. Muestra titulo
2. Pide datos al usuario (se detiene esperando)
3. Usuario ingresa datos y presiona Enter
4. Ejecuta la funcion del ejercicio
5. Muestra resultados
6. Continua con el siguiente ejercicio

### Final

Muestra mensaje de finalizacion

## Mejores Practicas Aplicadas

### Nombres Descriptivos

Variables con nombres claros: cantidadNotas, nombreUsuario, precioMasAlto

### Comentarios de Seccion
```javascript
//EJERCICIO1
//EJERCICIO2
```

Facilita navegacion en el codigo.

### Validacion de Errores

Siempre verificamos if (resultado.error) antes de usar propiedades.

### Formato Consistente

Todos los ejercicios siguen el mismo patron visual y estructural.

### Separacion Visual

Uso de \n para crear espacios y mejorar legibilidad en consola.

## Diferencias con la Version Web

### Version Web (HTML)

- Interfaz grafica con botones y modales
- Un ejercicio a la vez (usuario elige)
- No requiere terminal
- Mas visual y amigable

### Version Consola (app.js)

- Solo texto en terminal
- Todos los ejercicios en secuencia
- Requiere Node.js
- Mas directo y rapido para pruebas

Ambas versiones usan las mismas funciones de los ejercicios (modularidad).
