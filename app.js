import libreria from 'prompt-sync';
const prompt = libreria();

// Importamos todas las funciones desde el barril
import { 
  validarAsistencia,
  calcularInventario,
  calcularPromedio,
  ordenarPrecios,
  validarUsuario,
  calcularSalarioBase,
  calcularDeducciones,
  calcularNeto,
  registrarProductos,
  buscarCursos,
  procesarPagos,
  fusionarUsuarios,
  generarResumen,
  gestionarPacientes,
  analizarGastos,
  evaluarProyectos,
  generarRecomendaciones,
  analizarUsuarios,
  procesarInventario
} from './modulos/barril.js';

console.log("\nPRUEBAS DE EJERCICIOS - TECNICO EN PROGRAMACION\n\n");

//EJERCICIO1

console.log("EJERCICIO 1: VALIDACION DE ASISTENCIA\n");
const estudiantes = ["Luis", "Maria", "Kevin", "Nicolle", "Santiago", "Sebastian", "Geraldo", "Wilmer", "Manuel", "Isabella", "Paulo"];
console.log("Lista de estudiantes inscritos:", estudiantes.join(", "));
const nombreBuscado = prompt("Ingrese el nombre del aprendiz a validar: ");
const resultado1 = validarAsistencia(estudiantes, nombreBuscado);
console.log("\n" + resultado1);

//EJERCICIO2

console.log("\n\nEJERCICIO 2: ACTUALIZACION DE INVENTARIO\n");
const cantidadInicial = parseInt(prompt("Ingrese la cantidad inicial en stock: "));
const cantidadVendida = parseInt(prompt("Ingrese la cantidad vendida: "));
const cantidadRecibida = parseInt(prompt("Ingrese la cantidad recibida en reposicion: "));
const resultado2 = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);
if (resultado2.error) {
  console.log("\n" + resultado2.mensaje);
} else {
  console.log("\nREPORTE DE INVENTARIO:");
  console.log("Inventario final: " + resultado2.inventarioFinal + " unidades");
  console.log("Estado: " + resultado2.estado);
}

//EJERCICIO3

console.log("\n\nEJERCICIO 3: ANALISIS DE CALIFICACIONES\n");
const cantidadNotas = parseInt(prompt("Cuantas notas desea ingresar?: "));
const notas = [];
for (let i = 0; i < cantidadNotas; i++) {
  const nota = parseFloat(prompt("Ingrese la nota " + (i + 1) + " (0-5): "));
  notas.push(nota);
}
console.log("\nNotas ingresadas:", notas.join(", "));
const resultado3 = calcularPromedio(notas);
if (resultado3.error) {
  console.log("\n" + resultado3.mensaje);
} else {
  console.log("\nANALISIS ACADEMICO:");
  console.log("Promedio: " + resultado3.promedio);
  console.log("Rendimiento: " + resultado3.rendimiento);
}

//EJERCICIO4

console.log("\n\nEJERCICIO 4: ORDENAMIENTO DE PRECIOS\n");
const cantidadPrecios = parseInt(prompt("Cuantos precios desea ingresar?: "));
const precios = [];
for (let i = 0; i < cantidadPrecios; i++) {
  const precio = parseFloat(prompt("Ingrese el precio " + (i + 1) + ": "));
  precios.push(precio);
}
const resultado4 = ordenarPrecios(precios);
if (resultado4.error) {
  console.log("\n" + resultado4.mensaje);
} else {
  console.log("\nPRECIOS ORDENADOS:");
  console.log("Precios de mayor a menor:", resultado4.preciosOrdenados.join(", "));
  console.log("Precio mas alto: " + resultado4.precioMasAlto);
  console.log("Precio mas bajo: " + resultado4.precioMasBajo);
}

//EJERCICIOS5

console.log("\n\nEJERCICIO 5: VALIDACION DE USUARIO Y PERMISOS\n");
const nombreUsuario = prompt("Ingrese el nombre del usuario: ");
const estadoUsuario = prompt("Ingrese el estado (activo/inactivo): ");
const rolUsuario = prompt("Ingrese el rol (admin/editor/lector): ");
const resultado5 = validarUsuario(nombreUsuario, estadoUsuario, rolUsuario);
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

//EJERCICIO6

console.log("\n\nEJERCICIO 6: CALCULO MODULAR DE NOMINA\n");
const valorHora = parseFloat(prompt("Ingrese el valor por hora: "));
const horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas: "));
const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
if (salarioBase.error) {
  console.log("\n" + salarioBase.mensaje);
} else {
  const deducciones = calcularDeducciones(salarioBase);
  const salarioNeto = calcularNeto(salarioBase, deducciones);
  console.log("\nCALCULO DE NOMINA:");
  console.log("Salario base: " + salarioBase);
  console.log("Deducciones (10%): " + deducciones);
  console.log("Salario neto: " + salarioNeto);
}

//EJERCICIO7

console.log("\n\nEJERCICIO 7: REGISTRO DINAMICO DE PRODUCTOS\n");
const producto1 = prompt("Ingrese el nombre del producto 1: ");
const producto2 = prompt("Ingrese el nombre del producto 2: ");
const producto3 = prompt("Ingrese el nombre del producto 3: ");
const producto4 = prompt("Ingrese el nombre del producto 4: ");
const resultado7 = registrarProductos(producto1, producto2, producto3, producto4, producto2);
if (resultado7.error) {
  console.log("\n" + resultado7.mensaje);
} else {
  console.log("\nPRODUCTOS REGISTRADOS:");
  console.log("Total de productos unicos: " + resultado7.cantidad);
  console.log("Productos:", resultado7.productos.join(", "));
}

//EJERCICIO8

console.log("\n\nEJERCICIO 8: BUSQUEDA AVANZADA EN CATALOGO\n");
const catalogoCursos = [
  { nombre: "JavaScript Basico", categoria: "programacion", duracion: 40 },
  { nombre: "Cocina Italiana", categoria: "gastronomia", duracion: 20 },
  { nombre: "Python Avanzado", categoria: "programacion", duracion: 60 },
  { nombre: "Reposteria", categoria: "gastronomia", duracion: 15 }
];
console.log("Catalogo disponible:");
for (let i = 0; i < catalogoCursos.length; i++) {
  console.log((i+1) + ". " + catalogoCursos[i].nombre + " (" + catalogoCursos[i].categoria + ", " + catalogoCursos[i].duracion + "h)");
}
const criterioBusqueda = prompt("Ingrese criterio (programacion/gastronomia): ");
const resultado8 = buscarCursos(catalogoCursos, (curso) => curso.categoria === criterioBusqueda);
if (resultado8.error) {
  console.log("\n" + resultado8.mensaje);
} else {
  console.log("\nCURSOS ENCONTRADOS:");
  console.log("Total: " + resultado8.cantidad);
  for (let i = 0; i < resultado8.cursos.length; i++) {
    console.log("- " + resultado8.cursos[i].nombre);
  }
}

//EJERCICIO9

console.log("\n\nEJERCICIO 9: PROCESAMIENTO DE PAGOS\n");
const cantidadPagos = parseInt(prompt("Cuantos pagos desea procesar?: "));
const pagosEjemplo = [];
for (let i = 0; i < cantidadPagos; i++) {
  console.log("\nPago " + (i + 1) + ":");
  const id = parseInt(prompt("  ID del pago: "));
  const monto = parseFloat(prompt("  Monto del pago: "));
  const cliente = prompt("  Nombre del cliente: ");
  pagosEjemplo.push({ id, monto, cliente });
}
console.log("\nPagos a procesar:");
for (let i = 0; i < pagosEjemplo.length; i++) {
  console.log("ID " + pagosEjemplo[i].id + ": " + pagosEjemplo[i].cliente + " - $" + pagosEjemplo[i].monto);
}
const montoMinimo = parseFloat(prompt("\nIngrese monto minimo para aprobar: "));
const resultado9 = procesarPagos(pagosEjemplo, (pago) => pago.monto >= montoMinimo);
if (resultado9.error) {
  console.log("\n" + resultado9.mensaje);
} else {
  console.log("\nRESULTADO DEL PROCESAMIENTO:");
  console.log("Pagos aprobados: " + resultado9.totalAprobados);
  console.log("Pagos rechazados: " + resultado9.totalRechazados);
}

//EJERCICIO10

console.log("\n\nEJERCICIO 10: FUSION DE USUARIOS\n");
console.log("SISTEMA A:");
const cantidadUsuariosA = parseInt(prompt("Cuantos usuarios tiene el sistema A?: "));
const sistemA = [];
for (let i = 0; i < cantidadUsuariosA; i++) {
  console.log("\nUsuario " + (i + 1) + " del sistema A:");
  const documento = prompt("  Documento: ");
  const nombre = prompt("  Nombre: ");
  const edad = prompt("  Edad (opcional, presione Enter para omitir): ");
  const ciudad = prompt("  Ciudad (opcional, presione Enter para omitir): ");
  const email = prompt("  Email (opcional, presione Enter para omitir): ");
  
  const usuario = { documento, nombre };
  if (edad) usuario.edad = parseInt(edad);
  if (ciudad) usuario.ciudad = ciudad;
  if (email) usuario.email = email;
  
  sistemA.push(usuario);
}

console.log("\nSISTEMA B:");
const cantidadUsuariosB = parseInt(prompt("Cuantos usuarios tiene el sistema B?: "));
const sistemB = [];
for (let i = 0; i < cantidadUsuariosB; i++) {
  console.log("\nUsuario " + (i + 1) + " del sistema B:");
  const documento = prompt("  Documento: ");
  const nombre = prompt("  Nombre: ");
  const edad = prompt("  Edad (opcional, presione Enter para omitir): ");
  const ciudad = prompt("  Ciudad (opcional, presione Enter para omitir): ");
  const email = prompt("  Email (opcional, presione Enter para omitir): ");
  
  const usuario = { documento, nombre };
  if (edad) usuario.edad = parseInt(edad);
  if (ciudad) usuario.ciudad = ciudad;
  if (email) usuario.email = email;
  
  sistemB.push(usuario);
}

console.log("\nSistema A tiene " + sistemA.length + " usuarios");
console.log("Sistema B tiene " + sistemB.length + " usuarios");
const resultado10 = fusionarUsuarios(sistemA, sistemB);
if (resultado10.error) {
  console.log("\n" + resultado10.mensaje);
} else {
  console.log("\nRESULTADO DE FUSION:");
  console.log("Total de usuarios unicos: " + resultado10.cantidad);
  console.log(resultado10.mensaje);
}

//EJERCICIO11

console.log("\n\nEJERCICIO 11: RESUMEN DE MENSAJES\n");
console.log("Ingrese los datos del mensaje:");
const remitenteMsg = prompt("Remitente: ");
const contenidoMsg = prompt("Contenido del mensaje: ");
const fechaMsg = prompt("Fecha (ejemplo: 2025-01-15): ");
const asuntoMsg = prompt("Asunto (opcional): ");

const mensajeEjemplo = {
  remitente: remitenteMsg,
  contenido: contenidoMsg,
  fecha: fechaMsg
};
if (asuntoMsg) mensajeEjemplo.asunto = asuntoMsg;

console.log("\nMensaje completo recibido de: " + mensajeEjemplo.remitente);
const resultado11 = generarResumen(mensajeEjemplo);
if (resultado11.error) {
  console.log("\n" + resultado11.mensaje);
} else {
  console.log("\nRESUMEN DEL MENSAJE:");
  console.log(resultado11.resumen);
}

//EJERCICIO12

console.log("\n\nEJERCICIO 12: GESTION DE PACIENTES POR PRIORIDAD\n");
const cantidadPacientes = parseInt(prompt("Cuantos pacientes hay en espera?: "));
const pacientesEjemplo = [];
for (let i = 0; i < cantidadPacientes; i++) {
  console.log("\nPaciente " + (i + 1) + ":");
  const nombre = prompt("  Nombre completo: ");
  const prioridad = parseInt(prompt("  Nivel de prioridad (1-5): "));
  const edad = parseInt(prompt("  Edad: "));
  pacientesEjemplo.push({ nombre, prioridad, edad });
}
console.log("\nPacientes en espera:");
for (let i = 0; i < pacientesEjemplo.length; i++) {
  console.log(pacientesEjemplo[i].nombre + " (Prioridad: " + pacientesEjemplo[i].prioridad + ", Edad: " + pacientesEjemplo[i].edad + ")");
}
const resultado12 = gestionarPacientes(pacientesEjemplo);
if (resultado12.error) {
  console.log("\n" + resultado12.mensaje);
} else {
  console.log("\nPACIENTE SELECCIONADO:");
  console.log(resultado12.mensaje);
}

//EJERCICIO13

console.log("\n\nEJERCICIO 13: CONTROL DE GASTOS\n");
const cantidadGastos = parseInt(prompt("Cuantos gastos desea registrar?: "));
const gastosEjemplo = [];
for (let i = 0; i < cantidadGastos; i++) {
  console.log("\nGasto " + (i + 1) + ":");
  const categoria = prompt("  Categoria (Alimentacion, Transporte, etc.): ");
  const monto = parseFloat(prompt("  Monto: "));
  gastosEjemplo.push({ categoria, monto });
}
console.log("\nGastos registrados:");
for (let i = 0; i < gastosEjemplo.length; i++) {
  console.log(gastosEjemplo[i].categoria + ": $" + gastosEjemplo[i].monto);
}
const resultado13 = analizarGastos(gastosEjemplo);
if (resultado13.error) {
  console.log("\n" + resultado13.mensaje);
} else {
  console.log("\nANALISIS FINANCIERO:");
  console.log("Total gastado: $" + resultado13.totalGastado);
  console.log("Categoria mas costosa: " + resultado13.categoriaMasCostosa + " ($" + resultado13.montoCategoriaMaxima + ")");
  if (resultado13.alertas.length > 0) {
    console.log("\nALERTAS:");
    for (let i = 0; i < resultado13.alertas.length; i++) {
      console.log("- " + resultado13.alertas[i].categoria + ": " + resultado13.alertas[i].porcentaje);
    }
  }
}

//EJERCICIO14

console.log("\n\nEJERCICIO 14: EVALUACION DE PROYECTOS COLABORATIVOS\n");
const cantidadProyectos = parseInt(prompt("Cuantos proyectos desea evaluar?: "));
const proyectosEjemplo = [];
for (let i = 0; i < cantidadProyectos; i++) {
  console.log("\nProyecto " + (i + 1) + ":");
  const nombre = prompt("  Nombre del proyecto: ");
  const estado = prompt("  Estado (activo/inactivo): ");
  const numParticipantes = parseInt(prompt("  Cantidad de participantes: "));
  const participantes = [];
  for (let j = 0; j < numParticipantes; j++) {
    const participante = prompt("    Nombre participante " + (j + 1) + ": ");
    participantes.push(participante);
  }
  const avance = parseInt(prompt("  Porcentaje de avance (0-100): "));
  proyectosEjemplo.push({ nombre, estado, participantes, avance });
}
console.log("\nProyectos registrados:");
for (let i = 0; i < proyectosEjemplo.length; i++) {
  console.log(proyectosEjemplo[i].nombre + " (" + proyectosEjemplo[i].estado + ")");
}
const resultado14 = evaluarProyectos(proyectosEjemplo, (proyecto) => {
  return proyecto.avance < 50 || proyecto.participantes.length < 2;
});
if (resultado14.error) {
  console.log("\n" + resultado14.mensaje);
} else {
  console.log("\nEVALUACION DE PROYECTOS:");
  console.log("Proyectos activos evaluados: " + resultado14.proyectosActivos);
  for (let i = 0; i < resultado14.informes.length; i++) {
    console.log(resultado14.informes[i].nombre + ": " + resultado14.informes[i].evaluacion);
  }
}

//EJERCICIO15

console.log("\n\nEJERCICIO 15: SISTEMA DE RECOMENDACION DE CURSOS\n");
const cantidadCursos = parseInt(prompt("Cuantos cursos ha completado?: "));
const cursosCompletados = [];
for (let i = 0; i < cantidadCursos; i++) {
  console.log("\nCurso " + (i + 1) + ":");
  const nombre = prompt("  Nombre del curso: ");
  const calificacion = parseFloat(prompt("  Calificacion (0-5): "));
  const horas = parseInt(prompt("  Horas dedicadas: "));
  const finalizado = prompt("  Esta finalizado? (si/no): ").toLowerCase() === "si";
  cursosCompletados.push({ nombre, calificacion, horas, finalizado });
}
console.log("\nCursos completados por el aprendiz:");
for (let i = 0; i < cursosCompletados.length; i++) {
  console.log(cursosCompletados[i].nombre + " (Nota: " + cursosCompletados[i].calificacion + ")");
}
const resultado15 = generarRecomendaciones(cursosCompletados, (curso) => {
  if (curso.calificacion < 3.0) return 5;
  if (curso.finalizado === false) return 3;
  if (curso.horas < 10 && curso.calificacion >= 4.0) return 2;
  return 0;
});
if (resultado15.error) {
  console.log("\n" + resultado15.mensaje);
} else {
  console.log("\nRECOMENDACIONES:");
  console.log("Total de recomendaciones: " + resultado15.cantidad);
  for (let i = 0; i < resultado15.recomendaciones.length; i++) {
    console.log((i+1) + ". " + resultado15.recomendaciones[i].nombre + " - " + resultado15.recomendaciones[i].razon);
  }
}

//EJERCICIO16

console.log("\n\nEJERCICIO 16: SISTEMA DE ALERTA PARA RED SOCIAL\n");
const cantidadUsuarios = parseInt(prompt("Cuantos usuarios desea analizar?: "));
const usuariosRed = [];
for (let i = 0; i < cantidadUsuarios; i++) {
  console.log("\nUsuario " + (i + 1) + ":");
  const id = parseInt(prompt("  ID: "));
  const nombre = prompt("  Nombre: ");
  const reportes = parseInt(prompt("  Numero de reportes: "));
  const fechaRegistro = prompt("  Fecha de registro (AAAA-MM-DD): ");
  usuariosRed.push({ id, nombre, reportes, fechaRegistro });
}
console.log("\nUsuarios registrados: " + usuariosRed.length);
const resultado16 = analizarUsuarios(usuariosRed, (usuario) => {
  let nivel = 1;
  let sospechoso = false;
  let motivo = "Sin actividad sospechosa";
  
  if (usuario.reportes > 5) {
    nivel = 4;
    sospechoso = true;
    motivo = "Multiples reportes";
  } else if (usuario.reportes >= 3) {
    nivel = 2;
    sospechoso = true;
    motivo = "Reportes moderados";
  }
  
  return { sospechoso, nivel, motivo };
});
if (resultado16.error) {
  console.log("\n" + resultado16.mensaje);
} else {
  console.log("\nINFORME DE SEGURIDAD:");
  console.log("Total sospechosos: " + resultado16.totalSospechosos);
  console.log("Alto riesgo: " + resultado16.altoRiesgo.cantidad);
  console.log("Medio riesgo: " + resultado16.medioRiesgo.cantidad);
  console.log("Bajo riesgo: " + resultado16.bajoRiesgo.cantidad);
}

//EJERCICIO17

console.log("\n\nEJERCICIO 17: CONTROL DE INVENTARIOS DINAMICOS\n");
const cantidadProductos = parseInt(prompt("Cuantos productos tiene en inventario?: "));
const inventarioEjemplo = [];
for (let i = 0; i < cantidadProductos; i++) {
  console.log("\nProducto " + (i + 1) + ":");
  const id = parseInt(prompt("  ID: "));
  const nombre = prompt("  Nombre: ");
  const categoria = prompt("  Categoria: ");
  const stock = parseInt(prompt("  Stock disponible: "));
  const precio = parseFloat(prompt("  Precio: "));
  const esPerecedero = prompt("  Es perecedero? (si/no): ").toLowerCase() === "si";
  
  const producto = { id, nombre, categoria, stock, precio, perecedero: esPerecedero };
  
  if (esPerecedero) {
    const fechaVencimiento = prompt("  Fecha de vencimiento (AAAA-MM-DD): ");
    producto.fechaVencimiento = fechaVencimiento;
  }
  
  inventarioEjemplo.push(producto);
}
console.log("\nProductos en inventario: " + inventarioEjemplo.length);
const resultado17 = procesarInventario(inventarioEjemplo, (producto) => {
  if (producto.stock < 10) return "vigilar";
  if (producto.perecedero && producto.stock > 40) return "ajustarPrecio";
  if (producto.stock < 5) return "retirar";
  return "estable";
});
if (resultado17.error) {
  console.log("\n" + resultado17.mensaje);
} else {
  console.log("\nINFORME DE INVENTARIO:");
  console.log("Valor total: $" + resultado17.valorTotal);
  console.log("Productos a vigilar: " + resultado17.productosClasificados.vigilar.cantidad);
  console.log("Productos a ajustar precio: " + resultado17.productosClasificados.ajustarPrecio.cantidad);
  console.log("Alertas de vencimiento: " + resultado17.alertasVencimiento.cantidad);
  console.log("Mayor stock: " + resultado17.stockExtremos.mayorStock.nombre + " (" + resultado17.stockExtremos.mayorStock.stock + ")");
  console.log("Menor stock: " + resultado17.stockExtremos.menorStock.nombre + " (" + resultado17.stockExtremos.menorStock.stock + ")");
}

console.log("\n\n\nFIN DE LAS PRUEBAS\n");