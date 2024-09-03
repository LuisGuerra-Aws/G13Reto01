       // Datos de ejemplo
       const experiencias = [
        { puesto: "Desarrollador Web", empresa: "Empresa A", periodo: "2020 - Presente", descripcion: "Desarrollo de aplicaciones web utilizando HTML, CSS y JavaScript." },
        { puesto: "Diseñador UX", empresa: "Empresa B", periodo: "2018 - 2020", descripcion: "Diseño de interfaces de usuario y experiencia de usuario para aplicaciones móviles." }
    ];

    const educacion = [
        { titulo: "Grado en Ingeniería Sistemas", institucion: "Universidad Católica de Colombia", año: "1991 - 1996" },
        { titulo: "MBA y Maestría en Negocios Digitales ", institucion: "Universidad Eneb", año: "2023-2024" }
    ];

    // Función para añadir experiencias
    function añadirExperiencias() {
        const listaExperiencia = document.getElementById('lista-experiencia');
        experiencias.forEach(exp => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${exp.puesto}</strong> en ${exp.empresa}<br>
                            ${exp.periodo}<br>
                            ${exp.descripcion}`;
            listaExperiencia.appendChild(li);
        });
    }

    // Función para añadir educación
    function añadirEducacion() {
        const listaEducacion = document.getElementById('lista-educacion');
        educacion.forEach(edu => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${edu.titulo}</strong><br>
                            ${edu.institucion}, ${edu.año}`;
            listaEducacion.appendChild(li);
        });
    }