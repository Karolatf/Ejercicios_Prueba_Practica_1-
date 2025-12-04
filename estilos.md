# Documentacion: estilos.css - Diseno Visual de la Pagina

## Que es este archivo?

estilos.css es el archivo que controla COMO SE VE nuestra pagina web. Mientras que HTML define QUE hay (estructura), CSS define COMO se ve (colores, tamanos, animaciones, espacios).

## Que es CSS?

CSS significa "Cascading Style Sheets" (Hojas de Estilo en Cascada). Es el lenguaje que usamos para dar estilo a las paginas web: colores, fuentes, tamanos, animaciones, etc.

## Estructura del Archivo

### Variables de Colores
```css
:root {
    --lila-oscuro: #7c3aed;
    --lila-medio: #a78bfa;
    --lila-claro: #ddd6fe;
    --lila-muy-claro: #f5f3ff;
    --blanco: #ffffff;
    --gris-texto: #4b5563;
    --sombra: rgba(124, 58, 237, 0.1);
}
```

#### Que es :root?

Es un selector especial que representa la raiz del documento. Aqui definimos variables CSS que podemos usar en todo el archivo.

#### Que son las variables CSS?

Son como "cajas" donde guardamos valores que vamos a usar muchas veces. Se definen con -- al inicio.

Ejemplo de uso:
```css
/* En lugar de escribir el color cada vez */
color: #7c3aed;  /* Dificil de recordar */

/* Usamos la variable */
color: var(--lila-oscuro);  /* Facil de entender */
```

#### Paleta de colores explicada

- --lila-oscuro: #7c3aed: Color principal para botones y titulos importantes
- --lila-medio: #a78bfa: Para gradientes y efectos hover
- --lila-claro: #ddd6fe: Para bordes y acentos suaves
- --lila-muy-claro: #f5f3ff: Para fondos de lectura
- --blanco: #ffffff: Para fondos de tarjetas
- --gris-texto: #4b5563: Para texto general
- --sombra: rgba(124, 58, 237, 0.1): Para sombras transparentes

#### Que significa el codigo de color #7c3aed?

Es un codigo hexadecimal que representa un color:
- # indica que es un codigo de color
- Los 6 caracteres representan: Rojo-Rojo Verde-Verde Azul-Azul
- #7c3aed = rojo moderado + poco verde + mucho azul = LILA

#### Que significa rgba(124, 58, 237, 0.1)?

- rgba: Red (rojo), Green (verde), Blue (azul), Alpha (transparencia)
- 124, 58, 237: El color lila en formato RGB
- 0.1: Transparencia del 10% (0 = invisible, 1 = totalmente opaco)

### Reset Universal
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

#### Que es *?

Es un selector universal que selecciona TODOS los elementos HTML de la pagina.

#### Que hace cada propiedad?

##### margin: 0

- Que es margin?: Espacio EXTERIOR alrededor de un elemento
- Por que 0?: Elimina margenes predeterminados del navegador
- Sin esto: Cada navegador pone margenes diferentes

##### padding: 0

- Que es padding?: Espacio INTERIOR dentro de un elemento
- Por que 0?: Elimina rellenos predeterminados
- Diferencia con margin: Padding esta DENTRO del elemento

Ejemplo visual:
```
┌─────────────────────┐
│  MARGIN (exterior)  │
│  ┌───────────────┐  │
│  │ BORDER (borde)│  │
│  │ ┌───────────┐ │  │
│  │ │  PADDING  │ │  │
│  │ │ ┌───────┐ │ │  │
│  │ │ │CONTENT│ │ │  │
│  │ │ └───────┘ │ │  │
│  │ └───────────┘ │  │
│  └───────────────┘  │
└─────────────────────┘
```

##### box-sizing: border-box

Que hace?
Cambia como se calculan los tamanos.

Sin box-sizing:
```
width: 300px + padding: 20px + border: 2px = 344px real
```

Con box-sizing: border-box:
```
width: 300px (incluye padding y border) = 300px real
```

Por que es util?
Hace que el calculo de tamanos sea mas predecible y facil.

### Estilos del Body
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, var(--lila-muy-claro) 0%, var(--blanco) 50%, var(--lila-muy-claro) 100%);
    min-height: 100vh;
    color: var(--gris-texto);
}
```

#### font-family

Que hace?
Define que fuente (tipo de letra) usar.

Por que hay varias fuentes?
Es una lista de respaldo:
1. Intenta usar "Segoe UI"
2. Si no esta, usa "Tahoma"
3. Si no esta, usa "Geneva"
4. Y asi sucesivamente...
5. Si ninguna esta, usa cualquier sans-serif (sin serifas)

Que es sans-serif?
- Serif: Letras con "patitas" (como Times New Roman)
- Sans-serif: Letras sin "patitas" (como Arial) - mas modernas

#### background: linear-gradient()

Que es un gradiente?
Es una transicion suave entre colores.

Explicacion del codigo:
```css
linear-gradient(135deg, color1 0%, color2 50%, color3 100%)
```

- 135deg: Angulo diagonal (de esquina inferior izquierda a superior derecha)
- var(--lila-muy-claro) 0%: Empieza con lila muy claro
- var(--blanco) 50%: En el medio es blanco
- var(--lila-muy-claro) 100%: Termina con lila muy claro

Resultado visual:
```
lila claro → blanco → lila claro
(diagonal de 135 grados)
```

#### min-height: 100vh

Que significa?
- min-height: Altura minima
- 100vh: 100% del Viewport Height (altura de la ventana del navegador)
- vh = Viewport Height (1vh = 1% de la altura de la ventana)

Por que?
Garantiza que el body ocupe TODA la altura de la pantalla, incluso si hay poco contenido.

#### color

Define el color del texto por defecto (gris oscuro).

### Contenedor Principal
```css
.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}
```

#### .container

El punto . indica que es una clase (class en HTML).

#### max-width: 1400px

Que hace?
- En pantallas grandes (>1400px): El contenedor no se estira mas
- En pantallas pequenas (<1400px): Usa todo el ancho disponible

Por que 1400px?
En monitores muy grandes (>2000px), el texto seria dificil de leer si se estira mucho.

#### margin: 0 auto

Que hace?
- 0: Margen superior e inferior = 0
- auto: Margen izquierdo y derecho = automatico (lo centra)

Resultado: El contenedor queda centrado horizontalmente.

#### padding: 20px

Espacio interior de 20 pixeles en todos los lados.

### Header (Encabezado)
```css
.header {
    background: linear-gradient(135deg, var(--lila-oscuro) 0%, var(--lila-medio) 100%);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px var(--sombra);
    position: relative;
    overflow: hidden;
}
```

#### background: linear-gradient()

Gradiente diagonal de lila oscuro a lila medio.

#### border-radius: 20px

Que hace?
Redondea las esquinas del elemento.

- 0px = Esquinas completamente cuadradas
- 20px = Esquinas redondeadas (moderno)
- 50% = Circulo perfecto (si es cuadrado)

#### box-shadow: 0 10px 30px var(--sombra)

Que es una sombra?
Es el efecto de sombra alrededor del elemento.

Explicacion del codigo:
```css
box-shadow: offset-x offset-y blur spread color
```

- 0: Desplazamiento horizontal (0 = centrada)
- 10px: Desplazamiento vertical (10px hacia abajo)
- 30px: Difuminado (blur) - que tan difusa es
- var(--sombra): Color de la sombra (lila transparente)

#### position: relative

Para que?
Permite que elementos hijos (como ::before) se posicionen en relacion a este elemento.

#### overflow: hidden

Que hace?
Oculta cualquier contenido que se salga de los bordes del elemento.

Por que?
Para que el efecto de pulso animado no se salga del header.

### Animacion de Pulso
```css
.header::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: pulse 8s ease-in-out infinite;
}
```

#### Que es ::before?

Es un pseudo-elemento que crea un elemento "fantasma" ANTES del contenido.

Para que sirve?
Para agregar efectos visuales sin agregar HTML extra.

#### content: ''

Que hace?
Define el contenido del pseudo-elemento (vacio en este caso, solo visual).

#### position: absolute

Que hace?
Posiciona el elemento en relacion a su padre (el header).

#### Posicionamiento del circulo

- top: -50%: Empieza 50% arriba del header (fuera de vista)
- right: -50%: Empieza 50% a la derecha (fuera de vista)
- width: 200%: El doble del ancho del header
- height: 200%: El doble de la altura

Resultado: Un circulo gigante que empieza fuera del header.

#### background: radial-gradient()

Que es un radial-gradient?
Es un gradiente circular (desde el centro hacia afuera).

Explicacion:
- circle: Forma circular (en lugar de elipse)
- rgba(255,255,255,0.1): Blanco transparente al 10%
- 0%: En el centro
- transparent: Transparente total
- 70%: A partir del 70% del radio

#### animation: pulse 8s ease-in-out infinite

Que hace?
Aplica una animacion llamada "pulse" al elemento.

Explicacion:
- pulse: Nombre de la animacion (definida abajo)
- 8s: Duracion de 8 segundos
- ease-in-out: Empieza lento, rapido en el medio, termina lento
- infinite: Se repite infinitamente

### Definicion de la Animacion
```css
@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 0.3; }
}
```

#### Que es @keyframes?

Es donde definimos como funciona una animacion.

#### Explicacion del codigo

0%, 100%: Al inicio (0%) y al final (100%)
- scale(1): Tamano normal
- opacity: 0.5: 50% visible

50%: A la mitad de la animacion
- scale(1.1): 110% del tamano (10% mas grande)
- opacity: 0.3: 30% visible

Resultado: El circulo "respira" (se agranda y se vuelve mas transparente, luego vuelve a su tamano).

### Grid de Informacion
```css
.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    margin-top: 25px;
}
```

#### display: grid

Que hace?
Activa el sistema de Grid CSS (sistema de cuadriculas).

Que es Grid?
Es una forma de organizar elementos en filas y columnas automaticamente.

#### grid-template-columns

Que hace?
Define cuantas columnas tiene el grid y su tamano.

Explicacion del codigo:
```css
repeat(auto-fit, minmax(250px, 1fr))
```

- repeat: Repite un patron
- auto-fit: Crea tantas columnas como quepan
- minmax(250px, 1fr): Cada columna minimo 250px, maximo 1 fraccion del espacio disponible

Resultado:
- Pantalla grande: 4 columnas
- Tablet: 2-3 columnas
- Movil: 1 columna

Es automatico! No necesita media queries extra.

#### gap: 15px

Que hace?
Espacio entre los elementos del grid (15 pixeles).

### Grid de Ejercicios
```css
.exercise-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
}
```

#### Diferencia: auto-fill vs auto-fit

auto-fill (usado aqui):
- Crea columnas vacias si hay espacio
- Mantiene el espaciado uniforme

auto-fit:
- Colapsa columnas vacias
- Expande elementos para llenar espacio

Por que auto-fill?
Porque tenemos exactamente 17 ejercicios y queremos mantener el espaciado consistente.

### Tarjetas de Ejercicios
```css
.exercise-card {
    background: var(--blanco);
    border-radius: 16px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid var(--lila-claro);
    box-shadow: 0 4px 15px var(--sombra);
    position: relative;
    overflow: hidden;
}
```

#### cursor: pointer

Que hace?
Cambia el cursor a una manita cuando pasas sobre el elemento, indicando que es clickeable.

#### transition: all 0.3s ease

Que hace?
Anima TODAS las propiedades que cambien durante 0.3 segundos con efecto suave.

Ejemplo:
- Cuando haces hover, el color cambia gradualmente en 0.3 segundos
- No es un cambio brusco, es una transicion suave

### Efecto de Linea Superior
```css
.exercise-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--lila-oscuro), var(--lila-medio));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.exercise-card:hover::before {
    transform: scaleX(1);
}
```

#### Que hace este codigo?

Crea una linea de 4px en la parte superior de la tarjeta que:
1. Normalmente esta oculta (scaleX(0))
2. Cuando haces hover, se expande horizontalmente (scaleX(1))
3. Es un gradiente de lila oscuro a lila medio

#### transform: scaleX(0)

Que hace?
Escala el elemento en el eje X (horizontal) a 0 (invisible horizontalmente).

#### transform: scaleX(1)

Que hace?
Escala el elemento al 100% de su tamano original.

### Efectos Hover de la Tarjeta
```css
.exercise-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 35px var(--sombra);
    border-color: var(--lila-medio);
}
```

#### transform: translateY(-8px)

Que hace?
Mueve el elemento 8 pixeles HACIA ARRIBA (valores negativos = arriba).

Resultado: La tarjeta se "levanta" cuando pasas el mouse sobre ella.

#### Cambios de sombra

La sombra se vuelve mas grande y mas abajo, creando el efecto de que la tarjeta se elevo.

### Numero del Ejercicio
```css
.exercise-number {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--lila-oscuro), var(--lila-medio));
    color: var(--blanco);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
    box-shadow: 0 4px 10px var(--sombra);
}
```

#### display: flex

Que hace?
Activa Flexbox, un sistema de layout flexible.

#### align-items: center

Que hace?
Centra los elementos verticalmente dentro del contenedor flex.

#### justify-content: center

Que hace?
Centra los elementos horizontalmente dentro del contenedor flex.

Resultado: El numero queda perfectamente centrado dentro del cuadrado.

### Modal (Ventana Emergente)
```css
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(124, 58, 237, 0.4);
    backdrop-filter: blur(5px);
    animation: fadeIn 0.3s ease;
}
```

#### position: fixed

Que hace?
Fija el elemento en la pantalla, no se mueve cuando haces scroll.

#### z-index: 1000

Que hace?
Define el orden de apilamiento (que esta encima de que).
- Numeros mas altos = mas arriba
- 1000 asegura que el modal este sobre todo lo demas

#### backdrop-filter: blur(5px)

Que hace?
Difumina el contenido DETRAS del modal (efecto de vidrio esmerilado moderno).

### Animaciones del Modal
```css
@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { 
        transform: translateY(50px);
        opacity: 0;
    }
    to { 
        transform: translateY(0);
        opacity: 1;
    }
}
```

#### fadeIn

Aparece gradualmente de invisible (opacity: 0) a visible (opacity: 1).

#### slideUp

Se desliza desde 50px abajo hacia su posicion original, mientras aparece gradualmente.

### Boton de Cerrar
```css
.close:hover {
    background: var(--lila-muy-claro);
    color: var(--lila-oscuro);
    transform: rotate(90deg);
}
```

#### transform: rotate(90deg)

Que hace?
Rota el elemento 90 grados (la X se convierte en +).

Es un detalle sutil pero elegante de interaccion.

### Botones de Accion
```css
.btn-execute:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px var(--sombra);
}
```

Los botones se "levantan" ligeramente cuando pasas el mouse, igual que las tarjetas.

### Responsive Design
```css
@media (max-width: 768px) {
    .title {
        font-size: 1.8rem;
    }
    
    .exercise-grid {
        grid-template-columns: 1fr;
    }
    
    .modal-content {
        margin: 10% 20px;
        padding: 30px;
    }
    
    .info-grid {
        grid-template-columns: 1fr;
    }
}
```

#### Que es @media?

Son "media queries" que aplican estilos solo cuando se cumple una condicion.

#### max-width: 768px

Significa: "Aplica estos estilos solo si la pantalla tiene 768px o menos de ancho".

Esto hace que la pagina se adapte a celulares y tablets.

#### Cambios principales

- Titulos mas pequenos
- Una sola columna en los grids
- Margenes adaptados para pantallas pequenas

## Conceptos Clave Resumidos

### Box Model (Modelo de Cajas)

Todo elemento HTML es una caja con:
1. Content (contenido)
2. Padding (relleno interior)
3. Border (borde)
4. Margin (margen exterior)

### Flexbox

Sistema para alinear elementos en una dimension (fila o columna).

Propiedades principales:
- display: flex (activa flexbox)
- justify-content (alineacion horizontal)
- align-items (alineacion vertical)
- gap (espacio entre elementos)

### Grid

Sistema para layouts en dos dimensiones (filas y columnas).

Propiedades principales:
- display: grid (activa grid)
- grid-template-columns (define columnas)
- gap (espacio entre elementos)
- auto-fit / auto-fill (adaptabilidad automatica)

### Transitions vs Animations

Transitions:
- Cambios suaves entre dos estados
- Requieren un trigger (hover, click)
- Simples y rapidas

Animations:
- Secuencias complejas de cambios
- Pueden ejecutarse automaticamente
- Mas control y flexibilidad

### Pseudo-elementos

::before y ::after:
- Crean elementos "fantasma"
- Utiles para decoraciones
- No aparecen en el HTML
- Solo visuales

### Transform

Propiedad para transformar elementos:
- translate (mover)
- scale (escalar/redimensionar)
- rotate (rotar)
- No afecta el flujo del documento

## Mejores Practicas Aplicadas

### Variables CSS

Mantienen el codigo organizado y facil de modificar.

### Mobile-First

Diseno adaptable a diferentes tamanos de pantalla.

### Animaciones Sutiles

Mejoran la experiencia sin ser molestas.

### Jerarquia Visual

Colores y tamanos guian la atencion del usuario.

### Espaciado Consistente

Uso de multiplos (15px, 20px, 25px, 30px, 40px).

### Accesibilidad

Contraste adecuado entre texto y fondo.