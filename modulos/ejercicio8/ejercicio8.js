// Funcion de busqueda avanzada en catalogo usando callbacks

// Recibe: array de cursos y un callback con el criterio de busqueda
// Retorna: array con los cursos que cumplen el criterio del callback
function buscarCursos(catalogo, callback) {
  // Validamos que el catalogo tenga cursos
  if (!catalogo || catalogo.length === 0) {
    return {
      error: true,
      mensaje: "Error: El catalogo esta vacio"
    };
  }

  // Validamos que se haya proporcionado un callback
  // El callback es una funcion que define el criterio de busqueda
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback valido"
    };
  }

  // Usamos filter() para aplicar el callback a cada curso
  // filter() recorre el array y mantiene solo los elementos donde callback retorna true
  const cursosEncontrados = catalogo.filter(callback);

  // Retornamos los cursos encontrados
  return {
    error: false,
    cursos: cursosEncontrados,
    cantidad: cursosEncontrados.length,
    mensaje: "Se encontraron " + cursosEncontrados.length + " cursos"
  };
}

export { buscarCursos };