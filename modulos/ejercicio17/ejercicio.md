# Ejercicio 17: Sistema de Control de Inventarios Dinamicos

## Descripcion
Sistema completo de gestion de inventario que analiza, clasifica y genera reportes detallados usando callbacks.

## Entradas
- **inventario**: Array de objetos (id, nombre, categoria, stock, precio, perecedero, fechaVencimiento)
- **callback**: Funcion que retorna accion recomendada para cada producto

## Proceso
1. Validacion de inventario y callback
2. Aplicacion del callback a cada producto
3. Clasificacion por accion recomendada
4. Busqueda de stock maximo y minimo
5. Identificacion de productos proximos a vencer
6. Conteo por categorias
7. Calculo de valor total con reduce conceptual

## Salidas
- **productosClasificados**: Agrupados por accion (ajustarPrecio, retirar, vigilar, estable)
- **alertasVencimiento**: Productos que vencen en 7 dias o menos
- **stockExtremos**: Producto con mayor y menor stock
- **resumenCategorias**: Cantidad de productos por categoria
- **valorTotal**: Valor economico total del inventario

## Reglas de Negocio
- Alerta de vencimiento: 7 dias o menos
- Acciones validas: ajustarPrecio, retirar, vigilar, estable
- Valor total: precio * stock de cada producto

## Decisiones de Diseno

### 1. Por que hacer todo en un solo ciclo?
- Es mas eficiente: una sola iteracion sobre el inventario
- Evita recorrer el array multiples veces
- Reduce complejidad computacional
- Aunque es mas codigo, es mas rapido en ejecucion

### 2. Por que usar un objeto para resumenCategorias?
- Permite categorias dinamicas (no las conocemos de antemano)
- Acceso rapido por nombre de categoria
- Facil de agregar nuevas categorias sobre la marcha
- Estructura: { "Lacteos": 5, "Carnes": 3 }

## Casos Limite Contemplados
- Inventario vacio: error
- Callback invalido: error
- Productos sin categoria: no se cuentan
- Productos no perecederos: no entran en alertas
- Fechas de vencimiento pasadas: se excluyen de alertas
- Un solo producto: funciona correctamente

## Ejemplo de Uso
```javascript
const inventario = [
  { id: 1, nombre: "Leche", categoria: "Lacteos", stock: 10, precio: 3000, perecedero: true, fechaVencimiento: "2025-01-20" },
  { id: 2, nombre: "Arroz", categoria: "Granos", stock: 5, precio: 2000, perecedero: false },
  { id: 3, nombre: "Yogurt", categoria: "Lacteos", stock: 50, precio: 1500, perecedero: true, fechaVencimiento: "2025-01-18" }
];

procesarInventario(inventario, (producto) => {
  if (producto.stock < 10) return "vigilar";
  if (producto.perecedero && producto.stock > 40) return "ajustarPrecio";
  return "estable";
});

// Resultado:
// Vigilar: Arroz (stock bajo)
// Ajustar precio: Yogurt (perecedero con mucho stock)
// Estable: Leche
// Valor total: 135000
```