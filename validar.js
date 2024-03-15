document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM dentro del evento DOMContentLoaded
    var btnRegistrar = document.getElementById("btnRegistrar");
    var timesPerDayInput = document.getElementById("timesPerDay");
    var mealSizeInput = document.getElementById("mealSize");

    // Agregar un evento de escucha al input del elemento mealSize
   
        // Deshabilitar el botón registrar si los campos timesPerDay o mealSize están vacíos

    
        // Cambiar el color de fondo del botón registrar según esté deshabilitado
    
    });

// Función para validar el formulario de inicio de sesión
function validar() {
    // Obtener los valores de usuario y contraseña
    var usuario = document.getElementById("Usuario").value.trim();
    var contraseña = document.getElementById("Contraseña").value.trim();

    // Validación para verificar que los campos no estén vacíos
    if (usuario === "" || contraseña === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // validación personalizada
    if (usuario === "prueba" && contraseña === "prueba") {
        alert("Inicio de sesión exitoso");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false;
    }
}

// Función para registrar la comida
function registrarComida() {
    // Obtiene los valores de las entradas de comida
    var timesPerDay = document.getElementById("timesPerDay").value.trim();
    var mealSize = document.getElementById("mealSize").value.trim();

    // Validar si algun campo esta vacio
    if (timesPerDay === "" || mealSize === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // ventana emergente
    document.getElementById("popup").style.display = "block";

    // dracion de venta la segundos
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 3000);

    // Borrar la información de los labels cuando se quita la ventana emergente
    document.getElementById("timesPerDay").value = "";
    document.getElementById("mealSize").value = "";
}

// Función para mostrar el mensaje y borrar los campos del formulario de registro
function mostrarMensaje() {
    alert("¡Datos registrados!");

    // Borrar todos los campos del formulario de registro
    document.getElementById("nombreUsuario").value = ' ';
    document.getElementById("contraseña").value = ' ';
    document.getElementById("email").value = ' ';
    document.getElementById("nombre").value = ' ';
    document.getElementById("edad").value = ' ';
    document.getElementById("raza").value = ' ';
    document.getElementById("peso").value = ' ';
    document.getElementById("tamaño").value = ' ';
}

function validarRegistro() {
    // Lógica de validación del formulario de registro
}

document.addEventListener('DOMContentLoaded', function() {
    // Coloca aquí todo el código JavaScript
});