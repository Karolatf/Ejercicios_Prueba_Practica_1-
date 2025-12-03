# Ejercicio 3: Análisis de Calificaciones de un Aprendiz

## Descripción
Sistema que calcula el promedio de notas de un estudiante y clasifica su rendimiento académico.

## Entradas
- **notas**: Array de números (calificaciones entre 0 y 5)

## Proceso
1. Validación del array de notas
2. Validación de rango de cada nota (0-5)
3. Suma de todas las notas usando ciclo for
4. Cálculo del promedio
5. Clasificación del rendimiento según rangos

## Salidas
- **promedio**: Promedio calculado (2 decimales)
- **rendimiento**: Categoría (ALTO, MEDIO, BAJO)
- **mensaje**: Reporte completo del desempeño

## Reglas de Negocio

### Rangos de Rendimiento:
- **ALTO**: 4.0 - 5.0
- **MEDIO**: 3.0 - 3.9
- **BAJO**: 0.0 - 2.9

## Decisiones de Diseño

### 1. ¿Por qué usar un ciclo for tradicional en lugar de reduce()?
- El ejercicio pide explícitamente "usar un ciclo para recorrer"
- Demuestra comprensión de estructuras cíclicas básicas
- Es más fácil de entender para principiantes
- reduce() sería más elegante pero no cumple el requerimiento

### 2. ¿Por qué if-else en lugar de switch?
- Los rangos son continuos, no valores discretos
- if-else es más natural para comparaciones numéricas
- Mayor legibilidad en este contexto

## Casos Límite Contemplados
- Array vacío → Error
- Notas fuera del rango 0-5 → Error
- Una sola nota → Calcula promedio correctamente
- Promedio exactamente en 3.0 → MEDIO
- Promedio exactamente en 4.0 → ALTO

## Ejemplo de Uso
\`\`\`javascript
calcularPromedio([4.5, 3.8, 4.2, 5.0]);  // 4.38 - ALTO
calcularPromedio([3.2, 3.5, 2.9]);       // 3.20 - MEDIO
calcularPromedio([2.0, 1.5, 2.8]);       // 2.10 - BAJO
\`\`\`