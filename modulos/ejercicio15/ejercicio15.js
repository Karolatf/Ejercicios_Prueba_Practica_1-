// Funcion principal: Sistema de recomendacion de cursos

// Recibe: array de cursos completados y callback con criterio de recomendacion
// Retorna: cursos recomendados ordenados por prioridad
function generarRecomendaciones(cursos, callback) {
  // Validamos que el array tenga cursos
  if (!cursos || cursos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay cursos para analizar"
    };
  }

  // Validamos que se proporciono un callback
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback de recomendacion"
    };
  }

  // Array para almacenar cursos con su prioridad calculada
  const cursosConPrioridad = [];

  // Aplicamos el callback a cada curso para obtener su prioridad
  for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];
    
    // El callback retorna un numero: 0 = no recomendado, mayor = mas prioritario
    const prioridad = callback(curso);
    
    // Solo incluimos cursos con prioridad mayor a 0
    if (prioridad > 0) {
      cursosConPrioridad.push({
        ...curso,
        prioridad: prioridad
      });
    }
  }

  // Ordenamos los cursos por prioridad de mayor a menor
  // Usamos sort con funcion de comparacion
  cursosConPrioridad.sort((a, b) => b.prioridad - a.prioridad);

  // Generamos explicaciones de por que fueron recomendados
  const recomendacionesConRazon = cursosConPrioridad.map(curso => {
    let razon = "Recomendado segun criterio personalizado (Prioridad: " + curso.prioridad + ")";
    
    if (curso.calificacion && curso.calificacion < 3.0) {
      razon = "Refuerzo necesario por calificacion baja";
    } else if (curso.finalizado === false) {
      razon = "Curso pendiente de finalizar";
    } else if (curso.horas && curso.calificacion && curso.horas < 10 && curso.calificacion >= 4.0) {
      razon = "Buen resultado con poco tiempo invertido";
    }
    
    return {
      ...curso,
      razon: razon
    };
  });

  // Retornamos las recomendaciones ordenadas
  return {
    error: false,
    recomendaciones: recomendacionesConRazon,
    cantidad: recomendacionesConRazon.length,
    mensaje: "Se generaron " + recomendacionesConRazon.length + " recomendaciones"
  };
}

export { generarRecomendaciones };