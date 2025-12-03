// Funcion que valida el acceso de un usuario segun su estado y rol

// Recibe: nombre, estado (activo/inactivo) y rol (admin/editor/lector)
// Retorna: objeto con permisos y nivel de acceso
function validarUsuario(nombre, estado, rol) {
  // Validamos que el nombre no este vacio
  // trim() elimina espacios al inicio y al final
  if (!nombre || nombre.trim() === "") {
    return {
      error: true,
      mensaje: "Error: El nombre de usuario es obligatorio"
    };
  }

  // Validamos que el estado sea valido
  // Solo aceptamos "activo" o "inactivo"
  if (estado !== "activo" && estado !== "inactivo") {
    return {
      error: true,
      mensaje: "Error: El estado debe ser 'activo' o 'inactivo'"
    };
  }

  // Definimos los roles validos en un array
  // Usamos includes() para verificar si el rol existe
  const rolesValidos = ["admin", "editor", "lector"];
  if (!rolesValidos.includes(rol)) {
    return {
      error: true,
      mensaje: "Error: Rol invalido. Debe ser admin, editor o lector"
    };
  }

  // Si el usuario esta inactivo, denegamos acceso sin importar su rol
  // Esta es una regla de seguridad: primero verificamos estado
  if (estado === "inactivo") {
    return {
      error: false,
      acceso: "DENEGADO",
      permisos: "Ninguno",
      mensaje: "Acceso denegado: Usuario inactivo"
    };
  }

  // Declaramos variables para los permisos y nivel de acceso
  let permisos;
  let nivelAcceso;

  // Asignamos permisos segun el rol del usuario
  // Cada rol tiene diferentes privilegios en el sistema
  if (rol === "admin") {
    permisos = "Lectura, Escritura, Edicion, Eliminacion, Administracion";
    nivelAcceso = "COMPLETO";
  } else if (rol === "editor") {
    permisos = "Lectura, Escritura, Edicion";
    nivelAcceso = "MEDIO";
  } else if (rol === "lector") {
    permisos = "Solo Lectura";
    nivelAcceso = "BASICO";
  }

  // Retornamos el resultado con todos los datos del usuario
  return {
    error: false,
    acceso: "PERMITIDO",
    rol,
    permisos,
    nivelAcceso,
    mensaje: "Acceso permitido - Nivel: " + nivelAcceso
  };
}

export { validarUsuario };