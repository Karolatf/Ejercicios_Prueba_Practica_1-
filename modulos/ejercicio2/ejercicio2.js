// Función que calcula el inventario final de un producto

// Considera: stock inicial, unidades vendidas y reposición
// Retorna: objeto con inventario final y estado crítico
function calcularInventario(inicial, vendidas, recibidas) {
  // Validamos que los valores sean positivos
  // Si algún valor es negativo, retornamos error
  if (inicial < 0 || vendidas < 0 || recibidas < 0) {
    return {
      error: true,
      mensaje: " Error: No se permiten valores negativos en el inventario"
    };
  }

  // Calculamos el inventario final
  // Fórmula: stock inicial - ventas + reposición
  const inventarioFinal = inicial - vendidas + recibidas;

  // Verificamos si el inventario quedó negativo (vendimos más de lo que teníamos)
  if (inventarioFinal < 0) {
    return {
      error: true,
      mensaje: " Error: Las ventas superan el inventario disponible"
    };
  }

  // Determinamos si el inventario es crítico (menos de 5 unidades)
  const esCritico = inventarioFinal < 5;
  const estado = esCritico ? " CRÍTICO" : " ESTABLE";

  // Retornamos un objeto con toda la información
  return {
    error: false,
    inventarioFinal,
    estado,
    mensaje: `Inventario final: ${inventarioFinal} unidades - Estado: ${estado}`
  };
}

export { calcularInventario };