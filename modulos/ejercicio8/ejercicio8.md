# Ejercicio 8: Busqueda Avanzada en un Catalogo usando Callbacks

## Descripcion
Sistema flexible de busqueda que permite filtrar cursos segun diferentes criterios definidos mediante callbacks.

## Entradas
- **catalogo**: Array de objetos (cursos)
- **callback**: Funcion que define el criterio de busqueda

## Proceso
1. Validacion del catalogo
2. Validacion del callback
3. Aplicacion de filter() con el callback
4. Retorno de cursos que cumplen el criterio

## Salidas
- **cursos**: Array con cursos encontrados
- **cantidad**: Numero de cursos encontrados
- **mensaje**: Resumen de la busqueda

## Reglas de Negocio
- El callback debe retornar true o false para cada curso
- filter() mantiene solo los cursos donde callback retorna true

## Decisiones de Diseno

### 1. Que es un callback y por que usarlo?
- Un callback es una funcion que se pasa como parametro a otra funcion
- Permite que el criterio de busqueda sea flexible y definido externamente
- Hace la funcion reutilizable para diferentes tipos de busqueda
- Ejemplo: buscar por categoria, duracion, nombre, etc.

### 2. Por que usar filter() en lugar de un ciclo for?
- filter() es un metodo de orden superior especifico para filtrar arrays
- Es mas legible y expresivo
- Automaticamente crea y retorna un nuevo array
- Es la herramienta adecuada cuando trabajamos con callbacks

## Casos Limite Contemplados
- Catalogo vacio: error
- Callback no es una funcion: error
- Ningun curso cumple el criterio: retorna array vacio
- Todos los cursos cumplen: retorna todos

## Ejemplo de Uso
```javascript
const cursos = [
  { nombre: "JavaScript", categoria: "programacion", duracion: 40 },
  { nombre: "Cocina", categoria: "gastronomia", duracion: 20 },
  { nombre: "Python", categoria: "programacion", duracion: 50 }
];

// Buscar cursos de programacion
buscarCursos(cursos, (curso) => curso.categoria === "programacion");
// Retorna: JavaScript y Python

// Buscar cursos de mas de 30 horas
buscarCursos(cursos, (curso) => curso.duracion > 30);
// Retorna: JavaScript y Python
```