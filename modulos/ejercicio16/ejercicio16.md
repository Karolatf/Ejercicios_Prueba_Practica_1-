# Ejercicio 16: Sistema de Alerta Temprana para una Red Social

## Descripcion
Sistema que detecta usuarios potencialmente problematicos en una red social mediante analisis con callbacks.

## Entradas
- **usuarios**: Array de objetos (id, nombre, publicaciones, reportes, fechaRegistro, estado)
- **callback**: Funcion que analiza cada usuario y retorna (sospechoso, nivel, motivo)

## Proceso
1. Validacion de usuarios y callback
2. Iteracion sobre cada usuario
3. Aplicacion del callback para analisis
4. Clasificacion por nivel de riesgo
5. Agregacion de analisis a cada usuario
6. Generacion de informe con estadisticas

## Salidas
- **bajoRiesgo**: Usuarios nivel 1
- **medioRiesgo**: Usuarios nivel 2-3
- **altoRiesgo**: Usuarios nivel 4-5
- **totalSospechosos**: Cantidad de usuarios problematicos

## Reglas de Negocio
- Nivel 1: Bajo riesgo
- Nivel 2-3: Riesgo medio
- Nivel 4-5: Alto riesgo
- El callback define las reglas de deteccion

## Decisiones de Diseño

### 1. Por que clasificar en tres categorias?
- Permite priorizar la atencion segun urgencia
- Alto riesgo: accion inmediata
- Medio riesgo: monitoreo cercano
- Bajo riesgo: revision periodica
- Es un estandar en sistemas de seguridad

### 2. Por que usar spread operator en usuarioAnalizado?
- Mantiene toda la informacion original del usuario
- Agrega las nuevas propiedades del analisis
- No modifica el objeto original
- Sintaxis limpia y moderna

## Casos Limite Contemplados
- Array vacio: error
- Callback invalido: error
- Todos usuarios seguros: altoRiesgo y medioRiesgo vacios
- Todos usuarios sospechosos: bajoRiesgo vacio
- Usuarios sin reportes: callback debe manejar

## Ejemplo de Uso
```javascript
const usuarios = [
  { id: 1, nombre: "Juan", reportes: 2, fechaRegistro: "2024-12-01" },
  { id: 2, nombre: "Maria", reportes: 8, fechaRegistro: "2025-01-15" },
  { id: 3, nombre: "Pedro", reportes: 0, fechaRegistro: "2023-06-20" }
];

analizarUsuarios(usuarios, (usuario) => {
  let nivel = 1;
  let sospechoso = false;
  let motivo = "Sin actividad sospechosa";
  
  if (usuario.reportes > 5) {
    nivel = 4;
    sospechoso = true;
    motivo = "Multiples reportes";
  } else if (usuario.reportes >= 3) {
    nivel = 2;
    sospechoso = true;
    motivo = "Reportes moderados";
  }
  
  return { sospechoso, nivel, motivo };
});

// Resultado:
// Alto riesgo: Maria (8 reportes)
// Medio riesgo: ninguno
// Bajo riesgo: Juan, Pedro
```