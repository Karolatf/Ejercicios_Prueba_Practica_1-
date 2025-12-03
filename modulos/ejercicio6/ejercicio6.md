# Ejercicio 6: Calculo Modular de Nomina

## Descripcion
Sistema modular para calcular la nomina de un trabajador dividiendo el proceso en funciones independientes.

## Entradas
- **valorHora**: Numero con el valor de cada hora trabajada
- **horasTrabajadas**: Numero de horas trabajadas en el periodo

## Proceso
El calculo se divide en tres modulos independientes:

### Modulo 1: calcularSalarioBase()
- Recibe: valorHora y horasTrabajadas
- Calcula: salarioBase = valorHora * horasTrabajadas
- Retorna: salarioBase

### Modulo 2: calcularDeducciones()
- Recibe: salarioBase
- Calcula: deducciones = salarioBase * 10%
- Retorna: deducciones

### Modulo 3: calcularNeto()
- Recibe: salarioBase y deducciones
- Calcula: salarioNeto = salarioBase - deducciones
- Retorna: salarioNeto

## Salidas
- **salarioBase**: Salario antes de deducciones
- **deducciones**: Total de descuentos (10%)
- **salarioNeto**: Salario final a pagar

## Reglas de Negocio
- Porcentaje de deduccion fijo: 10%
- Valores deben ser mayores a cero
- Las deducciones se calculan sobre el salario base

## Decisiones de Diseño

### 1. Por que dividir en tres funciones separadas?
- Cumple con el principio de responsabilidad unica
- Cada funcion tiene un proposito especifico y claro
- Facilita el mantenimiento: si cambia la formula de deducciones, solo modificamos una funcion
- Permite reutilizar funciones en otros contextos
- Hace el codigo mas facil de probar

### 2. Por que no usar un objeto para retornar todo junto?
- El ejercicio pide modularidad con funciones independientes
- Cada funcion debe conectarse mediante parametros
- Esto demuestra comprension de flujo de datos entre funciones
- Es mas flexible para cambios futuros

## Casos Limite Contemplados
- Valor de hora cero o negativo: error
- Horas trabajadas cero o negativas: error
- Valores decimales: funcionan correctamente

## Ejemplo de Uso
```javascript
const valorHora = 15000;
const horas = 160;

const base = calcularSalarioBase(valorHora, horas);
// base = 2400000

const deducciones = calcularDeducciones(base);
// deducciones = 240000

const neto = calcularNeto(base, deducciones);
// neto = 2160000
```