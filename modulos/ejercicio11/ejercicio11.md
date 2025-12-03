# Ejercicio 11: Resumen de Mensajes usando Destructuracion

## Descripcion
Sistema que genera resumenes rapidos de mensajes extrayendo informacion clave mediante destructuracion.

## Entradas
- **mensaje**: Objeto con propiedades (remitente, contenido, fecha, etc.)

## Proceso
1. Validacion del objeto mensaje
2. Destructuracion para extraer remitente, contenido y fecha
3. Asignacion de valores por defecto si faltan propiedades
4. Validacion de contenido no vacio
5. Creacion de contenido breve (max 50 caracteres)
6. Construccion del resumen final

## Salidas
- **remitente**: Quien envio el mensaje
- **contenidoBreve**: Primeros 50 caracteres del contenido
- **fecha**: Fecha del mensaje
- **resumen**: Texto formateado con toda la informacion

## Reglas de Negocio
- Contenido breve: maximo 50 caracteres
- Si es mas largo se agrega "..."
- Valores por defecto para propiedades faltantes

## Decisiones de Diseño

### 1. Que es destructuracion?
- Sintaxis para extraer valores de objetos o arrays
- const { propiedad } = objeto extrae la propiedad del objeto
- Permite asignar valores por defecto: { nombre = "Default" }
- Hace el codigo mas limpio y legible
- Evita escribir objeto.propiedad repetidamente

### 2. Por que usar substring() en lugar de slice()?
- Ambos funcionan igual para este caso
- substring(0, 50) extrae desde posicion 0 hasta 50
- slice(0, 50) hace lo mismo
- substring() es mas descriptivo del proposito
- Es una cuestion de preferencia personal

## Casos Limite Contemplados
- Mensaje undefined o null: error
- Contenido vacio: error
- Propiedades faltantes: se usan valores por defecto
- Contenido menor a 50 caracteres: se muestra completo
- Contenido mayor a 50 caracteres: se trunca con "..."

## Ejemplo de Uso
```javascript
const mensaje = {
  remitente: "Carlos",
  contenido: "Hola, te escribo para confirmar la reunion de mañana a las 10am",
  fecha: "2025-01-15"
};

generarResumen(mensaje);
// Resumen: "De: Carlos | Fecha: 2025-01-15 | Hola, te escribo para confirmar la reunion de ma..."
```