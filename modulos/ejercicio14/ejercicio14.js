// Funcion 1: Filtrar proyectos activos

// Recibe: array de proyectos
// Retorna: array solo con proyectos activos
function filtrarActivos(proyectos) {
  // Validamos que el array exista y tenga elementos
  if (!proyectos || proyectos.length === 0) {
    return [];
  }

  // Usamos filter() para obtener solo los proyectos con estado "activo"
  // Filter crea un nuevo array con los elementos que cumplan la condicion
  const activos = proyectos.filter(proyecto => proyecto.estado === "activo");
  
  return activos;
}

// Funcion 2: Contar participantes de un proyecto

// Recibe: objeto proyecto
// Retorna: cantidad de participantes
function contarParticipantes(proyecto) {
  // Validamos que el proyecto exista y tenga array de participantes
  if (!proyecto || !proyecto.participantes) {
    return 0;
  }

  // Retornamos la longitud del array de participantes
  // Si participantes es un array, length nos da la cantidad
  return proyecto.participantes.length;
}

// Fubncion 3: Funcion principal que integra todo

// Recibe: array de proyectos y callback con regla de evaluacion
// Retorna: informe completo con analisis de cada proyecto activo
function evaluarProyectos(proyectos, callback) {
  // Validamos que el array de proyectos exista
  if (!proyectos || proyectos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay proyectos para evaluar"
    };
  }

  // Validamos que se proporciono un callback
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback de evaluacion"
    };
  }

  // PASO 1: Filtramos solo los proyectos activos
  // Usamos la funcion filtrarActivos() que creamos arriba
  const proyectosActivos = filtrarActivos(proyectos);

  // Si no hay proyectos activos, retornamos mensaje informativo
  if (proyectosActivos.length === 0) {
    return {
      error: false,
      proyectosActivos: 0,
      informes: [],
      mensaje: "No hay proyectos activos para evaluar"
    };
  }

  // Array para almacenar los informes de cada proyecto
  const informes = [];

  // PASO 2: Recorremos cada proyecto activo
  for (let i = 0; i < proyectosActivos.length; i++) {
    const proyecto = proyectosActivos[i];

    // Contamos los participantes usando la funcion contarParticipantes()
    const numParticipantes = contarParticipantes(proyecto);

    // PASO 3: Aplicamos el callback para evaluar si requiere refuerzo
    // El callback retorna true si requiere refuerzo, false si no
    const requiereRefuerzo = callback(proyecto);

    // Determinamos el estado final basado en la evaluacion del callback
    let estadoFinal;
    if (requiereRefuerzo) {
      estadoFinal = "REQUIERE REFUERZO";
    } else {
      estadoFinal = "EN BUEN ESTADO";
    }

    // Creamos el informe individual de este proyecto
    const informe = {
      nombre: proyecto.nombre,
      participantes: numParticipantes,
      requiereRefuerzo: requiereRefuerzo,
      evaluacion: estadoFinal,
      detalles: "Proyecto con " + numParticipantes + " participante(s) - " + estadoFinal
    };

    // Agregamos el informe al array de informes
    informes.push(informe);
  }

  // PASO 4: Generamos el informe final completo
  return {
    error: false,
    totalProyectos: proyectos.length,
    proyectosActivos: proyectosActivos.length,
    informes: informes,
    mensaje: "Evaluacion completada: " + proyectosActivos.length + " proyecto(s) activo(s) analizados"
  };
}

// Exportamos las tres funciones
export { filtrarActivos, contarParticipantes, evaluarProyectos };