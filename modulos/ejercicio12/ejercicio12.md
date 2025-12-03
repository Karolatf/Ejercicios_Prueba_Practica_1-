# Ejercicio 12: Gestion de Pacientes por Prioridad

## Descripcion
Sistema medico que identifica al paciente con mayor prioridad de atencion, resolviendo empates por edad.

## Entradas
- **pacientes**: Array de objetos con propiedades (nombre, prioridad, edad)

## Proceso
1. Validacion del array de pacientes
2. Validacion de datos completos en cada paciente
3. Inicializacion con el primer paciente
4. Iteracion comparando prioridades
5. Resolucion de empates por edad
6. Seleccion del paciente final

## Salidas
- **paciente**: Paciente seleccionado para atencion
- **mensaje**: Informacion del paciente seleccionado

## Reglas de Negocio
- Mayor numero de prioridad = mayor urgencia
- En empate de prioridad: mayor edad tiene preferencia
- Todos los pacientes deben tener prioridad y edad

## Decisiones de Diseño

### 1. Por que usar un ciclo for en lugar de sort()?
- sort() ordenaria todo el array, pero solo necesitamos el maximo
- Un ciclo for es mas eficiente: O(n) vs O(n log n)
- No necesitamos modificar el array original
- Mantiene el control explicito de la logica de comparacion

### 2. Por que inicializar con el primer paciente?
- Necesitamos un punto de referencia para comparar
- Evita usar valores nulos o indefinidos
- Garantiza que siempre retornemos un paciente valido
- Es un patron comun en algoritmos de busqueda de maximo/minimo

## Casos Limite Contemplados
- Array vacio: error
- Pacientes sin prioridad o edad: error
- Un solo paciente: retorna ese paciente
- Todos con misma prioridad: selecciona al de mayor edad
- Empate en prioridad y edad: selecciona el primero encontrado

## Ejemplo de Uso
```javascript
const pacientes = [
  { nombre: "Juan", prioridad: 3, edad: 45 },
  { nombre: "Maria", prioridad: 5, edad: 30 },
  { nombre: "Pedro", prioridad: 5, edad: 50 }
];

gestionarPacientes(pacientes);
// Seleccionado: Pedro (prioridad 5, edad 50)
// Maria tambien tiene prioridad 5, pero Pedro es mayor
```