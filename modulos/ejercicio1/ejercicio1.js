// Función para validar si un aprendiz está inscrito en el curso

// Recibe: lista de estudiantes (array) y nombre a buscar (string)
// Retorna: mensaje indicando si está o no inscrito
function validarAsistencia(lista, nombre) {
  // Usamos includes() porque es más eficiente para búsquedas simples
  // Comparamos directamente si el nombre existe en el array
  const estaInscrito = lista.includes(nombre);
  
  // Retornamos un mensaje claro dependiendo del resultado
  return estaInscrito 
    ? ` El aprendiz "${nombre}" SÍ está inscrito en el curso.` 
    : ` El aprendiz "${nombre}" NO está inscrito en el curso.`;
}

// Exportamos la función para usarla en otros módulos
export { validarAsistencia };