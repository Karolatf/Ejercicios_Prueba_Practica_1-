// Funcion que genera un resumen de un mensaje usando destructuracion


// Recibe: objeto con datos completos del mensaje
// Retorna: resumen con informacion clave extraida
function generarResumen(mensaje) {
  // Validamos que el mensaje exista
  if (!mensaje) {
    return {
      error: true,
      mensaje: "Error: No se proporciono un mensaje"
    };
  }

  // Usamos destructuracion para extraer las propiedades que necesitamos
  // Si alguna propiedad no existe, le asignamos un valor por defecto
  const { 
    remitente = "Desconocido", 
    contenido = "", 
    fecha = "Sin fecha" 
  } = mensaje;

  // Validamos que el contenido no este vacio
  if (contenido.trim() === "") {
    return {
      error: true,
      mensaje: "Error: El mensaje no tiene contenido"
    };
  }

  // Creamos un contenido breve (primeros 50 caracteres)
  // Si el contenido es mas largo, agregamos "..."
  let contenidoBreve;
  if (contenido.length > 50) {
    contenidoBreve = contenido.substring(0, 50) + "...";
  } else {
    contenidoBreve = contenido;
  }

  // Construimos el resumen con los datos extraidos
  const resumen = "De: " + remitente + " | Fecha: " + fecha + " | " + contenidoBreve;

  // Retornamos el resumen completo
  return {
    error: false,
    remitente,
    contenidoBreve,
    fecha,
    resumen,
    mensaje: "Resumen generado exitosamente"
  };
}

export { generarResumen };