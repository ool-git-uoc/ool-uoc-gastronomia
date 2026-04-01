import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out-cubic"
  });

  
  initMobileMenu();
  initNewsletter();
  initContactForm();
  initInscripcionForm();
  initScrollTop();
});

/**
 * Función para inicializar el menú móvil.
 * @returns
 */
function initMobileMenu() {
  const toggleButton = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!toggleButton || !nav) return;

  const navLinks = nav.querySelectorAll("a");

  toggleButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));

    const icon = toggleButton.querySelector("i");

    if (isOpen) {
      icon.classList.remove("bi-list");
      icon.classList.add("bi-x");
    } else {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-list");
    }

  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        nav.classList.remove("is-open");
        toggleButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
      toggleButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      nav.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
}


/**
 * Función para verificar el formulario de suscripción al newsletter.
 * @returns {void}
 */
function initNewsletter() {
   console.log("initNewsletter cargado");

  const form = document.querySelector("#newsletter-form");
  const email = document.querySelector("#newsletter-email");
  const checkbox = document.querySelector("#newsletter-consent");
  const message = document.querySelector("#newsletter-message");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = email.value.trim();
    console.log("Email introducido:", emailValue);
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    message.textContent = "";

    if (!emailValue) {
      message.textContent = "Introduce tu correo electrónico.";
      return;
    }

    if (!isValidEmail) {
      message.textContent = "El correo no es válido.";
      return;
    }

    if (!checkbox.checked) {
      message.textContent = "Debes aceptar la política de privacidad.";
      return;
    }

    message.textContent = "Suscripción realizada correctamente.";
    form.reset();
  });
};

/**
 * 
 */
const dateSpan = document.querySelector("#current-date");

if (dateSpan) {
  const date = new Date();

  const options = {
    month: "long",
    year: "numeric"
  };

  let formatted = date.toLocaleDateString("es-ES", options);

  // Primera letra mayúscula
  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  dateSpan.textContent = formatted;
};

/**
 * Función para validar el formulario de contacto.
 * @returns 
 */
function initContactForm() {
  const form = document.querySelector("#contact-form");
  const asunto = document.querySelector("#asunto");
  const descripcion = document.querySelector("#descripcion");
  const email = document.querySelector("#email");
  const message = document.querySelector("#contact-message");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const asuntoValue = asunto.value.trim();
    const descripcionValue = descripcion.value.trim();
    const emailValue = email.value.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    message.textContent = "";
    message.classList.remove("error", "success");

    if (!asuntoValue) {
      message.textContent = "El asunto es obligatorio.";
      message.classList.add("error");
      asunto.focus();
      return;
    }

    if (!descripcionValue) {
      message.textContent = "La descripción es obligatoria.";
      message.classList.add("error");
      descripcion.focus();
      return;
    }

    if (!emailValue || !isValidEmail) {
      message.textContent = "Introduce un correo válido.";
      message.classList.add("error");
      email.focus();
      return;
    }

    message.textContent = "Mensaje enviado correctamente.";
    message.classList.add("success");

    form.reset();
  });
};

/**
 * Función para mostrar el botón de "scroll to top" al hacer scroll hacia abajo.
 * @returns
 */
function initScrollTop() {
  const button = document.querySelector(".scroll-top");

  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });
};

/**
 * Función para validar el formulario de inscripción a talleres.
 * @returns 
 */
function initInscripcionForm() {
  const form = document.querySelector("#inscripcion-form");
  const message = document.querySelector("#inscripcion-message");

  if (!form || !message) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre");
    const apellidos = document.querySelector("#apellidos");
    const email = document.querySelector("#email-inscripcion");
    const telefono = document.querySelector("#telefono");
    const fechaNacimiento = document.querySelector("#fecha-nacimiento");
    const nacionalidad = document.querySelector("#nacionalidad");
    const nivel = document.querySelector("#nivel-experiencia");
    const idioma = document.querySelector("#idioma-taller");
    const taller = document.querySelector("#taller");
    const privacidad = document.querySelector("#acepta-privacidad");

    const emailValue = email.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    message.textContent = "";
    message.classList.remove("error", "success");

    if (!nombre.value.trim()) {
      message.textContent = "El nombre es obligatorio.";
      message.classList.add("error");
      nombre.focus();
      return;
    }

    if (!apellidos.value.trim()) {
      message.textContent = "Los apellidos son obligatorios.";
      message.classList.add("error");
      apellidos.focus();
      return;
    }

    if (!emailValue || !isValidEmail) {
      message.textContent = "Introduzca un correo electrónico válido.";
      message.classList.add("error");
      email.focus();
      return;
    }

    if (!telefono.value.trim()) {
      message.textContent = "El teléfono de contacto es obligatorio.";
      message.classList.add("error");
      telefono.focus();
      return;
    }

    if (!fechaNacimiento.value) {
      message.textContent = "La fecha de nacimiento es obligatoria.";
      message.classList.add("error");
      fechaNacimiento.focus();
      return;
    }

    if (!nacionalidad.value.trim()) {
      message.textContent = "La nacionalidad es obligatoria.";
      message.classList.add("error");
      nacionalidad.focus();
      return;
    }

    if (!nivel.value) {
      message.textContent = "Seleccione su nivel de experiencia.";
      message.classList.add("error");
      nivel.focus();
      return;
    }

    if (!idioma.value) {
      message.textContent = "Seleccione un idioma.";
      message.classList.add("error");
      idioma.focus();
      return;
    }

    if (!taller.value) {
      message.textContent = "Seleccione un taller.";
      message.classList.add("error");
      taller.focus();
      return;
    }

    if (!privacidad.checked) {
      message.textContent = "Debe aceptar la política de privacidad.";
      message.classList.add("error");
      privacidad.focus();
      return;
    }

    message.textContent = "Inscripción enviada correctamente.";
    message.classList.add("success");
    form.reset();
  });
}