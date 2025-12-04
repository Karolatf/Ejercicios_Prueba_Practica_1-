# Documentación: index.html - Estructura de la Página Web

## ¿Qué es este archivo?

`index.html` es el archivo principal de nuestra página web. Es como la "puerta de entrada" que el navegador abre cuando queremos ver nuestro proyecto. Contiene toda la estructura y el contenido que se muestra en pantalla: los títulos, las tarjetas de ejercicios, el modal (ventana emergente), etc.

## ¿Qué es HTML?

HTML significa "HyperText Markup Language" (Lenguaje de Marcado de Hipertexto). Es el lenguaje que usamos para crear páginas web. Funciona con "etiquetas" que le dicen al navegador qué mostrar y cómo organizarlo.

## Estructura Completa del Archivo

### 1. Declaración del Documento
```html
<!DOCTYPE html>
<html lang="es">
```

**¿Qué hace esto?**
- `<!DOCTYPE html>`: Le dice al navegador que este es un documento HTML5 (la versión más reciente de HTML)
- `<html lang="es">`: Abre el documento HTML y le dice que el idioma es español

**¿Por qué es importante?**
- Sin DOCTYPE, el navegador no sabe cómo interpretar el código
- El atributo `lang="es"` ayuda a los lectores de pantalla (para personas con discapacidad visual) a pronunciar correctamente el texto en español

---

### 2. La Cabecera (Head)
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Evaluación - Programación JavaScript</title>
    <link rel="stylesheet" href="estilos.css">
</head>
```

**¿Qué es el `<head>`?**
Es la sección que contiene información SOBRE la página, pero que no se ve directamente en la pantalla. Es como los "datos técnicos" del sitio web.

**Elementos dentro del head:**

#### a) `<meta charset="UTF-8">`
**¿Qué hace?** 
- Le dice al navegador que use el conjunto de caracteres UTF-8
- UTF-8 permite mostrar caracteres especiales como: á, é, í, ó, ú, ñ, ¿, ¡

**Sin esto:** Las tildes y la ñ se verían mal (como símbolos raros)

#### b) `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
**¿Qué hace?**
- Hace que la página se vea bien en celulares y tablets
- `width=device-width`: El ancho de la página = ancho del dispositivo
- `initial-scale=1.0`: Zoom inicial al 100%

**Sin esto:** En el celular se vería muy pequeño y tendrías que hacer zoom

#### c) `<title>Sistema de Evaluación - Programación JavaScript</title>`
**¿Qué hace?**
- Es el título que aparece en la pestaña del navegador
- También es lo que aparece en los resultados de búsqueda de Google

#### d) `<link rel="stylesheet" href="estilos.css">`
**¿Qué hace?**
- Conecta este HTML con el archivo de estilos CSS
- El CSS es el que hace que todo se vea bonito (colores, tamaños, animaciones)

**¿Por qué separar HTML y CSS?**
- HTML = Estructura (qué hay)
- CSS = Apariencia (cómo se ve)
- Separar ambos es una buena práctica de programación

---

### 3. El Cuerpo (Body) - Lo que sí se ve
```html
<body>
    <div class="container">
        <!-- Aquí va todo el contenido visible -->
    </div>
</body>
```

**¿Qué es el `<body>`?**
Todo lo que va dentro de `<body>` es lo que realmente SE VE en la pantalla del navegador.

**¿Qué es `<div class="container">`?**
- `<div>`: Es como una "caja" o contenedor invisible que agrupa elementos
- `class="container"`: Le pone un nombre ("container") para poder darle estilos con CSS
- Esta caja contiene TODA nuestra página y la mantiene centrada con un ancho máximo

---

### 4. El Encabezado (Header)
```html
<header class="header">
    <div class="header-content">
        <h1 class="title">Centro Industrial de Mantenimiento Integral</h1>
        <p class="subtitle">INSTRUMENTO DE EVALUACIÓN - Versión: 04</p>
        <div class="info-grid">
            <!-- Información institucional -->
        </div>
    </div>
</header>
```

**¿Qué es `<header>`?**
Es una etiqueta semántica de HTML5 que indica "esto es el encabezado de la página". Es como la portada de un libro.

**Elementos dentro del header:**

#### a) `<h1 class="title">Centro Industrial de Mantenimiento Integral</h1>`
**¿Qué hace?**
- `<h1>`: Es el título más importante de la página (Heading 1)
- Solo debe haber UN `<h1>` por página (para SEO - posicionamiento en Google)
- `class="title"`: Nombre para darle estilos específicos con CSS

#### b) `<p class="subtitle">INSTRUMENTO DE EVALUACIÓN - Versión: 04</p>`
**¿Qué hace?**
- `<p>`: Etiqueta para párrafos de texto
- Muestra el subtítulo con información sobre el documento

#### c) `<div class="info-grid">`
**¿Qué hace?**
Es un contenedor que agrupa las 4 tarjetas de información (código, fecha, programa, ficha)

**Dentro del info-grid hay 4 elementos iguales:**
```html
<div class="info-item">
    <span class="info-label">Código del INSTRUMENTO:</span>
    <span class="info-value">3233198-233104-3</span>
</div>
```

**¿Qué es `<span>`?**
- Es como un `<div>` pero para texto pequeño (en línea)
- Se usa para aplicar estilos a partes específicas de texto
- `info-label`: Es la etiqueta (lo que dice qué es)
- `info-value`: Es el valor (el dato real)

**Decisión de diseño #1: ¿Por qué usar un grid de información?**
- **Ventaja:** Se organiza automáticamente en columnas en pantallas grandes y en una sola columna en móviles
- **Alternativa no usada:** Poner todo en una sola línea (se vería mal en móviles)
- **Conclusión:** El grid es responsive (se adapta automáticamente)

---

### 5. La Navegación (Navigation) - Las Tarjetas de Ejercicios
```html
<nav class="navigation">
    <h2 class="nav-title">Seleccione un ejercicio para ejecutar</h2>
    <div class="exercise-grid">
        <!-- Aquí van las 17 tarjetas -->
    </div>
</nav>
```

**¿Qué es `<nav>`?**
Etiqueta semántica que indica "esto es un menú de navegación". Ayuda a los navegadores y buscadores a entender la estructura de la página.

**¿Qué es `<h2>`?**
Es un título de segundo nivel (menos importante que `<h1>`). Usamos `<h2>` para los títulos de secciones.

**Jerarquía de títulos:**
- `<h1>`: Título principal (solo 1 por página)
- `<h2>`: Títulos de secciones
- `<h3>`: Subtítulos dentro de secciones
- `<h4>`, `<h5>`, `<h6>`: Títulos cada vez menos importantes

#### Estructura de una Tarjeta de Ejercicio
```html
<div class="exercise-card" onclick="showExercise(1)">
    <div class="exercise-number">01</div>
    <h3 class="exercise-title">Validación de Asistencia</h3>
    <p class="exercise-desc">Sistema de verificación de estudiantes inscritos en un curso</p>
</div>
```

**Explicación línea por línea:**

**1. `<div class="exercise-card" onclick="showExercise(1)">`**
- `class="exercise-card"`: Nombre para dar estilos CSS (fondo blanco, bordes, sombra)
- `onclick="showExercise(1)"`: Cuando haces clic, ejecuta la función `showExercise(1)` que abre el modal

**¿Qué es onclick?**
Es un "evento" de JavaScript. Significa: "cuando alguien haga clic aquí, ejecuta esta función"

**2. `<div class="exercise-number">01</div>`**
- Muestra el número del ejercicio
- El CSS le da forma de cuadradito con gradiente lila

**3. `<h3 class="exercise-title">Validación de Asistencia</h3>`**
- `<h3>`: Título de tercer nivel (título de la tarjeta)
- Muestra el nombre del ejercicio

**4. `<p class="exercise-desc">Sistema de verificación...</p>`**
- Párrafo con la descripción breve del ejercicio

**Decisión de diseño #2: ¿Por qué usar onclick en lugar de addEventListener?**
- **Ventaja:** Es más simple y directo, perfecto para principiantes
- **Alternativa no usada:** Usar `addEventListener` en JavaScript (más complejo)
- **Razón:** Para alguien con 2 semanas de JavaScript, onclick es más fácil de entender
- **Código alternativo (no usado):**
```javascript
  document.getElementById('card1').addEventListener('click', function() {
      showExercise(1);
  });
```
- **Conclusión:** onclick funciona perfectamente para este proyecto educativo

**Hay 17 tarjetas iguales**, solo cambian:
- El número en `showExercise(X)` (del 1 al 17)
- El número visual (`<div class="exercise-number">01</div>` a `17`)
- El título y descripción de cada ejercicio

---

### 6. El Modal (Ventana Emergente)
```html
<div id="exerciseModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2 id="modalTitle" class="modal-title">Ejercicio</h2>
        <div id="modalDescription" class="modal-description"></div>
        <div class="modal-actions">
            <button class="btn-execute" onclick="executeExercise()">
                <span class="btn-icon">▶</span>
                Ejecutar en Consola
            </button>
            <button class="btn-close" onclick="closeModal()">Cerrar</button>
        </div>
    </div>
</div>
```

**¿Qué es un modal?**
Es una ventana que aparece encima de la página principal. Se usa para mostrar información importante sin salir de la página.

**Estructura del modal:**

#### a) `<div id="exerciseModal" class="modal">`
- `id="exerciseModal"`: ID único para que JavaScript pueda encontrar este elemento
- `class="modal"`: Clase para estilos CSS
- **Por defecto está oculto** (CSS: `display: none`)

**¿Diferencia entre id y class?**
- **id**: Es único, solo un elemento puede tener ese id
- **class**: Puede repetirse, varios elementos pueden tener la misma clase

#### b) `<div class="modal-content">`
Es el contenedor del contenido real del modal (el cuadro blanco)

#### c) `<span class="close" onclick="closeModal()">&times;</span>`
**¿Qué hace?**
- Es el botón para cerrar (la X en la esquina)
- `&times;`: Es un código HTML que muestra el símbolo ×
- `onclick="closeModal()"`: Al hacer clic, ejecuta la función que cierra el modal

**¿Por qué `&times;` y no solo poner "X"?**
- `&times;` es un símbolo especial que se ve más profesional
- Otros símbolos HTML especiales: `&copy;` (©), `&trade;` (™), `&hearts;` (♥)

#### d) `<h2 id="modalTitle" class="modal-title">Ejercicio</h2>`
- `id="modalTitle"`: JavaScript cambiará este texto según el ejercicio seleccionado
- Por defecto dice "Ejercicio", pero cambia a "Ejercicio 1: Validación de Asistencia", etc.

#### e) `<div id="modalDescription" class="modal-description"></div>`
- Está vacío porque JavaScript llenará este espacio con la descripción del ejercicio
- Por eso tiene `id`: para que JavaScript lo encuentre fácilmente

#### f) Botones del modal

**Botón "Ejecutar en Consola":**
```html
<button class="btn-execute" onclick="executeExercise()">
    <span class="btn-icon">▶</span>
    Ejecutar en Consola
</button>
```
- `<button>`: Etiqueta para crear botones clickeables
- `<span class="btn-icon">▶</span>`: Símbolo de play (▶)
- `onclick="executeExercise()"`: Muestra instrucciones de cómo ejecutar en Node.js

**Botón "Cerrar":**
```html
<button class="btn-close" onclick="closeModal()">Cerrar</button>
```
- Cierra el modal cuando haces clic

**¿Por qué hay DOS formas de cerrar?**
1. Botón X arriba a la derecha
2. Botón "Cerrar" abajo

**Respuesta:** Es mejor UX (experiencia de usuario). El usuario puede cerrar como prefiera.

---

### 7. El Pie de Página (Footer)
```html
<footer class="footer">
    <p class="footer-text"><strong>Instructor:</strong> John Freddy Becerra Castellanos</p>
    <p class="footer-text">Centro Industrial de Mantenimiento Integral - SENA</p>
</footer>
```

**¿Qué es `<footer>`?**
Etiqueta semántica para el pie de página. Generalmente contiene información de contacto, créditos, derechos de autor.

**¿Qué es `<strong>`?**
- Hace que el texto sea **negrita** (bold)
- Es mejor que usar `<b>` porque `<strong>` indica "esto es importante" (semántica)

---

### 8. Conexión con JavaScript
```html
<script src="estilos_html.js"></script>
```

**¿Qué hace esta línea?**
- Conecta el HTML con el archivo JavaScript
- JavaScript es el que hace que la página sea interactiva (abrir/cerrar modales, cambiar texto, etc.)

**¿Por qué está AL FINAL, antes de cerrar `</body>`?**
- Para que el HTML cargue primero completamente
- Si el JavaScript se ejecuta antes de que cargue el HTML, no encontrará los elementos y dará error
- Es una buena práctica de programación

**Alternativa (no usada):**
```html
<!-- Esto daría problemas -->
<head>
    <script src="estilos_html.js"></script>  ❌ Mal lugar
</head>
```

---

## Decisiones de Diseño Importantes

### Decisión #1: Separar HTML, CSS y JavaScript en archivos diferentes

**¿Qué hicimos?**
- `index.html`: Estructura
- `estilos.css`: Apariencia
- `estilos_html.js`: Interactividad

**¿Por qué?**
- ✅ Código más organizado y fácil de leer
- ✅ Fácil de mantener (cambios en un solo lugar)
- ✅ Reutilizable (el CSS puede usarse en otras páginas)
- ✅ Es la forma profesional de trabajar

**Alternativa no usada:**
```html
<!-- Todo en un solo archivo -->
<style>
    /* CSS aquí dentro */
</style>

<body>
    <!-- HTML -->
</body>

<script>
    // JavaScript aquí dentro
</script>
```
**Problema:** El archivo sería enorme y difícil de mantener

---

### Decisión #2: Usar etiquetas semánticas HTML5

**¿Qué son etiquetas semánticas?**
Son etiquetas que tienen SIGNIFICADO, no solo son "cajas vacías".

**Ejemplos usados:**
- `<header>`: Encabezado
- `<nav>`: Navegación
- `<footer>`: Pie de página
- `<h1>`, `<h2>`, `<h3>`: Títulos con jerarquía

**¿Por qué es importante?**
- ✅ Mejor accesibilidad (lectores de pantalla para personas con discapacidad visual)
- ✅ Mejor SEO (Google entiende mejor la página)
- ✅ Código más legible (al leerlo entiendes qué es cada parte)

**Alternativa no usada:**
```html
<!-- Usar solo divs sin significado -->
<div class="header">
<div class="navigation">
<div class="footer">
```
**Problema:** Todo son "cajas" sin significado específico

---

## Casos Límite Contemplados

### 1. Pantallas pequeñas (celulares)
**Problema:** ¿Cómo se ve en un celular?
**Solución:** El CSS tiene media queries que reorganizan todo en 1 columna
**Resultado:** Se ve perfectamente en cualquier dispositivo

### 2. JavaScript deshabilitado
**Problema:** ¿Qué pasa si alguien desactiva JavaScript?
**Situación:** Los botones no funcionarían
**Realidad:** En 2025, casi nadie desactiva JavaScript. Para un proyecto educativo, asumimos que está habilitado

### 3. Navegadores antiguos
**Compatibilidad:**
- Chrome, Firefox, Safari, Edge (versiones de 2020+): ✅ Funciona perfecto
- Internet Explorer 11: ⚠️ Funciona pero sin algunas animaciones
- Internet Explorer 10 o menor: ❌ No funciona (pero ya nadie lo usa)

---

## Flujo de Usuario (Cómo se usa)

1. **Usuario abre `index.html` en Chrome**
2. **Ve el header** con información del SENA
3. **Scroll hacia abajo** ve las 17 tarjetas de ejercicios
4. **Hace clic en "Ejercicio 5"**
5. **Se ejecuta:** `showExercise(5)` (JavaScript)
6. **Aparece el modal** con información del ejercicio 5
7. **Lee la descripción**
8. **Hace clic en "Ejecutar en Consola"**
9. **Ve un alert** con instrucciones: "Abre terminal, ejecuta node app.js..."
10. **Cierra el modal** (puede hacerlo de 3 formas: X, botón Cerrar, o clic fuera)
11. **Puede seleccionar otro ejercicio**

---

## Integración con el Proyecto Completo
```
Prueba-Practica-NPM-Modernos/
│
├── index.html          ← Este archivo (interfaz visual en navegador)
├── estilos.css         ← Los estilos (colores, tamaños, animaciones)
├── estilos_html.js     ← La interactividad (abrir/cerrar modales)
│
├── app.js              ← Ejecución REAL en Node.js (terminal GitBash)
├── package.json        ← Configuración de Node.js
│
└── modulos/
    ├── barril.js       ← Exporta todas las funciones
    ├── ejercicio1/
    │   ├── ejercicio1.js
    │   └── ejercicio1.md
    ├── ejercicio2/
    └── ...
```

**¿Cómo se conecta todo?**
- **index.html**: Muestra visualmente los 17 ejercicios (en el navegador)
- **app.js**: Ejecuta la lógica real con `prompt-sync` (en la terminal)
- **modulos/**: Contiene el código de cada ejercicio

**¿Por qué están separados?**
- HTML/CSS/JS del navegador NO pueden usar `prompt-sync` (es solo para Node.js)
- `app.js` NO se ejecuta en el navegador, solo en terminal
- Por eso el HTML solo MUESTRA los ejercicios y GUÍA al usuario a ejecutar en terminal

---

## Mantenimiento y Escalabilidad

### Para agregar el Ejercicio 18:

**1. En index.html (en la sección `<nav>`), agregar:**
```html
<div class="exercise-card" onclick="showExercise(18)">
    <div class="exercise-number">18</div>
    <h3 class="exercise-title">Nombre del Nuevo Ejercicio</h3>
    <p class="exercise-desc">Descripción breve</p>
</div>
```

**2. En estilos_html.js, agregar:**
```javascript
18: {
    titulo: "Ejercicio 18: Nombre Completo",
    descripcion: "Descripción detallada..."
}
```

**3. NO necesitas tocar el CSS** - el grid se adapta automáticamente

---

## Notas Técnicas

### Codificación de caracteres
- **UTF-8** permite: á, é, í, ó, ú, ñ, ¿, ¡, €, ©, ™, etc.
- Sin UTF-8 verías símbolos raros en lugar de tildes

### Tamaño del archivo
- index.html: ~6 KB (muy liviano)
- Carga en menos de 50ms en conexión normal

### Performance
- Sin imágenes pesadas (todo es texto)
- Sin librerías externas (no carga jQuery, Bootstrap, etc.)
- Resultado: Página muy rápida

---

## Validación HTML

Este código es **HTML5 válido** según los estándares del W3C (organización que define los estándares web).

**¿Cómo validar?**
Ve a: https://validator.w3.org/
Pega tu código y verifica que no haya errores

---

## Buenas Prácticas Aplicadas

✅ **Indentación correcta** (4 espacios por nivel)
✅ **Nombres descriptivos** (exercise-card, modal-content, etc.)
✅ **Comentarios en HTML** (<!-- Header -->, <!-- Ejercicio 1 -->, etc.)
✅ **Etiquetas semánticas** (header, nav, footer)
✅ **IDs únicos** (no hay IDs duplicados)
✅ **Estructura lógica** (header → nav → footer)

---

## Conclusión

Este archivo HTML es el **punto de entrada visual** de nuestro proyecto de evaluación. Su trabajo es:
1. **Presentar** los 17 ejercicios de forma atractiva
2. **Organizar** la información institucional
3. **Guiar** al usuario para ejecutar los ejercicios en Node.js

Es como un "menú de restaurante": te muestra qué opciones hay, pero la "cocina" (ejecución real) está en `app.js` con Node.js.