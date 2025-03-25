// Cambiar el color de fondo al hacer clic en un botón
document.querySelector('button').addEventListener('click', function() {
    document.body.style.backgroundColor = '#00BFBF'; // Cambia a turquesa
});

// Configuración para los slides de servicios
const slides = document.querySelectorAll('.slide');
let slideIndex = 0; // Cambié de 'currentIndex' a 'slideIndex'

document.getElementById('prev').addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
});

// Slide sección de Contactame
// Selección de elementos
const gallerySlide = document.querySelector('.gallery-slide');
const contactSlides = document.querySelectorAll('.gallery-slide .slide-2');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
let currentIndex = 0;

// Función para actualizar el desplazamiento
function updateSlidePosition() {
    const width = contactSlides[0].clientWidth; // Calcula el ancho de cada slide
    gallerySlide.style.transform = `translateX(-${currentIndex * width}px)`; // Desplaza la galería
}

// Botón para ir a la imagen anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contactSlides.length) % contactSlides.length;
    updateSlidePosition();
});

// Botón para ir a la imagen siguiente
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contactSlides.length;
    updateSlidePosition();
});

// Asegura la posición inicial al cargar la página
window.addEventListener('load', updateSlidePosition);

//Formulario
// Seleccionar el formulario y el área de mensajes
const form = document.getElementById('contactForm');
const messageDiv = document.getElementById('formMessage');

// Escuchar el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validar los datos
    if (!nombre || !email || !mensaje) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Por favor, completa todos los campos obligatorios.';
        return; // Detener aquí si faltan datos
    }

    // Validación opcional del teléfono (ejemplo simple)
    const telefonoRegex = /^[0-9\-]+$/; // Solo números y guiones
    if (telefono && !telefonoRegex.test(telefono)) {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Por favor, ingresa un teléfono válido.';
        return;
    }

    // Mostrar mensaje de éxito
    messageDiv.style.color = 'green';
    messageDiv.textContent = 'Formulario enviado con éxito. ¡En breve te contactare!';
    
    form.reset(); // Limpia el formulario después de enviarlo
});