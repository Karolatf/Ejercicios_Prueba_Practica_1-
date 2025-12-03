// Funcion 1: Calcula el salario base

// Recibe: valor por hora y cantidad de horas trabajadas
// Retorna: salario base calculado
function calcularSalarioBase(valorHora, horasTrabajadas) {
  // Validamos que los valores sean positivos
  // No tiene sentido un salario con valores cero o negativos
  if (valorHora <= 0 || horasTrabajadas <= 0) {
    return {
      error: true,
      mensaje: "Error: Los valores deben ser mayores a cero"
    };
  }

  // Calculamos el salario base multiplicando valor hora por horas trabajadas
  const salarioBase = valorHora * horasTrabajadas;
  return salarioBase;
}

// Funcion 2: Calcula las deducciones sobre el salario base
// Recibe: salario base
// Retorna: monto total de deducciones (10% del salario base)
function calcularDeducciones(salarioBase) {
  // El porcentaje de deduccion es fijo: 10%
  const porcentajeDeduccion = 0.10;
  
  // Calculamos las deducciones multiplicando el salario por el porcentaje
  const deducciones = salarioBase * porcentajeDeduccion;
  return deducciones;
}

// Funcion 3: Calcula el salario neto final
// Recibe: salario base y deducciones
// Retorna: salario neto (lo que realmente recibe el trabajador)
function calcularNeto(salarioBase, deducciones) {
  // El salario neto es el salario base menos las deducciones
  const salarioNeto = salarioBase - deducciones;
  return salarioNeto;
}

// Exportamos las tres funciones para que puedan ser usadas desde app.js
export { calcularSalarioBase, calcularDeducciones, calcularNeto };