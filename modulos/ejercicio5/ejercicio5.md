# Ejercicio 5: Validacion de Usuario y Permisos

## Descripcion
Sistema de validacion de acceso que evalua usuarios segun su estado y rol asignado.

## Entradas
- **nombre**: String con el nombre del usuario
- **estado**: String ("activo" o "inactivo")
- **rol**: String ("admin", "editor" o "lector")

## Proceso
1. Validacion de nombre no vacio
2. Validacion de estado valido
3. Validacion de rol existente
4. Evaluacion de estado activo/inactivo
5. Asignacion de permisos segun rol
6. Generacion de reporte de acceso

## Salidas
- **acceso**: "PERMITIDO" o "DENEGADO"
- **permisos**: Lista de acciones permitidas
- **nivelAcceso**: Nivel de privilegios
- **mensaje**: Descripcion del resultado

## Reglas de Negocio

### Permisos por Rol:
- **admin**: Acceso completo (Lectura, Escritura, Edicion, Eliminacion, Administracion)
- **editor**: Acceso medio (Lectura, Escritura, Edicion)
- **lector**: Acceso basico (Solo Lectura)

### Condiciones de Acceso:
- Usuario inactivo: acceso denegado sin importar el rol
- Usuario activo: acceso segun permisos del rol

## Decisiones de Diseno

### 1. Por que validar primero el estado antes que el rol?
- Un usuario inactivo no debe acceder sin importar sus privilegios
- Es mas eficiente: si esta inactivo, no necesitamos evaluar permisos
- Principio de seguridad: denegar primero, permitir despues

### 2. Por que usar if-else en lugar de switch para los roles?
- Solo hay 3 roles, if-else es mas simple y legible
- Permite comparaciones mas flexibles si se necesitan en el futuro
- switch seria mejor con mas de 5-7 opciones

## Casos Limite Contemplados
- Nombre vacio o solo espacios: error
- Estado diferente a activo/inactivo: error
- Rol no existente: error
- Usuario activo con rol valido: acceso permitido
- Usuario inactivo con cualquier rol: acceso denegado

## Ejemplo de Uso
```javascript
validarUsuario("Juan", "activo", "admin");
// Acceso: PERMITIDO, Nivel: COMPLETO

validarUsuario("Maria", "inactivo", "editor");
// Acceso: DENEGADO
```