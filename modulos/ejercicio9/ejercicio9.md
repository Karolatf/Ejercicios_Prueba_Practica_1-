# Ejercicio 9: Procesamiento de Pagos mediante Callbacks

## Descripcion
Sistema automatizado que valida y clasifica pagos segun reglas definidas por un callback.

## Entradas
- **pagos**: Array de objetos (pagos a procesar)
- **callback**: Funcion que define las reglas de aprobacion

## Proceso
1. Validacion del array de pagos
2. Validacion del callback
3. Iteracion sobre cada pago
4. Aplicacion del callback a cada pago
5. Clasificacion en aprobados o rechazados
6. Agregacion de estado a cada pago

## Salidas
- **aprobados**: Array con pagos aprobados
- **rechazados**: Array con pagos rechazados
- **totalAprobados**: Cantidad de pagos aprobados
- **totalRechazados**: Cantidad de pagos rechazados

## Reglas de Negocio
- El callback retorna true para aprobar, false para rechazar
- Cada pago recibe un estado: APROBADO o RECHAZADO
- Se mantiene toda la informacion original del pago

## Decisiones de Diseño

### 1. Por que usar spread operator en pagoConEstado?
- Crea una copia del pago original
- Agrega la propiedad estado sin modificar el objeto original
- Mantiene inmutabilidad de datos
- Sintaxis: { ...pago, estado: "APROBADO" }

### 2. Por que usar un ciclo for en lugar de filter()?
- Necesitamos separar en dos arrays simultaneamente
- filter() solo sirve para obtener un subconjunto
- Con for tenemos control total para clasificar en ambos arrays
- Es mas eficiente: una sola iteracion en lugar de dos

## Casos Limite Contemplados
- Array de pagos vacio: error
- Callback invalido: error
- Todos los pagos aprobados: array rechazados vacio
- Todos los pagos rechazados: array aprobados vacio
- Pagos sin campos esperados: depende del callback

## Ejemplo de Uso
```javascript
const pagos = [
  { id: 1, monto: 100, fecha: "2025-01-15" },
  { id: 2, monto: 5000, fecha: "2025-01-16" },
  { id: 3, monto: 200, fecha: "2025-01-17" }
];

// Aprobar solo pagos menores a 1000
procesarPagos(pagos, (pago) => pago.monto < 1000);
// Aprobados: id 1 y 3
// Rechazados: id 2
```