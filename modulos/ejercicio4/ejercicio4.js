// Funcion que ordena precios de productos de mayor a menor

// Recibe: array de precios
// Retorna: objeto con precios ordenados y valores extremos
function ordenarPrecios(precios) {
  // Validamos que el array tenga elementos
  if (!precios || precios.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay precios para ordenar"
    };
  }

  // Validamos que no haya precios negativos
  const preciosInvalidos = precios.some(precio => precio < 0);
  if (preciosInvalidos) {
    return {
      error: true,
      mensaje: "Error: Los precios no pueden ser negativos"
    };
  }

  // Creamos una copia del array para no modificar el original
  // Usamos spread operator [...precios] para copiar
  // Luego ordenamos de mayor a menor con sort()
  // La funcion (a, b) => b - a hace que el mayor vaya primero
  const preciosOrdenados = [...precios].sort((a, b) => b - a);
  
  // El precio mas alto es el primer elemento del array ordenado
  const precioMasAlto = preciosOrdenados[0];
  
  // El precio mas bajo es el ultimo elemento del array ordenado
  const precioMasBajo = preciosOrdenados[preciosOrdenados.length - 1];

  // Retornamos todos los datos organizados en un objeto
  return {
    error: false,
    preciosOrdenados,
    precioMasAlto,
    precioMasBajo,
    mensaje: "Precios ordenados de mayor a menor"
  };
}

export { ordenarPrecios };