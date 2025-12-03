# Ejercicio 13: Control de Gastos y Analisis Financiero

## Descripcion
Sistema de analisis financiero personal que identifica patrones de gasto y genera alertas de desbalance.

## Entradas
- **gastos**: Array de objetos con propiedades (categoria, monto)

## Proceso
1. Validacion del array de gastos
2. Creacion de objeto para acumular por categoria
3. Iteracion y suma de montos por categoria
4. Calculo del total gastado
5. Identificacion de categoria mas costosa
6. Calculo de porcentajes por categoria
7. Generacion de alertas para categorias sobre 40%

## Salidas
- **totalGastado**: Suma de todos los gastos
- **categoriaMasCostosa**: Categoria con mayor gasto
- **gastosPorCategoria**: Objeto con totales por categoria
- **alertas**: Array con categorias que superan 40%

## Reglas de Negocio
- Alerta de desbalance: categoria supera 40% del total
- Se permite cualquier nombre de categoria
- Los montos deben ser positivos

## Decisiones de Diseño

### 1. Por que usar un objeto para gastosPorCategoria?
- Permite agrupar dinamicamente por categoria
- Acceso rapido por nombre de categoria
- No necesitamos saber las categorias de antemano
- Estructura: { "Alimentacion": 500, "Transporte": 200 }

### 2. Por que usar for...in para recorrer el objeto?
- Es la forma correcta de iterar sobre propiedades de un objeto
- for...in recorre las claves (nombres de categorias)
- Permite acceder a cada categoria y su valor
- Alternativa moderna: Object.keys() o Object.entries()

## Casos Limite Contemplados
- Array vacio: error
- Gastos sin categoria o monto: error
- Una sola categoria: funciona correctamente
- Categoria exactamente en 40%: no genera alerta
- Categoria en 40.01%: si genera alerta

## Ejemplo de Uso
```javascript
const gastos = [
  { categoria: "Alimentacion", monto: 500 },
  { categoria: "Transporte", monto: 200 },
  { categoria: "Alimentacion", monto: 300 },
  { categoria: "Entretenimiento", monto: 100 }
];

analizarGastos(gastos);
// Total: 1100
// Mas costosa: Alimentacion (800)
// Alerta: Alimentacion supera el 40% (72.73%)
```