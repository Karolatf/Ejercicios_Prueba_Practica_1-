// Funcion para validar si un aprendiz esta inscrito en el curso

// Recibe: lista de estudiantes (array) y nombre a buscar (string)
// Retorna: mensaje indicando si esta o no inscrito
function validarAsistencia(lista, nombre) {
  // Usamos includes() porque es mas eficiente para busquedas simples
  // Comparamos directamente si el nombre existe en el array
  const estaInscrito = lista.includes(nombre);
  
  // Retornamos un mensaje claro dependiendo del resultado
  return estaInscrito 
    ? "El aprendiz \"" + nombre + "\" SI esta inscrito en el curso." 
    : "El aprendiz \"" + nombre + "\" NO esta inscrito en el curso.";
}

// Exportamos la funcion para usarla en otros modulos
export { validarAsistencia };