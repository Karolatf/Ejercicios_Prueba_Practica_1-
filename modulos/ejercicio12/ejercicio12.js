// Funcion que encuentra el paciente con mayor prioridad de atencion

// Si hay empate en prioridad, selecciona al de mayor edad
// Recibe: array de pacientes
// Retorna: paciente seleccionado para atencion
function gestionarPacientes(pacientes) {
  // Validamos que el array tenga pacientes
  if (!pacientes || pacientes.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay pacientes para atender"
    };
  }

  // Validamos que todos los pacientes tengan los datos necesarios
  for (let i = 0; i < pacientes.length; i++) {
    if (!pacientes[i].prioridad || !pacientes[i].edad) {
      return {
        error: true,
        mensaje: "Error: Todos los pacientes deben tener prioridad y edad"
      };
    }
  }

  // Inicializamos con el primer paciente
  let pacienteSeleccionado = pacientes[0];

  // Recorremos todos los pacientes para encontrar el de mayor prioridad
  for (let i = 1; i < pacientes.length; i++) {
    const pacienteActual = pacientes[i];

    // Comparamos prioridades (mayor numero = mayor prioridad)
    if (pacienteActual.prioridad > pacienteSeleccionado.prioridad) {
      // Este paciente tiene mayor prioridad, lo seleccionamos
      pacienteSeleccionado = pacienteActual;
    } else if (pacienteActual.prioridad === pacienteSeleccionado.prioridad) {
      // Hay empate en prioridad, seleccionamos al de mayor edad
      if (pacienteActual.edad > pacienteSeleccionado.edad) {
        pacienteSeleccionado = pacienteActual;
      }
    }
  }

  // Retornamos el paciente seleccionado con toda su informacion
  return {
    error: false,
    paciente: pacienteSeleccionado,
    mensaje: "Paciente seleccionado: " + pacienteSeleccionado.nombre + " (Prioridad: " + pacienteSeleccionado.prioridad + ", Edad: " + pacienteSeleccionado.edad + ")"
  };
}

export { gestionarPacientes };