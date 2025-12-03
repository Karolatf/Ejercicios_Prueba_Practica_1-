// Funcion que registra productos sin duplicados
// Usa parametros rest (...productos) para recibir cantidad indefinida de argumentos
// Retorna: objeto con lista de productos unicos
function registrarProductos(...productos) {
  // Validamos que se hayan recibido productos
  // Los parametros rest convierten todos los argumentos en un array
  if (productos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No se recibieron productos para registrar"
    };
  }

  // Creamos un array vacio para almacenar solo productos unicos
  const productosUnicos = [];

  // Recorremos cada producto recibido
  for (let i = 0; i < productos.length; i++) {
    // Limpiamos espacios en blanco al inicio y final con trim()
    const producto = productos[i].trim();
    
    // Si el producto esta vacio, lo ignoramos y continuamos con el siguiente
    if (producto === "") {
      continue;
    }

    // Verificamos si el producto ya existe en nuestro array de unicos
    // Solo lo agregamos si no esta repetido
    if (!productosUnicos.includes(producto)) {
      productosUnicos.push(producto);
    }
  }

  // Validamos que al final tengamos al menos un producto valido
  if (productosUnicos.length === 0) {
    return {
      error: true,
      mensaje: "Error: No se registraron productos validos"
    };
  }

  // Retornamos el array de productos unicos con informacion adicional
  return {
    error: false,
    productos: productosUnicos,
    cantidad: productosUnicos.length,
    mensaje: "Se registraron " + productosUnicos.length + " productos unicos"
  };
}

export { registrarProductos };