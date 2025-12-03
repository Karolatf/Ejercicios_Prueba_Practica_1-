# Ejercicio 2: Actualización de Inventario en Tienda Digital

## Descripción
Sistema para calcular el inventario final de un producto considerando ventas y reposiciones, con alertas de inventario crítico.

## Entradas
- **inicial**: Cantidad inicial en stock (número entero positivo)
- **vendidas**: Unidades vendidas (número entero positivo)
- **recibidas**: Unidades recibidas en reposición (número entero positivo)

## Proceso
1. Validación de valores negativos
2. Cálculo: `inventarioFinal = inicial - vendidas + recibidas`
3. Verificación de estado crítico (< 5 unidades)
4. Generación de reporte con estado

## Salidas
- **inventarioFinal**: Cantidad final en stock
- **estado**: "CRÍTICO" o "ESTABLE"
- **mensaje**: Reporte completo del estado del inventario

## Reglas de Negocio
- Inventario crítico: menos de 5 unidades
- No se permiten valores negativos en las entradas
- Si las ventas superan el stock, se reporta error

## Decisiones de Diseño

### 1. ¿Por qué retornar un objeto en lugar de solo el número?
- Permite incluir múltiples datos: valor, estado, mensaje
- Facilita el manejo de errores
- Mejor experiencia para quien usa la función

### 2. ¿Por qué validar valores negativos?
- En el mundo real no existe inventario negativo
- Previene errores de cálculo
- Asegura integridad de los datos

## Casos Límite Contemplados
- Valores negativos en cualquier entrada → Error
- Ventas mayores al stock disponible → Error
- Inventario exactamente en 5 unidades → Estable
- Inventario en 4 unidades → Crítico
- Inventario en 0 → Crítico

## Ejemplo de Uso
\`\`\`javascript
calcularInventario(10, 3, 5);  // 12 unidades - ESTABLE
calcularInventario(8, 5, 0);   // 3 unidades - CRÍTICO
calcularInventario(5, 10, 2);  // Error: ventas superan stock
\`\`\`