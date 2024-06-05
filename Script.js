
// Función para actualizar la fecha y la hora
function displayDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById("dateTime").innerText = dateTimeString;
}

// Actualizar la fecha y la hora cada segundo
setInterval(displayDateTime, 1000);

// Comprobar el tema guardado en localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    // Mostrar la fecha y la hora al cargar la página
    displayDateTime();

    if (!localStorage.getItem('welcomeMessageShown')) {
        var welcomeMessage = document.getElementById('welcomeMessage');
        welcomeMessage.style.display = 'block';
        
        // Ocultar el mensaje después de 3 segundos
        setTimeout(function() {
            welcomeMessage.style.display = 'none';
        }, 3000);
        
        // Marcar el mensaje como mostrado
        localStorage.setItem('welcomeMessageShown', 'true');
    }
});



// Función para abrir la imagen en el modal
function openImage(imgElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    // Guardar la preferencia del usuario en localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Función para aplicar el tema oscuro directamente
function setDarkTheme() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
}

// Función para aplicar el tema claro directamente
function setLightTheme() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
}