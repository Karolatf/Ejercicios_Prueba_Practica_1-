// Funcion que analiza gastos mensuales y genera reporte financiero

// Recibe: array de gastos con categoria y monto
// Retorna: analisis completo con alertas de desbalance
function analizarGastos(gastos) {
  // Validamos que el array tenga gastos
  if (!gastos || gastos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay gastos para analizar"
    };
  }

  // Objeto para acumular los montos por categoria
  const gastosPorCategoria = {};
  let totalGastado = 0;

  // Recorremos todos los gastos para calcular totales por categoria
  for (let i = 0; i < gastos.length; i++) {
    const gasto = gastos[i];
    
    // Validamos que el gasto tenga categoria y monto
    if (!gasto.categoria || !gasto.monto) {
      return {
        error: true,
        mensaje: "Error: Todos los gastos deben tener categoria y monto"
      };
    }

    // Si la categoria no existe, la inicializamos en 0
    if (!gastosPorCategoria[gasto.categoria]) {
      gastosPorCategoria[gasto.categoria] = 0;
    }

    // Acumulamos el monto en la categoria correspondiente
    gastosPorCategoria[gasto.categoria] += gasto.monto;
    
    // Acumulamos el total general
    totalGastado += gasto.monto;
  }

  // Buscamos la categoria con mayor gasto
  let categoriaMasCostosa = "";
  let montoMasCostoso = 0;

  // Recorremos el objeto de categorias para encontrar la mayor
  for (const categoria in gastosPorCategoria) {
    if (gastosPorCategoria[categoria] > montoMasCostoso) {
      categoriaMasCostosa = categoria;
      montoMasCostoso = gastosPorCategoria[categoria];
    }
  }

  // Identificamos categorias que superan el 40% del total
  const alertas = [];
  
  for (const categoria in gastosPorCategoria) {
    const porcentaje = (gastosPorCategoria[categoria] / totalGastado) * 100;
    
    // Si una categoria supera el 40%, generamos una alerta
    if (porcentaje > 40) {
      alertas.push({
        categoria: categoria,
        monto: gastosPorCategoria[categoria],
        porcentaje: porcentaje.toFixed(2) + "%",
        alerta: "DESBALANCE FINANCIERO: Esta categoria supera el 40% del gasto total"
      });
    }
  }

  // Retornamos el reporte completo
  return {
    error: false,
    totalGastado,
    categoriaMasCostosa,
    montoCategoriaMaxima: montoMasCostoso,
    gastosPorCategoria,
    alertas,
    mensaje: alertas.length > 0 ? "ATENCION: Se detectaron " + alertas.length + " alertas de desbalance" : "Gastos balanceados correctamente"
  };
}

export { analizarGastos };