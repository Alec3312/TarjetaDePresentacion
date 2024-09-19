// Carga los datos de localStorage al cargar la página de la tarjeta
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('nombre') && document.getElementById('puesto')) {
        let nombre = localStorage.getItem('nombre');
        let puesto = localStorage.getItem('puesto');
        if (nombre && puesto) {
            document.getElementById('nombre').textContent = nombre;
            document.getElementById('puesto').textContent = puesto;
        }
    }
});

// Función para guardar los datos desde el formulario y redirigir de nuevo a la tarjeta
function guardarDatos() {
    const nombre = document.getElementById('nombre').value;
    const puesto = document.getElementById('puesto').value;

    if (nombre && puesto) {
        // Guarda los datos en localStorage
        localStorage.setItem('nombre', nombre);
        localStorage.setItem('puesto', puesto);

        // Redirige a la página anterior
        window.location.href = 'index.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
}
