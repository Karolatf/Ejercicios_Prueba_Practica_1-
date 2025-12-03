# Ejercicio 10: Fusion de Usuarios con Operador Spread

## Descripcion
Sistema que combina dos listas de usuarios de diferentes sistemas, eliminando duplicados y conservando la version con mas informacion.

## Entradas
- **usuariosA**: Array de usuarios del sistema A
- **usuariosB**: Array de usuarios del sistema B

## Proceso
1. Validacion de ambas listas
2. Fusion de arrays con operador spread
3. Iteracion sobre usuarios combinados
4. Deteccion de duplicados por documento
5. Comparacion de cantidad de informacion
6. Conservacion del usuario mas completo

## Salidas
- **usuarios**: Lista unificada sin duplicados
- **cantidad**: Total de usuarios unicos
- **mensaje**: Resumen de la fusion

## Reglas de Negocio
- La identificacion unica es por documento
- Si hay duplicados, se conserva el que tiene mas propiedades
- Usuarios sin documento se ignoran

## Decisiones de Diseño

### 1. Que hace el operador spread (...)?
- Expande los elementos de un array
- [...arrayA, ...arrayB] combina ambos arrays en uno nuevo
- No modifica los arrays originales
- Es equivalente a arrayA.concat(arrayB) pero mas moderno

### 2. Por que usar un objeto documentosVistos?
- Permite busqueda rapida por documento (O(1))
- Evita tener que buscar en el array cada vez (O(n))
- Es mas eficiente que usar find() repetidamente
- Almacena la referencia al usuario completo

## Casos Limite Contemplados
- Una lista vacia: funciona correctamente
- Ambas listas vacias: retorna array vacio
- Usuarios sin documento: se ignoran
- Usuarios con igual informacion: se conserva el primero
- Usuarios con diferente cantidad de propiedades: se conserva el mas completo

## Ejemplo de Uso
```javascript
const sistemaA = [
  { documento: "123", nombre: "Juan" },
  { documento: "456", nombre: "Maria", edad: 25 }
];

const sistemaB = [
  { documento: "123", nombre: "Juan", edad: 30, ciudad: "Bogota" },
  { documento: "789", nombre: "Pedro" }
];

fusionarUsuarios(sistemaA, sistemaB);
// Usuario 123: se conserva el de sistemaB (tiene mas datos)
// Usuario 456: se conserva de sistemaA (unico)
// Usuario 789: se conserva de sistemaB (unico)
```