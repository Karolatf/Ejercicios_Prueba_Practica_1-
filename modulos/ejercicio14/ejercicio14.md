# Ejercicio 14: Evaluación de Proyectos Colaborativos mediante Módulos y Callbacks

## Descripción
Sistema modular que analiza proyectos colaborativos, filtrando activos, contando participantes y evaluando mediante un callback personalizado si requieren refuerzo.

## Entradas
- **proyectos**: Array de objetos con propiedades (nombre, estado, participantes, avance)
- **callback**: Función que define las reglas de evaluación para determinar si un proyecto requiere refuerzo

## Proceso
1. Validación del array de proyectos y callback
2. Filtrado de proyectos activos usando `filtrarActivos()`
3. Para cada proyecto activo:
   - Contar participantes con `contarParticipantes()`
   - Aplicar callback de evaluación
   - Determinar si requiere refuerzo
4. Generación de informe individual por proyecto
5. Retorno de informe completo consolidado

## Salidas
- **totalProyectos**: Cantidad total de proyectos recibidos
- **proyectosActivos**: Cantidad de proyectos con estado "activo"
- **informes**: Array con análisis detallado de cada proyecto activo
  - nombre del proyecto
  - cantidad de participantes
  - si requiere refuerzo (true/false)
  - evaluación (REQUIERE REFUERZO / EN BUEN ESTADO)
  - detalles descriptivos

## Reglas de Negocio
- Solo se evalúan proyectos con estado "activo"
- El callback define libremente los criterios de refuerzo
- Proyectos inactivos se excluyen del análisis
- La evaluación se basa completamente en la lógica del callback

## Decisiones de Diseño

### 1. ¿Por qué separar en tres funciones independientes?
- **Modularidad**: Cada función tiene una responsabilidad única
- **Reutilización**: `filtrarActivos()` y `contarParticipantes()` pueden usarse en otros contextos
- **Mantenibilidad**: Es más fácil modificar o depurar funciones pequeñas
- **Testeo**: Se puede probar cada función por separado
- **Legibilidad**: El código principal queda más limpio y comprensible

### 2. ¿Por qué usar filter() en vez de un ciclo for?
- **filter()** es un método de orden superior más expresivo
- Comunica claramente la intención: "filtrar elementos"
- Retorna un nuevo array sin modificar el original
- Es más funcional y declarativo
- Reduce errores comunes de iteración manual
- Aunque un for también funcionaría, filter() es la mejor práctica para este caso

## Casos Límite Contemplados
- Array de proyectos vacío: retorna error
- Callback no proporcionado o no es función: retorna error
- Todos los proyectos inactivos: retorna 0 proyectos activos
- Proyectos sin array de participantes: contarParticipantes() retorna 0
- Un solo proyecto activo: funciona correctamente
- Proyectos con arrays de participantes vacíos: cuenta correctamente (0)

## Ejemplo de Uso
```javascript
const proyectos = [
  { nombre: "App Móvil", estado: "activo", participantes: ["Juan", "María"], avance: 75 },
  { nombre: "Sitio Web", estado: "activo", participantes: ["Pedro"], avance: 30 },
  { nombre: "Sistema Viejo", estado: "inactivo", participantes: ["Ana", "Luis"] }
];

// Callback que evalúa si requiere refuerzo:
// - Si tiene menos de 2 participantes
// - O si el avance es menor al 50%
evaluarProyectos(proyectos, (proyecto) => {
  return proyecto.avance < 50 || proyecto.participantes.length < 2;
});

// Resultado:
// App Móvil: EN BUEN ESTADO (2 participantes, 75% avance)
// Sitio Web: REQUIERE REFUERZO (1 participante, 30% avance)
// Sistema Viejo: No evaluado (inactivo)
```

## Integración de Funciones
La función principal `evaluarProyectos()` integra las tres funciones:
1. Usa `filtrarActivos()` para obtener solo proyectos activos
2. Usa `contarParticipantes()` para cada proyecto
3. Aplica el callback personalizado del usuario
4. Consolida todo en un informe estructurado

Esta arquitectura modular permite:
- Cambiar la lógica de filtrado sin afectar el conteo
- Modificar cómo se cuentan participantes sin afectar la evaluación
- Usar diferentes callbacks sin cambiar el código base