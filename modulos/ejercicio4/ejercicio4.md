# Ejercicio 4: Ordenamiento de Precios de Productos

## Descripcion
Sistema que ordena precios de productos de mayor a menor e identifica los valores extremos.

## Entradas
- **precios**: Array de numeros (precios de productos)

## Proceso
1. Validacion del array de precios
2. Validacion de valores negativos
3. Creacion de copia del array con spread operator
4. Ordenamiento descendente usando sort()
5. Identificacion del precio mas alto (primer elemento)
6. Identificacion del precio mas bajo (ultimo elemento)

## Salidas
- **preciosOrdenados**: Array ordenado de mayor a menor
- **precioMasAlto**: Valor maximo
- **precioMasBajo**: Valor minimo

## Reglas de Negocio
- Los precios deben ser numeros positivos
- El ordenamiento es descendente (mayor a menor)

## Decisiones de Diseno

### 1. Por que usar spread operator [...precios] antes de sort()?
- sort() modifica el array original
- Con spread creamos una copia para no alterar el array que nos pasan
- Esto es una buena practica de programacion (inmutabilidad)

### 2. Por que (a, b) => b - a en el sort()?
- sort() por defecto ordena alfabeticamente
- Para orden numerico descendente usamos la funcion de comparacion
- b - a: si es positivo, b va primero (orden descendente)
- a - b seria para orden ascendente

## Casos Limite Contemplados
- Array vacio: retorna error
- Un solo precio: funciona correctamente
- Precios negativos: retorna error
- Precios con decimales: funciona correctamente
- Precios repetidos: los mantiene en el array

## Ejemplo de Uso
```javascript
ordenarPrecios([100, 50, 200, 75]);
// Resultado: [200, 100, 75, 50]
// Mas alto: 200, Mas bajo: 50
```