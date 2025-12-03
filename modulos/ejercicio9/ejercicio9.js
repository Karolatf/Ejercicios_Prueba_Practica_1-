// Funcion que procesa pagos mediante un callback de validacion

// Recibe: array de pagos y un callback que define reglas de aprobacion
// Retorna: objeto con pagos aprobados y rechazados
function procesarPagos(pagos, callback) {
  // Validamos que el array de pagos tenga elementos
  if (!pagos || pagos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay pagos para procesar"
    };
  }

  // Validamos que se haya proporcionado un callback
  // El callback determinara si cada pago se aprueba o rechaza
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback de validacion"
    };
  }

  // Creamos arrays separados para pagos aprobados y rechazados
  const pagosAprobados = [];
  const pagosRechazados = [];

  // Recorremos cada pago y aplicamos el callback para validarlo
  for (let i = 0; i < pagos.length; i++) {
    const pago = pagos[i];
    
    // El callback retorna true si el pago cumple las reglas de aprobacion
    const esAprobado = callback(pago);
    
    // Creamos una copia del pago con su estado
    const pagoConEstado = {
      ...pago,
      estado: esAprobado ? "APROBADO" : "RECHAZADO"
    };
    
    // Agregamos el pago al array correspondiente segun su estado
    if (esAprobado) {
      pagosAprobados.push(pagoConEstado);
    } else {
      pagosRechazados.push(pagoConEstado);
    }
  }

  // Retornamos los pagos clasificados
  return {
    error: false,
    aprobados: pagosAprobados,
    rechazados: pagosRechazados,
    totalAprobados: pagosAprobados.length,
    totalRechazados: pagosRechazados.length,
    mensaje: "Procesados: " + pagosAprobados.length + " aprobados, " + pagosRechazados.length + " rechazados"
  };
}

export { procesarPagos };