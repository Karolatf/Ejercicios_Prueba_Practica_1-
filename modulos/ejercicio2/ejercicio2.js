// Funcion que calcula el inventario final de un producto

// Considera: stock inicial, unidades vendidas y reposicion
// Retorna: objeto con inventario final y estado critico
function calcularInventario(inicial, vendidas, recibidas) {
  // Validamos que los valores sean positivos
  // Si algun valor es negativo, retornamos error
  if (inicial < 0 || vendidas < 0 || recibidas < 0) {
    return {
      error: true,
      mensaje: "Error: No se permiten valores negativos en el inventario"
    };
  }

  // Calculamos el inventario final
  // Formula: stock inicial - ventas + reposicion
  const inventarioFinal = inicial - vendidas + recibidas;

  // Verificamos si el inventario quedo negativo (vendimos mas de lo que teniamos)
  if (inventarioFinal < 0) {
    return {
      error: true,
      mensaje: "Error: Las ventas superan el inventario disponible"
    };
  }

  // Determinamos si el inventario es critico (menos de 5 unidades)
  const esCritico = inventarioFinal < 5;
  const estado = esCritico ? "CRITICO" : "ESTABLE";

  // Retornamos un objeto con toda la informacion
  return {
    error: false,
    inventarioFinal,
    estado,
    mensaje: "Inventario final: " + inventarioFinal + " unidades - Estado: " + estado
  };
}

export { calcularInventario };