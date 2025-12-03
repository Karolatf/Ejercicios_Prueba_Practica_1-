// Funcion principal: Procesa y analiza inventario completo

// Recibe: array de productos y callback con reglas de control
// Retorna: informe completo con multiples analisis
function procesarInventario(inventario, callback) {
  // Validamos que el array tenga productos
  if (!inventario || inventario.length === 0) {
    return {
      error: true,
      mensaje: "Error: No hay productos en el inventario"
    };
  }

  // Validamos que se proporciono un callback
  if (typeof callback !== 'function') {
    return {
      error: true,
      mensaje: "Error: Se requiere un callback de control"
    };
  }

  // Objetos para clasificar productos segun accion del callback
  const productosClasificados = {
    ajustarPrecio: [],
    retirar: [],
    vigilar: [],
    estable: []
  };

  // Variables para encontrar productos con mayor y menor stock
  let productoMayorStock = inventario[0];
  let productoMenorStock = inventario[0];

  // Array para productos perecederos proximos a vencer
  const proximosAVencer = [];

  // Objeto para contar productos por categoria
  const resumenCategorias = {};

  // Variable para calcular valor total del inventario
  let valorTotal = 0;

  // Procesamos cada producto del inventario
  for (let i = 0; i < inventario.length; i++) {
    const producto = inventario[i];

    // Aplicamos el callback para obtener la accion recomendada
    const accion = callback(producto);

    // Clasificamos el producto segun la accion
    if (productosClasificados[accion]) {
      productosClasificados[accion].push(producto);
    }

    // Buscamos producto con mayor stock
    if (producto.stock > productoMayorStock.stock) {
      productoMayorStock = producto;
    }

    // Buscamos producto con menor stock
    if (producto.stock < productoMenorStock.stock) {
      productoMenorStock = producto;
    }

    // Verificamos si es perecedero y esta proximo a vencer
    if (producto.perecedero && producto.fechaVencimiento) {
      const hoy = new Date();
      const fechaVenc = new Date(producto.fechaVencimiento);
      const diasParaVencer = Math.ceil((fechaVenc - hoy) / (1000 * 60 * 60 * 24));

      // Si vence en 7 dias o menos, lo marcamos
      if (diasParaVencer <= 7 && diasParaVencer >= 0) {
        proximosAVencer.push({
          ...producto,
          diasRestantes: diasParaVencer
        });
      }
    }

    // Contamos productos por categoria
    if (!resumenCategorias[producto.categoria]) {
      resumenCategorias[producto.categoria] = 0;
    }
    resumenCategorias[producto.categoria]++;

    // Calculamos valor total del inventario
    valorTotal += producto.precio * producto.stock;
  }

  // Generamos el informe completo
  return {
    error: false,
    totalProductos: inventario.length,
    productosClasificados: {
      ajustarPrecio: {
        cantidad: productosClasificados.ajustarPrecio.length,
        productos: productosClasificados.ajustarPrecio
      },
      retirar: {
        cantidad: productosClasificados.retirar.length,
        productos: productosClasificados.retirar
      },
      vigilar: {
        cantidad: productosClasificados.vigilar.length,
        productos: productosClasificados.vigilar
      },
      estable: {
        cantidad: productosClasificados.estable.length,
        productos: productosClasificados.estable
      }
    },
    alertasVencimiento: {
      cantidad: proximosAVencer.length,
      productos: proximosAVencer
    },
    stockExtremos: {
      mayorStock: productoMayorStock,
      menorStock: productoMenorStock
    },
    resumenCategorias: resumenCategorias,
    valorTotal: valorTotal.toFixed(2),
    mensaje: "Inventario procesado: " + inventario.length + " productos analizados"
  };
}

export { procesarInventario };