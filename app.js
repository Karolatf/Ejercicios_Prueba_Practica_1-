import libreria from 'prompt-sync';
const prompt = libreria();

// Importamos todas las funciones desde el barril
import { 
  validarAsistencia,
  calcularInventario,
  calcularPromedio
} from './modulos/barril.js';

console.log("PRUEBAS DE EJERCICIOS - TECNICO EN PROGRAMACION \n\n");

// EJERCICIO 1: Validacion de asistencia en un curso

console.log("EJERCICIO 1: VALIDACION DE ASISTENCIA");
const estudiantes = ["Fernando", "Geraldo", "Ana", "Nicolle", "Manuel", "Wilmer", "Dario", "Jhon", "Sebastian", "Santiago", "Paulo"];

// console.log("Lista de estudiantes inscritos:", estudiantes.join(", "));

const nombreBuscado = prompt("Ingrese el nombre del aprendiz a validar: ");
const resultado1 = validarAsistencia(estudiantes, nombreBuscado);

console.log("\n" + resultado1);


// EJERCICIO 2: Actualizacion de inventario en tienda digital

console.log("\n\n\nEJERCICIO 2: ACTUALIZACION DE INVENTARIO");

const cantidadInicial = parseInt(prompt("Ingrese la cantidad inicial en stock: "));
const cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida: "));
const cantidadRecibida = parseInt(prompt("Ingrese la cantidad recibida en reposicion: "));

const resultado2 = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);

if (resultado2.error) {
  console.log("\n" + resultado2.mensaje);
} else {
  console.log("\n\nREPORTE DE INVENTARIO:");
  console.log("   Inventario final: " + resultado2.inventarioFinal + " unidades");
  console.log("   Estado: " + resultado2.estado);
}


// EJERCICIO 3: Analisis de calificaciones de un aprendiz

console.log("\n\n\nEJERCICIO 3: ANALISIS DE CALIFICACIONES");

const cantidadNotas = parseInt(prompt("Cuantas notas desea ingresar?: "));
const notas = [];

for (let i = 0; i < cantidadNotas; i++) {
  const nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " (0-5): "));
  notas.push(nota);
}

console.log("\n\nNotas ingresadas:", notas.join(", "));

const resultado3 = calcularPromedio(notas);

if (resultado3.error) {
  console.log("\n" + resultado3.mensaje);
} else {
  console.log("\n\nANALISIS ACADEMICO:");
  console.log("   Promedio: " + resultado3.promedio);
  console.log("   Rendimiento: " + resultado3.rendimiento);
  console.log("   " + resultado3.mensaje);
}





console.log("\n\n\nFIN DE LAS PRUEBAS");
