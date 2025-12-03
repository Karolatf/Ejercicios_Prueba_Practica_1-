// Funcion que calcula el promedio de notas y determina el rendimiento

// Recibe: array de calificaciones
// Retorna: objeto con promedio y categoria de rendimiento
function calcularPromedio(notas) {
  // Validamos que el array tenga elementos
  if (!notas || notas.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay notas para calcular"
    };
  }

  // Validamos que todas las notas esten entre 0 y 5
  const notasInvalidas = notas.some(nota => nota < 0 || nota > 5);
  if (notasInvalidas) {
    return {
      error: true,
      mensaje: "Error: Las notas deben estar entre 0 y 5"
    };
  }

  // Calculamos la suma de todas las notas usando un ciclo
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  // Calculamos el promedio dividiendo la suma entre la cantidad de notas
  const promedio = suma / notas.length;

  // Determinamos la categoria de rendimiento segun rangos
  // Alto: 4.0 - 5.0 | Medio: 3.0 - 3.9 | Bajo: 0.0 - 2.9
  let rendimiento;
  
  if (promedio >= 4.0) {
    rendimiento = "ALTO";
  } else if (promedio >= 3.0) {
    rendimiento = "MEDIO";
  } else {
    rendimiento = "BAJO";
  }

  // Retornamos el resultado formateado
  return {
    error: false,
    promedio: promedio.toFixed(2), // Redondeamos a 2 decimales
    rendimiento,
    mensaje: "Promedio: " + promedio.toFixed(2) + " - Rendimiento: " + rendimiento
  };
}

export { calcularPromedio };