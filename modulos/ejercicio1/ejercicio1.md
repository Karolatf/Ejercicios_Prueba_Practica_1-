# Ejercicio 1: Validación de Asistencia en un Curso

## Descripción
Este ejercicio valida si un estudiante está registrado en la lista de asistencia del curso.

## Entradas
- **lista**: Array con los nombres de los aprendices inscritos
- **nombre**: String con el nombre del aprendiz a validar

## Proceso
1. Se recibe la lista de estudiantes y el nombre a buscar
2. Se utiliza el método `includes()` para verificar si el nombre existe en el array
3. Se genera un mensaje informativo según el resultado

## Salidas
- Mensaje confirmando si el aprendiz está o no inscrito

## Decisiones de Diseño

### 1. ¿Por qué `includes()` en lugar de `find()` o `filter()`?
- **includes()**: Retorna boolean (true/false), es más simple y directo para este caso
- **find()**: Retorna el elemento encontrado o undefined, innecesario aquí
- **filter()**: Retorna un array con coincidencias, sobrecarga para una búsqueda simple
- **Conclusión**: includes() es más eficiente y legible para verificación de existencia

### 2. ¿Por qué operador ternario en lugar de if-else?
- Código más conciso y legible
- Retorno directo sin variables intermedias
- Es una práctica común en JavaScript moderno

## Casos Límite Contemplados
- Lista vacía: retorna que no está inscrito
- Nombre con mayúsculas/minúsculas diferentes: NO coincide (sensible a mayúsculas)
- Nombres con espacios extras: NO coincide (debe ser exacto)

## Ejemplo de Uso
\`\`\`javascript
const estudiantes = ["Juan", "María", "Pedro"];
validarAsistencia(estudiantes, "María"); // ✓ María SÍ está inscrito
validarAsistencia(estudiantes, "Carlos"); // ✗ Carlos NO está inscrito
\`\`\`