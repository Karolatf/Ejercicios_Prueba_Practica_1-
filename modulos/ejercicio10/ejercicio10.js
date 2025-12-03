// Funcion que fusiona dos listas de usuarios eliminando duplicados


// Usa operador spread para combinar arrays
// Retorna: lista unificada sin duplicados
function fusionarUsuarios(usuariosA, usuariosB) {
  // Validamos que ambos arrays existan
  if (!usuariosA || !usuariosB) {
    return {
      error: true,
      mensaje: "Error: Se requieren ambas listas de usuarios"
    };
  }

  // Combinamos ambos arrays usando el operador spread
  // [...usuariosA, ...usuariosB] une los dos arrays en uno solo
  const todosLosUsuarios = [...usuariosA, ...usuariosB];

  // Array para almacenar usuarios unicos
  const usuariosUnicos = [];
  
  // Objeto para rastrear que documentos ya hemos procesado
  const documentosVistos = {};

  // Recorremos todos los usuarios
  for (let i = 0; i < todosLosUsuarios.length; i++) {
    const usuario = todosLosUsuarios[i];
    
    // Validamos que el usuario tenga documento
    if (!usuario.documento) {
      continue;
    }

    // Si ya vimos este documento, verificamos cual tiene mas informacion
    if (documentosVistos[usuario.documento]) {
      // Obtenemos el usuario que ya estaba guardado
      const usuarioExistente = documentosVistos[usuario.documento];
      
      // Contamos cuantas propiedades tiene cada usuario
      const propiedadesExistente = Object.keys(usuarioExistente).length;
      const propiedadesActual = Object.keys(usuario).length;
      
      // Si el actual tiene mas informacion, lo reemplazamos
      if (propiedadesActual > propiedadesExistente) {
        // Buscamos el indice del usuario existente en el array
        const indice = usuariosUnicos.findIndex(u => u.documento === usuario.documento);
        // Reemplazamos con el que tiene mas informacion
        usuariosUnicos[indice] = usuario;
        documentosVistos[usuario.documento] = usuario;
      }
    } else {
      // Es la primera vez que vemos este documento, lo agregamos
      usuariosUnicos.push(usuario);
      documentosVistos[usuario.documento] = usuario;
    }
  }

  // Retornamos la lista unificada
  return {
    error: false,
    usuarios: usuariosUnicos,
    cantidad: usuariosUnicos.length,
    mensaje: "Se unificaron " + usuariosUnicos.length + " usuarios unicos"
  };
}

export { fusionarUsuarios };