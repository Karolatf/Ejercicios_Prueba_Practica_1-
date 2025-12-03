# Ejercicio 15: Sistema Inteligente de Recomendacion de Cursos

## Descripcion
Plataforma educativa que recomienda cursos segun comportamiento academico del aprendiz usando callbacks personalizados.

## Entradas
- **cursos**: Array de objetos con (nombre, calificacion, horas, intentos, finalizado)
- **callback**: Funcion que retorna prioridad numerica para cada curso

## Proceso
1. Validacion de cursos y callback
2. Aplicacion del callback a cada curso
3. Filtrado de cursos con prioridad mayor a 0
4. Agregacion de prioridad a cada curso
5. Ordenamiento por prioridad descendente
6. Generacion de razones de recomendacion

## Salidas
- **recomendaciones**: Array ordenado por prioridad
- **cantidad**: Numero de cursos recomendados
- **razon**: Explicacion de cada recomendacion

## Reglas de Negocio
- Prioridad 0: curso no recomendado
- Mayor prioridad: mas importante la recomendacion
- El callback define la logica de priorizacion

## Decisiones de Diseño

### 1. Por que usar map() para agregar razones?
- map() transforma cada elemento del array
- Crea un nuevo array sin modificar el original
- Es mas declarativo que un ciclo for
- Ideal para agregar propiedades calculadas

### 2. Por que separar el filtrado del ordenamiento?
- Primero filtramos (prioridad > 0) para trabajar con menos datos
- Luego ordenamos solo los cursos relevantes
- Es mas eficiente que ordenar todo y luego filtrar
- Codigo mas claro y mantenible

## Casos Limite Contemplados
- Array vacio: error
- Callback invalido: error
- Ningun curso con prioridad > 0: array vacio
- Todos los cursos recomendados: retorna todos ordenados
- Cursos sin propiedades esperadas: callback debe manejar

## Ejemplo de Uso
```javascript
const cursos = [
  { nombre: "JavaScript", calificacion: 2.5, horas: 20, finalizado: true },
  { nombre: "Python", calificacion: 4.5, horas: 8, finalizado: true },
  { nombre: "Java", calificacion: 3.8, horas: 15, finalizado: false }
];

// Callback: priorizar cursos con baja calificacion (refuerzo)
generarRecomendaciones(cursos, (curso) => {
  if (curso.calificacion < 3.0) return 5;
  if (curso.finalizado === false) return 3;
  return 0;
});

// Resultado ordenado:
// 1. JavaScript (prioridad 5) - Refuerzo necesario
// 2. Java (prioridad 3) - Curso pendiente
```