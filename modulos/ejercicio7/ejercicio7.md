# Ejercicio 7: Registro Dinamico de Productos usando Parametros Rest

## Descripcion
Sistema que permite registrar una cantidad indefinida de productos evitando duplicados mediante parametros rest.

## Entradas
- **...productos**: Numero indefinido de strings (nombres de productos)

## Proceso
1. Recepcion de multiples productos mediante parametros rest
2. Validacion de que se recibieron productos
3. Iteracion sobre cada producto recibido
4. Limpieza de espacios con trim()
5. Validacion de productos no vacios
6. Verificacion de duplicados con includes()
7. Almacenamiento solo de productos unicos
8. Generacion de reporte final

## Salidas
- **productos**: Array con productos unicos registrados
- **cantidad**: Numero total de productos unicos
- **mensaje**: Resumen del registro

## Reglas de Negocio
- No se permiten productos duplicados
- Los productos vacios o solo con espacios se ignoran
- El orden de registro se mantiene segun el primer ingreso

## Decisiones de Diseño

### 1. Que son los parametros rest (...)?
- Permite recibir una cantidad indefinida de argumentos
- Los agrupa automaticamente en un array
- Es mas flexible que definir parametros fijos
- Ejemplo: registrarProductos("Laptop", "Mouse", "Teclado", "Mouse")
- productos sera: ["Laptop", "Mouse", "Teclado", "Mouse"]

### 2. Por que usar includes() para detectar duplicados?
- Es mas simple y legible que otros metodos
- Alternativas: Set, filter, find
- includes() es suficiente para este caso
- Set seria mas eficiente pero menos didactico

## Casos Limite Contemplados
- Sin productos: error
- Todos los productos vacios: error
- Productos con espacios extras: se limpian con trim()
- Productos duplicados: se registra solo el primero
- Mezcla de productos validos y vacios: se filtran los validos

## Ejemplo de Uso
```javascript
registrarProductos("Laptop", "Mouse", "Teclado", "Mouse", "Laptop");
// productos: ["Laptop", "Mouse", "Teclado"]
// cantidad: 3

registrarProductos("", "  ", "Producto1");
// productos: ["Producto1"]
// cantidad: 1
```