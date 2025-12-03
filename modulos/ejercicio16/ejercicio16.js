// Funcion principal: Analiza usuarios de red social para detectar comportamiento sospechoso

// Recibe: array de usuarios y callback con reglas de analisis
// Retorna: informe clasificado por nivel de riesgo
function analizarUsuarios(usuarios, callback) {
  // Validamos que el array tenga usuarios
  if (!usuarios || usuarios.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay usuarios para analizar"
    };
  }

  // Validamos que se proporciono un callback
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback de analisis"
    };
  }

  // Arrays para clasificar usuarios por nivel de riesgo
  const bajoRiesgo = [];
  const medioRiesgo = [];
  const altoRiesgo = [];

  // Analizamos cada usuario aplicando el callback
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];
    
    // El callback retorna un objeto con analisis del usuario
    const analisis = callback(usuario);
    
    // Agregamos el analisis al usuario
    const usuarioAnalizado = {
      ...usuario,
      sospechoso: analisis.sospechoso,
      nivel: analisis.nivel,
      motivo: analisis.motivo
    };
    
    // Clasificamos segun el nivel de riesgo
    if (analisis.nivel >= 4) {
      altoRiesgo.push(usuarioAnalizado);
    } else if (analisis.nivel >= 2) {
      medioRiesgo.push(usuarioAnalizado);
    } else {
      bajoRiesgo.push(usuarioAnalizado);
    }
  }

  // Calculamos estadisticas del informe
  const totalSospechosos = altoRiesgo.length + medioRiesgo.length;

  // Generamos el informe completo
  return {
    error: false,
    totalUsuarios: usuarios.length,
    totalSospechosos: totalSospechosos,
    bajoRiesgo: {
      cantidad: bajoRiesgo.length,
      usuarios: bajoRiesgo
    },
    medioRiesgo: {
      cantidad: medioRiesgo.length,
      usuarios: medioRiesgo
    },
    altoRiesgo: {
      cantidad: altoRiesgo.length,
      usuarios: altoRiesgo
    },
    mensaje: "Analisis completado: " + altoRiesgo.length + " usuarios de alto riesgo detectados"
  };
}

export { analizarUsuarios };