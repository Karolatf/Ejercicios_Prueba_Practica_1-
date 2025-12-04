 // Array con la información de cada ejercicio
        const ejercicios = {
            1: {
                titulo: "Ejercicio 1: Validación de Asistencia",
                descripcion: "Valida si un estudiante está registrado en la lista de asistencia. Utiliza el método includes() para verificar la existencia del nombre en el array de estudiantes inscritos."
            },
            2: {
                titulo: "Ejercicio 2: Actualización de Inventario",
                descripcion: "Calcula el inventario final de un producto considerando stock inicial, unidades vendidas y reposiciones. Identifica si el inventario está en estado crítico (menos de 5 unidades)."
            },
            3: {
                titulo: "Ejercicio 3: Análisis de Calificaciones",
                descripcion: "Calcula el promedio de notas de un aprendiz y determina su categoría de rendimiento (Alto: ≥4.0, Medio: 3.0-3.9, Bajo: <3.0)."
            },
            4: {
                titulo: "Ejercicio 4: Ordenamiento de Precios",
                descripcion: "Organiza precios de productos de mayor a menor usando el método sort(). Identifica el precio más alto y más bajo del conjunto."
            },
            5: {
                titulo: "Ejercicio 5: Validación de Usuario y Permisos",
                descripcion: "Valida credenciales de usuario y asigna permisos según su rol (admin, editor, lector). Verifica que el usuario esté activo antes de otorgar acceso."
            },
            6: {
                titulo: "Ejercicio 6: Cálculo Modular de Nómina",
                descripcion: "Sistema modular que calcula salario base, deducciones (10%) y salario neto. Cada cálculo se realiza en una función independiente conectada por parámetros."
            },
            7: {
                titulo: "Ejercicio 7: Registro Dinámico de Productos",
                descripcion: "Registra productos usando parámetros rest (...productos) y elimina duplicados automáticamente para mantener una lista única."
            },
            8: {
                titulo: "Ejercicio 8: Búsqueda Avanzada en Catálogo",
                descripcion: "Sistema flexible de búsqueda que utiliza callbacks para definir criterios dinámicos (categoría, duración, nombre). Aplica filter() con el callback proporcionado."
            },
            9: {
                titulo: "Ejercicio 9: Procesamiento de Pagos",
                descripcion: "Valida pagos mediante un callback que define las reglas de aprobación. Clasifica cada pago como aprobado o rechazado según el criterio establecido."
            },
            10: {
                titulo: "Ejercicio 10: Fusión de Usuarios",
                descripcion: "Fusiona listas de usuarios de dos sistemas diferentes usando el operador spread. Elimina duplicados por documento y conserva la versión con mayor información."
            },
            11: {
                titulo: "Ejercicio 11: Resumen de Mensajes",
                descripcion: "Genera resúmenes rápidos de mensajes usando destructuring para extraer remitente, contenido y fecha de forma eficiente."
            },
            12: {
                titulo: "Ejercicio 12: Gestión de Pacientes por Prioridad",
                descripcion: "Identifica al paciente con mayor prioridad para atención. Si hay empate, selecciona al de mayor edad. Maneja múltiples criterios de desempate."
            },
            13: {
                titulo: "Ejercicio 13: Control de Gastos y Análisis Financiero",
                descripcion: "Analiza gastos mensuales calculando total, categoría más costosa y detectando categorías que superan el 40% del gasto total (alerta de desbalance)."
            },
            14: {
                titulo: "Ejercicio 14: Evaluación de Proyectos Colaborativos",
                descripcion: "Sistema modular que filtra proyectos activos, cuenta participantes y evalúa estado mediante callbacks. Genera informes detallados por proyecto."
            },
            15: {
                titulo: "Ejercicio 15: Sistema de Recomendación de Cursos",
                descripcion: "Recomienda cursos según comportamiento académico usando callbacks. Considera calificaciones, horas dedicadas e intentos. Ordena recomendaciones por prioridad."
            },
            16: {
                titulo: "Ejercicio 16: Sistema de Alerta para Red Social",
                descripcion: "Detecta usuarios sospechosos analizando reportes, publicaciones y tiempo en la plataforma. Clasifica por nivel de riesgo (bajo, medio, alto) usando callbacks."
            },
            17: {
                titulo: "Ejercicio 17: Control de Inventarios Dinámicos",
                descripcion: "Sistema completo que analiza inventario, clasifica productos, detecta próximos a vencer, calcula valor total y genera reportes por categoría usando callbacks."
            }
        };

        let ejercicioActual = 0;

        function showExercise(numero) {
            ejercicioActual = numero;
            const ejercicio = ejercicios[numero];
            
            document.getElementById('modalTitle').textContent = ejercicio.titulo;
            document.getElementById('modalDescription').textContent = ejercicio.descripcion;
            document.getElementById('exerciseModal').style.display = 'block';
        }

        function closeModal() {
            document.getElementById('exerciseModal').style.display = 'none';
        }

        function executeExercise() {
            alert('Para ejecutar este ejercicio:\n\n1. Abre tu terminal\n2. Navega a la carpeta del proyecto\n3. Ejecuta: node app.js\n4. El programa te pedirá los datos necesarios\n\nEl ejercicio ' + ejercicioActual + ' se ejecutará en la consola.');
        }

        // Cerrar modal al hacer clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('exerciseModal');
            if (event.target == modal) {
                closeModal();
            }
        }